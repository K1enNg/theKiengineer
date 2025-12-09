import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { ABOUT_CONSTANTS } from "../../constants/about.constants";

const AboutSections = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto space-y-16">
                {/* About Me Section */}
                <section className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        {ABOUT_CONSTANTS.INTRO.TITLE}
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-muted-foreground leading-relaxed">
                            {ABOUT_CONSTANTS.INTRO.CONTENT_1}
                            <br />
                            <br />
                            {ABOUT_CONSTANTS.INTRO.CONTENT_2}
                        </p>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        {ABOUT_CONSTANTS.PHILOSOPHY.TITLE}
                    </h2>
                    <div className="from-primary/10 via-accent/10 to-secondary/10 rounded-lg p-8 border border-border">
                        <blockquote className="text-lg md:text-xl text-center italic text-foreground">
                            {ABOUT_CONSTANTS.PHILOSOPHY.QUOTE}
                        </blockquote>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                        {ABOUT_CONSTANTS.PHILOSOPHY.CONTENT}
                    </p>
                </section>

                {/* Contact Section */}
                <section className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        {ABOUT_CONSTANTS.CONNECTION.TITLE}
                    </h2>
                    <div className="flex justify-center space-x-6 mt-6">
                        <Link
                            href={ABOUT_CONSTANTS.CONNECTION.GITHUB}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="h-10 w-10" />
                        </Link>
                        <Link
                            href={ABOUT_CONSTANTS.CONNECTION.LINKEDIN}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-10 w-10" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutSections;
