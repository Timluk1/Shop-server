import { Controller, Get, Param } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { GetProductByIdDto } from "./dto/products.dto";

@Controller("products")
export class ProductsController {
    constructor(private readonly productsSerivce: ProductsService) {}
    @Get()
    async findAll() {
        const data = await this.productsSerivce.getAllProducts();
        return data;
    }

    @Get(":id")
    async getById(@Param() params: GetProductByIdDto) {
        const data = await this.productsSerivce.getProductById(params.id);
        return data;
    }
}
