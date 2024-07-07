/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import heroImage from "../assets/hero-image.png";
import money from "../assets/money.png";
import Modal from "./Modal";

const Hero = () => {
  return (
    <>
      <section className="mt-10 flex flex-col items-center gap-7 md:px-6 lg:px-28">
        <div className="hidden h-16 text-sm justify-between md:hidden lg:flex">
          <button className="px-8 bg-primary-light rounded-l-full active:text-primary">
            Refer
          </button>
          <button className="px-8 bg-primary-light active:text-primary">
            Benefits
          </button>
          <button className="px-8 bg-primary-light active:text-primary">
            FAQs
          </button>
          <button className="px-8 bg-primary-light rounded-r-full active:text-primary">
            Support
          </button>
        </div>
        <div className="max-w-screen-xl pb-4 px-4 items-center lg:flex">
          <div className="space-y-4 flex-1 sm:text-center lg:text-left">
            <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
              Let's Learn &<span className="text-primary"> Earn</span>
            </h1>
            <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
              Unlock the power of sharing with Accredian’s referral program,
              where you can earn rewards and incentives for sharing your
              positive experiences with others, and help us grow our community
              of like-minded professionals who value quality education and
              training.
            </p>
            <div>
              <p className="text-gray-800 py-3">
                Get a chance to win up-to
                <span className="text-lg font-semibold text-primary">
                  {" "}
                  Rs. 15,000
                </span>
              </p>
              <Modal />
            </div>
          </div>
          <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
            <img
              src={heroImage}
              alt="hero-image"
              className="relative z-0 w-full mx-auto sm:w-10/12  lg:w-full"
            />
            <img
              src={money}
              alt="money"
              className="w-24 relative z-10 bottom-24 left-10"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
