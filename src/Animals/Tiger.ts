import { Animal, TypeAnimal } from "../Animal";
import { JumpAndRun } from "../AnimalGroups/JumpAndRun";
import { Logger } from "../Logger";
const logger = Logger.getObject();
export class Tiger extends Animal implements JumpAndRun {
      outsideFromCage: boolean;

      constructor(animalData: TypeAnimal, outsideFromCage: boolean) {
            super(animalData);
            this.outsideFromCage = outsideFromCage;
      }

      run(): void {
            logger.log(`Tiger which name is ${this.name} can run `);
      }

      jump(): void {
            logger.log(`Tiger which name is ${this.name} can jump.`);
      }

      makeSound(): void {
            logger.log(`Tiger which name is ${this.name} can makes sound.`);
      }
      setGoGoutsideCage(goOutsideFromCage: boolean): void {
            this.outsideFromCage = goOutsideFromCage;
            if (goOutsideFromCage) {
                  logger.log(
                        `Tiger which name is ${this.name} is going outside the cage.`,
                  );
            } else {
                  logger.log(
                        `Tiger which name is ${this.name} is staying inside the cage.`,
                  );
            }
      }
}
