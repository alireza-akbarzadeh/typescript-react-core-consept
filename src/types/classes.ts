// @Creating Classes in TypeScript

class Person {
    name: string;
    instantiatedAt = new Date();
    age: number;

    constructor(name: string, age: number, instantiatedAt: string) {
        this.name = name
        this.age = age;
        this.instantiatedAt = new Date();
    }
}

const personInstance = new Person("Alireza", 27, "1995");
// @Adding Class Properties

// @Class Inheritance in TypeScript
interface Logger {
    debug(message: string, metadata?: Record<string, unknown>): void;

    info(message: string, metadata?: Record<string, unknown>): void;

    warning(message: string, metadata?: Record<string, unknown>): void;

    error(message: string, metadata?: Record<string, unknown>): void;
}

interface Clearable {
    clear(): void
}

class ConsoleLogger implements Logger, Clearable {
    clear() {
        console.clear()
    }

    debug(message: string, metadata?: Record<string, unknown>) {
        console.info(`[DEBUG] ${message}`, metadata)
    }

    info(message: string, metadata?: Record<string, unknown>) {
        console.info(message, metadata)
    }

    warning(message: string, metadata?: Record<string, unknown>) {
        console.warn(message, metadata)
    }

    error(message: string, metadata?: Record<string, unknown>) {
        console.error(message, metadata)
    }
}

// @Building on Abstract Classes
declare class Buffer {
    from(array: any[]): Buffer;

    copy(target: Buffer, offset?: number): void;
}

abstract class Stream {

    abstract read(count: number): Buffer;

    abstract write(data: Buffer): void;

    copy(count: number, targetBuffer: Buffer, targetBufferOffset: number) {
        const data = this.read(count);
        data.copy(targetBuffer, targetBufferOffset);
    }
}

class FileStream extends Stream {
    read(count: number): Buffer {
        return new Buffer();
    }

    write(data: Buffer) {
        // implementation here
    }
}

const fileStream = new FileStream();

// @Class Members Visibility
// ** public
class Person2 {
    constructor(
        public name: string,
        public age: number
    ) {
    }

    public getBirthYear() {
        return new Date().getFullYear() - this.age;
    }
}

// You can then use the properties and methods in the global space, outside the class instance:
const jon = new Person2("Jon", 35)
jon.getBirthYear();

// ** protected
class Employee {
    constructor(
        protected identifier: string
    ) {
    }
}

class FinanceEmployee extends Employee {
    getFinanceIdentifier() {
        return `fin-${this.identifier}`;
    }
}

const financeEmployee = new FinanceEmployee('abc-12345');
console.log(financeEmployee.getFinanceIdentifier())

// @private
class Employee2 {
    constructor(
        private identifier: string
    ) {
    }
}

class FinanceEmployee2 extends Employee {
    getFinanceIdentifier() {
        return `fin-${this.identifier}`;
    }
}

// @Using Classes as Types
class Employee4 {
    constructor(
        public identifier: string,
        public name: string
    ) {
    }
}

function printEmployeeIdentifier(employee: Employee4) {
    console.log(employee.name);
}
export {}