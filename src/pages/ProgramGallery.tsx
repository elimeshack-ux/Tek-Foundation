import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { galleryData } from '../data/galleryData';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function ProgramGallery() {
  const { programId } = useParams<{ programId: string }>();
  
  if (!programId || !galleryData[programId]) {
    return <Navigate to="/our-work" replace />;
  }

  const program = galleryData[programId];

  return (
    <>
      <SEO 
        title={`${program.name} Gallery`} 
        description={`View photos from the ${program.name} program.`}
      />
      
      {/* Header */}
      <section className="bg-forest pt-32 pb-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/our-work" className="inline-flex items-center text-cream hover:text-white transition-colors mb-8">
            <ArrowLeft size={20} className="mr-2" /> Back to Our Work
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              {program.name}
            </h1>
            <div className="w-24 h-1 bg-gold rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {program.photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl overflow-hidden shadow-md h-72 cursor-pointer group bg-gray-200"
              >
                <img 
                  src={photo} 
                  alt={`${program.name} photo ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
