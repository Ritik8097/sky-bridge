import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from './Header';
import Footer from './Footer';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const imageUrl = 'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Picture1.png?v=1725104411';

const ImageContentLayout = ({ imageUrl, content }) => {
  useEffect(() => {
    // GSAP ScrollTrigger animation for image
    gsap.fromTo(
      '.image',
      { opacity: 0, scale: 0.9, y: 100 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.image',
          start: 'top 75%',  // Adjust the start point as needed
          end: 'bottom top',
          scrub: true,
          markers: false,
        }
      }
    );

    // GSAP ScrollTrigger animation for content
    gsap.fromTo(
      '.content',
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: 'power3.out',
       
      }
    );
  }, []);

  return (
    <div className="flex gap-5 overflow-hidden md:max-w-[1328px] w-full flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6 p-6">
      <div className="md:w-[30%] w-full">
        <img  
          src={imageUrl} 
          alt="Devang Master" 
          className="image w-full object-cover rounded-lg shadow-lg h-[250px] md:h-auto object-top transition-transform duration-500 hover:scale-105" 
        />
      </div>
      <div className="flex-2 content text-justify md:text-justify md:w-[70%] w-full">
        {content}
      </div>
    </div>
  );
};

const Leadership = () => {
  const content = (
    <div>
      <h1 className="text-3xl text-center md:text-justify font-bold mb-4">Devang Master: Visionary Leader and Philanthropist</h1>
      <p className="text-gray-700 text-justify mb-4">
        Devang Master, affectionately referred to as 'DM' by his colleagues and acquaintances, serves as the visionary Founder and Chairman of the Skybridge Incap Group. His business philosophy is refreshingly uncomplicated, rooted in the enduring principles of 'common sense.' His remarkable journey began during his college years when he became enthralled by the allure of the stock market and immersed himself in the dynamic environment of the Bombay Stock Exchange. This initial fascination served as the foundation for a dynamic career in finance, culminating in achieving an MBA in finance.
      </p>
      <p className="text-gray-700 mb-4">
        With an impressive tenure of over three decades, Devang Master, aka DM, has established himself as a leading authority in investment, finance, and strategic business restructuring, distinguished by his unparalleled expertise and unique ability to navigate complex financial landscapes. His skills cover a wide range, from securing bank financing and managing debt to leading business expansions, takeovers, and entering international markets.
      </p>
      <p className="text-gray-700 mb-4">
        DM is a veritable maestro in fundraising, masterfully orchestrating a symphony of public issues, rights issues, private placements, ADRs, and GDRs to amplify shareholder value. In the vital sphere where finance serves as the lifeblood of business, DM stands out as the preeminent authority, akin to a blood bank that sustains the very essence of commerce. His profound influence transcends the realm of finance, extending to deftly navigating complex corporate litigations and tax complexities, leaving an indelible mark across a wide range of business dimensions.
      </p>
      <p className="text-gray-700 mb-4">
        Under the visionary leadership of Devang Master, Skybridge Incap has flourished across diverse sectors, including Information Technology, Financial Services, Management Consultancy, Renewable Energy, Pharma, Real Estate, and Artificial Intelligence. Beyond his exceptional business acumen, DM has also demonstrated a profound commitment to philanthropy, actively championing various non-governmental organizations (NGOs) focusing on healthcare, women's and children's welfare, old age homes, and orphanages. This commitment has enabled him to leverage his business expertise to drive meaningful social impact, fostering a culture of giving and community engagement within Skybridge Incap. This multifaceted approach has enabled Skybridge Incap to not only excel in its core business but also make a positive impact on society.
      </p>
      <p className="text-gray-700">
        At the core of Devang Master's persona, aka DM, lies a distinctive amalgamation of exceptional business instincts, profound financial knowledge, and an unwavering commitment to social responsibility, cementing his status as a pivotal and influential figure in the corporate world.
      </p>
    </div>
  );

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <ImageContentLayout imageUrl={imageUrl} content={content} />
      </div>
      <Footer />
    </>
  );
};

export default Leadership;
