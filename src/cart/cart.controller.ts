import { Controller, Post, Delete, Get, Put, Req } from "@nestjs/common";
import { Request } from "express";
import { Auth } from "src/auth/decorators/auth.decorator";

@Controller("cart")
export class CartController {
    @Auth()
    @Post()
    async addProductToCart(@Req() req: Request) {
        const user = req["user"];
    }
    
    @Auth()
    @Delete()
    async deleteFromCart() { }

    @Auth()
    @Get()
    async getCart() { }

    @Auth()
    @Put()
    async updateCart() { }
}

