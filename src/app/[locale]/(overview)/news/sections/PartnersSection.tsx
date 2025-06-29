import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'

export default function PartnersSection() {
    const t = useTranslations("news")
    
    // Partner logos data
    const partnerLogos = [
        {
            src: "/assets/img/partner-2.png",
            alt: "Partner logo",
            width: 109,
            height: 50,
        },
        { 
            src: "/assets/img/partner-1.png", 
            alt: "Partner logo", 
            width: 64, 
            height: 50 
        },
        {
            src: "/assets/img/partner-3.png",
            alt: "Partner logo",
            width: 126,
            height: 50,
        },
        {
            src: "/assets/img/partner-7.png",
            alt: "Partner logo",
            width: 26,
            height: 50,
        },
        { 
            src: "/assets/img/partner-4.png", 
            alt: "Partner logo", 
            width: 65, 
            height: 50 
        },
        {
            src: "/assets/img/partner-5.png",
            alt: "Partner logo",
            width: 139,
            height: 50,
        },
        { 
            src: "/assets/img/partner-6.png", 
            alt: "Partner logo", 
            width: 50, 
            height: 50 
        },
        {
            src: "/assets/img/partner-2.png",
            alt: "Partner logo",
            width: 109,
            height: 50,
        },
        { 
            src: "/assets/img/partner-1.png", 
            alt: "Partner logo", 
            width: 64, 
            height: 50 
        },
        {
            src: "/assets/img/partner-3.png",
            alt: "Partner logo",
            width: 126,
            height: 50,
        },
        {
            src: "/assets/img/partner-2.png",
            alt: "Partner logo",
            width: 109,
            height: 50,
        },
        { 
            src: "/assets/img/partner-1.png", 
            alt: "Partner logo", 
            width: 64, 
            height: 50 
        },
        {
            src: "/assets/img/partner-3.png",
            alt: "Partner logo",
            width: 126,
            height: 50,
        },
    ];
    return (
        <div className="flex flex-col md:flex-row md:justify-between max-width items-center gap-8 my-14 md:my-32">
            <h2 className="w-full md:w-[390.67px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                {t('partener_titre')}
            </h2>
            <div className="flex items-center justify-between w-full md:w-2/3 h-[50px] gap-x-3">
                <ChevronLeft className='hidden md:block w-6 h-6 text-gray cursor-pointer' />
                <div className='w-full flex flex-row v-scroll overflow-x-auto'>
                    {partnerLogos.map((logo, index) => (
                        <div key={index} className={`relative shrink-0 h-[${logo.width}px] w-[100px] md:w-[150px]`}>
                            <Image
                                className="object-contain"
                                fill
                                alt={logo.alt}
                                src={logo.src}
                            />
                        </div>
                    ))}
                </div>
                <ChevronRight className='hidden md:block w-6 h-6 text-gray cursor-pointer' />
            </div>
        </div>
    )
}
