import { NestFactory } from '@nestjs/core'
import { AppMudule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function start() {
  const PORT = process.env.PORT || '5001'
  const app = await NestFactory.create(AppMudule)

  const config = new DocumentBuilder()
    .setTitle('NODEJS-NESTJS')
    .setDescription('DOCS REST API')
    .setVersion('1.0.0')
    .addTag('nestjs')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/docs', app, document)

  await app.listen(PORT, () => console.log(`Server OK - Port: ${PORT}`))
}

start()
