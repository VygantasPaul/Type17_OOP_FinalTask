import { Animal } from "../Animal";
import { ThirdGroup } from "../AnimalGroups/ThirdGroup";

export class Elephant extends Animal implements ThirdGroup {
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
            const newWieght = (this.weight = newWeight);
            console.log(`Elephant called ${this.name} weight ${newWieght}.`);
      }
}
