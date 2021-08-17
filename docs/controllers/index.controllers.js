"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homeIndex = void 0;

var homeIndex = function homeIndex(req, res, next) {
  res.render('index', {
    title: 'Catasys'
  });
};

exports.homeIndex = homeIndex;