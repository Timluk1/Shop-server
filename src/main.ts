import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";

async function bootstrap() {
    try {
        const port = process.env.PORT || 3000;
        const app = await NestFactory.create(AppModule);
        // Установка глобального префикса
        app.setGlobalPrefix("api");

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
