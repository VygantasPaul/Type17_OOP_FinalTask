import { Animal } from "../Animal";
import { SleepAndWalk } from "../AnimalGroups/SleepAndWalk";

export class Zebra extends Animal implements SleepAndWalk {
      private max_speed: number;
      origin: string;

      constructor(
            name: string,
            age: number,
            max_speed: number,
            origin: string,
      ) {
            super(name, age);
            this.max_speed = max_speed;
            this.origin = origin;
      }

      makeSound(): void {
            console.log(`Zebra which name is ${this.name} is made sound`);
      }

      walk(): void {
            console.log(
                  `Zebra which name is ${this.name} is walking max speed ${this.max_speed} km/h`,
            );
      }
      setMaxSpeed(newSpeed: number): void {
            this.max_speed = newSpeed;
            console.log(`Zebra changed speed to ${newSpeed} km/h`);
      }
      setOrigin(neworigin: string): void {
            this.origin = neworigin;
            console.log(`Zebra origin ${neworigin}`);
      }
      sleep(): void {
            console.log(`Zebra which name is ${this.name} is sleep`);
      }
}
