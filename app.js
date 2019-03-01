var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var newRouter = require("./routes/new");

var app = express();

/**
 * utility middleware
 */
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  // res.header(
  //   "Access-Control-Allow-Methods",
  //   "POST, PUT, GET, OPTIONS, DELETE, PATCH"
  // );
  // res.header("Allow", "HEAD,GET,OPTIONS,PUT,PATCH");
  // res.header(
  //   "Access-Control-Allow-Headers",
  //   "Content-Type, Accept, Authorization"
  // );
  // res.header("Access-Control-Allow-Credentials", "true");
  next();
});

/**
 * serve our app
 */
app.use(express.static("public"));

/**
 * api routes
 */
app.use("/users", usersRouter);
app.use("/new", newRouter);
// app.use("/", indexRouter);

/**
 * nothing was found
 */
app.use("/", (req, res) => {
  res.send(404);
});

/**
 * catch all errors
 */
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
//module.exports = app;

// view engine setup

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "hbs");

// app.use(express.static(path.join(__dirname, "public")));
