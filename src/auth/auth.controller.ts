import { Post, Controller, Body, Get, Res, Req } from "@nestjs/common";
import { Response, Request } from "express";
import { AuthDto } from "./dto/auth.dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("registration")
    async registration(@Res() res: Response, @Body() dto: AuthDto) {
        const { accessToken, refreshToken } =
            await this.authService.registration(dto);
        res.cookie("refreshToken", refreshToken);
        return res.json({
            accessToken,
        });
    }

    @Post("login")
    async login(@Body() dto: AuthDto) {
        return this.authService.login(dto);
    }

    @Get("update-access")
    async updateAccess(@Req() req: Request, @Res() res: Response) {
        const { refreshToken } = req.cookies;
        const tokens = await this.authService.updateAccess(refreshToken);
        res.cookie("refreshToken", refreshToken);
        return res.json({
            accessToken: tokens.accessToken,
        });
    }
}
