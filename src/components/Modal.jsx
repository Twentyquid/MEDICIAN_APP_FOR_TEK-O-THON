import React from "react";
import { motion } from "framer-motion";

function Modal({ closeModal }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute inset-0 backdrop-blur-md z-50"
      >
        <div className="flex justify-between px-4 py-3">
          <h3 className="text-lg font-semibold">Book an appointment</h3>
          <button onClick={() => closeModal()}>
            <i className="ri-close-circle-fill text-5xl"></i>
          </button>
        </div>
        <div className="w-full h-1/2 flex flex-col justify-center items-center">
          <div>
            <p>time:</p>
            <input className="bg-violet-100" type="text" />
          </div>
          <div>
            <p>time:</p>
            <input className="bg-violet-100" type="text" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Modal;
