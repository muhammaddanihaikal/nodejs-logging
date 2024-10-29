import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test("logger dengan file transport", () => {
  const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new DailyRotateFile({
        filename: "app-%DATE%.log",
        zippedArchive: true, // akan dibuatkan zip, ketika hari berganti atau file log sudah max size
        maxSize: "1m",
        maxFiles: "10d", // setelah 10 hari akan dihapus
      }),
    ],
  });

  for (let i = 0; i < 120000; i++) {
    logger.info("Hello Logger " + i);
  }
});
