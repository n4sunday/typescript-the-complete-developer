import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
const numberCollection = new NumbersCollection([10, 3, 8, -5, 0, -99]);
numberCollection.sort();
console.log(numberCollection.data);

const charactersCollection = new CharactersCollection("zYBxdagO");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(50);
linkedList.add(-100);
linkedList.add(-5);
linkedList.add(9);

linkedList.sort();
linkedList.print();
