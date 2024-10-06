import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { DataModule } from './data/data.module'

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(
            `mongodb://${process.env.DB_HOST || 'localhost'}:${parseInt((process.env.DB_PORT || '27017'), 10)}`,
            {
                dbName: process.env.DB_NAME || 'datasintesa'
            }
        ),
        DataModule
    ]
})

export class AppModule {}
