"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var url_1 = require("url");
var plugin_react_1 = require("@vitejs/plugin-react");
var vite_1 = require("vite");
// __dirname workaround for ESM
var __filename = (0, url_1.fileURLToPath)(import.meta.url);
var __dirname = path_1.default.dirname(__filename);
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)()],
    resolve: {
        alias: {
            "@": path_1.default.resolve(__dirname, "src"),
        },
    },
    // server: {
    //   historyApiFallback: true, // 🔥 This line fixes refresh issue on nested routes
    // },
});
