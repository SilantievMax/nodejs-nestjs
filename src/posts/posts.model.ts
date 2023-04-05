import { ApiProperty } from '@nestjs/swagger'
import { Table, Model, Column, DataType, BelongsToMany, BelongsTo, ForeignKey } from 'sequelize-typescript'
import { Role } from 'src/roles/roles.model'
import { UserRoles } from 'src/roles/user-roles.model'
import { User } from 'src/users/users.model'

interface PostCreationAttrs {
  title: string
  content: string
  userId: number
  image: string
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
  @ApiProperty({
    example: '1',
    description: 'Уникальный идентификатор'
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number

  @ApiProperty({
    example: 'Lorem',
    description: 'Название поста'
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  title: string

  @ApiProperty({
    example: 'Lorem ipsum dolor sit amet',
    description: 'Описание поста'
  })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string

  @ApiProperty({
    example: '/image/wdwdcds.jpg',
    description: 'Ссылка на изображение'
  })
  @Column({ type: DataType.STRING, allowNull: false })
  image: string

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number

  @BelongsTo(() => User)
  author: User
}
