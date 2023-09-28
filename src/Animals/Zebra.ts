import { Animal, TypeAnimal } from "../Animal";
import { SleepAndWalk } from "../AnimalGroups/SleepAndWalk";
import { Logger } from "../Logger";

const logger = Logger.getObject();

export class Zebra extends Animal implements SleepAndWalk {
      max_speed: number;
      origin: string;
      constructor(animalData: TypeAnimal, max_speed: number, origin: string) {
            super(animalData);
            this.max_speed = max_speed;
            this.origin = origin;
      }

      makeSound(): void {
            logger.log(`Zebra which name is ${this.name} is making a sound`);
      }

      walk(): void {
            logger.log(
                  `Zebra which name is ${this.name} is walking at max speed ${this.max_speed} km/h`,
            );
      }

      setMaxSpeed(newSpeed: number): void {
            this.max_speed = newSpeed;
            logger.log(`Zebra changed speed to ${newSpeed} km/h`);
      }

      setOrigin(neworigin: string): void {
            this.origin = neworigin;
            logger.log(`Zebra origin ${neworigin}`);
      }

      sleep(): void {
            logger.log(`Zebra which name is ${this.name} is sleeping`);
      }
}
