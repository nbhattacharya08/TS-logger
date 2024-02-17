import  LogLevel  from "./levels";
import getDateTime from "./dateTimeModule/getDateTime";
import consoleOutput from "./outputModule/consoleOutput";
class Logger {
    private static level: LogLevel = LogLevel.Verbose;
    private static loggerName: string = "Logger";
    private static logText: string = "";

    static setLevel(level: LogLevel) {
      this.level = level;
    }
    static setLoggerName(loggerName: string) {
        this.loggerName = loggerName;
    }
    private static setLogDateTimeInMessage(){
        const dateTime: string = getDateTime();
        this.logText = this.logText + `[${dateTime}]`;
    }
    private static setLoggerNameInMessage(){
        this.logText = this.logText + ` [${this.loggerName}]`;
    }
    private static setLogLevelInMessage(inputLevel: string){
        this.logText = this.logText + ` [${inputLevel}]`;
    }
    private static setLogMessage(inputMessage: string){
        this.logText = this.logText + " " + inputMessage;
    }
    private static buildLogMessage(inputLevel: string, inputMessage: string){
        this.setLogDateTimeInMessage();
        this.setLoggerNameInMessage();
        this.setLogLevelInMessage(inputLevel);
        this.setLogMessage(inputMessage);
    }
    static verbose(message: string) {
        if (this.level <= LogLevel.Verbose) {
            this.buildLogMessage("Verbose", message);
            consoleOutput(this.logText, "white");
            this.logText = "";
        }
    }
    static info(message: string) {
        if (this.level <= LogLevel.Info) {
            this.buildLogMessage("Info", message);
            consoleOutput(this.logText, "blue");
            this.logText = "";
        }
    }
    static warn(message: string) {
        if (this.level <= LogLevel.Warning) {
            this.buildLogMessage("Warning", message);
            consoleOutput(this.logText, "yellow");
            this.logText = "";
        }
    }
    static error(message: string) {
        if (this.level <= LogLevel.Error) {
            this.buildLogMessage("Error", message);
            consoleOutput(this.logText, "red");
            this.logText = "";
        }
    }

}
export {LogLevel, Logger};
  

  