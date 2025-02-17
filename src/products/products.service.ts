import { Injectable } from "@nestjs/common";
import { Product } from "@prisma/client";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class ProductsService {
    constructor(private readonly prisma: PrismaService) {}

    async getProducts(): Promise<Product[]> {
        return await this.prisma.product.findMany();
    }
}
