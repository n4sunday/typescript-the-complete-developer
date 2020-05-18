import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numberCollection = new NumbersCollection([10, 3, 8, -5, 0, -99]);
// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(numberCollection.data);

const charactersCollection = new CharactersCollection("zYBxdagO");
const sorterChar = new Sorter(charactersCollection);
sorterChar.sort();
console.log(charactersCollection.data);
