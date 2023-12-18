import { Body, Get, Controller, Post } from '@nestjs/common';
import { UsuarioRepository } from '../repositories/usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Get()
  async listaUsuarios() {
    return this.usuarioRepository.listar();
  }

  @Post()
  async criaUsuario(@Body() dadosDoUsuario) {
    this.usuarioRepository.salvar(dadosDoUsuario);
    return { message: 'Usuário criado com sucesso!', dadosDoUsuario };
  }
}