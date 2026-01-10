/**
 * =============================================================================
 * PHOTOGRAPHY PAGE - ALBUM GALLERY
 * =============================================================================
 * 
 * 📍 WHAT TO CUSTOMIZE:
 * 
 * 1. ALBUMS (Lines ~20-80): Add your own photo albums
 *    - name: Album title (e.g., "Temples", "Nature")
 *    - cover: Cover image URL for the album
 *    - photos: Array of photo URLs in that album
 *    - count: Number of photos (update this when adding photos)
 * 
 * 🔧 ADMIN FUNCTIONALITY:
 * Django backend, can:
 * - Add new albums via admin panel
 * - Upload photos to albums
 * - Delete/reorder photos
 * 
 * =============================================================================
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';

/**
 * ============================================
 * 📸 PHOTO ALBUMS DATA
 * Add your own albums and photos here
 * ============================================
 */
const albums = [
  {
    name: "Temples",
    // 🖼️ COVER IMAGE: Main thumbnail for this album
    cover: "/photography/krishna-mandir.jpeg",
    // 📷 PHOTOS: All images in this album
    photos: [
      "/photography/janakitemple.jpeg",
      "/photography/janakitemple-2.jpeg",
      "/photography/krishna-mandir.jpeg",
      "/photography/pashupatinath.jpeg",
      "/photography/rajdevi-temple.jpeg",
      "/photography/gurunanak.jpeg",
      "/photography/temple.jpeg",
      
    ],
    count: 7, // Update this when adding/removing photos
  },
  {
    name: "Nature",
    cover: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
    photos: [
      "/photography/diya.jpeg",
      "/photography/chinese-rose.jpeg",
      "/photography/deep.jpeg",
      "/photography/badal.jpeg",
      "/photography/lotus-1.jpeg",
      "/photography/lotus.jpeg",
      "/photography/moon.jpeg",
      "/photography/moon-1.jpeg",
      "/photography/mountain.jpeg",
      "/photography/waterfall.jpeg",
      
    ],
    count: 10,
  },
  {
    name: "Sky & Sunsets",
    cover: "https://images.unsplash.com/photo-1514477917009-389c76a86b68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreXxlbnwwfHwwfHx8MA%3D%3D",
    photos: [
      "/photography/sky-3.jpeg",
      "/photography/sky-4.jpeg",
      "/photography/sky.jpeg",
      "/photography/sunset-1.jpeg",
      "/photography/sunset-2.jpeg",
      "/photography/sunset-3.jpeg",
      "/photography/sunset-4.jpeg",
    ],
    count: 7,
  },
  {
    name: "Random Shots",
    cover: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbHBhcGVyfGVufDB8fDB8fHww",
    photos: [
      "/photography/badal.jpeg",
      "/photography/light.jpeg",
      "/photography/random-2.jpeg",
      "/photography/random-3.jpeg",
      "/photography/random-4.jpeg",
      "/photography/random5.jpeg",
      "/photography/random-6.jpeg",
      "/photography/random-7.jpeg",
      "/photography/random-8.jpeg",
      "/photography/random.jpeg",
      "/photography/light.jpeg",
      "/photography/deep.jpeg",
      "/photography/victoria.jpeg",
    ],
    count: 13,
  },
  {
    name: "Janaki Mandir, Janakpur",
    cover: "/photography/janakitemple-2.jpeg",
    photos: [
      "/photography/janakpur-1.jpeg",
      "/photography/janakpur-2.jpeg",
      "/photography/janakpur-3.jpeg",
      "/photography/janakpur-4.jpeg",
      "/photography/janakpur-5.jpeg",
      "/photography/janakpur-6.jpeg",
      "/photography/janakpur-7.jpeg",
      "/photography/janakpur-8.jpeg",
      "/photography/janakpur-9.jpeg",
      "/photography/janakpur-10.jpeg",
      "/photography/janakpur-11.jpeg",
      "/photography/janakpur-12.jpeg",
      "/photography/janakpur-13.jpeg",
      "/photography/janakpur-14.jpeg",
      "/photography/janakpur-15.jpeg",
      "/photography/janakpur-16.jpeg",
      "/photography/janakpur-17.jpeg",      
    ],
    count: 17,
  },
  {
    name: "Events",
    cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
    photos: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
    ],
    count: 2,
  },
  {
    name: " Dev",
    cover: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9tfGVufDB8fDB8fHww",
    photos: [
      "/photography/ganeshhji.jpeg",
      "/photography/ganeshji.jpeg",
      "/photography/gurunanak.jpeg",
      "/photography/guru-nanak.jpeg",
      "/photography/hanumanji.jpeg",
      "/photography/Lord-Hanuman.jpeg",
    ],
    count: 6,
  }
  
];

const Photography = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<typeof albums[0] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    if (selectedAlbum && lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % selectedAlbum.photos.length);
    }
  };

  const prevImage = () => {
    if (selectedAlbum && lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + selectedAlbum.photos.length) % selectedAlbum.photos.length);
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Photography Gallery"
          subtitle="Capturing moments through my lens - a visual journey of life, nature, and culture"
        />

        <AnimatePresence mode="wait">
          {selectedAlbum ? (
            /* ================================================================
               ALBUM PHOTOS VIEW - Shows all photos in selected album
               ================================================================ */
            <motion.div
              key="photos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Button
                variant="ghost"
                onClick={() => setSelectedAlbum(null)}
                className="mb-6"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Albums
              </Button>

              <h2 className="font-heading text-2xl font-bold mb-6">{selectedAlbum.name}</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {selectedAlbum.photos.map((photo, index) => (
                  <motion.div
                    key={photo}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    onClick={() => openLightbox(index)}
                    className="aspect-square rounded-xl overflow-hidden cursor-pointer group"
                  >
                    <img
                      src={photo}
                      alt={`${selectedAlbum.name} ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* ================================================================
               ALBUMS GRID VIEW - Shows all album covers
               ================================================================ */
            <motion.div
              key="albums"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {albums.map((album, index) => (
                <motion.div
                  key={album.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedAlbum(album)}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-card">
                    <img
                      src={album.cover}
                      alt={album.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                            {album.name}
                          </h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <ImageIcon className="h-3 w-3" />
                            {album.count} photos
                          </p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <ChevronRight className="h-5 w-5 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================================================================
            LIGHTBOX - Full screen photo viewer
            ================================================================ */}
        <AnimatePresence>
          {lightboxIndex !== null && selectedAlbum && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center"
              onClick={closeLightbox}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2"
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={selectedAlbum.photos[lightboxIndex]}
                alt=""
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2"
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
                {lightboxIndex + 1} / {selectedAlbum.photos.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Photography;