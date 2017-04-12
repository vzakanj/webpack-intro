var barModule = (function () {
    var a = "Bar module a variable.";

    var printFromBar = function() {
        console.log(a);
    };

    return {
        print: printFromBar
    };
})();
