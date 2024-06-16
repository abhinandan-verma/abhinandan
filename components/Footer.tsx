import { FaGithub, FaLocationArrow, FaTwitter } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { Button } from "./ui/MovingBorders";
import ConnectButton from "./ConnectButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
          width={1920}
          height={1080}
        />
      </div>

      <div className="flex flex-col items-center ">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:abhinandanverma551@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex items-center md:gap-3 gap-6 justify-center">
          {socialMedia.map((info) => (
            <Link
              key={info.id}
              className="cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180  bg-black-200 rounded-lg border border-black-300"
              href={info.link}
              target="_blank"
              
            >
              <ConnectButton
                title={info.id.toString()}
                icon={info.img}
                href={info.link}
              />
            </Link>
          ))}
        </div>
      </div>
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Abhinandan
        </p>
    
    </footer>
  );
};

export default Footer;
