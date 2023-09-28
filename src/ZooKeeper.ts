import { Animal } from "./Animal";
import { Logger } from "./Logger";
const logger = Logger.getObject();
export class ZooKeeper {
      animals: Animal[] = [];
      name: string;
      surname: string;
      constructor(name: string, surname: string) {
            this.name = name;
            this.surname = surname;
      }
      feedAnimal(animals: Animal): void {
            logger.log(
                  `Zookeeper - ${this.name} ${this.surname} is feeding ${
                        animals.name
                  } at ${new Date().toLocaleTimeString()}`,
            );
      }
}
