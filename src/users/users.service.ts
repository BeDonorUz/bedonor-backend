import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(dto);
    return this.usersRepository.save(user);
  }

  async findOne(filter: FindConditions<User>): Promise<User> {
    return this.usersRepository.findOneOrFail(filter);
  }

  async findMany(filter?: FindConditions<User>): Promise<User[]> {
    return this.usersRepository.find(filter);
  }

  async update(id: User['id'], dto: UpdateUserDto): Promise<User> {
    const user = await this.findOne({ id });
    this.usersRepository.merge(user, dto);
    return this.usersRepository.save(user);
  }

  async remove(filter: FindConditions<User>): Promise<User> {
    const user = await this.findOne(filter);
    return this.usersRepository.softRemove(user);
  }
}
