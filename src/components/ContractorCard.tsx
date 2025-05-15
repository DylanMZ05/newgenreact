import React from "react";

const ContractorCard: React.FC = () => {
  const redirectToForm = () => {
    window.open("https://dylanmz05.github.io/New-Gen-Patio-Contract-Form/", "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-red-800 to-purple-800 text-center text-white p-6 rounded-lg shadow-lg w-full mt-6 md:mt-10 md:h-100 md:max-w-md">
      <p className="text-2xl font-bold">ARE YOU A CONTRACTOR?</p>
      <p className="text-xl text-white/80">We are always open to teamwork.</p>
      <p className="text-xl font-bold">If you have a project at hand, you need help, and you want to delegate that outdoor space to professionals.</p>
      <button
        onClick={redirectToForm}
        className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-full font-semibold hover:bg-orange-600 transition-all"
      >
        WRITE US NOW!
      </button>
    </div>
  );
};

export default ContractorCard;