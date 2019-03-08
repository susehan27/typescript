//class can have a property and methods
//property - key: value pairs
//class has a constructor that runs when you use a class
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
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User Created: " + this.name);
    }
    User.prototype.register = function () {
        console.log(this.name + " is now registered");
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paid invoice.");
    };
    return User;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    //constructors for derived classes must contain a "super()" call
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
        //dont have assign name, email, and age because we called "super"
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
//creating this new variable automatically runs the constructor method
//let john = new User("John", "john@gmail.com", 34);
//console.log(john.age);
//methods/functions created inside classes can be accessed and ran
//john.register();
var Mike = new Member(1, "Mike Smith", "mike@gmail.com", 33);
Mike.payInvoice();
