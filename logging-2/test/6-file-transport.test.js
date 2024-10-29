import winston from "winston";

test("logger dengan file transport", () => {
  const logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json()
    ),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({
        filename: "application.log",
      }),
      new winston.transports.File({
        filename: "dani.log",
      }),
    ],
  });

  logger.error("Hello Logger");
  logger.warn("Hello Logger");
  logger.info("Hello Logger");
});
