"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = require("../controllers/auth.controllers");

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.post('/signup', [_middlewares.authToken.verifyToken, _middlewares.authToken.isAdmin], _auth.singUp);
router.post('/signin', _auth.singIn);
router.post('/', _auth.authUser);
var _default = router;
exports["default"] = _default;