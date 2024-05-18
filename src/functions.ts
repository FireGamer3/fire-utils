import { Result } from './types';

/**
 * Awaiter function to handle async/await errors
 *
 * @template T
 * @param {Promise<T>} promise
 * @return {Promise<Result<T>>}
 */
export const awaiter = async <T>(promise: Promise<T>): Promise<Result<T>> => {
    try {
        const data: T = await promise;
        return {
            data,
            error: null,
        };
    } catch (err) {
        return {
            data: null,
            error: err,
        };
    }
};

/**
 * Function to generate a random number between a range, inclusive
 *
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
export const random = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Function to capitalize the first letter of any word in a string
 *
 * @param {string} str
 * @return {string}
 */
export const uppercaseWords = (str: string): string => {
    return str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
};

/**
 * Given an array, this function will return an array of arrays with the specified size
 *
 * @template T
 * @param {T[]} arr
 * @param {number} size
 * @return {T[][]}
 */
export const createPages = <T>(arr: T[], size: number): T[][] => {
    const pages: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        pages.push(arr.slice(i, i + size));
    }
    return pages;
};
