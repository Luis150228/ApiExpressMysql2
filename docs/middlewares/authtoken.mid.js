"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isConsult = exports.isUser = exports.isAdmin = exports.isGod = exports.verifyToken = void 0;

var _function = require("./function.mid");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var verifyToken = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var token, eToken;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = req.headers['x-access-token'];
            _context.next = 4;
            return (0, _function.trasladeToken)(token);

          case 4:
            eToken = _context.sent;

            /**Valida la existencia del usuario */
            eToken == 0 ? res.status(400).json({
              menssage: 'Verify Token: Usuario sin permisos o inexistente'
            }) : next();
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(401).json({
              menssage: 'Verify Token: No autorizado o sin token'
            }));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function verifyToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.verifyToken = verifyToken;

var isGod = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var token, rol;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            token = req.headers['x-access-token'];
            _context2.next = 3;
            return (0, _function.rolToken)(token);

          case 3:
            rol = _context2.sent;

            if (!(rol !== 'god')) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.json({
              menssage: 'No soy un dios'
            }));

          case 6:
            // console.log('IF Rol de usuario: ', rol);
            next();

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function isGod(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.isGod = isGod;

var isAdmin = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var token, rol;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            token = req.headers['x-access-token'];
            _context3.next = 3;
            return (0, _function.rolToken)(token);

          case 3:
            rol = _context3.sent;
            rol == 'god' || rol == 'admin' ? next() : res.status(401).json({
              menssage: "Se requiere permisos de Administrador su nivel es de ".concat(rol)
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function isAdmin(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.isAdmin = isAdmin;

var isUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var token, rol;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            token = req.headers['x-access-token'];
            _context4.next = 3;
            return (0, _function.rolToken)(token);

          case 3:
            rol = _context4.sent;
            rol == 'god' || rol == 'admin' || rol == 'user' ? next() : res.status(401).json({
              menssage: "No puede realizar ninguna modificacion su nivel es de ".concat(rol)
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function isUser(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.isUser = isUser;

var isConsult = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var token, rol;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            token = req.headers['x-access-token'];
            _context5.next = 3;
            return (0, _function.rolToken)(token);

          case 3:
            rol = _context5.sent;
            rol == 'god' || rol == 'admin' || rol == 'user' || rol == 'consult' ? next() : res.status(401).json({
              menssage: "You cannot check your username is ".concat(rol)
            });

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function isConsult(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.isConsult = isConsult;