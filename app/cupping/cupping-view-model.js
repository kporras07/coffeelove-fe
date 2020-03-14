const observableModule = require("tns-core-modules/data/observable");
const { Frame } = require("tns-core-modules/ui/frame");

const SelectedPageService = require("../shared/selected-page-service");

function navigateTo(componentRoute) {
    Frame.topmost().navigate({
        moduleName: componentRoute,
        transition: {
            name: "fade"
        }
    });
}

function CuppingViewModel() {
    SelectedPageService.getInstance().updateSelectedPage("Cupping");

    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        sessionId: "xxfdf5fgfg",
        joinSession() {
            console.log("SESSION ID: " + this.sessionId);
        },
        createSession() {
            navigateTo("create-cupping/create-cupping-page");
        }
    });

    return viewModel;
}

module.exports = CuppingViewModel;
