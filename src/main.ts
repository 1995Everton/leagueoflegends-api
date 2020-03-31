import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const options = new DocumentBuilder()
  .setTitle('League of Legends API')
  .setDescription('unofficial league of legends api, there you have access to character data, such as abilities, skins, attributes and items')
  .setVersion('1.0')
  .addServer('http://localhost:3000')
  .build();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');

  const document = SwaggerModule.createDocument(app,options)

  SwaggerModule.setup('api',app,document)

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
