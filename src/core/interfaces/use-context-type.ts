

export type TContextType<T> = [
    T,
    (value: T) => void
]