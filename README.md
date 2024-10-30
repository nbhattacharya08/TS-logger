*********************************************************************************************************
#Welcome to TS-logger - A logger library for Typescript Web Application.
##The Logger can both print your logs in the terminal and save your logs in a .txt file
##Let us see how we can use the logger in our code:

*********************************************************************************************************

To use the logger you can create a Typescript file in the top level of the directory and import the 
following into your code:

```
import { ConsoleLog, FileLog , LogLevel } from './index';
```

Now you can choose to either print in Console or in File 

If you want to print in console, you can need to create an object of the ConsoleLog module:


```
const logger = new ConsoleLog();
```

Now you can get started and start printing in the console:

```
logger.setLoggerName("ConsoleLogger");
logger.setLevel(LogLevel.Warning);
logger.verbose("This is a verbose message");
logger.info("This is an info message");
logger.warn("This is a warning message");
logger.error("This is an error message");
```

If you want to print in a particular .txt file you have to create an object of the FileLog module:

```
const logger = new FileLog();
```

Now you need to specify a path to the file in which you want to print. If you want to print to a
file in the same directory, you only need to specify the name of the file (even if you have not
created the file yet):

```
logger.setFilePath("logs.txt");
```

Now you can use this code to start printing to a file:

```
logger.setLoggerName("FileLogger");
logger.setLevel(LogLevel.Info);
logger.verbose("This is a verbose message");
logger.info("This is an info message");
logger.warn("This is a warning message");
logger.error("This is an error message");
```

Thats it!!! You're good to go now!

A template usage of the library is shown in the driver.ts folder, you can test it or customize it
to your liking or you can create your own driver file and import the library.


*********************************************************************************************************

Description the Desing:

The design of the logger library oriented towards the maintainability and re-usability of code and
towards the addition of newer modules in the future.
For instance since the output Logic was being used so many times in the code, A module was created out
it which can now be re-used as many time as we want. Let's assume that at present we want to print in a 
file or a terminal but if we want to store the logs in a database or in a server then we only need to 
add a new outputModule which contains the logic of sending the logs to the server and storing them in
the server. Then we can just import that logic in our index.ts file and create maybe a "ServerLogger"
class in the index.ts which will use the new output module.

Every Log is created using CreateLogMessage module which helps us add the log message along with some
metadata like the current date and time, the logger name and the log level. Once the message is formatted 
the final formatted message is sent back to the ConsoleLogger or the FileLogger to be printed or saved 
respectively. 

*********************************************************************************************************
