import { Post, Controller, Body } from "@nestjs/common";
import { AuthDto } from "./dto/auth.dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    
    @Post("registration")
    async registration(@Body() dto: AuthDto) {
        return this.authService.registration(dto);
    }

    async login() {}
}
