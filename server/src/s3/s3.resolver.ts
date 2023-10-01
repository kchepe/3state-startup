import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import * as Upload from 'graphql-upload/Upload.js';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { S3Service } from './s3.service';

@Resolver()
@UseGuards(JwtAuthGuard)
export class S3Resolver {
  constructor(private readonly s3Service: S3Service) {}

  @Mutation(() => String)
  async uploadImageToS3(
    @Args({ name: 'images', type: () => [GraphQLUpload] })
    images: Upload,
  ) {
    const files = await images.map(async (file: Upload) => {
      const { filename } = await file;
      return {
        filename,
      };
    });

    const uploadedFiles = await Promise.all(files);
    console.log(uploadedFiles);

    return 'uploaded';
  }
}
