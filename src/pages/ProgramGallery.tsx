import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { galleryData } from '../data/galleryData';
import { ArrowLeft, Instagram, ArrowRight } from 'lucide-react';
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
        canonical={`https://www.tekfoundation.org/work/gallery/${program.id}`}
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
      <section className="pt-20 pb-10 bg-cream/30">
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

            {/* CTA Card inside the grid */}
            <motion.a
              href="https://instagram.com/tek_foundation"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: program.photos.length * 0.05 }}
              className="rounded-2xl overflow-hidden shadow-md h-72 flex flex-col justify-center items-center text-center p-6 bg-forest text-white group hover:shadow-xl transition-all border border-gold/20"
            >
              <div className="bg-white/10 p-4 rounded-full group-hover:bg-gold/20 group-hover:scale-110 transition-all mb-4">
                <Instagram size={36} className="text-gold" />
              </div>
              <h4 className="font-heading font-bold text-xl mb-2">View More Photos</h4>
              <p className="text-cream/80 text-sm mb-4 max-w-xs">
                Check out our live updates and stories on Instagram
              </p>
              <span className="text-gold font-medium flex items-center group-hover:translate-x-1 transition-transform">
                Visit Instagram <ArrowRight size={16} className="ml-1" />
              </span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* View More on Instagram CTA Section */}
      <section className="pb-20 bg-cream/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gold/10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-forest mb-4">
              Want to see more moments?
            </h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Follow our journey on Instagram. We share live updates, stories, and more behind-the-scenes moments from {program.name} and other initiatives.
            </p>
            <a 
              href="https://instagram.com/tek_foundation" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-gold hover:bg-yellow-500 text-forest px-8 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              See More Photos on Instagram
              <Instagram size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
