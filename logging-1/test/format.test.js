import winston from "winston";

test("logger with format", () => {
  const logger = winston.createLogger({
    // format: winston.format.json(),
    // format: winston.format.simple(),
    // format: winston.format.logstash(), // salah satu format dari platform logging
    transports: [new winston.transports.Console()],
  });

  logger.info("hello info");
  logger.warn("hello warning");
  logger.error("hello error");
});

test("logger with printf/custom format", () => {
  const logger = winston.createLogger({
    // format: winston.format.json(),
    // format: winston.format.simple(),
    // format: winston.format.logstash(), // salah satu format dari platform logging
    format: winston.format.printf((log) => {
      return `${new Date()} : ${log.level.toUpperCase()} : ${log.message}`;
    }),
    transports: [new winston.transports.Console()],
  });

  logger.info("hello info");
  logger.warn("hello warning");
  logger.error("hello error");
});
