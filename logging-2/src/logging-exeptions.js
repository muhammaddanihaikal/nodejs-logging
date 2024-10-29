import winston from "winston";

const logger = new winston.createLogger({
  // handleExceptions: true, // global
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      handleExceptions: true, // hanya di transport ini saja
      filename: "exeptions.log",
    }),
  ],
});

// coba exeptions, lupa terhandle (tidak ada try-catch)
hello();
