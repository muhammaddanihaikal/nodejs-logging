import winston from "winston";

test("logger transport level", () => {
  const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(), // semua level log masuk
      new winston.transports.File({
        filename: "application.log", // semua level log masuk
      }),
      new winston.transports.File({
        level: "error", // hanya error saja
        filename: "application-error.log",
      }),
    ],
  });

  // logger.info("hello info");
  // logger.warn("hello warning");
  logger.error("hello error");
});
