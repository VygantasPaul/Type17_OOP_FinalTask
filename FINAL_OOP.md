Task: Create a Zoo System
Requirements:

1. Animal
   all animals have:

- name;
- age;

all animals can:

- makeSound;

//////////////////////////////////

2. One group of animals can:

- Sleep and walk;

  Other group of animals can:

- Jump and run;

  Third group of animals can:

- Swim and hunt;

///////////////////////////////////

3. Animals exists in zoo: Zebra, Tiger, Elephant;

- Zebra additional info: max speed and origin;
- Elephant additional info: weight;
- Tiger has to have a status if he was outside from the cage in the past 8h;

4. Zookeeper should be able to feed the animals. There should be a log recording which animal was fed and at what time.

5. If you have some time left: Instead of using simple console logs, create a singleton logger that accepts a logger class instance and prints messages through it. Each message should be saved into an array to simulate a database.
