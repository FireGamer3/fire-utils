import { Result } from './types';

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
