import winston, { createLogger, level, verbose } from "winston";

test("logging level", () => {
  const logger = createLogger({
    level: "verbose", // log yang dicetak sampe 'verbose'
    transports: [new winston.transports.Console()],
  });

  // kalo page 'logger.log' itu harus sebuttin 'level' dan 'message' nya
  logger.log({ level: "error", message: "level error" });
  logger.log({ level: "warn", message: "level warn" });
  logger.log({ level: "info", message: "level info" });
  logger.log({ level: "http", message: "level http" });
  logger.log({ level: "verbose", message: "level verbose" });
  logger.log({ level: "debug", message: "level debug" });
  logger.log({ level: "silly", message: "level silly" });
});

test("logging level with shortcut", () => {
  const logger = createLogger({
    level: "verbose", // log yang dicetak sampe 'verbose' saja
    transports: [new winston.transports.Console()],
  });

  // kalo page 'logger.{level}' itu harus tidak usah sebuttin 'level' dan 'message' nya
  logger.error("level error");
  logger.warn("level warn");
  logger.info("level info");
  logger.http("level http");
  logger.verbose("level verbose");
  logger.debug("level debug");
  logger.silly("level silly");
});
