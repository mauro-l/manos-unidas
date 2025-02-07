import { useState } from "react";
import Card from "../../common/cards/Card.jsx";
import useActivities from "@/hooks/useActivities.js";
import SearchInput from "../../common/forms/SearchInput.jsx";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { Formik } from "formik";
import { Form } from "react-router-dom";
import { options } from "../../../utils/activityOptions.js";
import { country } from "../../../utils/countryOptions.js";
import { skills } from "../../../utils/skillsOptions.js";

const ActivitiesListVol = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const activitiesPerPage = 6;

  const { activities } = useActivities();

  const indexOfLastActivity = currentPage * activitiesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
  const currentActivities = activities.slice(
    indexOfFirstActivity,
    indexOfLastActivity
  );

  const totalPages = Math.ceil(activities.length / activitiesPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <section className="container lg:mx-auto">
      <article className="lg:hidden">
        <div className="-mt-8">
          <SearchInput />
        </div>
        <div>
          <div className="my-6 text-xs divider text-base-400">
            Se encontraron
            <span className="-mx-2 font-bold">
              {activities ? activities.length : "muchas"}
            </span>
            oportunidades
          </div>
        </div>
      </article>

      {/*  */}
      <article className="lg:flex lg:gap-6">
        {/* filtros */}
        <div className="hidden w-2/5 space-y-6 lg:block">
          <SearchInput />
          <div className="p-6 space-y-6 border rounded-lg border-base-300">
            <h2 className="text-2xl font-bold leading-6 text-neutral ">
              Categorías
            </h2>
            <div className="flex flex-wrap gap-3">
              {options.map((opt, index) => (
                <div
                  key={index}
                  className="cursor-pointer badge badge-ghost badge-outline text-base-400"
                >
                  {opt.label}
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 space-y-6 border rounded-lg border-base-300">
            <h2 className="text-2xl font-bold leading-6 text-neutral ">
              Ubicaciones
            </h2>
            <div className="form-control">
              {country.map((cont) => (
                <label key={cont.value} className="cursor-pointer label">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm checkbox-primary"
                  />
                  <span className="label-text">{cont.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="p-6 space-y-6 border rounded-lg border-base-300">
            <h2 className="text-2xl font-bold leading-6 text-neutral ">
              Habilidades requeridas
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="cursor-pointer badge badge-ghost badge-outline text-base-400"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*  */}
        <div className="w-full space-y-5">
          <Formik>
            <Form className="flex items-center gap-6">
              <span className="items-center hidden w-full gap-2 lg:flex lg:flex-nowrap">
                <div className="text-sm text-base-400 text-nowrap">
                  Se encontraron{" "}
                  <span className="font-bold">
                    {" "}
                    {activities ? activities.length : "muchas"}{" "}
                  </span>
                  oportunidades
                </div>
                <div className="w-full m-0 mt-0.5 divider"></div>
              </span>
              <div className="flex items-center gap-4 lg:w-full lg:max-w-max">
                <div className="lg:flex lg:w-full lg:max-w-max lg:items-center lg:gap-4">
                  <label htmlFor="filter" className="text-sm text-nowrap">
                    Ordenar por
                  </label>
                  <select
                    name="filter"
                    id="filter"
                    className="w-full bg-white border-base-300 select select-bordered min-w-20"
                    placeholder="Fecha de publicación"
                    defaultValue={"no hay"}
                  >
                    <option disabled value={"no hay"}>
                      Fecha de publicación
                    </option>
                    <option value={"eso"}>Fecha de Eso</option>
                  </select>
                </div>

                <button className="mt-6 text-secondary-content btn btn-secondary lg:hidden">
                  Filtros
                  <HiOutlineAdjustmentsVertical className="w-5 h-5" />
                </button>
              </div>
            </Form>
          </Formik>
          {/* cards */}
          <div className="flex flex-col items-center w-full space-y-6">
            {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"> */}
            <div className="flex flex-wrap w-full gap-6">
              {currentActivities.map((activity) => (
                <Card key={activity._id} activity={activity} />
              ))}
            </div>

            <div className="flex items-center justify-center space-x-2">
              <button
                className={`btn btn-sm btn-outline text-primary ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handlePrevious}
                disabled={currentPage === 1}
              >
                Anterior
              </button>
              <div className="btn-group">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    className={`btn btn-sm ${
                      currentPage === index + 1
                        ? "btn-active bg-primary text-white"
                        : ""
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <button
                className={` btn btn-sm btn-outline text-primary ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ActivitiesListVol;

