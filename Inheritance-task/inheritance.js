//Inheritance buffer function
function inherit(Child, Parent) {
    var F = function () { };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.super = Parent.prototype;
}


//Function constructors for classes
function ClassA () { this.p1 = 1; }
ClassA.prototype.f1 = function () { return 7 };

function ClassB () { ClassA.call(this); }
inherit (ClassB,ClassA);
ClassB.prototype.p2 = "hello";
ClassB.prototype.f2 = function (x) { return (x*2) };

function ClassC () { ClassB.call(this);}
inherit (ClassC,ClassB);
ClassC.prototype.p2 = "bye";

function ClassD () {
	ClassC.call(this);
	this.p4 = 7*this.p1;
}
inherit (ClassD,ClassC);
ClassD.prototype.f4 = function (x) { return (this.f1() + ClassB.prototype.f2(x))};
ClassD.prototype.f2 = function (x) { return (ClassB.prototype.f2(x)* 2)};


//Examples of the classes
var exampleA = new ClassA();
var exampleB = new ClassB();
var exampleC = new ClassC();
var exampleD = new ClassD();


//ability to see in the consol.log what we obtained
console.log(exampleA);
console.log(exampleB);
console.log(exampleC);
console.log(exampleD);