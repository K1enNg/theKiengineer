import React from 'react'

const BlogHero = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-3xl mx-auto text-center space-y-3">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        Blogs
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground">
                        Discover insightful articles, tutorials, and stories from our community of writers
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogHero
