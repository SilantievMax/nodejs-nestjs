import { ApiProperty } from '@nestjs/swagger'

export class CreatePostDto {
  @ApiProperty({
    example: 'Lorem',
    description: 'Загаловок поста'
  })
  readonly title: string
  @ApiProperty({
    example: 'Lorem ipsum dolor sit amet',
    description: 'Описание поста'
  })
  readonly content: string
  @ApiProperty({
    example: '3',
    description: 'id пользователя'
  })
  readonly userId: number
  @ApiProperty({
    example: 'd3693871-c3a8-4de3-b2a7-61b56ed294a0.jpg',
    description: 'Ссылка на изображение'
  })
  readonly image: string
}
