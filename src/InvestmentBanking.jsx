import React from 'react'
import Header from './Header'
import Footer from './Footer'

function InvestmentBanking() {
  return (
    <>
    <Header/>
    <div className="relative">
          <div>
            <div className="relative">
              <img   loading='lazy' className=" w-full  hidden md:block" src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/investment_bankilng_solution_banner.jpg?v=1725253607" alt="Slide 1" />
             <img className=' w-full block md:hidden' src='https://cdn.shopify.com/s/files/1/0674/9614/9171/files/investment_bankilng_solution_banner.jpg?v=1725253607' />
            </div>
           
            
          </div>
          </div>
    <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* M&A Advisory */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">M&A Advisory</h2>
                        <p className="text-gray-700 mb-4">
                            At SKY Bridge Incap Advisory LLP, we offer specialized M&A services tailored to meet your strategic objectives. 
                            Our expert team provides strategic advisory to navigate complex transactions and conducts accurate valuation assessments for informed decision-making. 
                            We ensure thorough analysis and compliance with due diligence coordination, offering clarity throughout the process. 
                            Our negotiation support facilitates favorable outcomes, and our regulatory and compliance advisory services keep you updated with the latest regulations. 
                            With our commitment to excellence, we ensure successful transactions that deliver sustainable value.
                        </p>
                    </div>

                    {/* Capital Markets */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Capital Markets</h2>
                        <p className="text-gray-700 mb-4">
                            We provide independent advice and support for a wide range of capital market transactions, ensuring efficient and effective execution. 
                            Our expertise includes planning and navigating the IPO process, offering custom solutions for private placements and rights issues, 
                            and executing strategic buybacks to optimize shareholder value. With our guidance, your equity market activities will enhance your financial standing 
                            and strengthen your market presence, positioning your business for long-term success.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
   </>
  )
}

export default InvestmentBanking
