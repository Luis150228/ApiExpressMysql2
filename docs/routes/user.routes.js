"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _user = require("../controllers/user.controllers");

var router = (0, _express.Router)();
router.post('/', _user.createUser);
router.get('/', _user.getUsers);
router["delete"]('/:userId', _user.deleteUser);
var _default = router;
exports["default"] = _default;