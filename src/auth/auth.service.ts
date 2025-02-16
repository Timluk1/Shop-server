import { Injectable, ConflictException, InternalServerErrorException, UnauthorizedException, Logger } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import type { AuthDto } from "./dto/auth.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) { }
    
    async registration(authDto: AuthDto) {
        try {
    
            const hasUser = await this.userService.getByEmail(authDto.email);
            if (hasUser) {
                throw new ConflictException("User with this email already exists");
            }
            const user = await this.userService.createUser(authDto);
            return this.generateTokens(user.id);
        } catch (error) {
            throw new InternalServerErrorException("Registration failed");
        }
    }

    async login(authDto: AuthDto) {
        try {
            const user = await this.userService.getByEmail(authDto.email);
            if (!user) {
                throw new UnauthorizedException("Invalid credentials");
            }
            return this.generateTokens(user.id);
        } catch (error) {
            throw new InternalServerErrorException("Login failed");
        }
    }
    
    generateTokens(id: string) { 
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
        } catch (error) {
            throw new InternalServerErrorException("Token generation failed");
        }
    }

    updateToken() {}
}