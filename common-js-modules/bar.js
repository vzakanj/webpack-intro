var a = "Bar module a variable.";

var printFromBar = function() {
    console.log(a);
};

module.exports.print = printFromBar;
