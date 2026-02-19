"use strict";
const e = require("electron");
console.log("electron type:", typeof e);
console.log("electron value:", e && e.toString ? e.toString().slice(0, 50) : e);
console.log("process.versions.electron:", process.versions.electron);
const { app } = e || {};
console.log("app:", app);
if (app) {
    app.whenReady().then(() => {
        console.log("App is ready!");
        app.quit();
    });
} else {
    console.error("app is undefined!");
    process.exit(1);
}
