import { Zebra } from "./Animals/Zebra";
import { Elephant } from "./Animals/Elephant";
import { Tiger } from "./Animals/Tiger";
import { ZooKeeper } from "./ZooKeeper";
const zebra = new Zebra("Zebriukas dryzius", 5, 60, "Africa");
const elephant = new Elephant("Dumbo", 10, 5000);
const tiger = new Tiger("Symba", 7, true);

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
