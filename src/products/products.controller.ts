import { Controller, Get } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Auth } from "src/auth/decorators/auth.decorator";

@Controller("products")
export class ProductsController {
    constructor(private readonly productsSerivce: ProductsService) {}
    @Auth()
    @Get()
    findAll() {
        return this.productsSerivce.getProducts();
    }
}
