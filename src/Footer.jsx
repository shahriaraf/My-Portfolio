import FuzzyText from './FuzzyText';



const Footer = () => {
  return (

  
      <div  className="bg-gradient-to-r from-black via-[#06202B] to-[#1e3640] text-[#7AE2CF] border border-[#1e3640] rounded-t-full mt-20 py-12 pt-24 text-center flex justify-center">
        <FuzzyText
          baseIntensity={0.08}
          className="text-sm md:text-lg mb-2 mx-5"
        >
          &copy; {new Date().getFullYear()} Shoumo Shahriar Araf. All rights reserved.
        </FuzzyText>
      </div>
  
  );
};

export default Footer;
