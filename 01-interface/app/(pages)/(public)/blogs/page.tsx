import { BlogList } from "@/features/articles/components/blog-list";
import BlogHero from "@/shared/components/layout/blog-hero";

const BlogOverview = () => {
    return (
        <div className="min-h-screen bg-background">
            <BlogHero/>
            <div className="container mx-auto px-4 py-12">
                <BlogList />
            </div>
        </div>
    );
};

export default BlogOverview;
