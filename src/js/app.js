/* eslint-disable no-console */
// TODO: write code here
import {
  Character, Bowman, Swordsman, Magician, Undead, Zombie, Daemon,
} from './Character';

console.log('app.js bundled');

const obj = new Character({
  name: 'Персонаж',
  health: 100,
});
console.table(obj);

const obj1 = new Bowman({ name: 'Лучник', health: 10, level: 80 });
obj1.levelUp();
console.table(obj1);

obj1.powerMode = true;
console.table(obj1);

for (let i = 1; i <= 3; i++) {
  obj1.doAttack();
  console.table(obj1);
}


// console.table(new Swordsman({ name: 'Мечник', health: 100, level: 80 }));

// console.table(new Magician({ name: 'Маг', health: 100, level: 80 }));

// console.table(new Undead({ name: 'Маклауд', health: 100, level: 80 }));

// console.table(new Zombie({ name: 'Зомби', health: 100, level: 80 }));

// console.table(new Daemon({ name: 'Демон', health: 100, level: 80 }));
