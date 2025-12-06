import AboutHero from "@/shared/components/layout/about-hero";
import AboutSections from "@/shared/components/layout/about-sections";

const About = () => {
    return (
        <div className="min-h-screen bg-background">
            <AboutHero />
            <div className="border-b border-border w-full"></div>
            <AboutSections />
        </div>
    )
}

export default About