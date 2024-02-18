import LogLevel  from "./levels";
import getDateTime from "./dateTimeModule/getDateTime";
import consoleOutput from "./outputModule/consoleOutput";
import fileOutput from "./outputModule/fileOutput";

class CreateLogMessage {

    protected static level: LogLevel = LogLevel.Verbose;
    protected static loggerName: string = "Logger";
    protected static logText: string = "";

    
    protected static setLogDateTimeInMessage(){
        const dateTime: string = getDateTime();
        this.logText = this.logText + `[${dateTime}]`;
    }

    protected static setLoggerNameInMessage(){
        this.logText = this.logText + ` [${this.loggerName}]`;
    }

    protected static setLogLevelInMessage(inputLevel: string){
        this.logText = this.logText + ` [${inputLevel}]`;
    }

    protected static setLogMessage(inputMessage: string){
        this.logText = this.logText + " " + inputMessage;
    }

    protected static buildLogMessage(inputLevel: string, inputMessage: string){
        this.setLogDateTimeInMessage();
        this.setLoggerNameInMessage();
        this.setLogLevelInMessage(inputLevel);
        this.setLogMessage(inputMessage);
    }

}
class ConsoleLog extends CreateLogMessage {
    static setLevel(level: LogLevel) {
        CreateLogMessage.level = level;
    }
  
    static setLoggerName(loggerName: string) {
          CreateLogMessage.loggerName = loggerName;
    }

    static verbose(message: string) {
        if (CreateLogMessage.level <= LogLevel.Verbose) {
            CreateLogMessage.buildLogMessage("Verbose", message);
            consoleOutput(CreateLogMessage.logText, "white");
            CreateLogMessage.logText = "";
        }
    }

    static info(message: string) {
        if (CreateLogMessage.level <= LogLevel.Info) {
            CreateLogMessage.buildLogMessage("Info", message);
            consoleOutput(CreateLogMessage.logText, "blue");
            CreateLogMessage.logText = "";
        }
    }

    static warn(message: string) {
        if (CreateLogMessage.level <= LogLevel.Warning) {
            CreateLogMessage.buildLogMessage("Warning", message);
            consoleOutput(CreateLogMessage.logText, "yellow");
            CreateLogMessage.logText = "";
        }
    }

    static error(message: string) {
        if (CreateLogMessage.level <= LogLevel.Error) {
            CreateLogMessage.buildLogMessage("Error", message);
            consoleOutput(CreateLogMessage.logText, "red");
            CreateLogMessage.logText = "";
        }
    }
}

class FileLog extends CreateLogMessage {
    private static filePath: string = "logs.txt";
    static setFilePath(filePath: string) {
        FileLog.filePath = filePath;
    }
    static setLevel(level: LogLevel) {
        CreateLogMessage.level = level;
    }
  
    static setLoggerName(loggerName: string) {
          CreateLogMessage.loggerName = loggerName;
    }

    static verbose(message: string) {
        if (CreateLogMessage.level <= LogLevel.Verbose) {
            CreateLogMessage.buildLogMessage("Verbose", message);
            fileOutput(CreateLogMessage.logText, this.filePath);
            CreateLogMessage.logText = "";
        }
    }

    static info(message: string) {
        if (CreateLogMessage.level <= LogLevel.Info) {
            CreateLogMessage.buildLogMessage("Info", message);
            fileOutput(CreateLogMessage.logText, this.filePath);
            CreateLogMessage.logText = "";
        }
    }

    static warn(message: string) {
        if (CreateLogMessage.level <= LogLevel.Warning) {
            CreateLogMessage.buildLogMessage("Warning", message);
            fileOutput(CreateLogMessage.logText, this.filePath);
            CreateLogMessage.logText = "";
        }
    }

    static error(message: string) {
        if (CreateLogMessage.level <= LogLevel.Error) {
            CreateLogMessage.buildLogMessage("Error", message);
            fileOutput(CreateLogMessage.logText, this.filePath);
            CreateLogMessage.logText = "";
        }
    }
}


export {LogLevel, ConsoleLog , FileLog};
  

  