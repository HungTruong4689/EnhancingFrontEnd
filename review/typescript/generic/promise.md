# Promise Example in TypeScript

## Basic Promise Example

Here is a simple example of using a Promise in TypeScript:

```typescript
const myPromise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 2000);
});

myPromise.then((message: string) => {
    console.log(message);
}).catch((error: string) => {
    console.error(error);
});
```

## Using Promises with Async/Await

You can also use the `async` and `await` keywords to work with Promises in a more synchronous-like manner:

```typescript
const myAsyncFunction = async (): Promise<void> => {
    try {
        const message: string = await myPromise;
        console.log(message);
    } catch (error) {
        console.error(error);
    }
};

myAsyncFunction();
```

## Generic Promise Example

TypeScript allows you to create generic Promises. Here is an example:

```typescript
const fetchData = <T>(url: string): Promise<T> => {
    return fetch(url)
        .then(response => response.json())
        .then(data => data as T);
};

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

fetchData<User>('https://jsonplaceholder.typicode.com/users/1')
    .then(user => {
        console.log(user);
    })
    .catch(error => {
        console.error(error);
    });
```

This example demonstrates how to fetch data from an API and type the response using a generic Promise.