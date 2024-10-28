import winston from "winston";

test("logger with file transport", () => {
  const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({
        filename: "application.log",
      }),
    ],
  });

  logger.info("hello info");
  logger.warn("hello warning");
  logger.error("hello error");
});
