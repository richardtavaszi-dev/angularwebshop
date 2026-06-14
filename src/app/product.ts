import { Guid } from "guid-typescript";

export class Product {
    id: string = Guid.create().toString()
    categorie: string = ""
    price: number | null = null
    desctrition: string = ""
    contact: boolean = true
    quantity: number | null = null
}
