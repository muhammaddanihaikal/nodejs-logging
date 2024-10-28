import winston from "winston";

test("membuat logging dengan level", () => {
  const logger = winston.createLogger({
    level: "debug", // sampai mana level yang ingin kita lihat
    transports: [new winston.transports.Console()],
  });

  logger.log({ level: "error", message: "Error Message" });
  logger.log({ level: "warn", message: "Warning Message" });
  logger.log({ level: "info", message: "Info Message" });
  logger.log({ level: "http", message: "HTTP Message" });
  logger.log({ level: "verbose", message: "Verbose Message" });
  logger.log({ level: "debug", message: "Debug Message" });
  logger.log({ level: "silly", message: "Silly Message" });
});

test("membuat logging dengan level dengan shortcut", () => {
  const logger = winston.createLogger({
    level: "debug", // sampai mana level yang ingin kita lihat
    transports: [new winston.transports.Console()],
  });

  logger.error("Error Message");
  logger.warn("Warning Message");
  logger.info("Info Message");
  logger.http("HTTP Message");
  logger.verbose("Verbose Message");
  logger.debug("Debug Message");
  logger.silly("Silly Message");
});
