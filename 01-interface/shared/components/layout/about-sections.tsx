import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const AboutSections = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto space-y-16">
                {/* About Me Section */}
                <section className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        Idk why y'all wanna read this?
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-muted-foreground leading-relaxed">
                            If you’re reading this, thanks for being curious. Jk. I'm a former CS student who
                            is into building things that actually help people. Over time, I realized that tech isn’t
                            just about apps and algorithms. It’s about community, sharing ideas, and growing together.
                        </p>
                        <br />
                        <p className="text-muted-foreground leading-relaxed">
                            theKiengineer is my little corner of the internet where I take everything I’ve learned (and everything
                            I’m still learning) and turn it into something useful for anyone who wants to dive into engineering,
                            tech, and sometimes a bit of philosophy.
                        </p>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        My Philosophy
                    </h2>
                    <div className="from-primary/10 via-accent/10 to-secondary/10 rounded-lg p-8 border border-border">
                        <blockquote className="text-lg md:text-xl text-center italic text-foreground">
                            "Knowledge is free"
                        </blockquote>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                        I believe that knowledge is the gift the universe has given to us, therefore it shouldn’t be locked
                        behind tuition fees or complicated systems. After spending thousands of dollars on colleges, I want to
                        create a place where anyone curious about engineering can learn freely, at their own pace.
                    </p>
                </section>

                {/* Contact Section */}
                <section className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        Let's Connect
                    </h2>
                    <div className="flex justify-center space-x-6 mt-6">
                        <Link
                            href="https://github.com/K1enNg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="h-10 w-10" />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/kien-nguyen-46bab22a1/"
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
