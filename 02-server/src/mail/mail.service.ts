import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
    private readonly logger = new Logger(MailService.name);

    constructor(private readonly mailerService: MailerService) { }

    async sendWelcomeEmail(email: string, name: string = 'Subscriber') {
        try {
            await this.mailerService.sendMail({
                to: email,
                subject: 'Welcome to TheKiengineer!',
                template: 'welcome',
                context: {
                    name,
                },
            });
            this.logger.log(`Welcome email sent to ${email}`);
        } catch (error) {
            this.logger.error(`Failed to send welcome email to ${email}`, error);
            // We catch but don't rethrow to avoid breaking the subscription flow
        }
    }
}
