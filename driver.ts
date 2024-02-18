import { ConsoleLog, LogLevel , FileLog } from './index';

//Logger.setLevel(LogLevel.Warning);
ConsoleLog.setLoggerName("ConsoleLogger");
ConsoleLog.verbose("This is a verbose message");
ConsoleLog.info("This is an info message");
ConsoleLog.warn("This is a warning message");
ConsoleLog.error("This is an error message");

FileLog.setFilePath("logs.txt");
FileLog.setLoggerName("FileLogger");
//FileLog.setLevel(LogLevel.Info);
FileLog.verbose("This is a verbose message");
FileLog.info("This is an info message");
FileLog.warn("This is a warning message");
FileLog.error("This is an error message");


