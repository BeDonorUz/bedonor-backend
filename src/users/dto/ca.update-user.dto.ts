import { OmitType } from '@nestjs/swagger';
import { UpdateUserDto } from './update-user.dto';

export class CAUpdateUserDto extends OmitType(UpdateUserDto, ['role']) {}
