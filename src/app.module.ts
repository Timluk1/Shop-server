import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { ProductsModule } from "./products/products.module";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./user/user.module";

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, "..", "images"),
            serveRoot: "/api/images",
        }),
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        AuthModule,
        ProductsModule,
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
