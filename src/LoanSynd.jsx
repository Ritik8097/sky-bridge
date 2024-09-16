
import React from 'react';
import Header from './Header';
import Footer from './Footer';


const LoanSyndication = () => {
    return (
        <>
        <Header/>
        <div className="relative">
          <div>
            <div className="relative">
              <img   loading='lazy' className=" w-full  hidden md:block" src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/loan_syndication_banner_1.jpg?v=1726050089" alt="Slide 1" />
             <img className=' w-full block md:hidden' src='https://cdn.shopify.com/s/files/1/0674/9614/9171/files/loan_syndication_banner_1.jpg?v=1726050089' />
            </div>
           
            
          </div>
          </div>
        <section className="bg-gray-100 py-12 h-[60vh] ">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Loan Syndication</h2>
                    <p className="text-gray-700 mb-4">
                        We offer loan syndication services that connect borrowers with a consortium of lenders to secure large-scale financing. 
                        Our expert team structures and arranges syndicated loans, ensuring optimal terms and conditions for both borrowers and lenders, 
                        while managing risk and enhancing funding capabilities.
                    </p>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    );
};

export default LoanSyndication;
