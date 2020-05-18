import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numberCollection = new NumbersCollection([10, 3, 8, -5, 0, -99]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);
