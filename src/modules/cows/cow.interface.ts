import { Types } from "mongoose";
import { Breed, Category, Level, Location } from "./cow.constant";

export interface ICow {
    name: string,
    age: number,
    price: number,
    weight: number,
    location: Location,
    level: Level,
    breed: Breed,
    category: Category,
    seller: Types.ObjectId;
}

export interface TCowFilters {
    searchTerm?: string
    email?: string
    contactNo?: string
    emergencyContactNo?: string
}