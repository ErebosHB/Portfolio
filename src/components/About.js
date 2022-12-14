import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, ich bin Yannick
            <br className="hidden lg:inline-block" />Ich mache gerne
            sport.
          </h1>
          <p className="mb-8 leading-relaxed">
            Ich spiele Handball in Habenhausen und gehe nebenbei ins Fitnessstudio,
            außerdem spiele ich gerne Fifa und ziehe euch alle ab :D Wenn du dein 
            können unter Beweis stellen willst dann kontaktier mich, ansonsten 
            findest du mich bis zum 28.10.2022 unter der angegebenen <a href="#contact" 
            className="underline text-green-100">
            Adresse
               </a>
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Arbeite mit mir
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Sieh dir an was ich so gemacht habe
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
