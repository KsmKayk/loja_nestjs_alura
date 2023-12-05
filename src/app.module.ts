import { Module } from '@nestjs/common';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { ProdutoModule } from './modules/produto/produto.module';

@Module({
  imports: [UsuarioModule, ProdutoModule],
})
export class AppModule {}
