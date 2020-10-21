

export interface IHeadLine {
    author: string | null,
    title: string | null,
    description: string | null,
    url: string | null,
    urlToImage: string | null,
    publishedAt: string | null,
    content: string | null,
    liked?: boolean | null,
    source: {
        id: number | string | null,
        name: string | null
    },
}