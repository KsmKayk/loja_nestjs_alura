import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailEhUnico } from 'src/validations/email-eh-unico.validator';

export class AtualizaUsuario {
  @IsNotEmpty({ message: 'O Nome não pode ser vazio.' })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: 'O Email informado não é válido' })
  @IsOptional()
  @EmailEhUnico({ message: 'O Email informado já está em uso' })
  email: string;

  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  @IsOptional()
  senha: string;
}
