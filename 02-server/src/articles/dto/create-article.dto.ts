import { IsString, IsOptional, IsNotEmpty, IsArray } from "class-validator";

export class CreateArticleDto { 

    @IsString()
    title: string;

    @IsString()
    content: string;

    @IsOptional()
    @IsArray()
    tags?: string[];

    @IsString()
    @IsOptional()
    coverImage: string;
}

