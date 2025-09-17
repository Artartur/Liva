'use client';

import { useState } from "react";
import Image from "next/image";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = ["/banner-1.webp", "/banner-2.webp", "/banner-3.webp"];

  const goToPrevious = () => {
    setCurrentSlide(prev => prev === 0 ? images.length - 1 : prev - 1);
  };

  const goToNext = () => {
    setCurrentSlide(prev => prev === images.length - 1 ? 0 : prev + 1);
  };

  return (
    <div className="relative max-w-4xl mx-auto bg-gray-100 overflow-hidden xl:max-w-full">
      <div className="relative h-[424px] overflow-hidden xl:h-[751px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${index === currentSlide ? 'translate-x-0' :
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
              }`}
          >
            <div className="absolute top-20 px-5 text-white space-y-4 z-10 xl:top-56 xl:left-44">
              <small className="font-medium xl:text-sm xl:-mb-10">PRÉ LANÇAMENTO</small>
              <h1 className="my-4 text-[32px] xl:text-[80px]">Barra View</h1>
              <small className="text-black font-medium bg-primary-400 p-2 rounded-sm xl:text-lg">Apartamento com 3 dormitórios sendo 1 suíte</small>
            </div>
            <div className="absolute flex-center bottom-36 h-11 w-32 ms-5 z-10 xl:left-44 xl:top-[450px]">
              <button className="full-size border-2 text-sm text-white font-medium rounded-sm hover:bg-white hover:text-black hover:border-none">
                SAIBA MAIS
              </button>
            </div>
            <Image
              src={image}
              alt={"banner"}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <button
        className="absolute row justify-center items-center bottom-0 left-5 p-2 w-16 h-16 bg-black/60 cursor-pointer xl:top-1/2 xl:left-0 xl:right-auto xl:-translate-y-1/2"
        aria-label="Imagem anterior"
        onClick={goToPrevious}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.60321 12.3568L6.17441 15.9344L7.08321 15.0256L3.69761 11.64L19.96 11.64L19.96 10.36L3.69761 10.36L7.08321 6.97445L6.17441 6.06565L2.60321 9.64325C2.24366 10.0033 2.0417 10.4912 2.0417 11C2.0417 11.5089 2.24366 11.9968 2.60321 12.3568Z" fill="white" />
        </svg>
      </ button>

      <button
        onClick={goToNext}
        className="absolute flex-center bottom-0 left-[84px] p-2 w-16 h-16 bg-black cursor-pointer xl:top-1/2 xl:right-0 xl:left-auto xl:-translate-y-1/2"
        aria-label="Próxima imagem"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.3968 9.64315L15.8256 6.06555L14.9168 6.97435L18.3024 10.36H2.04001V11.64H18.3024L14.9168 15.0256L15.8256 15.9344L19.3968 12.3568C19.7564 11.9968 19.9583 11.5088 19.9583 11C19.9583 10.4911 19.7564 10.0032 19.3968 9.64315Z" fill="white" />
        </svg>
      </button>
    </div>
  )
}
