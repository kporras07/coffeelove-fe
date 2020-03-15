const app = require("tns-core-modules/application");

const CuppingSheetViewModel = require("./cupping-sheet-view-model");
const cuppingSheetViewModel = new CuppingSheetViewModel();

exports.onPageLoaded = function (args) {
  const page = args.object;
  page.bindingContext = cuppingSheetViewModel;
};

exports.onDrawerButtonTap = function(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
};
