var Bob = /** @class */ (function () {
    function Bob() {
        this.name = "Bob";
    }
    Bob.prototype.getName = function () {
        return this.name;
    };
    return Bob;
}());
var myBob = new Bob();
var bobName = myBob.getName();
bobName = "ronan";
console.log(myBob.getName);
