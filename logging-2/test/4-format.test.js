import winston from "winston";

test("logger dengan format", () => {
  const logger = new winston.createLogger({
    // format: winston.format.json(),
    // format: winston.format.simple(),
    format: winston.format.logstash(),
    transports: [new winston.transports.Console()],
  });

  logger.info("Hello logger");
});

test("logger dengan custom format", () => {
  const logger = new winston.createLogger({
    format: winston.format.printf((log) => {
      return `${new Date()} : ${log.level.toUpperCase()} : ${log.message}`;
    }),
    transports: [new winston.transports.Console()],
  });

  logger.info("Hello logger");
  logger.warn("Hello logger");
  logger.error("Hello logger");
});
