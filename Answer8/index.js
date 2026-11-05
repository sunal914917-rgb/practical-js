
// Inheritance
class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

let dog = new Dog();
dog.eat();
dog.bark();

// Method Overriding
class Parent {
    show() {
        console.log("Parent Method");
    }
}

class Child extends Parent {
    show() {
        console.log("Child Method");
    }
}

let obj = new Child();
obj.show();

// Composition
const canWalk = {
    walk() {
        console.log("Walking");
    }
};

const canSwim = {
    swim() {
        console.log("Swimming");
    }
};

let person = Object.assign({}, canWalk, canSwim);
person.walk();
person.swim();
