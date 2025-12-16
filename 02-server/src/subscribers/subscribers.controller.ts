import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { SubscribersService } from './subscribers.service';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';

@Controller('subscribers')
export class SubscribersController {
    constructor(private readonly subscribersService: SubscribersService) { }

    @Post()
    create(@Body() createSubscriberDto: CreateSubscriberDto) {
        return this.subscribersService.create(createSubscriberDto);
    }

    @Get()
    findAll() {
        return this.subscribersService.findAll();
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.subscribersService.delete(id);
    }
}
