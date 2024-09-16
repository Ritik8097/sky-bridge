

import Footer from "./Footer"

import Header from "./Header"




function About() {
  

  return (
    <>
    <Header /> 
    <div className="relative">
          <div>
            <div className="relative">
              <img   loading='lazy' className=" w-full  hidden md:block" src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/WhatsApp_Image_2024-09-02_at_3.04.07_PM.jpg?v=1726050088" alt="Slide 1" />
             <img className=' w-full block md:hidden' src='https://cdn.shopify.com/s/files/1/0674/9614/9171/files/WhatsApp_Image_2024-09-02_at_3.04.07_PM.jpg?v=1726050088' />
            </div>
           
            
          </div>
          </div>
          <div className="bg-[#efefef] w-full">
    <div className="max-w-4xl mx-auto p-6   ">
    <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">About Us</h1>
    <p className="text-lg text-gray-700 mb-6">
      At <strong className="">SKY Bridge Incap Advisory LLP</strong>, we don’t just invest – we ignite transformation. As architects of financial innovation, we design bespoke solutions that propel businesses to unprecedented heights of growth and value creation.
    </p>
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Approach:</h2>
    <ul className="list-disc list-inside space-y-4 mb-6">
      <li>
        <strong className="">Versatile Investment Strategy:</strong> We expertly navigate both private and public sectors, operating independently or through influential consortiums to deliver tailored investment strategies.
      </li>
      <li>
        <strong className="">Strategic Partnerships:</strong> As equity partners, we align with visionary promoters and investors, leveraging our combined expertise to tackle diverse challenges and capitalize on emerging opportunities.
      </li>
      <li>
        <strong className="">Market Expansion:</strong> Our collaborative approach unlocks new growth avenues, enhancing capabilities and aligning with shared aspirations for exponential success.
      </li>
    </ul>
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Beyond Investments:</h2>
    <ul className="list-disc list-inside space-y-4">
      <li>
        <strong className="">M&A Advisory Excellence:</strong> Our seasoned experts provide incisive insights and guidance, ensuring every merger and acquisition is strategically sound and impactful.
      </li>
      <li>
        <strong className="">Capital Markets Mastery:</strong> We adeptly manage the complexities of financial markets, optimizing capital structures to maximize strategic advantage.
      </li>
    </ul>
  </div>
  </div>
  <Footer />
  </>
  )
}

export default About