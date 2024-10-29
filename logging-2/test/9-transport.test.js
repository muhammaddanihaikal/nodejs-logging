import winston from "winston";
import TransportStream from "winston-transport";

test("membuat custom transport", () => {
  class CustomTransport extends TransportStream {
    constructor(option) {
      super(option);
    }

    log(info, next) {
      // disini bisa melakukan apapun, kirim ke email, simpan ke db, dll.
      // saya disini coba console.log saja
      console.log(
        `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`
      );

      next();
    }
  }

  const logger = new winston.createLogger({
    transports: [new CustomTransport({ level: "debug" })],
  });

  logger.error("Error Message");
  logger.warn("Warning Message");
  logger.info("Info Message");
  logger.http("HTTP Message");
  logger.verbose("Verbose Message");
  logger.debug("Debug Message");
  logger.silly("Silly Message");
});
