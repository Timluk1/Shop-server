import {
    Injectable,
    ConflictException,
    InternalServerErrorException,
    UnauthorizedException,
} from "@nestjs/common";
import { UserService } from "src/user/user.service";
import type { AuthDto } from "./dto/auth.dto";
import { JwtService } from "@nestjs/jwt";
import type { IAuth } from "./auth.types";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async registration(authDto: AuthDto): Promise<IAuth> {
        const hasUser = await this.userService.getByEmail(authDto.email);
        if (hasUser) {
            throw new ConflictException("User with this email already exists");
        }
        const user = await this.userService.createUser(authDto);
        return this.generateTokens(user.id);
    }

    async login(authDto: AuthDto): Promise<IAuth> {
        const user = await this.userService.verifyUser(authDto);
        if (!user) {
            throw new UnauthorizedException("Authenfication error");
        }
        return this.generateTokens(user.id);
    }

    async updateAccess(refreshToken: string): Promise<IAuth> {
        try {
            const user = this.jwtService.verify(refreshToken);
            return this.generateTokens(user.id);
        } catch {
            throw new UnauthorizedException("Authenfication error");
        }
    }

    generateTokens(id: string): IAuth {
        try {
            const payload = { id };
            const accessToken = this.jwtService.sign(payload, {
                expiresIn: "24h",
            });
            const refreshToken = this.jwtService.sign(payload, {
                expiresIn: "30d",
            });
            return {
                accessToken,
                refreshToken,
            };
        } catch {
            throw new InternalServerErrorException("Token generation failed");
        }
    }

    updateToken() {}
}
