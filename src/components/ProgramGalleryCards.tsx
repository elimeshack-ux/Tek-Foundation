import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { galleryList } from '../data/galleryData';
import { ArrowRight } from 'lucide-react';

export default function ProgramGalleryCards() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-forest mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryList.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/work/gallery/${program.id}`} className="group block relative rounded-2xl overflow-hidden h-80 shadow-lg hover:shadow-xl transition-all">
                <img 
                  src={program.coverImage} 
                  alt={program.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-heading font-bold text-2xl mb-2">{program.name}</h3>
                  <div className="text-gold font-medium flex items-center group-hover:translate-x-2 transition-transform">
                    View Gallery <ArrowRight size={18} className="ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
