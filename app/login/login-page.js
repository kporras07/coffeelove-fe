const LoginViewModel = require("./login-view-model");

const loginViewModel = new LoginViewModel();

exports.onPageLoaded = function (args) {
    const page = args.object;
    page.bindingContext = loginViewModel;
}