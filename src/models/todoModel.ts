export default interface Todo {
    userId: number | undefined,
    id: number,
    title: string,
    completed: boolean | undefined
}