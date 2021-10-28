import { Company } from "./interfaces/Company";
import User from "./interfaces/User";
import Map from "./interfaces/Map";

const user1 = new User();
const company1 = new Company();

const map = new Map("#map");

map.addMarker(user1);
map.addMarker(company1);
