import { IHeadLine } from "./headline";

export interface INewsPayload {
    results: {
        status: string,
        totalResults: number,
        articles: IHeadLine[]
    }
}