import { Animal } from "../Animal";
import { SwimAndHunt } from "../AnimalGroups/SwimAndHunt";

export class Elephant extends Animal implements SwimAndHunt {
      weight: number;
      constructor(name: string, age: number, weight: number) {
            super(name, age);
            this.weight = weight;
      }
      swim(): void {
            console.log(`Elephant called ${this.name} elephant can swim `);
      }
      hunt(): void {
            console.log(`Elephant called ${this.name} can hunt.`);
      }
      makeSound(): void {
            console.log(`Elephant called ${this.name} can make sound.`);
      }
      setWeight(newWeight: number): void {
            this.weight = newWeight;
            console.log(`Elephant called ${this.name} weight ${newWeight}.`);
      }
}
