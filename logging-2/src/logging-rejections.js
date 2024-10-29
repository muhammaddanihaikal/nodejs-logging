import winston from "winston";

async function callAsync() {
  return Promise.reject("ups");
}

const logger = winston.createLogger({
  // handleExceptions: true,
  // handleRejections: true,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      handleExceptions: true,
      handleRejections: true,
      filename: "exeptions.log",
    }),
  ],
});

// coba rejections, karena lupa terhandle (tidak ada try-catch)
callAsync();
