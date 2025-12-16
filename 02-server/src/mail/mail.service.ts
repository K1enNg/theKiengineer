import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
    private transporter: nodemailer.Transporter;
    private readonly logger = new Logger(MailService.name);

    constructor(private configService: ConfigService) {
        this.transporter = nodemailer.createTransport({
            host: this.configService.get<string>('SMTP_HOST'),
            port: this.configService.get<number>('SMTP_PORT'),
            secure: this.configService.get<string>('SMTP_SECURE') === 'true',
            auth: {
                user: this.configService.get<string>('SMTP_USER'),
                pass: this.configService.get<string>('SMTP_PASS'),
            },
        });
        this.logger.log(`MailService initialized with host: ${this.configService.get<string>('SMTP_HOST')}`);
    }

    async sendWelcomeEmail(email: string) {
        try {
            await this.transporter.sendMail({
                from: '"TheKiengineer" <no-reply@thekiengineer.com>',
                to: email,
                subject: 'Welcome to TheKiengineer!',
                text: 'Thank you for subscribing to our newsletter! Stay tuned for the latest updates.',
                html: '<b>Thank you for subscribing to our newsletter!</b><br>Stay tuned for the latest updates.',
            });
            this.logger.log(`Welcome email sent to ${email}`);
        } catch (error) {
            this.logger.error(`Failed to send welcome email to ${email}`, error);
            // We catch but don't rethrow to avoid breaking the subscription flow
        }
    }
}
