var mexicanPlayerDrawer = Class.create(
    {
        init: function ()
        {
        },

        drawStill: function (x, y, ctx)
        {
            this.x = x | 0 || 0;
            this.y = y | 0 || 0;


            ctx.fillStyle = "lightgreen";
            ctx.strokeStyle = "black";

            ctx.beginPath();
            ctx.lineWidth = 2;

            //hands
            ctx.moveTo(this.x + 10, this.y + 70);
            ctx.lineTo(this.x + 25, this.y + 50);
            ctx.moveTo(this.x + 75, this.y + 50);
            ctx.lineTo(this.x + 90, this.y + 70);

            //legs
            ctx.moveTo(this.x + 40, this.y + 60);
            ctx.lineTo(this.x + 35, this.y + 100);
            ctx.moveTo(this.x + 60, this.y + 60);
            ctx.lineTo(this.x + 65, this.y + 100);
            ctx.stroke();

            //body
            ctx.beginPath();
            ctx.moveTo(this.x + 50, this.y + 50);
            ctx.arc(this.x + 50, this.y + 50, 25, 0, Math.PI, false);
            ctx.fill();

            //had
            ctx.moveTo(this.x + 50, this.y + 25);
            ctx.arc(this.x + 50, this.y + 25, 15, 0, Math.PI, false);
            ctx.fill();

            //mouth
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(this.x + 46, this.y + 35);
            ctx.lineTo(this.x + 54, this.y + 35);
            ctx.stroke();

            //hat
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.fillStyle = "red";
            ctx.lineWidth = 3;
            ctx.moveTo(this.x + 15, this.y + 25);
            ctx.lineTo(this.x + 85, this.y + 25);
            ctx.moveTo(this.x + 40, this.y + 25);
            ctx.lineTo(this.x + 50, this.y + 3);
            ctx.lineTo(this.x + 60, this.y + 25);
            ctx.stroke();
            ctx.fill();

            //front sign
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(this.x + 45, this.y + 55);
            ctx.lineTo(this.x + 45, this.y + 65);
            ctx.moveTo(this.x + 45, this.y + 55);
            ctx.lineTo(this.x + 50, this.y + 60);
            ctx.lineTo(this.x + 55, this.y + 55);
            ctx.lineTo(this.x + 55, this.y + 65);
            ctx.stroke();
        },

        drawRightStepOne: function (x, y, ctx)
        {
            this.x = x | 0 || 0;
            this.y = y | 0 || 0;


            ctx.strokeStyle = "black";
            ctx.fillStyle = "lightgreen";

            ctx.beginPath();
            ctx.lineWidth = 2;

            //legs
            ctx.moveTo(this.x + 40, this.y + 60 + 10);
            ctx.lineTo(this.x + 30, this.y + 90 + 10);
            ctx.moveTo(this.x + 60, this.y + 60 + 10);
            ctx.lineTo(this.x + 70, this.y + 90 + 10);
            ctx.stroke();

            //body
            ctx.beginPath();
            ctx.moveTo(this.x + 50, this.y + 50 + 10);
            ctx.arc(this.x + 50, this.y + 50 + 10, 25, 0, Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.lineWidth = 2;

            //hands
            ctx.moveTo(this.x + 50, this.y + 50 + 10);
            ctx.lineTo(this.x + 40, this.y + 60 + 10);
            ctx.lineTo(this.x + 50, this.y + 70 + 10);
            ctx.stroke();

            //had
            ctx.moveTo(this.x + 50, this.y + 25 + 10);
            ctx.arc(this.x + 50, this.y + 25 + 10, 15, 0, Math.PI, false);
            ctx.fill();

            //mouth
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(this.x + 56, this.y + 45);
            ctx.lineTo(this.x + 60, this.y + 45);
            ctx.stroke();

            //hat
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.fillStyle = "red";
            ctx.lineWidth = 3;
            ctx.moveTo(this.x + 15, this.y + 25 + 10);
            ctx.lineTo(this.x + 85, this.y + 15 + 10);
            ctx.moveTo(this.x + 35, this.y + 23 + 10);
            ctx.lineTo(this.x + 35, this.y + 3 + 10);
            ctx.lineTo(this.x + 60, this.y + 18 + 10);
            ctx.stroke();
            ctx.fill();
        },
        drawRightStepTwo: function (x, y, ctx)
        {
            this.x = x | 0 || 0;
            this.y = y | 0 || 0;


            ctx.strokeStyle = "black";
            ctx.fillStyle = "lightgreen";

            ctx.beginPath();
            ctx.lineWidth = 2;

            //legs
            ctx.moveTo(this.x + 40, this.y + 60);
            ctx.lineTo(this.x + 10, this.y + 80);
            ctx.moveTo(this.x + 60, this.y + 60);
            ctx.lineTo(this.x + 90, this.y + 80);
            ctx.stroke();

            //body
            ctx.beginPath();
            ctx.moveTo(this.x + 50, this.y + 50);
            ctx.arc(this.x + 50, this.y + 50, 25, 0, Math.PI, false);
            ctx.fill();
            ctx.beginPath();
            ctx.lineWidth = 2;

            //hands
            ctx.moveTo(this.x + 50, this.y + 50);
            ctx.lineTo(this.x + 60, this.y + 60);
            ctx.lineTo(this.x + 70, this.y + 50);
            ctx.stroke();

            //had
            ctx.moveTo(this.x + 50, this.y + 25);
            ctx.arc(this.x + 50, this.y + 25, 15, 0, Math.PI, false);
            ctx.fill();

            //mouth
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(this.x + 56, this.y + 35);
            ctx.lineTo(this.x + 60, this.y + 35);
            ctx.stroke();

            //hat
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.fillStyle = "red";
            ctx.lineWidth = 3;
            ctx.moveTo(this.x + 15, this.y + 25);
            ctx.lineTo(this.x + 85, this.y + 15);
            ctx.moveTo(this.x + 35, this.y + 23);
            ctx.lineTo(this.x + 35, this.y + 3);
            ctx.lineTo(this.x + 60, this.y + 18);
            ctx.stroke();
            ctx.fill();
        },

        drawLeftStepOne: function (x, y, ctx) {
            this.x = x | 0 || 0;
            this.y = y | 0 || 0;


            ctx.fillStyle = "lightgreen";
            ctx.strokeStyle = "black";

            ctx.beginPath();
            ctx.lineWidth = 2;

            //legs
            ctx.moveTo(this.x + 40, this.y + 60 + 10);
            ctx.lineTo(this.x + 30, this.y + 90 + 10);
            ctx.moveTo(this.x + 60, this.y + 60 + 10);
            ctx.lineTo(this.x + 70, this.y + 90 + 10);
            ctx.stroke();

            //body
            ctx.moveTo(this.x + 50, this.y + 50 + 10);
            ctx.arc(this.x + 50, this.y + 50 + 10, 25, 0, Math.PI, false);
            ctx.fill();

            ctx.beginPath();
            ctx.lineWidth = 2;

            //hands
            ctx.moveTo(this.x + 50, this.y + 50 + 10);
            ctx.lineTo(this.x + 60, this.y + 60 + 10);
            ctx.lineTo(this.x + 50, this.y + 70 + 10);
            ctx.stroke();

            //had
            ctx.moveTo(this.x + 50, this.y + 25 + 10);
            ctx.arc(this.x + 50, this.y + 25 + 10, 15, 0, Math.PI, false);
            ctx.fill();

            //mouth
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(this.x + 44, this.y + 45);
            ctx.lineTo(this.x + 40, this.y + 45);
            ctx.stroke();

            //hat
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.fillStyle = "red";
            ctx.lineWidth = 3;
            ctx.moveTo(this.x + 15, this.y + 15 + 10);
            ctx.lineTo(this.x + 85, this.y + 25 + 10);
            ctx.moveTo(this.x + 35, this.y + 18 + 10);
            ctx.lineTo(this.x + 65, this.y + 3 + 10);
            ctx.lineTo(this.x + 65, this.y + 22 + 10);
            ctx.stroke();
            ctx.fill();

        },
        drawLeftStepTwo: function (x, y, ctx) {
            this.x = x | 0 || 0;
            this.y = y | 0 || 0;


            ctx.fillStyle = "lightgreen";
            ctx.strokeStyle = "black";

            ctx.beginPath();
            ctx.lineWidth = 2;

            //legs
            ctx.moveTo(this.x + 40, this.y + 60);
            ctx.lineTo(this.x + 10, this.y + 80);
            ctx.moveTo(this.x + 60, this.y + 60);
            ctx.lineTo(this.x + 90, this.y + 80);
            ctx.stroke();

            //body
            ctx.moveTo(this.x + 50, this.y + 50);
            ctx.arc(this.x + 50, this.y + 50, 25, 0, Math.PI, false);
            ctx.fill();

            ctx.beginPath();
            ctx.lineWidth = 2;

            //hands
            ctx.moveTo(this.x + 50, this.y + 50);
            ctx.lineTo(this.x + 40, this.y + 60);
            ctx.lineTo(this.x + 30, this.y + 50);
            ctx.stroke();

            //had
            ctx.moveTo(this.x + 50, this.y + 25);
            ctx.arc(this.x + 50, this.y + 25, 15, 0, Math.PI, false);
            ctx.fill();

            //mouth
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(this.x + 44, this.y + 35);
            ctx.lineTo(this.x + 40, this.y + 35);
            ctx.stroke();

            //hat
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.fillStyle = "red";
            ctx.lineWidth = 3;
            ctx.moveTo(this.x + 15, this.y + 15);
            ctx.lineTo(this.x + 85, this.y + 25);
            ctx.moveTo(this.x + 35, this.y + 18);
            ctx.lineTo(this.x + 65, this.y + 3);
            ctx.lineTo(this.x + 65, this.y + 22);
            ctx.stroke();
            ctx.fill();

        },


        drawJump: function (x, y, ctx)
        {
            this.x = x | 0 || 0;
            this.y = y | 0 || 0;


            ctx.strokeStyle = "black";
            ctx.fillStyle = "lightgreen";

            ctx.beginPath();
            ctx.lineWidth = 2;

            //hands and legs
            ctx.moveTo(this.x + 10, this.y + 25);
            ctx.lineTo(this.x + 25, this.y + 50);
            ctx.moveTo(this.x + 75, this.y + 50);
            ctx.lineTo(this.x + 90, this.y + 25);

            ctx.moveTo(this.x + 45, this.y + 60);
            ctx.lineTo(this.x + 45, this.y + 100);
            ctx.moveTo(this.x + 55, this.y + 60);
            ctx.lineTo(this.x + 55, this.y + 100);
            ctx.stroke();

            //body

            ctx.beginPath();
            ctx.moveTo(this.x + 50, this.y + 50);
            ctx.arc(this.x + 50, this.y + 50, 25, 0, Math.PI, false);
            ctx.fill();

            //had
            ctx.moveTo(this.x + 50, this.y + 25);
            ctx.arc(this.x + 50, this.y + 25, 15, 0, Math.PI, false);
            ctx.fill();

            //mouth
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(this.x + 46, this.y + 35);
            ctx.lineTo(this.x + 54, this.y + 35);
            ctx.stroke();

            //hat
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.fillStyle = "red";
            ctx.lineWidth = 3;
            ctx.moveTo(this.x + 15, this.y + 25);
            ctx.lineTo(this.x + 85, this.y + 25);
            ctx.moveTo(this.x + 40, this.y + 25);
            ctx.lineTo(this.x + 50, this.y + 3);
            ctx.lineTo(this.x + 60, this.y + 25);
            ctx.stroke();
            ctx.fill();

            //front sign
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(this.x + 45, this.y + 55);
            ctx.lineTo(this.x + 45, this.y + 65);
            ctx.moveTo(this.x + 45, this.y + 55);
            ctx.lineTo(this.x + 50, this.y + 60);
            ctx.lineTo(this.x + 55, this.y + 55);
            ctx.lineTo(this.x + 55, this.y + 65);
            ctx.stroke();
        },


        drawJumpLeft: function (x, y, ctx) {
            this.x = x | 0 || 0;
            this.y = y | 0 || 0;


            ctx.strokeStyle = "black";
            ctx.fillStyle = "lightgreen";

            ctx.beginPath();
            ctx.lineWidth = 2;

            //hands and legs
            ctx.moveTo(this.x + 10, this.y + 25);
            ctx.lineTo(this.x + 25, this.y + 50);
            ctx.moveTo(this.x + 75, this.y + 50);
            ctx.lineTo(this.x + 90, this.y + 25);

            ctx.moveTo(this.x + 45, this.y + 60);
            ctx.lineTo(this.x + 45, this.y + 100);
            ctx.moveTo(this.x + 55, this.y + 60);
            ctx.lineTo(this.x + 55, this.y + 100);
            ctx.stroke();

            //body

            ctx.beginPath();
            ctx.moveTo(this.x + 50, this.y + 50);
            ctx.arc(this.x + 50, this.y + 50, 25, 0, Math.PI, false);
            ctx.fill();

            //had
            ctx.moveTo(this.x + 50, this.y + 25);
            ctx.arc(this.x + 50, this.y + 25, 15, 0, Math.PI, false);
            ctx.fill();

            //mouth
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(this.x + 46, this.y + 35);
            ctx.lineTo(this.x + 54, this.y + 35);
            ctx.stroke();

            //hat
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.fillStyle = "red";
            ctx.lineWidth = 3;
            ctx.moveTo(this.x + 15, this.y + 25);
            ctx.lineTo(this.x + 85, this.y + 25);
            ctx.moveTo(this.x + 40, this.y + 25);
            ctx.lineTo(this.x + 50, this.y + 3);
            ctx.lineTo(this.x + 60, this.y + 25);
            ctx.stroke();
            ctx.fill();

            //front sign
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(this.x + 45, this.y + 55);
            ctx.lineTo(this.x + 45, this.y + 65);
            ctx.moveTo(this.x + 45, this.y + 55);
            ctx.lineTo(this.x + 50, this.y + 60);
            ctx.lineTo(this.x + 55, this.y + 55);
            ctx.lineTo(this.x + 55, this.y + 65);
            ctx.stroke();
        },

        drawJumpRight: function (x, y, ctx)
        {
            this.x = x | 0 || 0;
            this.y = y | 0 || 0;


            ctx.strokeStyle = "black";
            ctx.fillStyle = "lightgreen";

            ctx.beginPath();
            ctx.lineWidth = 2;

            //hands and legs
            ctx.moveTo(this.x + 10, this.y + 25);
            ctx.lineTo(this.x + 25, this.y + 50);
            ctx.moveTo(this.x + 75, this.y + 50);
            ctx.lineTo(this.x + 90, this.y + 25);

            ctx.moveTo(this.x + 45, this.y + 60);
            ctx.lineTo(this.x + 45, this.y + 100);
            ctx.moveTo(this.x + 55, this.y + 60);
            ctx.lineTo(this.x + 55, this.y + 100);
            ctx.stroke();

            //body

            ctx.beginPath();
            ctx.moveTo(this.x + 50, this.y + 50);
            ctx.arc(this.x + 50, this.y + 50, 25, 0, Math.PI, false);
            ctx.fill();

            //had
            ctx.moveTo(this.x + 50, this.y + 25);
            ctx.arc(this.x + 50, this.y + 25, 15, 0, Math.PI, false);
            ctx.fill();

            //mouth
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(this.x + 46, this.y + 35);
            ctx.lineTo(this.x + 54, this.y + 35);
            ctx.stroke();

            //hat
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.fillStyle = "red";
            ctx.lineWidth = 3;
            ctx.moveTo(this.x + 15, this.y + 25);
            ctx.lineTo(this.x + 85, this.y + 25);
            ctx.moveTo(this.x + 40, this.y + 25);
            ctx.lineTo(this.x + 50, this.y + 3);
            ctx.lineTo(this.x + 60, this.y + 25);
            ctx.stroke();
            ctx.fill();

            //front sign
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(this.x + 45, this.y + 55);
            ctx.lineTo(this.x + 45, this.y + 65);
            ctx.moveTo(this.x + 45, this.y + 55);
            ctx.lineTo(this.x + 50, this.y + 60);
            ctx.lineTo(this.x + 55, this.y + 55);
            ctx.lineTo(this.x + 55, this.y + 65);
            ctx.stroke();
        }
    });


mexicanPlayerDrawer.inherit(playerDrawer);


var japanesePlayerDrawer = Class.create(
    {
        init: function ()
        {
        },
        drawStill: function (x, y, ctx)
        {
            this.x = x | 0 || 0;
            this.y = y | 0 || 0;


            ctx.fillStyle = "yellow";
            ctx.strokeStyle = "black";

            ctx.beginPath();
            ctx.lineWidth = 2;

            //hands
            ctx.moveTo(this.x + 35, this.y + 50);
            ctx.lineTo(this.x + 20, this.y + 70);
            ctx.moveTo(this.x + 65, this.y + 50);
            ctx.lineTo(this.x + 80, this.y + 70);

            //legs
            ctx.moveTo(this.x + 40, this.y + 85);
            ctx.lineTo(this.x + 35, this.y + 100);
            ctx.moveTo(this.x + 60, this.y + 85);
            ctx.lineTo(this.x + 65, this.y + 100);
            ctx.stroke();

            //body
            ctx.beginPath();
            ctx.moveTo(this.x + 35, this.y + 50);
            ctx.lineTo(this.x + 40, this.y + 85);
            ctx.lineTo(this.x + 60, this.y + 85);
            ctx.lineTo(this.x + 65, this.y + 50);
            ctx.fill();

            //had
            ctx.moveTo(this.x + 50, this.y + 25);
            ctx.arc(this.x + 50, this.y + 25, 10, Math.PI, 0, false);
            ctx.fillRect(this.x + 40, this.y + 25, 20, 20);
            ctx.fill();

            //mouth and eyes
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(this.x + 46, this.y + 40);
            ctx.lineTo(this.x + 54, this.y + 40);
            ctx.moveTo(this.x + 43, this.y + 33);
            ctx.lineTo(this.x + 47, this.y + 33);
            ctx.moveTo(this.x + 53, this.y + 33);
            ctx.lineTo(this.x + 57, this.y + 33);
            ctx.stroke();

            //hat
            ctx.beginPath();
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 5;
            ctx.moveTo(this.x + 40, this.y + 25);
            ctx.lineTo(this.x + 60, this.y + 25);
            ctx.stroke();

            //front sign J
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(this.x + 46, this.y + 60);
            ctx.lineTo(this.x + 52, this.y + 60);
            ctx.moveTo(this.x + 50, this.y + 60);
            ctx.lineTo(this.x + 50, this.y + 70);
            ctx.lineTo(this.x + 46, this.y + 70);
            ctx.lineTo(this.x + 46, this.y + 67);
            ctx.stroke();
        },

        drawRightStepOne: function (x, y, ctx)
        {
            this.x = x | 0 || 0;
            this.y = y | 0 || 0;


            ctx.fillStyle = "yellow";
            ctx.strokeStyle = "black";

            ctx.beginPath();
            ctx.lineWidth = 2;

            //legs
            ctx.moveTo(this.x + 40, this.y + 85);
            ctx.lineTo(this.x + 35, this.y + 100);
            ctx.moveTo(this.x + 60, this.y + 85);
            ctx.lineTo(this.x + 65, this.y + 100);
            ctx.stroke();

            //body
            ctx.beginPath();
            ctx.moveTo(this.x + 35, this.y + 50);
            ctx.lineTo(this.x + 40, this.y + 85);
            ctx.lineTo(this.x + 60, this.y + 85);
            ctx.lineTo(this.x + 65, this.y + 50);
            ctx.fill();

            //hands
            ctx.beginPath();
            ctx.moveTo(this.x + 50, this.y + 50);
            ctx.lineTo(this.x + 40, this.y + 60);
            ctx.lineTo(this.x + 50, this.y + 70);
            ctx.stroke();

            //had
            ctx.moveTo(this.x + 50, this.y + 25);
            ctx.arc(this.x + 50, this.y + 25, 10, Math.PI, 0, false);
            ctx.fillRect(this.x + 40, this.y + 25, 20, 20);
            ctx.fill();

            //mouth and eyes
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(this.x + 56, this.y + 40);
            ctx.lineTo(this.x + 60, this.y + 40);
            ctx.moveTo(this.x + 53, this.y + 33);
            ctx.lineTo(this.x + 57, this.y + 33);
            ctx.stroke();

            //hat
            ctx.beginPath();
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 5;
            ctx.moveTo(this.x + 40, this.y + 25);
            ctx.lineTo(this.x + 60, this.y + 25);
            ctx.stroke();
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.moveTo(this.x + 40, this.y + 25);
            ctx.lineTo(this.x + 32, this.y + 38);
            ctx.moveTo(this.x + 40, this.y + 25);
            ctx.lineTo(this.x + 30, this.y + 30);
            ctx.stroke();
        },
        drawRightStepTwo: function (x, y, ctx) {
            this.x = x | 0 || 0;
            this.y = y | 0 || 0;


            ctx.fillStyle = "yellow";
            ctx.strokeStyle = "black";

            ctx.beginPath();
            ctx.lineWidth = 2;

            //legs
            ctx.moveTo(this.x + 40, this.y + 75);
            ctx.lineTo(this.x + 25, this.y + 90);
            ctx.moveTo(this.x + 60, this.y + 75);
            ctx.lineTo(this.x + 75, this.y + 90);
            ctx.stroke();

            //body
            ctx.beginPath();
            ctx.moveTo(this.x + 35, this.y + 50 - 10);
            ctx.lineTo(this.x + 40, this.y + 85 - 10);
            ctx.lineTo(this.x + 60, this.y + 85 - 10);
            ctx.lineTo(this.x + 65, this.y + 50 - 10);
            ctx.fill();

            //hands
            ctx.beginPath();
            ctx.moveTo(this.x + 50, this.y + 50 - 10);
            ctx.lineTo(this.x + 60, this.y + 60 - 10);
            ctx.lineTo(this.x + 70, this.y + 50 - 10);
            ctx.stroke();

            //had
            ctx.moveTo(this.x + 50, this.y + 25 - 10);
            ctx.arc(this.x + 50, this.y + 25 - 10, 10, Math.PI, 0, false);
            ctx.fillRect(this.x + 40, this.y + 25 - 10, 20, 20);
            ctx.fill();

            //mouth and eyes
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(this.x + 56, this.y + 40 - 10);
            ctx.lineTo(this.x + 60, this.y + 40 - 10);
            ctx.moveTo(this.x + 53, this.y + 33 - 10);
            ctx.lineTo(this.x + 57, this.y + 33 - 10);
            ctx.stroke();

            //hat
            ctx.beginPath();
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 5;
            ctx.moveTo(this.x + 40, this.y + 25 - 10);
            ctx.lineTo(this.x + 60, this.y + 25 - 10);
            ctx.stroke();
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.moveTo(this.x + 40, this.y + 25 - 10);
            ctx.lineTo(this.x + 32, this.y + 18 - 10);
            ctx.moveTo(this.x + 40, this.y + 25 - 10);
            ctx.lineTo(this.x + 30, this.y + 30 - 10);
            ctx.stroke();
        },

        drawLeftStepOne: function (x, y, ctx) {
            this.x = x | 0 || 0;
            this.y = y | 0 || 0;


            ctx.fillStyle = "yellow";
            ctx.strokeStyle = "black";

            ctx.beginPath();
            ctx.lineWidth = 2;

            //legs
            ctx.moveTo(this.x + 40, this.y + 85);
            ctx.lineTo(this.x + 35, this.y + 100);
            ctx.moveTo(this.x + 60, this.y + 85);
            ctx.lineTo(this.x + 65, this.y + 100);
            ctx.stroke();

            //body
            ctx.beginPath();
            ctx.moveTo(this.x + 35, this.y + 50);
            ctx.lineTo(this.x + 40, this.y + 85);
            ctx.lineTo(this.x + 60, this.y + 85);
            ctx.lineTo(this.x + 65, this.y + 50);
            ctx.fill();

            //hands
            ctx.beginPath();
            ctx.moveTo(this.x + 50, this.y + 50);
            ctx.lineTo(this.x + 60, this.y + 60);
            ctx.lineTo(this.x + 50, this.y + 70);
            ctx.stroke();

            //had
            ctx.moveTo(this.x + 50, this.y + 25);
            ctx.arc(this.x + 50, this.y + 25, 10, Math.PI, 0, false);
            ctx.fillRect(this.x + 40, this.y + 25, 20, 20);
            ctx.fill();

            //mouth and eyes
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(this.x + 40, this.y + 40);
            ctx.lineTo(this.x + 44, this.y + 40);
            ctx.moveTo(this.x + 43, this.y + 33);
            ctx.lineTo(this.x + 47, this.y + 33);
            ctx.stroke();

            //hat
            ctx.beginPath();
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 5;
            ctx.moveTo(this.x + 40, this.y + 25);
            ctx.lineTo(this.x + 60, this.y + 25);
            ctx.stroke();
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.moveTo(this.x + 60, this.y + 25);
            ctx.lineTo(this.x + 68, this.y + 38);
            ctx.moveTo(this.x + 60, this.y + 25);
            ctx.lineTo(this.x + 70, this.y + 30);
            ctx.stroke();

        },
        drawLeftStepTwo: function (x, y, ctx) {
            this.x = x | 0 || 0;
            this.y = y | 0 || 0;


            ctx.fillStyle = "yellow";
            ctx.strokeStyle = "black";

            ctx.beginPath();
            ctx.lineWidth = 2;

            //legs
            ctx.moveTo(this.x + 40, this.y + 75);
            ctx.lineTo(this.x + 25, this.y + 90);
            ctx.moveTo(this.x + 60, this.y + 75);
            ctx.lineTo(this.x + 75, this.y + 90);
            ctx.stroke();

            //body
            ctx.beginPath();
            ctx.moveTo(this.x + 35, this.y + 50 - 10);
            ctx.lineTo(this.x + 40, this.y + 85 - 10);
            ctx.lineTo(this.x + 60, this.y + 85 - 10);
            ctx.lineTo(this.x + 65, this.y + 50 - 10);
            ctx.fill();

            //hands
            ctx.beginPath();
            ctx.moveTo(this.x + 50, this.y + 50 - 10);
            ctx.lineTo(this.x + 40, this.y + 60 - 10);
            ctx.lineTo(this.x + 30, this.y + 50 - 10);
            ctx.stroke();

            //had
            ctx.moveTo(this.x + 50, this.y + 25 - 10);
            ctx.arc(this.x + 50, this.y + 25 - 10, 10, Math.PI, 0, false);
            ctx.fillRect(this.x + 40, this.y + 25 - 10, 20, 20);
            ctx.fill();

            //mouth and eyes
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(this.x + 40, this.y + 40 - 10);
            ctx.lineTo(this.x + 44, this.y + 40 - 10);
            ctx.moveTo(this.x + 43, this.y + 33 - 10);
            ctx.lineTo(this.x + 47, this.y + 33 - 10);
            ctx.stroke();

            //hat
            ctx.beginPath();
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 5;
            ctx.moveTo(this.x + 40, this.y + 25 - 10);
            ctx.lineTo(this.x + 60, this.y + 25 - 10);
            ctx.stroke();
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.moveTo(this.x + 60, this.y + 25 - 10);
            ctx.lineTo(this.x + 68, this.y + 18 - 10);
            ctx.moveTo(this.x + 60, this.y + 25 - 10);
            ctx.lineTo(this.x + 70, this.y + 30 - 10);
            ctx.stroke();

        },


        drawJump: function (x, y, ctx) {
            this.x = x | 0 || 0;
            this.y = y | 0 || 0;

            ctx.fillStyle = "yellow";
            ctx.strokeStyle = "black";

            ctx.beginPath();
            ctx.lineWidth = 2;

            //hands
            ctx.moveTo(this.x + 35, this.y + 50);
            ctx.lineTo(this.x + 25, this.y + 25);
            ctx.moveTo(this.x + 65, this.y + 50);
            ctx.lineTo(this.x + 75, this.y + 25);

            //legs
            ctx.moveTo(this.x + 45, this.y + 85);
            ctx.lineTo(this.x + 45, this.y + 100);
            ctx.moveTo(this.x + 55, this.y + 85);
            ctx.lineTo(this.x + 55, this.y + 100);
            ctx.stroke();

            //body
            ctx.beginPath();
            ctx.moveTo(this.x + 35, this.y + 50);
            ctx.lineTo(this.x + 40, this.y + 85);
            ctx.lineTo(this.x + 60, this.y + 85);
            ctx.lineTo(this.x + 65, this.y + 50);
            ctx.fill();

            //had
            ctx.moveTo(this.x + 50, this.y + 25);
            ctx.arc(this.x + 50, this.y + 25, 10, Math.PI, 0, false);
            ctx.fillRect(this.x + 40, this.y + 25, 20, 20);
            ctx.fill();

            //mouth and eyes
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(this.x + 46, this.y + 40);
            ctx.lineTo(this.x + 54, this.y + 40);
            ctx.moveTo(this.x + 43, this.y + 33);
            ctx.lineTo(this.x + 47, this.y + 33);
            ctx.moveTo(this.x + 53, this.y + 33);
            ctx.lineTo(this.x + 57, this.y + 33);
            ctx.stroke();

            //hat
            ctx.beginPath();
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 5;
            ctx.moveTo(this.x + 40, this.y + 25);
            ctx.lineTo(this.x + 60, this.y + 25);
            ctx.stroke();

            //front sign J
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(this.x + 46, this.y + 60);
            ctx.lineTo(this.x + 52, this.y + 60);
            ctx.moveTo(this.x + 50, this.y + 60);
            ctx.lineTo(this.x + 50, this.y + 70);
            ctx.lineTo(this.x + 46, this.y + 70);
            ctx.lineTo(this.x + 46, this.y + 67);
            ctx.stroke();
        },


        drawJumpLeft: function (x, y, ctx) {
            this.drawJump(x, y, ctx);
        },

        drawJumpRight: function (x, y, ctx) {
            this.drawJump(x, y, ctx);
        }
    });

japanesePlayerDrawer.inherit(playerDrawer);