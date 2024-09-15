import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'mod/prisma';
import { AuthModule } from 'mod/auth';
import { InvoiceModule } from 'mod/invoice';
import { UserModule } from 'mod/user';
import { OrderModule } from 'mod/orders';
import { SwapModule } from 'mod/swap';
import { BankAccountModule } from 'mod/bankAccount';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    InvoiceModule,
    UserModule,
    OrderModule,
    SwapModule,
    BankAccountModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
