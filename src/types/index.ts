// types
// @string

const language: string = 'TypeScript';
const message: string = `I'm programming in ${language}!`;
// @boolean
const hasError: boolean = true;
const isValid: boolean = false;
// @number
const pi: number = 3.14159;
const year: number = 2021;
// @bigint
const bigNumber: bigint = 9007199254740993n;
// @symbol
const mySymbol: symbol = Symbol("unique-symbol-value");
// @Arrays
const primeNumber: number[] = [2, 3, 5, 7, 11]

const primeNumbers2: Array<number> = [1, 2, 3, 4]
const myArray: number[] = [];
myArray.push(5)
// Tuples
const position: [number, number] = [1, 2];
const position2: [number, number, number] = [1, 2, 3];

// @any
let thisCanBeAnything: any = 12345;

thisCanBeAnything = "I can be anything - Look, I'm a string now";

thisCanBeAnything = ["Now I'm an array - This is almost like pure JavaScript!"];
// @unknown
let code: unknown;
code = 1;
code = [];
code = {};
code = "";
code = false;
const isCodeGreaterThan100 = code > 100;
// To understand the differences between the unknown and any types, you can think of unknown as
// “I do not know the type of that value” and any as “I do not care what type this value holds”.
// @void
function doSomething() {
};
const resultOfVoidFunction: void = doSomething();
// @ null and undefined
const someNullField: null = null;
const someUndefinedField: undefined = undefined;

// @ never
const year2: number = 2031
if (typeof year2 === "number") {
    console.log(year2)
}
// @object
// The object type represents any type that is not a primitive
// type. This means that it is not one of the following types:
const programmingLanguage: object = {
    name: "TypeScript"
};
// @Creating Custom Types
type Programmer = {
    //The full name of the Programmer
    name: string;
    //  This Programmer is known for what?
    KnownFor: string[];
}
// @Nested Custom Types
type Person = {
    name: string;
};

type Company = {
    name: string;
    manager: Person;
};
const ada: Programmer = {
    name: "Ada Lovelace",
    KnownFor: ['Mathematics', 'Computing', 'First Programmer']
}

const manager: Person = {
    name: 'John Doe',
}

const company: Company = {
    name: 'ACME',
    manager
}
// @Optional Properties
type developer = {
    name: string
    KnowFor?: string[]
}
const ali: developer = {
    name: "Alireza"
    // second value will be optional
}
// @ Indexable  Types
type Data = {
    status: boolean,
    [key: string]: any,
}
const somData: Data = {
    status: true,
    someBooleanKey: true,
    someStringKey: "text goes here",
    someNumber: 27,
    /// ... and more
}
// @Creating Arrays with Number of Elements or More
type MergeStaringArray = [string, string, ...string[]]
const invalidArray: MergeStaringArray = ["some-string", "alireza", "saeed", "mehdi"]
type manyStaring = [...string[]]
const chekThisStaring: manyStaring = ["some-string", "alireza", "saeed", "mehdi",]
// if you pass one prams you get this  Type '[string]' is not assignable to type 'MergeStaringArray'.   Source has 1 element(s) but target requires 2.

// @Composing Types
type productCode = string | number;
const productCodeA: productCode = "this-works";
const productB: productCode = 1024;

// @Intersections
type StatusResponse = {
    status: number;
    isValid: boolean;
};

type User = {
    name: string;
};

type GetUserResponse = {
    user: User;
};
type ApiGetUserResponse = StatusResponse & GetUserResponse;
let response: ApiGetUserResponse = {
    status: 200,
    isValid: true,
    user: {
        name: "Sammy"
    }
}
// @Using Template Strings Types
type StringThatStartsWithGet = `get${string}`
const myString: StringThatStartsWithGet = "getAbc"
type StringThatStartsWithGet2 = `get${string}`;
// const invalidStringValue: StringThatStartsWithGet2 = 'something';
// this will cause an error something"' is not assignable to type '`get${string}`'.


// @Using Type Assertions
const valueA: any = "something";
const valueB = valueA as string;
// @Utility Types
type Data2 = {
    [key: string]: any;
};
type Data3 = Record<string, any>;

type UserRow = {
    id: number;
    name: string;
    email: string;
    addressId: string;
};
type UserRowWithoutAddressId = Omit<UserRow, "id" | "addressId">
const test: UserRowWithoutAddressId = {
    name: "test",
    email: "0062CC",
}
type UserRowWithEmailOnly = Pick<UserRow, 'email'>;
const test2: UserRowWithEmailOnly = {
    email: "devtools@gmail.ocm"
}
type optional = Partial<UserRow>;
const test5: optional = {
    // things are optional
}
export {message}
