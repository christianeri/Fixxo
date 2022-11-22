export interface IProduct {
     articleNumber: string
     name: string
     description?: string
     category: string
     price: number
     rating: number
     imageName: string
}

     // export type TodoContextType = {
     //      todos: ITodo[];
     //      saveTodo: (todo: ITodo) => void;
     //      updateTodo: (id: number) => void;
     // };

   export type ProductContextType = {
     
     url: string

     product: IProduct

     featuredProducts: IProduct[]
     showcaseProducts: IProduct[]
     toplistProducts: IProduct[]
     productCollection: IProduct[]

     getProduct: (articleNumber:string) => void
     getFeaturedProducts: () => void
     getShowcaseProducts: () => void
     getToplistProducts: () => void
}