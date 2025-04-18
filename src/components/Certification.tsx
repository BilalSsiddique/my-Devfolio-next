import useMediaQuery from '@/hooks/useMediaQuery';
import GridCertification from '../components/GridCertification'
import { slides } from '@/data/website-data';
import MultipleSlider2 from './MultipleSlider2';
import { motion, AnimatePresence } from 'framer-motion';

const Certification = ({ gridSwitch }: any) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={gridSwitch ? 'grid' : 'slider'}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-full"
      >
        {gridSwitch ? (
          <GridCertification slides={slides} />
        ) : isAboveMediumScreens ? (
          <MultipleSlider2 />
        ) : (
          <GridCertification slides={slides} />
        )}

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent -z-10" />
      </motion.div>
    </AnimatePresence>
  );
};

export default Certification;