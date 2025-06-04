import { div } from 'framer-motion/client';
import FuzzyText from './FuzzyText';



const Footer = () => {
  return (

    <div>
      <div className="bg-black text-[#7AE2CF] mt-20 py-12 pt-24 text-center flex justify-center md:hidden">
        <FuzzyText
          baseIntensity={0.06}
          fontSize='12px'
          className="w-1/2 mb-2 mx-5"
        >
          &copy; {new Date().getFullYear()} Shoumo Shahriar Araf. All rights reserved.
        </FuzzyText>
      </div>
      <div className="bg-black text-[#7AE2CF] mt-20 py-12 pt-24 text-center md:flex justify-center hidden">
        <FuzzyText
          baseIntensity={0.08}
          fontSize='18px'
          className="w-1/2 mb-2 mx-5"
        >
          &copy; {new Date().getFullYear()} Shoumo Shahriar Araf. All rights reserved.
        </FuzzyText>
      </div>
    </div>


  );
};

export default Footer;
