import { ApiProperty } from '@nestjs/swagger'

export class BanUserDto {
  @ApiProperty({ example: '4', description: 'Пароль' })
  readonly userId: number
  @ApiProperty({ example: 'qwerty', description: 'Пароль' })
  readonly banReason: string
}
