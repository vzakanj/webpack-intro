var fooModule = (function() {
    var a = "Foo module a variable.";

    var printFromFoo = function () {
        console.log(a);
    };

    return {
        print: printFromFoo
    };
})();
