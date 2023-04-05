import { PostsService } from './posts.service'
import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { CreatePostDto } from './dto/create-post.dto'
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('Посты')
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @ApiOperation({ summary: 'Создание поста' })
  @ApiResponse({ status: 200, type: Post })
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  createPost(@Body() dto: CreatePostDto, @UploadedFile() image) {
    return this.postsService.create(dto, image)
  }
}
