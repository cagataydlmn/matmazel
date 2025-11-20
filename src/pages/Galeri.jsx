import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import image1 from '../assets/WhatsApp Image 2025-11-17 at 23.44.44.jpeg';
import image2 from '../assets/WhatsApp Image 2025-11-17 at 23.44.44 (1).jpeg';

const Galeri = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  // Galeri öğeleri - farklı aspect ratio'lar için masonry layout
  const galleryItems = [
    { id: 1, image: image1, aspect: 'tall' },
    { id: 2, image: image2, aspect: 'wide' },
    { id: 3, image: image1, aspect: 'square' },
    { id: 4, image: image2, aspect: 'tall' },
    { id: 5, image: image1, aspect: 'wide' },
    { id: 6, image: image2, aspect: 'square' },
    { id: 7, image: image1, aspect: 'tall' },
    { id: 8, image: image2, aspect: 'wide' },
    { id: 9, image: image1, aspect: 'square' },
    { id: 10, image: image2, aspect: 'tall' },
    { id: 11, image: image1, aspect: 'wide' },
    { id: 12, image: image2, aspect: 'square' },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="py-32">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1
              className="font-heading text-3xl md:text-5xl mb-8 tracking-wider font-light"
            variants={fadeInUp}
          >
            Galeri
          </motion.h1>
          <motion.div
            className="w-32 h-px bg-champagne mx-auto mb-12"
            variants={fadeInUp}
          />
          <motion.p
            className="text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light"
            variants={fadeInUp}
          >
            Çarpıcı dönüşümler ve güzel yaratımlar portföyümüzü keşfedin
          </motion.p>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-6">
        <motion.div
          className="columns-1 md:columns-2 lg:columns-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`mb-6 break-inside-avoid bg-white/5 border border-white/10 hover:border-champagne/50 transition-all duration-500 cursor-pointer overflow-hidden group ${
                item.aspect === 'tall' ? 'aspect-[3/4]' :
                item.aspect === 'wide' ? 'aspect-[4/3]' :
                'aspect-square'
              }`}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative w-full h-full">
                <img
                  src={item.image}
                  alt={`Galeri ${item.id}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                <div className="absolute inset-0 border border-transparent group-hover:border-champagne/30 transition-colors duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Instagram CTA */}
      <section className="mt-32 py-32 bg-gradient-to-b from-black to-[#0a0a0a] relative">
        <div className="absolute inset-0 border-t border-b border-white/5"></div>
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-heading text-4xl md:text-6xl mb-6 tracking-wider font-light">
              Çalışmalarımızı Takip Edin
            </h2>
            <div className="w-24 h-px bg-champagne mx-auto mb-8"></div>
            <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Instagram'da en son yaratımlarımızı ve dönüşümlerimizi görün
            </p>
            <a
              href="https://www.instagram.com/ekipmatmazelizmit"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3 px-10 py-4 border border-champagne/50 text-champagne hover:bg-champagne hover:text-black transition-all duration-500 tracking-wider text-sm font-light relative overflow-hidden"
            >
              <span className="relative z-10">Instagram'ımızı Ziyaret Et</span>
              <svg className="w-4 h-4 relative z-10 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
              <div className="absolute inset-0 bg-champagne transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="max-w-6xl max-h-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={`Galeri ${selectedImage.id}`}
                className="max-w-full max-h-[90vh] object-contain border border-white/20"
              />
              <button
                className="absolute top-6 right-6 text-white/80 hover:text-white text-4xl font-light transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Kapat"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Galeri;



