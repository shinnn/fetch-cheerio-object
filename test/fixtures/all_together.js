class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(`my name is: ${this.name}`);
  }

  sayNameLater() {
    setTimeout(() => {
      console.log(this.name)
    }, 100);
  }

  drink(numShots, withChaser=false) {

    this.orderShots(numShots, 'vodka', 'redbull');

    if (withChaser) {
      var chasers = [1, 2];
      this.orderChasers(...chasers);
    }
  }

  *chug(glassSize, swallowSize) {
    swallowSize = swallowSize || 1;

    for (var amountChugged = 0; amountChugged < glassSize; amountChugged += swallowSize) {
      yield amountChugged;
    }
  }

  orderShots(numShots, ...ingredients) {
    console.log(`ordering ${numShots} with: ${ingredients.join(',')}`);
  }

  orderChasers(numCokes, numSprites) {
    console.log(`ordering ${numCokes} cokes and ${numSprites} as chasers`);
  }
}

var p = new Person('jeff');

p.sayName();
p.sayNameLater();
p.drink(1);
p.drink(30, true);

var chugger = p.chug(20, 3)

while (!(info = chugger.next()).done) {
  console.log(`chugged ${info.value} ounces`);
}

