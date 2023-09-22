import { Animal } from "./Animal";

export class ZooKeeper {
      animals: Animal[] = [];
      name: string;
      surname: string;
      constructor(name: string, surname: string) {
            this.name = name;
            this.surname = surname;
      }
      feedAnimal(animals: Animal): void {
            console.log(
                  `Zookeeper - ${this.name} ${this.surname} is feeding ${
                        animals.name
                  } at ${new Date().toLocaleTimeString()}`,
            );
      }
}
