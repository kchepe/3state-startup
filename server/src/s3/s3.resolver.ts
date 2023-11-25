import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import * as Upload from 'graphql-upload/Upload.js';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { S3Service } from './s3.service';

@Resolver()
@UseGuards(JwtAuthGuard)
export class S3Resolver {
  constructor(private readonly s3Service: S3Service) {}

  @Mutation(() => [String])
  async uploadImageToS3(
    @Context() context,
    @Args({ name: 'files', type: () => [GraphQLUpload] })
    files: Upload[],
    @Args('propertyTitle') propertyTitle: string,
  ) {
    const resolveFiles = files.map(async (file: Upload) => {
      const returnFile = await file;
      return returnFile;
    });

    const uploadedFiles = await Promise.all(resolveFiles);

    const bufferArray = uploadedFiles.map(async (uploadedFile) => {
      const { createReadStream, filename } = uploadedFile;
      const stream = createReadStream();
      const chunks = [];
      const buffer = await new Promise<Buffer>((resolve, reject) => {
        let buffer: Buffer;
        stream.on('data', (chunk: any) => {
          chunks.push(chunk);
        });
        stream.on('end', () => {
          buffer = Buffer.concat(chunks);
          resolve(buffer);
        });
        stream.on('error', reject);
      });
      return { buffer, filename };
    });

    const bufferData = await Promise.all(bufferArray);

    const result = await this.s3Service.uploadImage(
      bufferData,
      context.req.user.id,
      propertyTitle,
    );
    return result;
  }
}
