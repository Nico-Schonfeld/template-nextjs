import { join, resolve } from "path";
import { format, createLogger, transports, Logger } from "winston";
import { promises as fs } from "fs";
import "winston-daily-rotate-file";
const isServer = typeof window === "undefined";

export interface LogEntry {
  datetime: string;
  message: string;
}
/* 
export interface LogFile {
  day: string;
  logs: LogEntry[];
} */

export interface LogFile {
  day: string;
  logs: LogEntry[];
  size: number;
  type: "App" | "Server";
}

export class LoggerFunction {
  private customLogger!: Logger;
  private readonly logDir: string;

  constructor() {
    this.logDir = resolve("log");

    if (isServer) {
      // Crear el directorio de logs si no existe
      this.createLogDirectory();
      this.createLoggers();
    }
  }

  private async createLogDirectory() {
    try {
      // Verificar si el directorio existe
      try {
        await fs.access(this.logDir);
      } catch {
        // Si no existe, crearlo
        await fs.mkdir(this.logDir, { recursive: true });
        console.log("Directorio de logs creado:", this.logDir);
      }
    } catch (error) {
      console.error("Error al crear el directorio de logs:", error);
    }
  }

  private createLoggers() {
    const textFormat = format.printf((log) => {
      return `${log.timestamp} - [${log.level.toUpperCase()}] ${log.message}`;
    });

    const dateFormat = format.timestamp({
      format: "DD-MM-YYYY HH:mm:ss",
    });

    this.customLogger = createLogger({
      level: "info",
      format: format.combine(dateFormat, textFormat),
      transports: [
        new transports.DailyRotateFile({
          filename: process.env.LOG_DIR,
          datePattern: "DD-MM-YYYY",
          maxFiles: "15d",
        }),
        new transports.Console(),
      ],
    });
  }

  public info(message: string, obj?: any) {
    if (obj) {
      this.customLogger.info(`${message} ${JSON.stringify(obj, null, 2)}`);
    } else {
      this.customLogger.info(message);
    }
  }

  public error(message: string, obj?: any) {
    if (obj) {
      this.customLogger.error(`${message} ${JSON.stringify(obj, null, 2)}`);
    } else {
      this.customLogger.error(message);
    }
  }

  public warn(message: string, obj?: any) {
    if (obj) {
      this.customLogger.warn(`${message} ${JSON.stringify(obj, null, 2)}`);
    } else {
      this.customLogger.warn(message);
    }
  }

  public async getFilesInDirectory(directory: string): Promise<string[]> {
    try {
      const files = await fs.readdir(directory);
      return files
        .filter((file) => file.endsWith(".log"))
        .map((file) => join(directory, file));
    } catch (error) {
      throw new Error(
        `Could not read directory ${directory}: ${(error as Error).message}`
      );
    }
  }

  public async getLogContent(filePath: string): Promise<string> {
    try {
      return await fs.readFile(filePath, "utf8");
    } catch (error) {
      throw new Error(
        `Could not read log file ${filePath}: ${(error as Error).message}`
      );
    }
  }

  public parseLogContent(content: string): LogEntry[] {
    const logs: LogEntry[] = [];
    const logEntries = content.split("\n").filter((line) => line.trim() !== "");

    for (const entry of logEntries) {
      const [datetime, ...messagePart] = entry.split(" - ");
      const message = messagePart.join(" - ");
      logs.push({ datetime, message });
    }

    return logs;
  }

  /* public async getAllLogs(): Promise<LogFile[]> {
    const logFiles: LogFile[] = [];
    const files = await this.getFilesInDirectory(this.logDir);

    for (const file of files) {
      const fileContent = await this.getLogContent(file);
      const parsedLogs = this.parseLogContent(fileContent);

      const day = file
        .split("-")
        .slice(1)
        .join("-")
        .split(".")
        .slice(0, -1)
        .join(".");

      logFiles.push({
        day: day,
        logs: parsedLogs,
      });
    }

    return logFiles;
  } */

  public async getAllLogs(): Promise<LogFile[]> {
    const logFiles: LogFile[] = [];
    const files = await this.getFilesInDirectory(this.logDir);

    for (const file of files) {
      const fileContent = await this.getLogContent(file);
      const parsedLogs = this.parseLogContent(fileContent);
      const stats = await fs.stat(file);

      // Determinar el tipo basado en el nombre del archivo
      const fileName = file.toLowerCase();
      const type = fileName.includes("app") ? "App" : "Server";

      const day = file
        .split("-")
        .slice(1)
        .join("-")
        .split(".")
        .slice(0, -1)
        .join(".");

      logFiles.push({
        day,
        logs: parsedLogs,
        size: stats.size,
        type,
      });
    }

    // Ordenar por fecha descendente
    return logFiles.sort(
      (a, b) => new Date(b.day).getTime() - new Date(a.day).getTime()
    );
  }
}
