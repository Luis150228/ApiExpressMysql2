"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rolToken = exports.idonToken = exports.trasladeToken = void 0;

var _dataBase = require("../controllers/dataBase");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _secrWord = _interopRequireDefault(require("../secrWord"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var trasladeToken = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(headerToken) {
    var connection, unToken, _yield$connection$que, _yield$connection$que2, usrExist;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _dataBase.connect)();

          case 2:
            connection = _context.sent;

            if (headerToken) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(403).json({
              menssage: 'No proporciono el Token'
            }));

          case 5:
            unToken = _jsonwebtoken["default"].verify(headerToken, _secrWord["default"].SECRET); // console.log(unToken.id);

            /**Validar si el usuario dentro del token existe */

            _context.next = 8;
            return connection.query('SELECT id, COUNT(username) as total from t_users WHERE id = ?', [unToken.id]);

          case 8:
            _yield$connection$que = _context.sent;
            _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
            usrExist = _yield$connection$que2[0];
            return _context.abrupt("return", usrExist[0]['total']);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function trasladeToken(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.trasladeToken = trasladeToken;

var idonToken = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(headerToken) {
    var connection, unToken, _yield$connection$que3, _yield$connection$que4, usrExist;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _dataBase.connect)();

          case 2:
            connection = _context2.sent;

            if (headerToken) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.status(403).json({
              menssage: 'No proporciono el Token'
            }));

          case 5:
            unToken = _jsonwebtoken["default"].verify(headerToken, _secrWord["default"].SECRET); // console.log(unToken.id);

            /**Validar si el usuario dentro del token existe */

            _context2.next = 8;
            return connection.query('SELECT id from t_users WHERE id = ?', [unToken.id]);

          case 8:
            _yield$connection$que3 = _context2.sent;
            _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
            usrExist = _yield$connection$que4[0];
            return _context2.abrupt("return", usrExist[0]['id']);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function idonToken(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.idonToken = idonToken;

var rolToken = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(headerToken) {
    var connection, unToken, _yield$connection$que5, _yield$connection$que6, usrExist;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _dataBase.connect)();

          case 2:
            connection = _context3.sent;

            if (headerToken) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", res.status(403).json({
              menssage: 'No proporciono el Token'
            }));

          case 5:
            unToken = _jsonwebtoken["default"].verify(headerToken, _secrWord["default"].SECRET); // console.log(unToken.id);

            /**Validar si el usuario dentro del token existe */

            _context3.next = 8;
            return connection.query('SELECT user_level from t_users WHERE id = ?', [unToken.id]);

          case 8:
            _yield$connection$que5 = _context3.sent;
            _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
            usrExist = _yield$connection$que6[0];
            return _context3.abrupt("return", usrExist[0]['user_level']);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function rolToken(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.rolToken = rolToken;