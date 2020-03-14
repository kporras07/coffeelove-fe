const observableModule = require("tns-core-modules/data/observable");
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
const dialogsModule = require("tns-core-modules/ui/dialogs");

const SelectedPageService = require("../shared/selected-page-service");

function CreateCuppingViewModel() {
    SelectedPageService.getInstance().updateSelectedPage("Cupping");

    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        title: "My title",
        description: "Description",
        cupsPerSample: 5,
        sampleNames: new ObservableArray([
            { value: "Apples" },
            { value: "Bananas" },
            { value: "Oranges" }
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

        }
    });

    return viewModel;
}

module.exports = CreateCuppingViewModel;
