
const pe = require('parse-error'); //parses error so you can read error message and handle them accordingly

const to = function (promise) { //global function that will help use handle promise rejections, this article talks about it http://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/
  return promise
    .then(data => {
      return [null, data];
    }).catch(err => [pe(err)]);
};

// Response handlers
const successResponse = function (res, code, data, message) {
  return res.status(code || 200).json({
    success: true,
    data,
    code,
    message
  })
}

const okResponse = function (res, data, message) {
  return successResponse(res, 200, data, message);
}

const createdResponse = function (res, data, message) {
  return successResponse(res, 201, data, message);
}

const noContentResponse = function (res, message) {
  return successResponse(res, 204, {}, message);
}
const notFoundError = function (res,message) {
  return successResponse(res,404,{},message);
}

const forbiddenError = function (res,msg) {
  return successResponse(res,403,{},msg);
}

const errorResponse = function (res, data, message, code) {
  res.statusCode = 406;
  return res.json({
    success: false,
    code:406,
    data,
    message
  })
}
const badRequestError = function (res, message) {
  res.statusCode = 406;
  return res.json({
    success: false,
    code: 406,
    message: message
  })
}
const unverifiedError = function (res, message) {
  res.statusCode = 412;
  return res.json({
    success: false,
    code: 412,
    message: message
  })
}

// Error handler for unverified Email with dedicated response code.
// Code 432 - Unverified Email
const unverifiedEmailError = function (res, data, message) {
  res.statusCode = 432;
  return res.json({
    success: false,
    code: 432,
    data,
    message: message
  })
}

// Error handler for unverified mobile number with dedicated response code.
// Code 433 - Unverified Mobile Number
const unverifiedMobileError = function (res, data, message) {
  res.statusCode = 433;
  return res.json({
    success: false,
    code: 433,
    data,
    message: message
  })
}

const ReE = function (res, err, code) { // Error Web Response
  console.log(err);
  // console.log(res);
  console.log(code);
  if (typeof err == 'object' && typeof err.message != 'undefined') {
    err = err.message;
  }

  if (typeof code !== 'undefined') res.statusCode = code;

  return res.json({
    success: false,
    message: err,
    code: code
  });
}


module.exports = {
  okResponse,
  to,
  createdResponse,
  noContentResponse,
  notFoundError,
  forbiddenError,
  unverifiedError,
  unverifiedEmailError,
  unverifiedMobileError,
  errorResponse,
  badRequestError
}