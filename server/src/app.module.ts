import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AmenitiesModule } from './amenities/amenities.module';
import { ProvincesModule } from './provinces/provinces.module';
import { PropertiesModule } from './properties/properties.module';
import { S3Module } from './s3/s3.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
    PrismaModule,
    UsersModule,
    AuthModule,
    AmenitiesModule,
    ProvincesModule,
    PropertiesModule,
    S3Module,
  ],
})
export class AppModule {}
