import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscriber } from './entities/subscriber.entity';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { MailService } from '../mail/mail.service';

@Injectable()
export class SubscribersService {
    constructor(
        @InjectRepository(Subscriber)
        private subscribersRepository: Repository<Subscriber>,
        private mailService: MailService,
    ) { }

    async create(createSubscriberDto: CreateSubscriberDto): Promise<Subscriber> {
        const existingSubscriber = await this.subscribersRepository.findOne({
            where: { email: createSubscriberDto.email },
        });

        if (existingSubscriber) {
            throw new ConflictException('Email is already subscribed');
        }

        const subscriber = this.subscribersRepository.create(createSubscriberDto);
        const savedSubscriber = await this.subscribersRepository.save(subscriber);
        await this.mailService.sendWelcomeEmail(savedSubscriber.email);
        return savedSubscriber;
    }

    findAll(): Promise<Subscriber[]> {
        return this.subscribersRepository.find();
    }

    async delete(id: string): Promise<void> {
        await this.subscribersRepository.delete(id);
    }
}
