import useMediaQuery from '@/hooks/useMediaQuery';
import GridCertification from '../components/GridCertification'
import { slides } from '@/data/website-data';
import MultipleSlider2 from './MultipleSlider2';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineAcademicCap, HiOutlineBadgeCheck, HiOutlineSparkles } from 'react-icons/hi';

const certificationStats = [
  {
    label: "Learning focus",
    value: "Cloud, data, frontend",
    icon: HiOutlineAcademicCap,
  },
  {
    label: "Verified practice",
    value: "Python, SQL, React",
    icon: HiOutlineBadgeCheck,
  },
  {
    label: "Current direction",
    value: "DevOps and observability",
    icon: HiOutlineSparkles,
  },
];

const Certification = ({ gridSwitch }: any) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-rainbow opacity-[0.06] blur-3xl -z-10" />

      <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-3">
        {certificationStats.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-md"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-deep-blue/70 text-blue">
              <Icon className="text-xl" />
            </div>
            <div className="min-w-0">
              <p className="font-outfit text-[11px] uppercase tracking-[0.16em] text-white/35">
                {label}
              </p>
              <p className="mt-1 truncate font-outfit text-sm font-semibold text-white">
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>

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
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Certification;
