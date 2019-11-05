import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbers = new NumbersCollection([10, 3, -5, 0]);
numbers.sort();
console.log(numbers.data);

const chars = new CharactersCollection("DonWinston");
chars.sort();
console.log(chars.data);

const list = new LinkedList();
list.add(500);
list.add(-10);
list.add(-3);
list.add(4);

list.sort();
list.print();
