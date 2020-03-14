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

function HomeViewModel() {
    SelectedPageService.getInstance().updateSelectedPage("Home");

    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        goToBrewing() {
            navigateTo("brewing/brewing-page");
        },
        goToCupping() {
            navigateTo("cupping/cupping-page");
        }
    });

    return viewModel;
}

module.exports = HomeViewModel;
