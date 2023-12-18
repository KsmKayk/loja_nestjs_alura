import {
  Body,
  Get,
  Controller,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UsuarioEntity } from '../entities/usuario.entity';
import { UsuarioRepository } from '../repositories/usuario.repository';
import { CriaUsuarioDTO } from '../DTOS/CriaUsuario.dto';
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from 'src/DTOS/ListaUsuario.dto';
import { AtualizaUsuario } from 'src/DTOS/AtualizaUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Get()
  async listaUsuarios() {
    const usuariosSalvos = await this.usuarioRepository.listar();
    const usuariosLista = usuariosSalvos.map(
      (usuario) => new ListaUsuarioDTO(usuario.id, usuario.nome),
    );
    return usuariosLista;
  }

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
    const usuarioEntity = new UsuarioEntity();

    usuarioEntity.nome = dadosDoUsuario.nome;
    usuarioEntity.email = dadosDoUsuario.email;
    usuarioEntity.senha = dadosDoUsuario.senha;
    usuarioEntity.id = uuid();

    this.usuarioRepository.salvar(usuarioEntity);
    return {
      usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
      message: 'Usuário criado com sucesso!',
    };
  }

  @Put('/:id')
  async atualizaUsuario(
    @Param('id') id: string,
    @Body() novosDados: AtualizaUsuario,
  ) {
    const usuarioAtualizado = await this.usuarioRepository.atualiza(
      id,
      novosDados,
    );
    return {
      usuario: usuarioAtualizado,
      message: 'Usuário atualizado com sucesso!',
    };
  }

  @Delete('/:id')
  async removeUsuario(@Param('id') id: string) {
    const usuarioRemovido = await this.usuarioRepository.remove(id);
    return {
      usuario: usuarioRemovido,
      message: 'Usuário deletado com sucesso!',
    };
  }
}
