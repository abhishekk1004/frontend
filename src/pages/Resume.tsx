/**
 * =============================================================================
 * RESUME PAGE
 * =============================================================================
 * 
 * 📍 WHAT TO CUSTOMIZE:
 * 
 * 1. SKILLS (Lines ~20-30): Your technical skills by category
 * 2. EXPERIENCE (Lines ~35-50): Your work experience
 * 3. PROFILE INFO (Lines ~65-80): Your name, title, description
 * 4. CONTACT INFO (Lines ~195): Email, phone, location
 * 5. EDUCATION (Lines ~255): Your educational background
 * 
 * 🔧 FOR RESUME PDF:
 * - Upload your resume PDF to your hosting
 * - Add download functionality to the "Download PDF" button
 * 
 * =============================================================================
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, Code, Server, Sparkles, Camera, ExternalLink } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';

/**
 * ============================================
 * 🎯 SKILLS DATA
 * Organize your skills by category
 * ============================================
 */
const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL", "Bash"] },
  { category: "Backend", items: ["Django", "Django REST", "FastAPI", "Flask", "Node.js"] },
  { category: "ML/AI", items: ["TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "Jenkins", "GitHub Actions"] },
  { category: "Frontend", items: ["React", "HTML/CSS", "Tailwind", "Bootstrap"] },
  { category: "Tools", items: ["Git", "Linux", "PostgreSQL", "Redis", "MongoDB"] },
];

/**
 * ============================================
 * 💼 EXPERIENCE DATA
 * Add your work experience
 * ============================================
 */
const experience = [
  {
    role: "Full Stack Developer",          // 👔 Your job title
    company: "Tech Company",               // 🏢 Company name
    period: "2022 - Present",              // 📅 Employment period
    description: "Building scalable web applications with Django and React",
  },
  {
    role: "ML Engineer Intern",
    company: "AI Startup",
    period: "2021 - 2022",
    description: "Developed ML models for NLP and computer vision applications",
  },
  /* 
   * ➕ ADD MORE EXPERIENCE HERE
   * {
   *   role: "Your Role",
   *   company: "Company Name",
   *   period: "Start - End",
   *   description: "What you did there",
   * },
   */
];

const Resume = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="My Resume"
          subtitle="Skills, experience, and qualifications"
        />

        {/* ================================================================
            RESUME PREVIEW CARD
            ================================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Header */}
          <div className="glass-card rounded-3xl p-8 md:p-12 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* 
               * 🖼️ YOUR PROFILE PHOTO
               * Replace this URL with your photo
               */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-primary/30"
              >
                <img
                  src="src/assets/images/abhi_poster.png" // 👈 Change to your photo URL
                  alt="Abhishek Kushwaha"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="text-center md:text-left flex-1">
                {/* 👤 YOUR NAME */}
                <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">
                  Abhishek Kushwaha
                </h1>
                {/* 💼 YOUR TITLE */}
                <p className="text-primary text-lg font-medium mb-3">
                  Python-Django Developer | ML Enthusiast | DevOps Learner
                </p>
                {/* 📝 SHORT BIO */}
                <p className="text-muted-foreground max-w-lg">
                  Passionate about building scalable applications and exploring the intersection of 
                  software development and machine learning.
                </p>
              </div>
            </div>
          </div>

          {/* ================================================================
              SKILLS GRID
              ================================================================ */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <h3 className="font-heading font-semibold text-primary mb-3">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium bg-muted rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ================================================================
              EXPERIENCE SECTION
              ================================================================ */}
          <div className="glass-card rounded-3xl p-8 mb-8">
            <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-primary/30"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary" />
                  <h3 className="font-heading font-semibold text-lg">{exp.role}</h3>
                  <p className="text-primary text-sm">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mb-2">{exp.period}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================================================================
              CTA - VIEW FULL RESUME
              ================================================================ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <div className="glass-card rounded-3xl p-12 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
              </motion.div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Click on resume to see my <span className="text-gradient">potential</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                View my complete resume with detailed work history, education, and achievements.
              </p>
              <Button size="lg" onClick={() => setIsResumeOpen(true)}>
                View Full Resume
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* ================================================================
            FULL RESUME MODAL
            ================================================================ */}
        <AnimatePresence>
          {isResumeOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl overflow-y-auto"
            >
              <div className="min-h-screen py-8 px-4">
                {/* Close & Download Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="fixed top-4 right-4 z-10 flex gap-2"
                >
                  {/* 
                   * 📄 DOWNLOAD PDF BUTTON
                   * Add your resume PDF URL here
                   */}
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => setIsResumeOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </motion.div>

                {/* Resume Content */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-4xl mx-auto mt-16 glass-card rounded-3xl p-8 md:p-12"
                >
                  {/* Header */}
                  <div className="text-center border-b border-border pb-8 mb-8">
                    {/* 👤 YOUR NAME */}
                    <h1 className="font-heading text-4xl font-bold mb-2">Abhishek Kushwaha</h1>
                    <p className="text-primary text-lg mb-4">Full Stack Developer & ML Enthusiast</p>
                    {/* 📞 YOUR CONTACT INFO */}
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                      <span>📧 abhishek@example.com</span>   {/* Your email */}
                      <span>📱 +91 XXXXX XXXXX</span>        {/* Your phone */}
                      <span>📍 India</span>                  {/* Your location */}
                    </div>
                  </div>

                  {/* Summary */}
                  <section className="mb-8">
                    <h2 className="font-heading text-xl font-bold text-primary mb-4 flex items-center gap-2">
                      <FileText className="h-5 w-5" /> Professional Summary
                    </h2>
                    {/* 📝 YOUR PROFESSIONAL SUMMARY */}
                    <p className="text-muted-foreground leading-relaxed">
                      Passionate and detail-oriented Python-Django developer with expertise in building scalable 
                      web applications and REST APIs. Strong background in machine learning and data science, 
                      currently expanding skills in DevOps practices. Combines technical proficiency with a 
                      creative eye developed through photography.
                    </p>
                  </section>

                  {/* Skills */}
                  <section className="mb-8">
                    <h2 className="font-heading text-xl font-bold text-primary mb-4 flex items-center gap-2">
                      <Code className="h-5 w-5" /> Technical Skills
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {skills.map((group) => (
                        <div key={group.category} className="bg-muted/50 rounded-xl p-4">
                          <h3 className="font-semibold mb-2">{group.category}</h3>
                          <p className="text-sm text-muted-foreground">{group.items.join(", ")}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Experience */}
                  <section className="mb-8">
                    <h2 className="font-heading text-xl font-bold text-primary mb-4 flex items-center gap-2">
                      <Server className="h-5 w-5" /> Work Experience
                    </h2>
                    <div className="space-y-6">
                      {experience.map((exp) => (
                        <div key={exp.role} className="bg-muted/50 rounded-xl p-6">
                          <div className="flex flex-wrap justify-between items-start mb-2">
                            <div>
                              <h3 className="font-semibold text-lg">{exp.role}</h3>
                              <p className="text-primary">{exp.company}</p>
                            </div>
                            <span className="text-sm text-muted-foreground">{exp.period}</span>
                          </div>
                          <p className="text-muted-foreground">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Education */}
                  <section className="mb-8">
                    <h2 className="font-heading text-xl font-bold text-primary mb-4 flex items-center gap-2">
                      <Sparkles className="h-5 w-5" /> Education
                    </h2>
                    {/* 🎓 YOUR EDUCATION - Update this section */}
                    <div className="bg-muted/50 rounded-xl p-6">
                      <h3 className="font-semibold text-lg">Bachelor of Technology in Computer Science</h3>
                      <p className="text-primary">University Name</p>
                      <p className="text-sm text-muted-foreground">2018 - 2022</p>
                    </div>
                  </section>

                  {/* Other Interests */}
                  <section>
                    <h2 className="font-heading text-xl font-bold text-primary mb-4 flex items-center gap-2">
                      <Camera className="h-5 w-5" /> Other Interests
                    </h2>
                    <p className="text-muted-foreground">
                      Photography & Photo Editing • Open Source Contribution • Technical Writing • Hiking
                    </p>
                  </section>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Resume;
