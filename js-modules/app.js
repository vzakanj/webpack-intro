var appModule = (function(foo, bar) {
    var a = "App a variable.";

    foo.print();
    bar.print();

    console.log(a);
})(fooModule, barModule);
