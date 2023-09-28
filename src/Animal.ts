export type TypeAnimal = {
      name: string;
      age: number;
};

export abstract class Animal {
      name: string;
      age: number;

      constructor(animalData: TypeAnimal) {
            this.name = animalData.name;
            this.age = animalData.age;
      }

      abstract makeSound(): void;
}
