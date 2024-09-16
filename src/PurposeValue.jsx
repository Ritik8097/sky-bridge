import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PurposeAndValues = () => {
    return (
        <>
        <Header/>
        <section className="bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Purpose and Values</h2>
                    <p className="text-gray-700">
                        Our commitment to excellence and trust is at the core of everything we do, 
                        driving us to create meaningful value for our clients and employees.
                    </p>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    );
};

export default PurposeAndValues;
