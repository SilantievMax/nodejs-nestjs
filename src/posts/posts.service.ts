import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Post } from './posts.model'
import { CreatePostDto } from './dto/create-post.dto'
import { FilesService } from 'src/files/files.service'

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private readonly postRepository: typeof Post, private filesService: FilesService) {}

  async create(dto: CreatePostDto, image: any) {
    const fileName = await this.filesService.createFile(image)
    const post = await this.postRepository.create({ ...dto, image: fileName })
    return post
  }
}
