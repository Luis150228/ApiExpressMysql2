"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.getUsers = exports.createUser = void 0;

var _dataBase = require("./dataBase");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

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

/////Fuciones
var passHash = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(textPass) {
    var level;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _bcryptjs["default"].genSalt(9);

          case 2:
            level = _context.sent;
            _context.next = 5;
            return _bcryptjs["default"].hash(textPass, level);

          case 5:
            return _context.abrupt("return", _context.sent);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function passHash(_x) {
    return _ref.apply(this, arguments);
  };
}();

var passValidate = function passValidate(pswNow, pswSave) {
  return _bcryptjs["default"].compareSync(pswNow, pswSave);
};

var usrExist = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(user) {
    var connection, _yield$connection$que, _yield$connection$que2, rows;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _dataBase.connect)();

          case 2:
            connection = _context2.sent;
            _context2.next = 5;
            return connection.query('SELECT COUNT(username) as total from t_users WHERE username = ?', [user]);

          case 5:
            _yield$connection$que = _context2.sent;
            _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
            rows = _yield$connection$que2[0];
            return _context2.abrupt("return", rows[0]['total']);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function usrExist(_x2) {
    return _ref2.apply(this, arguments);
  };
}(); //////////Controladores


var createUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var connection, _yield$req$body, usrname, username, pass, userlevel, image, status, area, asExist, psw, _yield$connection$que3, _yield$connection$que4, result, token;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _dataBase.connect)();

          case 2:
            connection = _context3.sent;
            _context3.next = 5;
            return req.body;

          case 5:
            _yield$req$body = _context3.sent;
            usrname = _yield$req$body.usrname;
            username = _yield$req$body.username;
            pass = _yield$req$body.pass;
            userlevel = _yield$req$body.userlevel;
            image = _yield$req$body.image;
            status = _yield$req$body.status;
            area = _yield$req$body.area;
            _context3.next = 15;
            return usrExist(username);

          case 15:
            asExist = _context3.sent;

            if (!(asExist != 0)) {
              _context3.next = 20;
              break;
            }

            res.json({
              menssage: 'El usuario ya existe'
            });
            _context3.next = 30;
            break;

          case 20:
            _context3.next = 22;
            return passHash(pass);

          case 22:
            psw = _context3.sent;
            _context3.next = 25;
            return connection.query('INSERT INTO t_users (name, username, password, user_level, image, status, area) VALUES (?, ?, ?, ?, ?, ?, ?)', [usrname, username, psw, userlevel, image, status, area]);

          case 25:
            _yield$connection$que3 = _context3.sent;
            _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
            result = _yield$connection$que4[0];
            token = _jsonwebtoken["default"].sign({
              id: result.insertId
            }, _secrWord["default"].SECRET, {
              expiresIn: 86400
            });
            res.json({
              menssage: 'Usuario Registrado',
              id: result.insertId,
              token: token
            });

          case 30:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function createUser(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var getUsers = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var connection, _yield$connection$que5, _yield$connection$que6, rows;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _dataBase.connect)();

          case 2:
            connection = _context4.sent;
            _context4.next = 5;
            return connection.query('SELECT id, name, username, user_level, image, status, area, last_login, f_usr_create FROM t_users where status = 1');

          case 5:
            _yield$connection$que5 = _context4.sent;
            _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
            rows = _yield$connection$que6[0];
            // console.log(rows);
            // res.send('Sistema de traslados');
            res.json(rows);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getUsers(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;

var deleteUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var connection;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _dataBase.connect)();

          case 2:
            connection = _context5.sent;
            _context5.next = 5;
            return connection.query('UPDATE t_users SET status = 0 WHERE id = ?', [req.params.userId]);

          case 5:
            res.sendStatus(204);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteUser(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteUser = deleteUser;