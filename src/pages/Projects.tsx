/**
 * =============================================================================
 * PROJECTS PAGE
 * =============================================================================
 * 
 * 📍 WHAT TO CUSTOMIZE:
 * 
 * 1. PROJECTS DATA (Lines ~20-60): Add your real projects
 *    - title: Project name
 *    - description: Brief description of the project
 *    - image: Screenshot or thumbnail of the project
 *    - tags: Technologies used
 *    - liveUrl: Live demo URL (optional)
 *    - githubUrl: GitHub repository URL
 *    - featured: Set to true for important projects
 * 
 * 2. STATS (Lines ~85-90): Update with your real numbers
 * 
 * =============================================================================
 */

import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';

/**
 * ============================================
 * 💼 PROJECTS DATA
 * Replace with your actual projects
 * ============================================
 */
const projects = [
  {
    title: "AI-Powered Sentiment Analyzer",
    description: "A machine learning application that analyzes customer reviews and social media posts to determine sentiment using NLP techniques with Python and TensorFlow.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800", // 🖼️ Project screenshot
    tags: ["Python", "TensorFlow", "NLP", "Flask"],
    liveUrl: "https://example.com",    // 🔗 Live demo URL (remove if no demo)
    githubUrl: "https://github.com",   // 🔗 GitHub repo URL
    featured: true,                     // ⭐ Featured projects appear first
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution built with Django, featuring product management, cart functionality, payment integration, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    tags: ["Django", "PostgreSQL", "Stripe", "REST API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "DevOps Pipeline Automation",
    description: "Automated CI/CD pipeline using Jenkins, Docker, and Kubernetes for seamless deployment and scaling of microservices.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800",
    tags: ["Docker", "Kubernetes", "Jenkins", "AWS"],
    githubUrl: "https://github.com",
  },
  {
    title: "Real-time Chat Application",
    description: "WebSocket-based chat application with Django Channels, featuring real-time messaging, user presence, and message history.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800",
    tags: ["Django Channels", "WebSockets", "Redis", "React"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Image Classification API",
    description: "REST API for image classification using convolutional neural networks, deployed with Docker and served via FastAPI.",
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381?w=800",
    tags: ["PyTorch", "FastAPI", "Docker", "CNN"],
    githubUrl: "https://github.com",
  },
  {
    title: "Portfolio Photography Website",
    description: "Responsive photography portfolio website with gallery management, image optimization, and contact form integration.",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800",
    tags: ["React", "Node.js", "Cloudinary", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  /* 
   * ➕ ADD MORE PROJECTS HERE
   * Copy the structure above and paste below:
   * 
   * {
   *   title: "Your Project Name",
   *   description: "Description of what the project does",
   *   image: "https://your-project-screenshot.jpg",
   *   tags: ["Tech1", "Tech2", "Tech3"],
   *   liveUrl: "https://live-demo.com",  // Optional
   *   githubUrl: "https://github.com/your-repo",
   *   featured: false,
   * },
   */
];

const Projects = () => {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="My Projects"
          subtitle="A collection of work that showcases my skills in development, machine learning, and DevOps"
        />

        {/* ================================================================
            PROJECTS GRID
            ================================================================ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>

        {/* ================================================================
            STATS SECTION
            📊 Update these numbers with your real stats
            ================================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 glass-card rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "20+", label: "Projects Completed" },  // 📊 Your project count
              { number: "5+", label: "Years Experience" },     // 📊 Your experience
              { number: "15+", label: "Happy Clients" },       // 📊 Clients/collaborators
              { number: "50+", label: "GitHub Repos" },        // 📊 GitHub repos
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Projects;