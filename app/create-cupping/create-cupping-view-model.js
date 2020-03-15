const observableModule = require("tns-core-modules/data/observable");
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
const dialogsModule = require("tns-core-modules/ui/dialogs");
const Frame = require("tns-core-modules/ui/frame");

const SelectedPageService = require("../shared/selected-page-service");
const userService = require("~/services/user-service");
const cuppingService = require("~/services/cupping-service");


function CreateCuppingViewModel() {
    SelectedPageService.getInstance().updateSelectedPage("Cupping");

    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        title: "My title",
        description: "Description",
        cupsPerSample: 5,
        sampleNames: new ObservableArray([
            { "value": "My val1" }
        ]),
        sampleName: "",
        addSampleName() {
            let sample = "";
            if (this.sampleName) {
                sample = this.sampleName;
            }
            if (sample.trim() === "") {
                dialogsModule.alert({
                    message: "Enter a sample name",
                    okButtonText: "OK"
                });

                return;
            }
            this.sampleNames.push({ value: sample });
            this.sampleName = "";
        },
        createCuppingSession() {
            userService.getXCSRFToken().then((csrfToken) => {
                cuppingService.createCuppingSession({
                    title: this.title,
                    description: this.description,
                    cupsPerSample: this.cupsPerSample,
                    sampleNames: this.sampleNames._array
                }, csrfToken).then((json) => {
                    if (json.field_session_id[0].value) {
                        console.log(json.field_session_id[0].value, 'SESSION ID');
                    }
                    Frame.topmost().navigate({
                        moduleName: "/cupping-sheet/cupping-sheet-page",
                        clearHistory: true
                    });
                }).catch((e) => {
                    console.log(e);
                });
            });
        }
    });

    return viewModel;
}

module.exports = CreateCuppingViewModel;
