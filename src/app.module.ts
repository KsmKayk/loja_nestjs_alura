import { Module } from '@nestjs/common';
import { UsuarioModule } from './modules/usuario.module';
import { ProdutoModule } from './modules/produto.module';

@Module({
  imports: [UsuarioModule, ProdutoModule],
})
export class AppModule {}
