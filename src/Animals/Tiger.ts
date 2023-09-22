import { Animal } from "../Animal";
import { SecondGroup } from "../AnimalGroups/SecondGroup";
export class Tiger extends Animal implements SecondGroup {
      outsideFromCage: boolean;

      constructor(name: string, age: number, outsideFromCage: boolean) {
            super(name, age);
            this.outsideFromCage = outsideFromCage;
      }

      run(): void {
            console.log(`Tiger which name is ${this.name} can run `);
      }

      jump(): void {
            console.log(`Tiger which name is ${this.name} can jump.`);
      }

      makeSound(): void {
            console.log(`Tiger which name is ${this.name} can makes sound.`);
      }
      setGoGoutsideCage(goOutsideFromCage: boolean): void {
            this.outsideFromCage = goOutsideFromCage;
            if (goOutsideFromCage) {
                  console.log(
                        `Tiger which name is ${this.name} is going outside the cage.`,
                  );
            } else {
                  console.log(
                        `Tiger which name is ${this.name} is staying inside the cage.`,
                  );
            }
      }
}
