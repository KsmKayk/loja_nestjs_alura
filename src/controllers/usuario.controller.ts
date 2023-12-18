import { Body, Get, Controller, Post } from '@nestjs/common';
import { UsuarioEntity } from '../entities/usuario.entity';
import { UsuarioRepository } from '../repositories/usuario.repository';
import { CriaUsuarioDTO } from '../DTOS/CriaUsuario.dto';
import { v4 as uuid } from 'uuid';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Get()
  async listaUsuarios() {
    return this.usuarioRepository.listar();
  }

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
    const usuarioEntity = new UsuarioEntity();

    usuarioEntity.nome = dadosDoUsuario.nome;
    usuarioEntity.email = dadosDoUsuario.email;
    usuarioEntity.senha = dadosDoUsuario.senha;
    usuarioEntity.id = uuid();

    this.usuarioRepository.salvar(usuarioEntity);
    return { id: usuarioEntity.id, message: 'Usuário criado com sucesso!' };
  }
}
