export type MenuItem = {
    id: number
    name: string
    price: number
}

export type orderItem = MenuItem & {
    quantity: number
}