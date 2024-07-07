/* eslint-disable react/jsx-key */
import FAQCard from "./FAQCard";
import "./faqs.css";

const FAQs = () => {
  const faqsList = [
    {
      q: "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
      a: "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work",
    },
    {
      q: "What is the minimum system configuration required?",
      a: "The minimum system configuration required is CPU of intel i5 any generation (latest is preferable) 8GB RAM, 512 SSD, Any OS (Windows, Mac, Linux)",
    },
  ];

  return (
    <section className="py-8 px-6 lg:px-28">
      <div className="flex flex-col gap-9 items-center max-w-screen-xl mx-auto">
        <div className="max-w-lg">
          <h3 className="text-3xl font-semibold text-center sm:text-2xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h3>
        </div>
        <div className="grid faq-columns gap-8 justify-start lg:gap-0">
          <div className="flex flex-col items-center gap-4 text-xs font-semibold">
            <button className="w-44 h-10 text-gray-400 border-2 border-gray-400 rounded-md active:text-primary active:border-0 active:shadow-md">
              Eligibility
            </button>
            <button className="w-44 h-10 text-gray-400 border-2 border-gray-400 rounded-md active:text-primary active:border-0 active:shadow-md">
              How To Use?
            </button>
            <button className="w-44 h-10 text-gray-400 border-2 border-gray-400 rounded-md active:text-primary active:border-0 active:shadow-md">
              Terms & Conditions
            </button>
          </div>
          <div>
            {faqsList.map((item, idx) => (
              <FAQCard key={idx} idx={idx} faqsList={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
