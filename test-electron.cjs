"use strict";
const e = require("electron");
console.log("electron type:", typeof e);
console.log("electron keys:", Object.keys(e || {}).slice(0, 10));
console.log("app:", e && e.app);
const { app } = e || {};
console.log("destructured app:", app);
if (app) {
    app.whenReady().then(() => {
        console.log("App ready!");
        app.quit();
    });
} else {
    console.error("app is undefined!");
    process.exit(1);
}
