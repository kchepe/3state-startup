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
    @Args({ name: 'files', type: () => [GraphQLUpload] })
    files: Upload[],
  ) {
    // transfer this to service
    // add validation that checks the upload file is an image
    const resolveFiles = await files.map(async (file: Upload) => {
      const returnFile = await file;
      return returnFile;
    });

    const uploadedFiles = await Promise.all(resolveFiles);
    console.log(uploadedFiles);

    return 'uploaded';
  }
}
