export class Logger {
      private static instance: Logger;
      private messsages: string[] = [];
      static getObject(): Logger {
            if (!Logger.instance) {
                  Logger.instance = new Logger();
                  return Logger.instance;
            }
            return Logger.instance;
      }
      log(message: string): void {
            console.log(message);
            this.messsages.push(message);
      }

      getLogMessages(): string[] {
            return this.messsages;
      }
}
