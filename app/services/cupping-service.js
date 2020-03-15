/* global fetch */
const config = require("../resources/config/config");


function handleErrors(error) {
    console.log("error?");
    console.error(error);
}

exports.createCuppingSession = (cuppingSession, XCSRFToken) => new Promise((resolve, reject) => {
    fetch(`${config.apiUrl}/node?_format=json`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": XCSRFToken
        },
        body: JSON.stringify({
            "title": [
                { "value": cuppingSession.title }
            ],
            "field_session_description": [
                { "value": cuppingSession.description }
            ],
            "type": [
                { "target_id": "cupping_session" }
            ],
            "field_cups_per_sample": [
                { "value": cuppingSession.cupsPerSample }
            ],
            "field_sample_names": cuppingSession.sampleNames
        })
    }).then((response) => {
        if (response.status !== 201) {
            console.log(response);
            reject();
        }
        return response.json();
    })
    .then(resolve)
    .catch((error) => {
        handleErrors(error);
        reject();
    });
});
