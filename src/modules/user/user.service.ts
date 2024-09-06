import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/lib/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const users = await this.prisma.user.findMany();
    return {
      message: 'All users',
      data: users,
    };
  }
}
