import { ApiProperty } from '@nestjs/swagger'

export class addRoleDto {
  @ApiProperty({
    example: '5',
    description: 'id пользователя'
  })
  readonly value: string
  @ApiProperty({
    example: 'ADMIN',
    description: 'Роль пользователя'
  })
  readonly userId: number
}
