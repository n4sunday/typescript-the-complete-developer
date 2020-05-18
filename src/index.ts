import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";

const user = new User();
// console.log(user);

const company = new Company();
// console.log(company);

const customMap = new CustomMap("map");

customMap.addUserMarker(user);
customMap.addCompanyMarker(company);
