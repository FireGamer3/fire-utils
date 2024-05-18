# Fire's Utils

A package for myself for my more common things that I don't want to reimplement everywhere

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
    -   [Awaiter](#awaiter)
    -   [Random Number Generator](#random-number-generator)
    -   [Capitalize Words](#capitalize-words)
    -   [Create Pages](#create-pages)
-   [License](#license)

## Installation

To install you can use npm or yarn (or whatever package manager you use):

```bash
npm install fires-utils
# or
yarn add fires-utils
```

## Usage

### Awaiter

The `awaiter` function is used to handle async/await errors gracefully. It wraps a promise and returns an object with either the resolved data or the caught error.

```typescript
import { awaiter } from 'fires-utils';
import { Result } from './types';

async function fetchData(): Promise<Result<MyDataType>> {
    const result = await awaiter(fetch('https://api.example.com/data'));
    if (result.error) {
        console.error('Error fetching data:', result.error);
        return;
    }
    console.log('Fetched data:', result.data);
    return result;
}
```

### Random Number Generator

The `random` function generates a random number between a specified range, inclusive.

```typescript
import { random } from 'fires-utils';

const min = 1;
const max = 10;
const randomNumber = random(min, max);
console.log(`Random number between ${min} and ${max}:`, randomNumber);
```

### Capitalize Words

The `uppercaseWords` function capitalizes the first letter of each word in a string.

```typescript
import { uppercaseWords } from 'fires-utils';

const sentence = 'hello world';
const capitalizedSentence = uppercaseWords(sentence);
console.log('Capitalized sentence:', capitalizedSentence);
```

### Create Pages

The `createPages` function takes an array and divides it into smaller arrays of a specified size.

```typescript
import { createPages } from 'fires-utils';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pageSize = 3;
const pages = createPages(items, pageSize);
console.log('Pages:', pages);
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
