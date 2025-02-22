import { IsString, Matches } from "class-validator";

class GetProductByIdDto {
    @IsString()
    @Matches(/^[a-zA-Z0-9]{25}$/, { message: 'Invalid CUID format' })
    id: string;
}

export { GetProductByIdDto };