const application = require("tns-core-modules/application");
const { Frame } = require("tns-core-modules/ui/frame");
const userService = require("../services/user-service");

const AppRootViewModel = require("./app-root-view-model");

function onLoaded(args) {
    const drawerComponent = args.object;
    drawerComponent.bindingContext = new AppRootViewModel();
}

function onNavigationItemTap(args) {
    const component = args.object;
    let componentRoute = component.route;
    const componentTitle = component.title;
    const bindingContext = component.bindingContext;

    bindingContext.set("selectedPage", componentTitle);
    let loggingOut = false;

    if (componentRoute === "logout") {
        loggingOut = true;
        componentRoute = "login/login-page";
        userService.logout()
        .catch((e) => {
            console.log(e);
        });
    }

    Frame.topmost().navigate({
        moduleName: componentRoute,
        transition: {
            name: "fade"
        },
        clearHistory: loggingOut ? true : false
    });

    const drawerComponent = application.getRootView();
    drawerComponent.closeDrawer();
}

exports.onLoaded = onLoaded;
exports.onNavigationItemTap = onNavigationItemTap;
