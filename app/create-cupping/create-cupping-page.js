const app = require("tns-core-modules/application");

const CreateCuppingViewModel = require("./create-cupping-view-model");
const createCuppingViewModel = new CreateCuppingViewModel();

exports.onPageLoaded = function (args) {
  const page = args.object;
  page.bindingContext = createCuppingViewModel;
};

exports.onDrawerButtonTap = function(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
};
