import React from 'react'
import { BLOG_CONSTANTS } from '@/shared/constants/blog.constants'
const BlogHero = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-3xl mx-auto text-center space-y-3">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        {BLOG_CONSTANTS.INTRO.TITLE}
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground">
                        {BLOG_CONSTANTS.INTRO.SUBTITLE}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogHero
