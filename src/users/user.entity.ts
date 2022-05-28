import { CommonEntity } from 'src/common/common.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class User extends CommonEntity {
  @Column({ length: 64 })
  firstName: string;

  @Column({ length: 64 })
  lastName: string;

  @Column({ length: 64, nullable: true })
  patronymic: string;
}
