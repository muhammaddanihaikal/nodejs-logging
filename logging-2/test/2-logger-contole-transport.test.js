import winston from "winston";

test("buat logger baru dengan console transport", () => {
  const logger = new winston.createLogger({
    transports: [new winston.transports.Console()],
  });

  logger.info("Hello Logger");
});
