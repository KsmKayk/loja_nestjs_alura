import { Module } from '@nestjs/common';
import { ProdutoController } from '../controllers/produto.controller';
import { ProdutoRepository } from '../repositories/produto.repository';

@Module({
  controllers: [ProdutoController],
  providers: [ProdutoRepository],
})
export class ProdutoModule {}
