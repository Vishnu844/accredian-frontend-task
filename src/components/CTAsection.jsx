import cta from "../assets/get-in-touch.png";

const CTAsection = () => {
  return (
    <section className="py-14 px-6 lg:px-28">
      <div className="max-w-screen-xl mx-auto gap-x-12 justify-between items-center md:flex bg-primary p-8 rounded-lg">
        <div className="max-w-xl flex gap-4 text-white">
          <img
            src={cta}
            alt="get-in-touch"
            width={55}
            height={55}
            className="object-contain"
          />
          <div>
            <h3 className="text-base font-semibold sm:text-xl">
              Want to delve deeper into the program?
            </h3>
            <p className="hidden mt-3 md:block">
              Share your details to receive expert insights from our program
              team!
            </p>
          </div>
        </div>
        <div className="flex-none mt-4 md:mt-0">
          <span className="relative inline-block py-2 px-4 text-primary font-medium bg-white float-right bottom-4 active:bg-primary-light rounded-lg lg:float-none lg:static lg:bottom-0">
            Get in Touch {">"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTAsection;
