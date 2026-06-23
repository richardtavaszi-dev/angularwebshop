import { Guid } from "guid-typescript";



export class Product {
    id: string = Guid.create().toString()
    name: string = ""
    category: string = ""
    price: number | null = null
    description: string = ""
    quantity: number | null = null
    availability: boolean = true
}
