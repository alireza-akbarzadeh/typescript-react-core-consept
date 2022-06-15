import {log} from "util";

function sum(a: number, b: number) {
    return a + b;
}

type User = {
    firstName: string,
    lastName: string,
}

function getUserFullName(user: User, prefix?: string) {
    return `${prefix ?? ""} ${user.firstName} ${user.lastName}`
}

const user: User = {
    firstName: "jon",
    lastName: "Doe"
}
const userFullName = getUserFullName(user)
const result = sum(1, 2)
// @Optional Function Parameters in TypeScript
const mrUserFullName = getUserFullName(user, "Mr")
// @Typed Arrow Function Expressions
const arrowGetUserFullName = (user: User, prefix?: string): string => `${prefix ?? ''}${user.firstName} ${user.lastName}`;
arrowGetUserFullName(user, "mr")
// @Function Types
type PrintUserNameFunction = (user: User, prefix: string) => string;

type EventContext = {
    value: string;
}

function onEvent(eventName: string, eventCallBack: (target: EventContext) => void) {
}

// @Using Typed Asynchronous Functions
async function asyncFunction(para1: number) {
    // ..function implementation ..
}

type Data = {
    id: number;
    firstName: string;
}
const userData: Data[] = [
    {id: 1, firstName: "jane"},
    {id: 2, firstName: "jon"}
]

async function getUserById(userId: number): Promise<Data[] | null> {
    const foundUser = userData.filter((user) => user.id === userId);
    if (!foundUser) {
        return null;
    }
    return foundUser;
}


async function runProgram() {
    const user = await getUserById(1)
}

const s = runProgram()

function rest(...args: number[]) {
    return args.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

const someResult = rest(1, 2, 4, 5)

// @Using Function Overloads
type employee = {
    id: number;
    email: string;
    fullName: string;
    age: number;
}
const em: employee[] = [
    {id: 1, email: "jane_doe@example.com", fullName: "Jane Doe", age: 35},
    {id: 2, email: "jon_do@example.com", fullName: "Jon Doe", age: 35}
];

function getEmployee(idOrEmailOrAge: number | string, fullName?: string): employee | undefined {
    if (typeof idOrEmailOrAge === "string") {
        return em.find(user => user.email === idOrEmailOrAge);
    }

    if (typeof fullName === "string") {
        return em.find(user => user.age === idOrEmailOrAge && user.fullName === fullName);
    } else {
        return em.find(user => user.id === idOrEmailOrAge);
    }
}
/**
 * Get a user by their ID.
 */
const userById = getEmployee(1);
/**
 * Get a user by their email.
 */
const userByEmail = getEmployee("jane_doe@example.com");
/**
 * Get a user by their age and full name.
 */
const userByAgeAndFullName = getEmployee(35, "Jon Doe");

// @User-Defined Type Guards
const isProduction = false

const valuesArray = ['some-string', isProduction && 'production']

function processArray(array: string[]) {
    // do something with array
}
function isString(value: any): value is string {
    return typeof value === "string"
}
processArray(valuesArray.filter(isString))
export {}