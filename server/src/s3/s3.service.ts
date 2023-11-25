import { PutObjectCommand } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { s3Client } from 'src/utils/s3Util';

@Injectable()
export class S3Service {
  public async uploadImage(
    files: { filename: string; buffer: Buffer }[],
    userId: string,
    propertyTitle: string,
  ) {
    try {
      const result = await Promise.all(
        files.map(async (file) => {
          const key = `property_images/user-${userId}/${propertyTitle}/${file.filename}`;
          await s3Client.send(
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
