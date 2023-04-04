import { ApiProperty } from '@nestjs/swagger'
import {
  Table,
  Model,
  Column,
  DataType,
  BelongsToMany,
  ForeignKey
} from 'sequelize-typescript'
import { User } from 'src/users/users.model'
import { Role } from './roles.model'

@Table({
  tableName: 'user_roles',
  createdAt: false,
  updatedAt: false
})
export class UserRoles extends Model<UserRoles> {
  //   @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number

  //   @ApiProperty({ example: '1', description: 'id роли' })
  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  roleId: number

  //   @ApiProperty({ example: '2', description: 'id полтзоваателя' })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number
}
