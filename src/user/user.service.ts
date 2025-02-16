import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { AuthDto } from "src/auth/dto/auth.dto";
import { hash } from "argon2";

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}
    async getById(id: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                id,
            },
        });
        return user;
    }
    async getByEmail(email: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                email,
            },
        });
        return user;
    }
    async createUser(dto: AuthDto) {
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                password: await hash(dto.password),
            },
        });
        return user;
    }
}
