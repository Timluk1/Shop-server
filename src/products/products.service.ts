import { Injectable } from "@nestjs/common";
import { Product } from "@prisma/client";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class ProductsService {
    constructor(private readonly prisma: PrismaService) {}

    async getAllProducts(): Promise<Product[]> {
        return await this.prisma.product.findMany();
    }

    async getProductById(id: string): Promise<Product> {
        return await this.prisma.product.findUnique({
            where: { id }
        })
    }
}
