const app = require("tns-core-modules/application");

const HomeViewModel = require("./home-view-model");
const homeViewModel = new HomeViewModel();


exports.onNavigatingTo = function(args) {
    const page = args.object;
    page.bindingContext = homeViewModel;
};

exports.onPageLoaded = function (args) {
  const page = args.object;
  page.bindingContext = homeViewModel;
};

exports.onDrawerButtonTap = function(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
};
