import arrowRight from "../assets/right-arrow.png";
import Table from "./Table";
import downArrow from "../assets/down-arrow.png";
import Modal from "./Modal";

const Benefits = () => {
  const programs = [
    {
      id: 1,
      title: "Product Management",
    },
    {
      id: 2,
      title: "Strategy & Leadership",
    },
    {
      id: 3,
      title: "Business Management",
    },
    {
      id: 4,
      title: "Fintech",
    },
    {
      id: 5,
      title: "Senior Management",
    },
    {
      id: 6,
      title: "Data Science",
    },
    {
      id: 7,
      title: "Digital Transformation",
    },
    {
      id: 8,
      title: "Business Analytics",
    },
  ];
  return (
    <section className="flex flex-col gap-8 my-20 px-1 lg:px-28 md:items-center">
      <div>
        <h2 className="text-3xl font-semibold sm:text-2xl text-center">
          What are the Referral <span className="text-primary">Benefits?</span>
        </h2>
      </div>
      <div className="flex gap-6 items-center">
        <div className="hidden w-56 shadow-md rounded-b-lg lg:block">
          <div className="bg-primary px-4 py-2 rounded-t-lg">
            <div className="flex items-center justify-between">
              <p className="text-white text-sm font-semibold">ALL PROGRAMS</p>
              <img
                src={arrowRight}
                alt="right-arrow"
                className="w-4 h-4 object-contain"
              />
            </div>
          </div>
          <ul className="divide-y divide-gray-400">
            {programs.map((program) => {
              return (
                <li className="mx-2 p-2" key={program.id}>
                  <div className="flex justify-between">
                    <p className=" text-sm font-semibold">
                      {program.title.toUpperCase()}
                    </p>
                    <img
                      src={arrowRight}
                      alt="right-arrow"
                      className="w-4 h-4 object-contain"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col items-end flex-shrink">
          <div className="flex gap-3 items-center m-2">
            <label htmlFor="enrolled" className="text-sm">
              Enrolled
            </label>
            <label
              htmlFor="enrolled"
              className="relative inline-block h-6 w-12 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-primary"
            >
              <input type="checkbox" id="enrolled" className="peer sr-only" />

              <span className="absolute inset-y-0 start-0 m-1 size-4 rounded-full bg-white transition-all peer-checked:start-6"></span>
            </label>
          </div>
          <Table />
          <button className="flex items-center gap-2 mt-5 mr-2 py-2 px-4 font-medium text-gray-400 border-2 border-gray-300 rounded-md">
            <p>Courses</p>
            <img src={downArrow} alt="down-arrow" width={10.5} height={6} />
          </button>
        </div>
      </div>
      <div>
        <Modal />
      </div>
    </section>
  );
};

export default Benefits;
