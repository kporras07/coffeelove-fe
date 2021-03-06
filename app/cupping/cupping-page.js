const app = require("tns-core-modules/application");

const CuppingViewModel = require("./cupping-view-model");
const cuppingViewModel = new CuppingViewModel();

exports.onPageLoaded = function (args) {
  const page = args.object;
  page.bindingContext = cuppingViewModel;
};

exports.onDrawerButtonTap = function(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
};
