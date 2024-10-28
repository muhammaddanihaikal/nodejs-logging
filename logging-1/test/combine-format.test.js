import winston from "winston";

test("logger with combine format", () => {
  const logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json()
    ),
    transports: [new winston.transports.Console()],
  });

  logger.info("hello info");
  logger.warn("hello warning");
  logger.error("hello error");
});
