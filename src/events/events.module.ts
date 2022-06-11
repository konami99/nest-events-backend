import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/event.entity';
import { EventsController } from 'src/events/events.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Event]),
  ],
  controllers: [EventsController]
})
export class EventsModule {}
