import {message} from "./index";

interface Clearable {
    clear: () => void;
}

interface Logger extends Clearable {
    log: (message: string) => void;
}

const logger = {
    log: (message) => console.log(message)
}

interface StringList {
    push: (value: string) => void;
    get: () => string[];
}

interface StringList extends Clearable {
    push: (value: string) => void;
    get: () => string[];
}

interface DataRecord {
    [key: string]: string;
}

const data: DataRecord = {
    fieldA: "valueA",
    fieldB: "valueB",
    fieldC: "valueC",
    // ...
};
// Differences Between Types and Interfaces
type Clearable2 = {
    clear: () => void;
}

type Logger3 = Clearable & {
    log: (message: string) => void;
}
// Union types.
//     Mapped types.
//     Alias to primitive types.
// Declaration Merging
interface DatabaseOptions {
    host: string;
    port: number;
    user: string;
    password: string;
}

interface DatabaseOptions {
    dsnUrl: string;
}


export {}