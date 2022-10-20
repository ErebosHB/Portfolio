import React from "react";
import { DeviceMobileIcon, InboxIcon } from "@heroicons/react/solid";



export default function Contact() {
    return(
        <section id="contact" className="relative">
            <div className="px-10 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                  <iframe
                    width="100%"
                    height="100%"
                    title="map"
                    className="absolute inset-0"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    style={{ filter: "opacity(0.7) "}}
                    src="https://www.google.com/maps/embed/v1/place?q=Konrad-Zuse-Straße,+Bremen,+Deutschland&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  />
                  
            </div>
              <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <div className="lg.w-1/2 px-6">
                        
                        <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">                           
                            Adresse
                        </h2>
                        <p className="mt-1">
                            Konrad-Zuse-Straße Nr.6 <br />
                            28359 Bremen
                        </p>                        
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                            E-Mail
                        </h2>
                        <a className="inline-flex items-center text-indigo-400 leading-relaxed">
                            <InboxIcon className="w-5 mb-1 mt-1" />
                            Mpaypal@money.com                        
                        </a>
                        <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                            Handy                            
                        </h2>
                        <p className="leading-relaxed">
                            <DeviceMobileIcon className="inline-block w-5 mb-1 mt-1" />
                            +49 17612345678
                            </p>                       
                    </div>
                  </div>
            </div>
        </section>
    );
  
}
