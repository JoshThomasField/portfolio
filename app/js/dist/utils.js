Handlebars.registerHelper('checkProjectLinkExists', function (arg1, arg2, options) {
    if (arg1 == arg2) {
        return options.inverse(this);
    }
    else {
        return options.fn(this);
    }
});

//# sourceMappingURL=utils.js.map
