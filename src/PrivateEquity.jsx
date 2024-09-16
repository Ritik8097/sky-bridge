import React from 'react';
import Header from './Header';
import Footer from './Footer';


const PrivateEquity = () => {
    return (
        <>
        <Header/>
        <div className="relative">
          <div>
            <div className="relative">
              <img   loading='lazy' className=" w-full  hidden md:block" src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/WhatsApp_Image_2024-09-02_at_1.07.34_PM.jpg?v=1726050088" alt="Slide 1" />
             <img className=' w-full block md:hidden' src='https://cdn.shopify.com/s/files/1/0674/9614/9171/files/WhatsApp_Image_2024-09-02_at_1.07.34_PM.jpg?v=1726050088' />
            </div>
           
            
          </div>
          </div>
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Venture Capital and Alternative Investment Fund */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Venture Capital and Alternative Investment Fund (AIF)</h2>
                        <p className="text-gray-700 mb-4">
                            Our private equity division invests in both private and public listed companies, individually or in collaboration with other investors, venture capital funds, and Alternative Investment Funds (AIF). 
                            We focus on innovation and strategic vision across various industries, transforming potential into success and generating significant value for investors and stakeholders.
                        </p>
                    </div>

                    {/* Growth Equity */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Growth Equity</h2>
                        <p className="text-gray-700 mb-4">
                            We partner with companies poised for expansion, offering growth equity services that fuel potential and enable scaling operations, innovation, and long-term success.
                        </p>
                    </div>
                </div>

                <div className="mt-8">
                    {/* Buyout and Strategic Joint Ventures */}
                    <div className="bg-white w-full md:w-1/2 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Buyout and Strategic Joint Ventures</h2>
                        <p className="text-gray-700 mb-4">
                            Specializing in consortium investments, we form strategic alliances with leading private equity firms to acquire stakes in promising companies. 
                            Our collaborative approach allows us to pool resources, share risks, and create strategic investment opportunities for large, complex transactions. 
                            Additionally, we hold joint equity with promoters in joint ventures for specific projects, providing project funding and co-investing with other investors to drive successful outcomes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    );
};

export default PrivateEquity;
