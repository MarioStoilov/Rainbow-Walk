'use strict';

var matrixSize = 10;

var engine = (function(){
	var gameTable = document.getElementById("gameTable");
	var matrix = [];
	var pathLength = 0;

    createMatrix();

	function createTable(){
		var gameTable = document.getElementById("gameTable");
		for (var i = 0; i < matrixSize; i++){
		    var tr = document.createElement('tr');   

			for(var j = 0; j < matrixSize; j++){
				var td = document.createElement('td');
				var text1 = document.createTextNode(
					matrix[i][j] ? matrix[i][j]
						: 0
				);
				td.appendChild(text1);
				td.setAttribute("id", "game-cell-"+i+"-"+j);
				var color = -1;
				if (i==matrixSize-1 && j==matrixSize-1)
				{
					color = 7;
				}
				else if (!matrix[i][j])
				{
					color = randomIntFromInterval(1,6);
				}
				else
				{
					color=7;
					//color = matrix[i][j];
				}
				var red = (color & (1 << 0))!=0;
				var green = (color & (1 << 1))!=0;
				var blue = (color & (1 << 2))!=0;
				td.setAttribute("style", "background-color: rgb("+red*255+","+green*255+","+blue*255+");");
				tr.appendChild(td);
			}
		    gameTable.appendChild(tr);
		}		
	}

	function createMatrix(){		
        for(var i=0; i < matrixSize; i++) {
            matrix[i] = [];
            for(var j=0; j < matrixSize; j++) {
                matrix[i][j] = undefined;
            }
        }
	}

    function randomIntFromInterval(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    function isValidMove(x,y,rand) {
        switch(rand) {
            case 0:
                x--; break //up
            case 1:
                x++; break //down
            case 2:
                y--; break //left
            case 3:
                y++; break //rigth
        }
        if (x<0 || x>=matrixSize || 
        	y<0 || y>=matrixSize) {
        	return false;
        } 
        if (used[x][y]) {
            return false;
        }
        return true;
    }

    var used = [];
    function fillUsedTable(){
    	
    	for(var i=0; i < matrixSize; i++) {
        	used[i] = [];
        	for(var j=0; j < matrixSize; j++) {
	            used[i][j] = false;
	        }
	    }
    }

    var path = [];
    var pathFound=undefined;
    function generatePath(x,y) {
    	if (pathFound) return true;
    	used[x][y] = true;
    	path.push({x:x, y:y});
    	var currentPathLenght = path.length + matrixSize-x-1+matrixSize-y-1;
    	if (currentPathLenght>=3*matrixSize) {
    		used[x][y]=false;
	        path.pop();
	        return false;
    	}
    	if (x==matrixSize-1 && y==matrixSize-1) {
    		pathFound=[];
    		for (var i=0; i<path.length; i++){
    			pathFound.push(path[i])
    		}
    		return true;
    	}
    	
    	var validMovesArray = [];
    	for (var i=0; i<4; i++){
    		if (isValidMove(x,y,i)){
    			validMovesArray.push(i);
    		}
    	}
    	if (validMovesArray.length==0){
    		used[x][y]=false;
    		path.pop();
    		return false;
    	}
    	var rand = randomIntFromInterval(0,validMovesArray.length-1);

        for (var i=0; i<validMovesArray.length; i++) {
        	var row = 0;
        	var col = 0;
        	switch(validMovesArray[rand]){
        		case 0: {row=x-1; col=y}; break;
        		case 1: {row=x+1; col=y}; break;
        		case 2: {row=x; col=y-1}; break;
        		case 3: {row=x; col=y+1}; break;
        	}
        	if (generatePath(row,col)){
        		break;
        	}
        }
        used[x][y]=false;
        path.pop();
        return false;
    }

	//google copy/paste
	function shuffle(o){
		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	}

	function generateColorArray(halfLength)
	{
		var output = [];
		for (var i=0; i<halfLength;i++)
		{
			var color = randomIntFromInterval(1,6);
			output.push(color);
		}
		output = shuffle(output);
		var secondaryArray = shuffle(output);
		return output.concat(secondaryArray);
	}

    function drawPath()
	{
		var halfLength=(pathFound.length-1)/2;
		var colorArray = generateColorArray(halfLength);
    	for (var i=0; i<pathFound.length-1; i++)
		{
    		var x = pathFound[i].x;
    		var y = pathFound[i].y; 
			matrix[x][y]=colorArray[i];
    	}
    }

    fillUsedTable();
    generatePath(0,0);
    console.log(pathFound.length);
    drawPath();
    createTable();

	return {
    };
}());