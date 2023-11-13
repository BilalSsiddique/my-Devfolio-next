import useMediaQuery from '@/hooks/useMediaQuery';
import GridCertification from '../components/GridCertification'
import { slides } from '@/data/website-data';
import MultipleSlider from './MultipleSlider';
import MultipleSlider2 from './MultipleSlider2';




const Certification = ({ gridSwitch }: any) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <>
      {gridSwitch ? (
        <GridCertification slides={slides} />
      ) : isAboveMediumScreens ? (
        <MultipleSlider2/>
      ) : (
        <GridCertification slides={slides} />
      )}

      
    </>
  );
};

export default Certification;