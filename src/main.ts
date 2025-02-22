import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { INestApplication, Logger, ValidationPipe } from "@nestjs/common";
import * as cookieParser from "cookie-parser";

const start = (app: INestApplication) => {
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix("api");
    app.use(cookieParser());
    app.enableCors({
        origin: "http://localhost:3000",
        credentials: true, 
    });
}

async function bootstrap() {
    try {
        const port = process.env.PORT || 3000;
        const app = await NestFactory.create(AppModule);
        start(app);
        await app.listen(port);
        Logger.log(
            `Server started running on http://localhost:${port}/api`,
            "Bootstrap",
        );
    } catch (error) {
        Logger.error(`Error: ${error}`);
    }
}
bootstrap();
