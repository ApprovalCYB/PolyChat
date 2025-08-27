import { Module } from '@nestjs/common';
import { ProvidersModule } from './providers/providers.module';
import { ProvidersController } from './controllers/providers.controller';


@Module({
  imports: [ProvidersModule],
  controllers: [ProvidersController],
  providers: [],
})
export class AppModule { }
