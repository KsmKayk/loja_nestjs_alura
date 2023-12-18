import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  ValidateNested,
  IsNumber,
  IsDateString,
} from 'class-validator';

export class CaracteristicaProdutoDTO {
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio.' })
  nome: string;
  @IsNotEmpty({ message: 'O campo descricao  não pode ser vazio.' })
  descricao: string;
}

export class ImagemProdutoDTO {
  @IsNotEmpty({ message: 'O campo url não pode ser vazio.' })
  url: string;
  @IsNotEmpty({ message: 'O campo descricao não pode ser vazio.' })
  descricao: string;
}

export class CriaProdutoDTO {
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio.' })
  nome: string;

  @IsNumber(undefined, { message: 'O campo valor deve ser um número' })
  valor: number;

  @IsNumber(undefined, { message: 'O campo quantidade deve ser um número' })
  quantidade: number;

  @IsNotEmpty({ message: 'O campo descricao não pode ser vazio.' })
  descricao: string;

  @ValidateNested()
  @IsArray()
  @Type(() => CaracteristicaProdutoDTO)
  caracteristicas: CaracteristicaProdutoDTO[];

  @ValidateNested()
  @IsArray()
  @Type(() => ImagemProdutoDTO)
  imagens: ImagemProdutoDTO[];

  @IsNotEmpty({ message: 'O campo categoria não pode ser vazio.' })
  categoria: string;

  @IsDateString(undefined, {
    message: 'O campo dataCriacao deve ser uma data válida',
  })
  dataCriacao: Date;

  @IsDateString(undefined, {
    message: 'o campo dataAtualizacao deve ser uma data válida',
  })
  dataAtualizacao: Date;
}
