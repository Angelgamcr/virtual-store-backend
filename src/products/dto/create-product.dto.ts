import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';
import { types } from 'util';

export class CreateProductDto {
  @ApiProperty({
    description: 'Product title (unique)',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  @MinLength(1)
  title: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  slug?: string;

  @ApiProperty()
  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @ApiProperty()
  @IsInt()
  @IsPositive()
  @IsOptional()
  iva?: number;

  @ApiProperty() //TODO: Debe incorporarse en una tabla aparte.
  @IsIn(['Jugos Naturales', 'Queso'])
  category: string;

  // TODO: Diferentes sabores
  // TODO: Como asimilo imagen
  //  @ApiProperty()
  //   @IsString({ each: true })
  //   @IsArray()
  //   @IsOptional()
  //   types: string[];

  @ApiProperty()
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  images?: string[];

  @ApiProperty()
  @IsBoolean()
  available: boolean;

  //   TODO: LO OBTENEMOS DEL TOKEN Y LA FECHA DEL SERVIDOR
  //   @ApiProperty()
  //   @IsInt()
  //   createdBy: number;
  //
  //   @ApiProperty()
  //   @IsInt()
  //   @IsOptional
  //   deletedBy?: number;
}
