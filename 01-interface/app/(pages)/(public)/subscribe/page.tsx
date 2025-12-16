"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { subscriberService } from '@/features/subscribers/services/subscriber.service';

export default function SubscribePage() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await subscriberService.subscribe(email);
            toast.success('Successfully subscribed!');
            setEmail('');
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[60vh]">
            <div className="w-full max-w-md space-y-8 text-center">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">Subscribe to our newsletter</h1>
                    <p className="text-lg text-gray-500">
                        Stay updated with the latest articles, courses, and tech news.
                    </p>
                </div>

                <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12"
                    />
                    <Button type="submit" size="lg" className="w-full h-12 text-lg" disabled={isLoading}>
                        {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                        Subscribe
                    </Button>
                </form>
            </div>
        </div>
    );
}
