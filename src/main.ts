import { NestFactory } from '@nestjs/core'
import { AppMudule } from './app.module'

async function start() {
  const PORT = process.env.PORT || '5001'
  const app = await NestFactory.create(AppMudule)

  await app.listen(PORT, () => console.log(`Server OK - Port: ${PORT}`))
}

start()
