
type allTypes = string | number | boolean ;

function formatValue(value: allTypes ): allTypes {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return !value;
    }
}


console.log(formatValue('hello')); 
console.log(formatValue(5));        
console.log(formatValue(true));     






type stringOrArray = string | any[];

function getLength(value: stringOrArray): number {
    
    if (typeof value === "string") {
        return value.length;
    }   
    if (Array.isArray(value)) {
        return value.length;
    }

    return 0;
}


console.log(getLength("typescript"));  
console.log(getLength([10, 20, 30, 40])); 










class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return "Name: " + this.name + ", Age: " + this.age;
    }
}


const person1 = new Person("John Doe", 30);
console.log(person1.getDetails());

const person2 = new Person("Alice", 25);
console.log(person2.getDetails());








type Item = {
    title: string,
    rating: number
};

function filterByRating(items: Item[]): Item[] {
    const result: Item[] = [];

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item && item.rating >= 4) {
            result.push(item);
        }
    }

    return result;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];

console.log(filterByRating(books));













type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
    const activeList: User[] = [];

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user?.isActive === true) {
            activeList.push(user);
        }
    }

    return activeList;
}

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true }
];

console.log(filterActiveUsers(users));









interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): void {
    const availableText = book.isAvailable ? "Yes" : "No";
    console.log(
        "Title: " + book.title +
        ", Author: " + book.author +
        ", Published: " + book.publishedYear +
        ", Available: " + availableText
    );
}


const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true
};

printBookDetails(myBook);











type Values = number | string;


function getUniqueValues(a: Values[], b: Values[]): Values[] {
    const result: (number | string)[] = [];

    for (const val of a) {
        if (val === undefined) continue;
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j] === val) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result.push(val);
        }
    }


    for (const val of b) {
        if (val === undefined) continue;
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j] === val) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result.push(val);
        }
    }

    return result;
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(getUniqueValues(array1, array2)); 












type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number; 
};

function calculateTotalPrice(products: Product[]): number {
    if (products.length === 0) {
        return 0;
    }

    const total = products
        .map((product) => {
            let productTotal = product.price * product.quantity;

            if (product.discount) {
                productTotal = productTotal - (productTotal * product.discount / 100);
            }

            return productTotal;
        })
        .reduce((acc, curr) => acc + curr, 0);

    return total;
}


const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));




