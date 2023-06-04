import { PartialType } from '@nestjs/swagger';
import { SACreateUserDto } from './sa.create-user.dto';

export class SAUpdateUserDto extends PartialType(SACreateUserDto) {}
