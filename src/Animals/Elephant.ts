import { Animal } from "../Animal";
import { SwimAndHunt } from "../AnimalGroups/SwimAndHunt";
import { Logger } from "../Logger";
const logger = Logger.getObject();

export class Elephant extends Animal implements SwimAndHunt {
      weight: number;
      constructor(name: string, age: number, weight: number) {
            super(name, age);
            this.weight = weight;
      }
      swim(): void {
            logger.log(`Elephant called ${this.name} elephant can swim `);
      }
      hunt(): void {
            logger.log(`Elephant called ${this.name} can hunt.`);
      }
      makeSound(): void {
            logger.log(`Elephant called ${this.name} can make sound.`);
      }
      setWeight(newWeight: number): void {
            this.weight = newWeight;
            logger.log(`Elephant called ${this.name} weight ${newWeight}.`);
      }
}
