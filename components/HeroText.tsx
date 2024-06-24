import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import Link from 'next/link'

function HeroText() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
        <TextGenerateEffect
        words="Transforming Ideas into Scalable Softwares"
        className="text-center text-[40px] md:text-5xl lg:text-6xl"
        />
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            Leverage the power of canvas to create a beautiful hero section
        </p>
        <Link href="#about">
            <MagicButton
                title="Show My Works"
                icon={<FaLocationArrow />}
                position="middle"
            />
        </Link>
    </WavyBackground>
  )
}

export default HeroText