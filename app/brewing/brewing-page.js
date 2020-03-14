const app = require("tns-core-modules/application");

const BrewingViewModel = require("./brewing-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new BrewingViewModel();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
