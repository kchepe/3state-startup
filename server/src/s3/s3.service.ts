import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class S3Service {
  private readonly s3Client = new S3Client({
    region: this.configService.getOrThrow('AWS_S3_REGION'),
  });
  constructor(private readonly configService: ConfigService) {}

  public async uploadImage(
    files: { filename: string; buffer: Buffer }[],
    userId: string,
  ) {
    try {
      const result = await Promise.all(
        files.map(async (file) => {
          const key = `property_images/${userId}/${file.filename}`;
          await this.s3Client.send(
            new PutObjectCommand({
              // change this in prod
              Bucket: '3state-development',
              Key: key,
              Body: file.buffer,
            }),
          );

          return key;
        }),
      );

      return result;
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}
