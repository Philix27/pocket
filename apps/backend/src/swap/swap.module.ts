import { Module } from '@nestjs/common';
import { SwapController } from './swap.controller';
import { SwapService } from './swap.service';
import { PrismaModule } from 'mod/prisma';

@Module({
  imports: [PrismaModule],
  controllers: [SwapController],
  providers: [SwapService],
})
export class SwapModule {}
