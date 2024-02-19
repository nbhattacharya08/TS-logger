import LogLevel  from "../levels";
import getDateTime from "../dateTimeModule/getDateTime";
class CreateLogMessage {

    private level: LogLevel = LogLevel.Verbose;
    private loggerName: string = "Logger";
    private logText: string = "";

    //private members
    private setLogDateTimeInMessage(){
        const dateTime: string = getDateTime();
        this.logText = this.logText + `[${dateTime}]`;
    }

    private setLoggerNameInMessage(){
        this.logText = this.logText + ` [${this.loggerName}]`;
    }

    private setLogLevelInMessage(inputLevel: string){
        this.logText = this.logText + ` [${inputLevel}]`;
    }

    private setLogMessage(inputMessage: string){
        this.logText = this.logText + " " + inputMessage;
    }
    //public members
    public setLoggerName(loggerName: string){
        this.loggerName = loggerName;
    }

    public getLoggerName(){
        return this.loggerName;
    }

    public setLevel(level: LogLevel){
        this.level = level;
    }

    public getLevel(){
        return this.level;
    }

    public buildLogMessage(inputLevel: string, inputMessage: string){
        this.setLogDateTimeInMessage();
        this.setLoggerNameInMessage();
        this.setLogLevelInMessage(inputLevel);
        this.setLogMessage(inputMessage);
        const finalLogMessage: string = this.logText;
        this.logText = "";
        return finalLogMessage;
    }

}

export default CreateLogMessage;