"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swaggerOptions = require("./swaggerOptions");

var _traslados = _interopRequireDefault(require("./routes/traslados.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///trasladosRoutes fue creado aleatoriamente
// import indexRoutes from './routes/index.routes';
var specs = (0, _swaggerJsdoc["default"])(_swaggerOptions.options);
var app = (0, _express["default"])(); // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public')));
app.get('/', function (req, res) {
  res.json({
    author: 'Rangel Diaz Luis Fernando',
    name: 'Sistema de Traslados',
    version: '0.1.0'
  });
}); // app.use('/', indexRoutes);

app.use('/api/traslados', _traslados["default"]);
app.use('/api/users', _user["default"]);
app.use('/api/auth', _auth["default"]);
app.use('/docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(specs)); //////////////////////////////// catch 404 and forward to error handler

app.use(function (req, res, next) {
  next((0, _httpErrors["default"])(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
});
var _default = app;
exports["default"] = _default;