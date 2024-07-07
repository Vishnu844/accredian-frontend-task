import addReferral from "../assets/add-refferal.png";
import notesIcon from "../assets/note-and-pen.png";
import purseIcon from "../assets/purse.png";
import Modal from "./Modal";

const Steps = () => {
  const features = [
    {
      id: 1,
      icon: addReferral,
      desc: "Submit referrals easily via our website’s referral section.",
    },
    {
      id: 2,
      icon: notesIcon,
      desc: "Earn rewards once your referral joins an Accredian program.",
    },
    {
      id: 3,
      icon: purseIcon,
      desc: "Both parties receive a bonus 30 days after program enrollment.",
    },
  ];
  return (
    <section className="bg-primary-light py-7">
      <div className="flex flex-col items-center gap-16 max-w-screen-xl mx-auto text-gray-600 px-6 lg:px-28">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-gray-800 text-3xl text-center font-semibold sm:text-2xl">
            How Do I <span className="text-primary">Refer?</span>
          </h3>
        </div>
        <div>
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => {
              return (
                <li key={item.id} className="space-y-3">
                  <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center">
                    <img src={item.icon} className="w-6 h-6 object-contain" />
                  </div>
                  <p className="text-text-primary text-center">{item.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <Modal />
      </div>
    </section>
  );
};

export default Steps;
