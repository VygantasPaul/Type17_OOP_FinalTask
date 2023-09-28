import { Zebra } from "./Animals/Zebra";
import { Elephant } from "./Animals/Elephant";
import { Tiger } from "./Animals/Tiger";
import { ZooKeeper } from "./ZooKeeper";
const zebraData = {
      name: "Zebriukas dryzius",
      age: 5,
};
const tigerData = {
      name: "Symba",
      age: 7,
};
const elephantData = {
      name: "Dumbo",
      age: 10,
};
const zebra = new Zebra(zebraData, 60, "Africa");

const elephant = new Elephant(elephantData, 5000);

const tiger = new Tiger(tigerData, false);

const zooKeper = new ZooKeeper("Johm", "Black");

console.groupCollapsed("zooKeper");
zooKeper.feedAnimal(zebra);
zooKeper.feedAnimal(elephant);
zooKeper.feedAnimal(tiger);
console.groupEnd();

console.groupCollapsed("zebra");

zebra.walk();
zebra.makeSound();
zebra.setMaxSpeed(90);
zebra.setOrigin("Zimbabve");
console.groupEnd();

console.groupCollapsed("elephant");
elephant.hunt();
elephant.makeSound();
elephant.swim();
elephant.setWeight(120);
console.groupEnd();

console.groupCollapsed("tiger");
tiger.run();
tiger.makeSound();
tiger.jump();
tiger.setGoGoutsideCage(false);

console.groupEnd();
