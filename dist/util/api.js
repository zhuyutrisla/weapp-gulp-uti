"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("./request");
var baseUrl = 'https://xxx.com';
exports.api = {
    getTestAPI: function (params) { return request_1.request.get(baseUrl + "/get", params); },
    postTestAPI: function (params) { return request_1.request.post(baseUrl + "/post", params); },
};
