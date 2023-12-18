import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutoRepository {
  private produtos = [];

  async listar() {
    return this.produtos;
  }

  async salvar(produto) {
    this.produtos.push(produto);
  }
}
