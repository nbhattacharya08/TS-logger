import CreateLogMessage from "./CreateLogMessageModule/CreateLogMessage";
import consoleOutput from "./outputModule/consoleOutput";
import fileOutput from "./outputModule/fileOutput";
import LogLevel  from "./levels";

class ConsoleLog  {
    private logMessageObject: CreateLogMessage;

    constructor(){
        this.logMessageObject = new CreateLogMessage();
    }
    public setLevel(level: LogLevel) {
        this.logMessageObject.setLevel(level);
    }
  
    public setLoggerName(loggerName: string) {
          this.logMessageObject.setLoggerName(loggerName);
    }

    public verbose(message: string) {
        if (this.logMessageObject.getLevel() <= LogLevel.Verbose) {
            const formattedMessage: string = this.logMessageObject.buildLogMessage("Verbose", message);
            consoleOutput(formattedMessage, "white");
        }
    }

    public info(message: string) {
        if (this.logMessageObject.getLevel() <= LogLevel.Info) {
            const formattedMessage: string = this.logMessageObject.buildLogMessage("Info", message);
            consoleOutput(formattedMessage, "blue");
        }
    }

    public warn(message: string) {
        if (this.logMessageObject.getLevel() <= LogLevel.Warning) {
            const formattedMessage: string = this.logMessageObject.buildLogMessage("Warning", message);
            consoleOutput(formattedMessage, "yellow");
        }
    }

    public error(message: string) {
        if (this.logMessageObject.getLevel() <= LogLevel.Error) {
            const formattedMessage: string = this.logMessageObject.buildLogMessage("Error", message);
            consoleOutput(formattedMessage, "red");
        }
    }
}

class FileLog {

    private filePath: string = "logs.txt";

    private logMessageObject: CreateLogMessage;

    constructor(){
        this.logMessageObject = new CreateLogMessage();
    }

    public setFilePath(filePath: string) {
        this.filePath = filePath;
    }
    public setLevel(level: LogLevel) {
        this.logMessageObject.setLevel(level);
    }
  
    public setLoggerName(loggerName: string) {
        this.logMessageObject.setLoggerName(loggerName);
    }

    public verbose(message: string) {
        if (this.logMessageObject.getLevel() <= LogLevel.Verbose) {
            const formattedMessage: string = this.logMessageObject.buildLogMessage("Verbose", message);
            fileOutput(formattedMessage, this.filePath);
        }
    }

    public info(message: string) {
        if (this.logMessageObject.getLevel() <= LogLevel.Info) {
            const formattedMessage: string = this.logMessageObject.buildLogMessage("Info", message);
            fileOutput(formattedMessage, this.filePath);
        }
    }

    public warn(message: string) {
        if (this.logMessageObject.getLevel() <= LogLevel.Warning) {
            const formattedMessage: string = this.logMessageObject.buildLogMessage("Warning", message);
            fileOutput(formattedMessage, this.filePath);
        }
    }

    public error(message: string) {
        if (this.logMessageObject.getLevel() <= LogLevel.Error) {
            const formattedMessage: string = this.logMessageObject.buildLogMessage("Error", message);
            fileOutput(formattedMessage, this.filePath);
        }
    }
}


export {LogLevel, ConsoleLog , FileLog};
  

  