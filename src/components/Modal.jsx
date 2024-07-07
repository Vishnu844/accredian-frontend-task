import { useState } from "react";
import Form from "./Form";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="outline-none bg-primary text-white text-center px-4 py-3 rounded-md w-full ring-offset-2 ring-sky-500 focus:ring-2  sm:w-auto"
        onClick={() => setShowModal(true)}
      >
        Refer Now
      </button>
      {showModal ? (
        <>
          <div className="w-screen h-screen bg-gray-700 bg-opacity-50 bg-transparent overflow-x-hidden overflow-y-auto fixed inset-0 z-20">
            <div className="justify-center items-center flex flex-col">
              <Form setShowModal={setShowModal}/>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
