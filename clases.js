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
var Person = /** @class */ (function () {
    function Person(theName, theAge) {
        this.name = theName;
        this.edad = theAge;
    }
    Person.prototype.introduceSelf = function () {
        console.log("Hola, soy " + this.name + "!");
    };
    return Person;
}());
var Friend = /** @class */ (function (_super) {
    __extends(Friend, _super);
    function Friend(name, edad, conocer) {
        var _this = _super.call(this, name, edad) || this;
        _this.conocer = conocer;
        return _this;
    }
    Friend.prototype.timeKnown = function () {
        console.log("Nosotros nos conocemos hace " + this.conocer + " años.");
    };
    Friend.prototype.friendSince = function () {
        var firstAge = this.edad - this.conocer;
        console.log("nosotros nos conocemos desde que tenia " + firstAge + " a\u00F1os de edad.");
    };
    return Friend;
}(Person));
//let friendA = new Friend("Juan", 8);
var personA = new Person("Issac");
var friendA = new Friend("William", 19, 8);
personA.introduceSelf();
friendA.introduceSelf();
friendA.timeKnown();
friendA.friendSince();
