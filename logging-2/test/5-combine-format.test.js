import winston from "winston";

test("logger dengan combine format", () => {
  const logger = new winston.createLogger({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json()
    ),
    transports: [new winston.transports.Console()],
  });

  logger.error("Hello logger");
  logger.warn("Hello logger");
  logger.info("Hello logger");
});
