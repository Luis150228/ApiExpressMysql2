"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTraslado = exports.deleteTraslado = exports.setTraslado = exports.getTrasladoCount = exports.getTraslado = exports.getTraslados = void 0;

var _dataBase = require("./dataBase");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getTraslados = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var connection, _yield$connection$que, _yield$connection$que2, rows;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _dataBase.connect)();

          case 2:
            connection = _context.sent;
            _context.next = 5;
            return connection.query('SELECT * FROM t_traslados WHERE cancelado = "A" limit 5');

          case 5:
            _yield$connection$que = _context.sent;
            _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
            rows = _yield$connection$que2[0];
            // console.log(rows);
            // res.send('Sistema de traslados');
            res.json(rows);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getTraslados(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getTraslados = getTraslados;

var getTraslado = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var connection, _yield$connection$que3, _yield$connection$que4, rows;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _dataBase.connect)();

          case 2:
            connection = _context2.sent;
            _context2.next = 5;
            return connection.query('SELECT folio, adquiriente, enajenante, num_escr, f_escr, area FROM t_traslados WHERE cancelado = "A" AND folio = ?', [req.params.id]);

          case 5:
            _yield$connection$que3 = _context2.sent;
            _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
            rows = _yield$connection$que4[0];
            // console.log(req.params.id);
            // console.log(rows[0]);
            // res.send('Sistema de traslados');
            res.json(rows[0]);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getTraslado(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getTraslado = getTraslado;

var getTrasladoCount = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var connection, _yield$connection$que5, _yield$connection$que6, rows;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _dataBase.connect)();

          case 2:
            connection = _context3.sent;
            _context3.next = 5;
            return connection.query('SELECT COUNT(folio) as total FROM t_traslados WHERE cancelado = "A"');

          case 5:
            _yield$connection$que5 = _context3.sent;
            _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
            rows = _yield$connection$que6[0];
            console.log(rows[0]['total']); // res.send('Sistema de traslados');

            res.json(rows[0]['total']);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getTrasladoCount(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getTrasladoCount = getTrasladoCount;

var setTraslado = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var connection, _yield$connection$que7, _yield$connection$que8, result;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _dataBase.connect)();

          case 2:
            connection = _context4.sent;
            _context4.next = 5;
            return connection.query('INSERT INTO t_traslados (adquiriente, enajenante, num_escr, f_escr, area) VALUES (?, ?, ?, ?, ?)', [req.body.adquiriente, req.body.enajenante, req.body.num_escr, req.body.f_escr, req.body.area]);

          case 5:
            _yield$connection$que7 = _context4.sent;
            _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
            result = _yield$connection$que8[0];
            // console.log(result);
            res.json(_objectSpread({
              id: result.insertId
            }, req.body));

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function setTraslado(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.setTraslado = setTraslado;

var deleteTraslado = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var connection, result;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _dataBase.connect)();

          case 2:
            connection = _context5.sent;
            _context5.next = 5;
            return connection.query('UPDATE t_traslados SET cancelado = "C", status_traslado = "Cancelado" WHERE folio = ?', [req.params.id]);

          case 5:
            result = _context5.sent;
            // console.log(result);
            res.sendStatus(202);

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteTraslado(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteTraslado = deleteTraslado;

var updateTraslado = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var connection, result;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return (0, _dataBase.connect)();

          case 2:
            connection = _context6.sent;
            _context6.next = 5;
            return connection.query('UPDATE t_traslados SET status_traslado = "Modificado", usr_mod = "USRTEST", ? WHERE folio = ?', [req.body, req.params.id]);

          case 5:
            result = _context6.sent;
            // console.log(result);
            res.sendStatus(202);

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateTraslado(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateTraslado = updateTraslado;