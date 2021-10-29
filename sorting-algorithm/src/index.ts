import { CharactersColletion } from "./interfaces/CharactersCollection";
import { NumbersCollection } from "./interfaces/NumbersColletion";
import { LinkedList } from "./interfaces/LinkedList";

const charactersCollection = new CharactersColletion("fari");
console.log(charactersCollection);

charactersCollection.sort();

console.log(charactersCollection);

const numbersCollection = new NumbersCollection([1, 5, -5]);

numbersCollection.sort();

console.log(numbersCollection);

const linkedList = new LinkedList();
linkedList.add(14);
linkedList.add(5);
linkedList.add(8);
linkedList.add(-1);
linkedList.add(-2);

linkedList.sort();

console.log(linkedList);
