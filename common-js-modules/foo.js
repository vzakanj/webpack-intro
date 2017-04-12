var a = "Foo module a variable.";

var printFromFoo = function () {
    console.log(a);
};

exports.print = printFromFoo;