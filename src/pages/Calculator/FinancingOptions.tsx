import React from "react";
import { Link } from "react-router-dom";

const FinancingOptions: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-10 min-h-screen bg-gray-50">
      {/* Logo con link al home */}
      <Link to="/" aria-label="Go to Home">
        <img
          src="/assets/images/IdentidadSVG/LogoColor.svg"
          alt="New Gen Patio Logo"
          loading="lazy"
          className="w-32 h-auto mb-6"
        />
      </Link>

      {/* Título y subtítulo */}
      <h1 className="text-3xl font-bold text-[#0d4754] mb-2">
        Flexible Financing Options
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-xl">
        Choose the best payment plan for your outdoor project.
      </p>

      {/* Opciones de financiamiento */}
      <div className="flex flex-col sm:flex-row gap-8 items-center">
        {/* VistaFi */}
        <a
          href="https://vistafi.my.site.com/s/flow/Application_Form"
          target="_blank"
          rel="noopener noreferrer"
          className="shadow-md rounded-lg overflow-hidden border border-gray-300 hover:shadow-lg transition focus:ring-2 focus:ring-[#0d4754] focus:outline-none"
          aria-label="Apply for financing with VistaFi"
        >
          <img
            src="/assets/images/Calculator/VISTAFI.webp"
            alt="VistaFi Financing"
            loading="lazy"
            className="w-48 h-auto"
          />
        </a>

        {/* Hearth */}
        <a
          href="https://app.gethearth.com/financing/43325/74891/prequalify?homeowner_id=hom_3f04c6373d69493f901e447dbd0f07b9&homeowner_name=Priscilla&utm_campaign=43325&utm_content=general&utm_medium=mobile-email&utm_source=approve%20proposalor&utm_term=74891"
          target="_blank"
          rel="noopener noreferrer"
          className="shadow-md rounded-lg overflow-hidden border border-gray-300 hover:shadow-lg transition focus:ring-2 focus:ring-[#0d4754] focus:outline-none"
          aria-label="Apply for financing with Hearth"
        >
          <img
            src="/assets/images/Calculator/hearth.webp"
            alt="Hearth Financing"
            loading="lazy"
            className="w-48 h-auto"
          />
        </a>
      </div>
    </section>
  );
};

export default FinancingOptions;
