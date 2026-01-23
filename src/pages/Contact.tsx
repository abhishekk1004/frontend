/**
 * =============================================================================
 * CONTACT PAGE
 * =============================================================================
 * 
 * 📍 WHAT TO CUSTOMIZE:
 * 
 * 1. CONTACT INFO (Lines ~70-100): Your email, phone, location
 * 2. FORM SUBMISSION (Line ~22): Connect to your Django backend
 * 
 * 🔧 WITH DJANGO BACKEND:
 * - Form will POST to your Django API endpoint
 * - Messages will be stored in your database
 * - You can add email notifications
 * 
 * =============================================================================
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MessageSquare, MapPin, Loader2, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import QuoteSection from '@/components/QuoteSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  /**
   * ============================================
   * 📨 FORM SUBMISSION HANDLER
   * Connect this to your Django API
   * ============================================
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const baseUrl = String(import.meta.env.VITE_API_URL || 'http://localhost:8000/api');
      const apiUrl = baseUrl.replace(/\/$/, '');
      const endpoint = `${apiUrl}/contacts/`;
      
      console.log('Sending to endpoint:', endpoint);
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone') || '',
          message: formData.get('message'),
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent! 🎉",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        const errorData = await response.json().catch(() => ({ detail: 'Server error' }));
        throw new Error(errorData.detail || `Error: ${response.status}`);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hello? I'd love to hear from you!"
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* ================================================================
                CONTACT INFO SECTION
                Update with your real contact details
                ================================================================ */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card rounded-3xl p-8 h-full">
                <h3 className="font-heading text-2xl font-bold mb-6">
                  Let's create something <span className="text-gradient">amazing</span> together
                </h3>
                
                <p className="text-muted-foreground mb-8">
                  Whether you have a question about my work, want to collaborate on a project, 
                  or just want to connect, feel free to reach out. I'm always open to discussing 
                  new opportunities.
                </p>

                <div className="space-y-6">
                  {/* 📧 YOUR EMAIL */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">abhishekkushwaha.np@gmail.com</p> {/* 👈 Your email */}
                    </div>
                  </motion.div>

                  {/* 📱 YOUR PHONE */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+977 9849852109</p> 
                    </div>
                  </motion.div>

                  {/* 📍 YOUR LOCATION */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Kathmandu, Nepal</p> 
                    </div>
                  </motion.div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8 pt-8 border-t border-border/50">
                  <p className="text-sm font-medium mb-4">Follow me on</p>
                  <div className="flex gap-3 flex-wrap">
                    {/* 👈 ADD YOUR SOCIAL MEDIA LINKS HERE */}
                    <a
                      href="https://github.com/abhishekk1004" // 👈 Change to your GitHub
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                      title="GitHub"
                    >
                      <Github className="h-5 w-5 text-primary" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/abhishekkushwaha-py/" // 👈 Change to your LinkedIn
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 text-primary" />
                    </a>
                    <a
                      href="https://x.com/abhishekk_1004" // 👈 Change to your Twitter
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                      title="Twitter"
                    >
                      <Twitter className="h-5 w-5 text-primary" />
                    </a>
                    <a
                      href="https://instagram.com/_abhi_shek_1004" // 👈 Change to your Instagram
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                      title="Instagram"
                    >
                      <Instagram className="h-5 w-5 text-primary" />
                    </a>
                  </div>
                </div>

                {/* Response time note */}
                <div className="mt-8 pt-4">
                  <p className="text-sm text-muted-foreground text-center">
                    Usually respond within 24 hours ✨
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ================================================================
                CONTACT FORM
                ================================================================ */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold">Send me a message</h3>
                </div>

                <div className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Your Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="h-12 rounded-xl bg-muted/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="h-12 rounded-xl bg-muted/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number <span className="text-muted-foreground">(optional)</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder=" XXXXX XXXXX"
                      className="h-12 rounded-xl bg-muted/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Your Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, ideas, or just say hi..."
                      required
                      rows={5}
                      className="rounded-xl bg-muted/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 rounded-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================================================================
          MOTIVATIONAL QUOTE SECTION
          (Changes daily - see QuoteSection component)
          ================================================================ */}
      <div className="mt-20">
        <QuoteSection />
      </div>
    </main>
  );
};

export default Contact;