import { OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export class OnInitService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}

  async onModuleInit() {
    
  }
}
