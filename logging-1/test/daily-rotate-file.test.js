import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test("create new logger with console transport", () => {
  const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new DailyRotateFile({
        format: winston.format.printf((log) => {
          return `${new Date()} : ${log.level.toUpperCase()} : ${log.message}`;
        }),
        filename: "applicaton-%DATE%.log",
        zippedArchive: true,
        maxSize: "1m",
        maxFiles: "3",
      }),
    ],
  });

  for (let i = 0; i < 100000; i++) {
    logger.info("hello loggging " + i);
  }
});
