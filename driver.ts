import { ConsoleLog, FileLog , LogLevel } from './index';

const logger1 = new ConsoleLog();
logger1.setLoggerName("ConsoleLogger");
logger1.setLevel(LogLevel.Warning);
logger1.verbose("This is a verbose message");
logger1.info("This is an info message");
logger1.warn("This is a warning message");
logger1.error("This is an error message");

const logger2 = new FileLog();
logger2.setLoggerName("FileLogger");
logger2.setFilePath("logs.txt");
logger2.setLevel(LogLevel.Info);
logger2.verbose("This is a verbose message");
logger2.info("This is an info message");
logger2.warn("This is a warning message");
logger2.error("This is an error message");


