"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.rollButton = new objects.Button();
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            this.rollButton = new objects.Button('./Assets/images/rollButton.png', 320, 430, true);
            this.Main();
        };
        Play.prototype.Update = function () {
            this.stage.update();
        };
        Play.prototype.RollDice1 = function () {
        };
        Play.prototype.Main = function () {
            var _this = this;
            this.addChild(this.rollButton);
            this.dice1 = new createjs.Bitmap('./Assets/images/1.png');
            this.addChild(this.dice1);
            this.dice1.regX = -50;
            this.dice1.regY = -100;
            this.dice2 = new createjs.Bitmap('./Assets/images/1.png');
            this.dice2.regX = -400;
            this.dice2.regY = -100;
            this.addChild(this.dice2);
            this.rollButton.on("click", function () {
                _this.removeChildAt(4);
                _this.removeChildAt(5);
                _this.removeChildAt(4);
                _this.removeChildAt(5);
                _this.result1 = Math.floor((Math.random() * 6) + 1);
                switch (_this.result1) {
                    //if the first dice face shows 1
                    case 1:
                        _this.dice1 = new createjs.Bitmap('./Assets/images/1.png');
                        _this.addChild(_this.dice1);
                        _this.dice1.regX = -50;
                        _this.dice1.regY = -100;
                        _this.no1 = new objects.Label('1', "25px", "fantasy", "black", 40, 350, true);
                        _this.addChild(_this.no1);
                        _this.no1.regX = -100;
                        _this.no1.regY = 5;
                        break;
                        //if the first dice face shows 2
                    case 2:
                        _this.dice1 = new createjs.Bitmap('./Assets/images/2.png');
                        _this.addChild(_this.dice1);
                        _this.dice1.regX = -50;
                        _this.dice1.regY = -100;
                        _this.no1 = new objects.Label('2', "25px", "fantasy", "black", 40, 350, true);
                        _this.addChild(_this.no1);
                        _this.no1.regX = -100;
                        _this.no1.regY = 5;
                        break;
                        //if the first dice face shows 3
                    case 3:
                        _this.dice1 = new createjs.Bitmap('./Assets/images/3.png');
                        _this.addChild(_this.dice1);
                        _this.dice1.regX = -50;
                        _this.dice1.regY = -100;
                        _this.no1 = new objects.Label('3', "25px", "fantasy", "black", 40, 350, true);
                        _this.addChild(_this.no1);
                        _this.no1.regX = -100;
                        _this.no1.regY = 5;
                        break;
                        //if the first dice face shows 4
                    case 4:
                        _this.dice1 = new createjs.Bitmap('./Assets/images/4.png');
                        _this.addChild(_this.dice1);
                        _this.dice1.regX = -50;
                        _this.dice1.regY = -100;
                        _this.no1 = new objects.Label('4', "25px", "fantasy", "black", 40, 350, true);
                        _this.addChild(_this.no1);
                        _this.no1.regX = -100;
                        _this.no1.regY = 5;
                        break;
                        //if the first dice face shows 5
                    case 5:
                        _this.dice1 = new createjs.Bitmap('./Assets/images/5.png');
                        _this.addChild(_this.dice1);
                        _this.dice1.regX = -50;
                        _this.dice1.regY = -100;
                        _this.no1 = new objects.Label('5', "25px", "fantasy", "black", 40, 350, true);
                        _this.addChild(_this.no1);
                        _this.no1.regX = -100;
                        _this.no1.regY = 5;
                        break;
                        //if the first dice face shows 6
                    case 6:
                        _this.dice1 = new createjs.Bitmap('./Assets/images/6.png');
                        _this.addChild(_this.dice1);
                        _this.dice1.regX = -50;
                        _this.dice1.regY = -100;
                        _this.no1 = new objects.Label('6', "25px", "fantasy", "black", 40, 350, true);
                        _this.addChild(_this.no1);
                        _this.no1.regX = -100;
                        _this.no1.regY = 5;
                        break;
                }
                _this.result2 = Math.floor((Math.random() * 6) + 1);
                switch (_this.result2) {
                    //if the second dice face shows 1
                    case 1:
                        _this.dice2 = new createjs.Bitmap('./Assets/images/1.png');
                        _this.addChild(_this.dice2);
                        _this.dice2.regX = -400;
                        _this.dice2.regY = -100;
                        _this.no2 = new objects.Label('1', "25px", "fantasy", "black", 40, 350, true);
                        _this.addChild(_this.no2);
                        _this.no2.regX = -450;
                        _this.no2.regY = 5;
                        break;
                        //if the second dice face shows 2
                    case 2:
                        _this.dice2 = new createjs.Bitmap('./Assets/images/2.png');
                        _this.addChild(_this.dice2);
                        _this.dice2.regX = -400;
                        _this.dice2.regY = -100;
                        _this.no2 = new objects.Label('2', "25px", "fantasy", "black", 40, 350, true);
                        _this.addChild(_this.no2);
                        _this.no2.regX = -450;
                        _this.no2.regY = 5;
                        break;
                        //if the second dice face shows 3
                    case 3:
                        _this.dice2 = new createjs.Bitmap('./Assets/images/3.png');
                        _this.addChild(_this.dice2);
                        _this.dice2.regX = -400;
                        _this.dice2.regY = -100;
                        _this.no2 = new objects.Label('3', "25px", "fantasy", "black", 40, 350, true);
                        _this.addChild(_this.no2);
                        _this.no2.regX = -450;
                        _this.no2.regY = 5;
                        break;
                        //if the second dice face shows 4
                    case 4:
                        _this.dice2 = new createjs.Bitmap('./Assets/images/4.png');
                        _this.addChild(_this.dice2);
                        _this.dice2.regX = -400;
                        _this.dice2.regY = -100;
                        _this.no2 = new objects.Label('4', "25px", "fantasy", "black", 40, 350, true);
                        _this.addChild(_this.no2);
                        _this.no2.regX = -450;
                        _this.no2.regY = 5;
                        break;
                        //if the second dice face shows 5
                    case 5:
                        _this.dice2 = new createjs.Bitmap('./Assets/images/5.png');
                        _this.addChild(_this.dice2);
                        _this.dice2.regX = -400;
                        _this.dice2.regY = -100;
                        _this.no2 = new objects.Label('5', "25px", "fantasy", "black", 40, 350, true);
                        _this.addChild(_this.no2);
                        _this.no2.regX = -450;
                        _this.no2.regY = 5;
                        break;
                        //if the second dice face shows 6
                    case 6:
                        _this.dice2 = new createjs.Bitmap('./Assets/images/6.png');
                        _this.addChild(_this.dice2);
                        _this.dice2.regX = -400;
                        _this.dice2.regY = -100;
                        _this.no2 = new objects.Label('6', "25px", "fantasy", "black", 40, 350, true);
                        _this.addChild(_this.no2);
                        _this.no2.regX = -450;
                        _this.no2.regY = 5;
                        break;
                }
            });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map