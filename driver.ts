import { Logger, LogLevel } from './index';

//Logger.setLevel(LogLevel.Warning);
Logger.setLoggerName("Logger");
Logger.verbose("This is a verbose message");
Logger.info("This is an info message");
Logger.warn("This is a warning message");
Logger.error("This is an error message");