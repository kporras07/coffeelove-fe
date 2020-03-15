/* global fetch */
const config = require("../resources/config/config");


function handleErrors(error) {
    console.log("error?");
    console.error(error);
}

exports.register = (user) => new Promise((resolve, reject) => {
    this.logout();
    fetch(`${config.apiUrl}/user/register?_format=json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: [user.email],
            mail: [user.email],
            pass: [user.password]
        })
    }).then((response) => {
        if (response.status !== 200) {
            console.log(response);
            reject();
        }
        response.json();
    })
    .then(resolve)
    .catch((error) => {
        handleErrors(error);
        reject();
    });
});

exports.login = (user) => new Promise((resolve, reject) => {
    this.logout();
    fetch(`${config.apiUrl}/user/login?_format=json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: user.email,
            pass: user.password
        })
    })
    .then((response) => {
        if (response.status !== 200) {
            console.log(response);
            reject();
        }
        response.json();
    })
    .then(resolve)
    .catch((error) => {
        handleErrors(error);
        reject();
    });
});

exports.getXCSRFToken = () => new Promise((resolve, reject) => {
    fetch(`${config.apiUrl}/session/token`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    .then((response) => {
        if (response.status !== 200) {
            console.log(response);
            reject();
        }

        return response.text();
    })
    .then(resolve)
    .catch((error) => {
        handleErrors(error);
        reject();
    });
});

exports.logout = () => new Promise((resolve, reject) => {
    fetch(`${config.apiUrl}/user/logout?_format=json`)
    .then(resolve)
    .catch((err) => {
        handleErrors(err);
        reject();
    });
});
