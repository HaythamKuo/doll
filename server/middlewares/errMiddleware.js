const notFound = (req, res, next) => {
  const error = new Error(`找不到--${req.originalUrl}`);
  res.status(404);
  next(error);
};

//自訂錯誤處理
const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 400;
    message = "無效的ID";
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
module.exports = { notFound, errorHandler };
