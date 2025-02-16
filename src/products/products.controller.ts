import { Controller, Get } from "@nestjs/common";
import { products } from "./dto/products.dto";
import type { IProduct } from "./dto/products.dto";

@Controller("products")
export class ProductsController {
    @Get()
    findAll(): IProduct[] {
        return products;
    }
}
