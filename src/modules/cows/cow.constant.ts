export enum Location {
    Dhaka = "Dhaka",
    Chittagong = "Chittagong",
    Barishal = "Barishal",
    Rajshahi = "Rajshahi",
    Sylhet = "Sylhet",
    Comilla = "Comilla",
    Rangpur = "Rangpur",
    Mymensingh = "Mymensingh",
}

export enum Breed {
    Brahman = "Brahman",
    Nellore = "Nellore",
    Sahiwal = "Sahiwal",
    Gir = "Gir",
    Indigenous = "Indigenous",
    Tharparkar = "Tharparkar",
    Kankrej = "Kankrej",
}

export enum Level {
    ForSale = "for sale",
    SoldOut = "sold out",
}

export enum Category {
    Dairy = "Dairy",
    Beef = "Beef",
    DualPurpose = "Dual Purpose",
}

export const cowFilterableFields = [
    'searchTerm',
    'location',
    'breed',
    'category',
    'level',
    'price',
    'weight',
    'age',
    'seller',
]
export const cowSearchableFields = [
    'name',
    'age',
    'price',
    'weight',
    'location',
    'level',
    'breed',
    'category',
    'seller',
]