/**
 * =============================================================================
 * HOME PAGE - HERO & LANDING SECTION
 * =============================================================================
 * 
 * 📍 WHAT TO CUSTOMIZE:
 * 
 * 1. HERO VIDEO (Line ~70): Replace the video URL with your own vintage video
 * 2. VIDEO POSTER (Line ~68): Fallback image if video doesn't load
 * 3. PROFILE PHOTO (Line ~142): Your profile picture URL
 * 4. NAME & TITLE (Lines ~103-107): Your name and tagline
 * 5. DESCRIPTION (Lines ~109-113): About you paragraph
 * 6. SKILLS (Line ~40-45): Your main skills/expertise
 * 7. FEATURED BLOGS (Lines ~9-38): Replace with your actual blog posts
 * 
 * =============================================================================
 */

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight, Code, Camera, Server, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BlogCard from '@/components/BlogCard';
import SectionHeader from '@/components/SectionHeader';
import QuoteSection from '@/components/QuoteSection';
import TypingAnimation from '@/components/TypingAnimation';

/**
 * ============================================
 * 📝 FEATURED BLOGS DATA
 * Replace these with your actual blog posts
 * ============================================
 */
const featuredBlogs = [
  {
    title: "Building Scalable APIs with Django REST Framework",
    excerpt: "Learn how to design and implement production-ready APIs using Django REST Framework with best practices for authentication, pagination, and caching.",
    date: "Dec 28, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800", // 🖼️ Change blog thumbnail
    category: "Django",
    slug: "building-scalable-apis-django",
    featured: true,
  },
  {
    title: "Introduction to Machine Learning with Python",
    excerpt: "A comprehensive guide to getting started with machine learning using Python, scikit-learn, and TensorFlow.",
    date: "Dec 20, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800", // 🖼️ Change blog thumbnail
    category: "Machine Learning",
    slug: "intro-ml-python",
  },
  {
    title: "Docker & Kubernetes for Beginners",
    excerpt: "Understanding containerization and orchestration to deploy your applications like a pro.",
    date: "Dec 15, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800", // 🖼️ Change blog thumbnail
    category: "DevOps",
    slug: "docker-kubernetes-beginners",
  },
];

/**
 * ============================================
 * 🎯 SKILLS DATA
 * Modify your skills shown on homepage
 * ============================================
 */
const skills = [
  { icon: Code, label: "Python & Django", description: "Backend Development" },
  { icon: Sparkles, label: "Machine Learning", description: "AI & Data Science" },
  { icon: Server, label: "DevOps", description: "CI/CD & Cloud" },
  { icon: Camera, label: "Photography", description: "Visual Storytelling" },
];

const Index = () => {
  const { scrollY } = useScroll();
  const videoOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);
  const textY = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <main className="min-h-screen">
      {/* ================================================================
          HERO SECTION WITH VIDEO BACKGROUND
          ================================================================ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* 
         * 🎬 VIDEO BACKGROUND
         * Replace the video source URL with your own vintage video
         * The poster is the fallback image shown before video loads
         */}
        <motion.div 
          style={{ opacity: videoOpacity }}
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            /* 🖼️ POSTER IMAGE: Shown before video loads */
            poster="src/assets/images/abhi_poster.p"
          >
            {/* 🎥 VIDEO SOURCE: Replace with your video URL */}
            <source
              src="videos/lord.mp4"
              type="video/mp4"
            />
          </video>
          {/* Gradient overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        </motion.div>

        {/* Film grain overlay for vintage effect */}
        <div className="absolute inset-0 film-grain z-10 pointer-events-none" />

        {/* ================================================================
            HERO CONTENT - YOUR NAME & INTRO
            ================================================================ */}
        <motion.div 
          style={{ y: textY }}
          className="relative z-20 container mx-auto px-4"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium">Available for opportunities</span>
              </motion.div>

              {/* 
               * 👤 YOUR NAME
               * Change "Abhishek Kushwaha" to your name
               */}
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Hi, I'm
                <br />
                <span className="text-gradient">
                  <TypingAnimation text="Abhishek Kushwaha"
                  speed={80}
                  delay={800} />
                </span>
              </h1>

              {/* 
               * 📝 YOUR INTRO PARAGRAPH
               * Describe yourself here
               */}
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                A passionate <span className="text-primary font-medium">Python-Django Developer</span> & 
                <span className="text-primary font-medium"> ML Enthusiast</span>, exploring the realms of 
                DevOps while capturing life through my lens.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group" asChild>
                  <Link to="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Let's Connect</Link>
                </Button>
              </div>
            </motion.div>

            {/* ================================================================
                PROFILE CARD - YOUR PHOTO
                ================================================================ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Decorative glow behind card */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl" />
                
                <div className="relative glass-card rounded-3xl p-8 border-2 border-primary/20">
                  {/* 
                   * 🖼️ YOUR PROFILE PHOTO
                   * Replace this URL with your photo
                   */}
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/30 mb-6 animate-float">
                    <img
                      src="src/assets/images/abhi_poster.png"
                      alt="Abhishek Kushwaha"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-center">
                    {/* 👤 Your name on the card */}
                    <h3 className="font-heading text-2xl font-bold mb-2">Abhishek Kushwaha</h3>
                    <p className="text-primary font-medium mb-4">Full Stack Developer</p>
                    
                    {/* Skill tags on profile card */}
                    <div className="flex justify-center gap-2 flex-wrap">
                      {['Python', 'Django', 'ML', 'DevOps'].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs font-medium">Scroll to explore</span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* ================================================================
          SKILLS SECTION
          ================================================================ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card rounded-2xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <skill.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-1">{skill.label}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          FEATURED BLOGS SECTION
          ================================================================ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Featured Blogs"
            subtitle="Thoughts, tutorials, and insights on development, ML, and more"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBlogs.map((blog, index) => (
              <BlogCard key={blog.slug} {...blog} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">
                View All Blogs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          MOTIVATIONAL QUOTE SECTION
          (Changes daily - configured in QuoteSection component)
          ================================================================ */}
      <QuoteSection />
    </main>
  );
};

export default Index;