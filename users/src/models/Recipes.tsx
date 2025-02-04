export type Recipe = {
    id: number,
    title: string,
    description: string,
    authorId: number,
    ingredients: string[],
    instructions: string,
    likes: number
}
export type RecipeWithOutId = {
    title: string,
    description: string,
    authorId: number,
    ingredients: string[],
    instructions: string,
    likes: number
}