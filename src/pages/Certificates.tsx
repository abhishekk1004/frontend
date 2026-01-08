/**
 * =============================================================================
 * CERTIFICATES & BADGES PAGE
 * =============================================================================
 * 
 * 📍 WHAT TO CUSTOMIZE:
 * 
 * 1. CERTIFICATES DATA (Lines ~20-80): Add your real certificates
 *    - title: Certificate/badge name
 *    - issuer: Organization that issued it
 *    - date: Year obtained
 *    - type: "badge" (square) or "certificate" (rectangular)
 *    - image: Photo/screenshot of the certificate
 *    - credential: Verification URL (or "#" if none)
 * 
 * 🔧 FOR OFFLINE CERTIFICATES:
 * - Take a photo of your physical certificate
 * - Upload it to your hosting/cloud storage
 * - Use that URL in the 'image' field
 * 
 * =============================================================================
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ExternalLink, Calendar } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';

/**
 * ============================================
 * 🏆 CERTIFICATES & BADGES DATA
 * Add your real certificates here
 * ============================================
 */
const certificates = [
  {
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    type: "badge",  // "badge" = square aspect ratio, "certificate" = rectangular
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400", // 🖼️ Certificate image
    credential: "https://aws.amazon.com/verify", // 🔗 Verification URL
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera - Stanford",
    date: "2024",
    type: "certificate",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",
    credential: "#", // Use "#" if no online verification
  },
  {
    title: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "2023",
    type: "badge",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400",
    credential: "#",
  },
  {
    title: "Django Developer Certificate",
    issuer: "Django Software Foundation",
    date: "2023",
    type: "certificate",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
    credential: "#",
  },
  {
    title: "Python Professional Certificate",
    issuer: "Python Institute",
    date: "2023",
    type: "badge",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400",
    credential: "#",
  },
  {
    title: "Kubernetes Administrator",
    issuer: "CNCF",
    date: "2023",
    type: "badge",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400",
    credential: "#",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2023",
    type: "certificate",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    credential: "#",
  },
  {
    title: "Git & GitHub Mastery",
    issuer: "GitHub",
    date: "2022",
    type: "badge",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400",
    credential: "#",
  },
  /* 
   * ➕ ADD MORE CERTIFICATES HERE
   * Copy the structure above and paste below:
   * 
   * {
   *   title: "Your Certificate Name",
   *   issuer: "Issuing Organization",
   *   date: "2024",
   *   type: "badge",  // or "certificate"
   *   image: "https://your-certificate-image.jpg",
   *   credential: "https://verification-url.com",  // or "#" if none
   * },
   */
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);
  const [filter, setFilter] = useState<'all' | 'badge' | 'certificate'>('all');

  const filteredCerts = certificates.filter(cert => 
    filter === 'all' || cert.type === filter
  );

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Certificates & Badges"
          subtitle="Professional certifications and achievements in development, cloud, and machine learning"
        />

        {/* ================================================================
            FILTER TABS
            ================================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-2 mb-12"
        >
          {['all', 'badge', 'certificate'].map((type) => (
            <Button
              key={type}
              variant={filter === type ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(type as typeof filter)}
              className="capitalize rounded-full"
            >
              {type === 'all' ? 'All' : type + 's'}
            </Button>
          ))}
        </motion.div>

        {/* ================================================================
            CERTIFICATES GRID
            ================================================================ */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredCerts.map((cert, index) => (
              <motion.div
                key={cert.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer"
              >
                <div className={`glass-card rounded-2xl overflow-hidden ${
                  cert.type === 'badge' ? 'aspect-square' : 'aspect-[3/4]'
                }`}>
                  <div className="relative h-full">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    
                    {/* Badge indicator */}
                    {cert.type === 'badge' && (
                      <div className="absolute top-3 right-3">
                        <div className="w-8 h-8 rounded-full bg-primary/90 flex items-center justify-center">
                          <Award className="h-4 w-4 text-primary-foreground" />
                        </div>
                      </div>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-xs text-primary font-medium mb-1">{cert.issuer}</p>
                      <h3 className="font-heading font-semibold text-sm line-clamp-2">
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ================================================================
            CERTIFICATE DETAIL MODAL
            ================================================================ */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative max-w-2xl w-full glass-card rounded-3xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10"
                  onClick={() => setSelectedCert(null)}
                >
                  <X className="h-5 w-5" />
                </Button>

                <div className="aspect-video relative">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      selectedCert.type === 'badge' 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-accent/20 text-accent'
                    }`}>
                      {selectedCert.type === 'badge' ? 'Badge' : 'Certificate'}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {selectedCert.date}
                    </span>
                  </div>

                  <h2 className="font-heading text-2xl font-bold mb-2">{selectedCert.title}</h2>
                  <p className="text-muted-foreground mb-6">Issued by {selectedCert.issuer}</p>

                  <Button asChild>
                    <a href={selectedCert.credential} target="_blank" rel="noopener noreferrer">
                      Verify Credential
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Certificates;