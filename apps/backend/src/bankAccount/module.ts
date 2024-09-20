import { Module } from '@nestjs/common';
import { BankAccountController } from './controller';
import { BankAccountService } from './service';
import { PrismaModule } from 'mod/prisma';

@Module({
  imports: [PrismaModule],
  controllers: [BankAccountController],
  providers: [BankAccountService],
})
export class BankAccountModule {}
