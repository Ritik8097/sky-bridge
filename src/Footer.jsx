

export default function Footer() {
    return (
        <>
            <footer className="overflow-hidden text-foreground p-8" style={{background:'#FCFAF8'}}>
              <div className="flex flex-col items-center justify-center pb-8 md:hidden">
                <div className="flex justify-center items-center  ">
                    <img className='h-14' src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Aayush_Wellness_1-1-02.png?v=1724413838" alt="logo" />
                </div>
                <div className="block md:hidden text-[#707070] text-[10px] text-center">A Public Listed Company on <br/>Bombay Stock Exchange [BSE Code: 539528]</div>
                    </div>
                
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-6 gap-8">
                  <div className=" flex-col items-center justify-center hidden md:flex">
                    <div className=" justify-center items-center flex">
                        <img className='h-10' src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Aayush_Wellness_1-1-02.png?v=1724413838" alt="logo" />
                    </div>
                    <div className="hidden text-[#707070] justify-center text-center  w-full text-[10px] md:flex">A Public Listed Company on <br/>Bombay Stock Exchange [BSE Code: 539528]</div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg" style={{color:'#d1a272'}}>ABOUT US</h3>
                        <ul className="mt-2 space-y-2">
                            <li><a href="/about/company-intro" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Our Story</a></li>
                            <li><a href="/about/mission-vision" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Mission & Vision</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg" style={{color:'#d1a272'}}>WELLNESS</h3>
                        <ul className="mt-2 space-y-2">
                            <li><a href="/wellness/modern-science" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Modern Science</a></li>
                            <li><a href="/ayurveda" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Ayurveda</a></li>
                            <li><a href="/wellness/health-wellness" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Health & Wellness</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg" style={{color:'#d1a272'}}>NEWSROOM</h3>
                        <ul className="mt-2 space-y-2">
                            <li><a href="/newsroom/in-the-news" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>In the News</a></li>
                            <li><a href="/newsroom/press-release" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Press Release</a></li>
                            <li><a href="/newsroom/library" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Library</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg" style={{color:'#d1a272'}}>CSR</h3>
                        <ul className="mt-2 space-y-2">
                            <li><a href="/csr-at-aayush/malnutrition" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Malnutrition</a></li>
                            <li><a href="/csr-at-aayush/health-check" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Healthcare Check</a></li>
                            <li><a href="/sustainability" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Sustainability</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg" style={{color:'#d1a272'}}>Corporate</h3>
                        <ul className="mt-2 space-y-2">
                            <li><a href="/career" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Carrer</a></li>
                            <li><a href="/privacy-policy" className="text-muted-foreground hover:text-primary" style={{color:'#707070'}}>Privacy Policy</a></li>
                            
                        </ul>
                    </div>
                   
                </div>
            </footer>
        </>
    );
}
