import winston from "winston";

test("buat logger baru", () => {
  const logger = new winston.createLogger();

  logger.log({
    level: "info",
    message: "Hello Logger",
  }); // akan terjadi error karena belum ada transport-nya
});
