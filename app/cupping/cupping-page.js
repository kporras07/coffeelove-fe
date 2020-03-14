const app = require("tns-core-modules/application");

const CuppingViewModel = require("./cupping-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new CuppingViewModel();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
