import React from 'react';
import Image from 'next/image';
import { AUTHOR_CONSTANTS } from '@/shared/constants';

const AboutHero = () => {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <div className="absolute inset-0 -m-4 rounded-full from-primary/20 via-accent/20 to-secondary/20 blur-xl animate-pulse"></div>
                        <div className="relative rounded-full p-1 from-primary via-accent to-secondary">
                            <div className="rounded-full p-2 bg-background">
                                <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-4 ring-background shadow-2xl">
                                    <Image
                                        src={AUTHOR_CONSTANTS.PROFILE_PICTURE}
                                        alt={AUTHOR_CONSTANTS.NAME}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        {AUTHOR_CONSTANTS.NAME}
                    </h1>
                    <p className="text-xl md:text-2xl text-primary font-semibold">
                        {AUTHOR_CONSTANTS.TITLE}
                    </p>
                    <p className="text-lg md:text-xl text-muted-foreground">
                        {AUTHOR_CONSTANTS.BIO}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;
