function pickObjectKeys<T, K extends keyof T>(obj: T, keys: K[]) {
    let result = {} as Pick<T, K>
    for (const key of keys) {
        if (key in obj) {
            result[key] = obj[key]
        }
    }
    return result
}

const language = {
    name: "TypeScript",
    age: 8,
    extensions: ['ts', 'tsx']
}

const ageAndExtensions = pickObjectKeys(language, ['age', 'extensions'])

function identify<T>(value: T): T {
    return value;
}

type ProgrammingLanguage = {
    name: string;
};
const result = identify(123)
const result3 = identify<ProgrammingLanguage>({name: "typescript"})

async function fetchApi(path: string) {
    const response = await fetch(`https://example.com/api${path}`)
    return response.json();
}

async function fetchApi3<ResultType>(path: string): Promise<ResultType> {
    const response = await fetch(`https://example.com/api${path}`);
    return response.json();
}

type User = {
    name: string;
}

async function fetchApi4<ResultType>(path: string): Promise<ResultType> {
    const response = await fetch(`https://example.com/api${path}`);
    return response.json();
}


export {}