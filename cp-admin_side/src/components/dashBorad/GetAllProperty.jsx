/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../NavBar";
import { Link, useNavigate } from "react-router-dom";
import DeleteProperty from "../Property-submission/DeleteProperty";

function GetAllProperty() {
  const [properties, setProperties] = useState([]);
  const [, setSortedProperties] = useState([]);
  const [sortOption, setSortOption] = useState("all");
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 10;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        let response;
        if (sortOption === "all") {
          response = await axios.get("/api/property/properties");
          console.log("response in iffff ", response.data);
        } else {
          response = await axios.get(
            `/api/property/properties?sort=${sortOption}`
          );
          console.log("response in else ", response.data);
        }
        const sortedData = sortProperties(response.data); // Sort the fetched properties
        setProperties(sortedData);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, [sortOption]);

  const sortProperties = (data) => {
    let sortedData = [...data];
    if (sortOption === "new") {
      sortedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortOption === "old") {
      sortedData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }
    return sortedData;
  };

  const handleDelete = (deletedId) => {
    setProperties(properties.filter((property) => property._id !== deletedId));
  };

  const indexOfLastProperty = currentPage * propertiesPerPage;

  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;

  const currentProperties = properties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="bg-slate-100">
      <NavBar />
      <div className="flex justify-center items-center my-2 ">
        <h1 className=" text-4xl font-bold">All List of Properties</h1>
      </div>
      <div className="flex justify-center mt-4 absolute right-16">
        <label
          htmlFor="sortSelect"
          className="mr-2  text-black font-medium text-lg items-center px-2 mt-1"
        >
          Sort by:
        </label>
        <select
          id="sortSelect"
          value={sortOption}
          onChange={handleSortChange}
          className="p-2 border border-gray-400 rounded bg-red-400 text-white font-medium"
        >
          <option value="all" className="hover:bg-inherit">
            All
          </option>
          <option value="new">Newest</option>
          <option value="old">Oldest</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 ">
        {currentProperties.map((properties, index) => (
          <div
            className="flex  m-4 rounded-lg shadow-md bg-white bg-opacity-25"
            key={index}
          >
            <div className="">
              <img
                src={`/api/uploads/${properties.featureImage}`}
                alt={`Property ${index}`}
                className="h-full w-48 rounded-lg"
              />
            </div>
            <div className="mx-4 items-center ">
              <div className="flex  justify-center items-center">
                <p className="bg-gray-600 text-white p-2 text-sm mx-1 rounded-md  ">
                  {properties.status}
                </p>
                <p className=" ml-10 ">
                  {" "}
                  <span className="material-symbols-outlined text-sm">
                    currency_rupee
                  </span>
                  {properties.price}
                </p>
              </div>
              <p className="text-red-500 m-2 ">{properties.propertyType}</p>
              <p className=" text-lg font-semibold  text-slate-800 m-2 hover:text-red-400">
                {properties.propertyTitle}
              </p>
              <p className=" hover:text-red-400 text-m">
                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>{" "}
                {properties.location}
              </p>

              <div className="flex m-1">
                <p className=" m-1 ">Beds: {properties.beds}</p>
                <p className=" m-1 ">Baths :{properties.baths}</p>
                <p className=" m-1 ">Sqrt: {properties.lotArea}</p>
              </div>
              <div className="flex  ">
                <Link to={`/update/${properties._id}`}>
                  {" "}
                  <button className=" mx-2 text-2xl ">
                    <span className="material-symbols-outlined ml-5 text-3xl">
                      edit_note
                    </span>
                  </button>{" "}
                </Link>
                <div className=" flex-col">
                  <DeleteProperty
                    propertyDetails={properties}
                    propertyId={properties._id}
                    onDelete={handleDelete}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <ul className="flex">
          {Array.from({
            length: Math.ceil(properties.length / propertiesPerPage),
          }).map((_, index) => (
            <li key={index}>
              <button
                className={`px-3 py-1 ${
                  currentPage === index + 1
                    ? "bg-red-400 text-white"
                    : "bg-red-500"
                } mr-1 rounded-full`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button
        className=" p-2 bg-red-500 text-white  rounded-full font-extrabold absolute right-0 bottom-0 sm:absolute sm:right-0 sm:bottom-0 "
        onClick={() => navigate("/dashboard")}
      >
        {" "}
        <span className="material-symbols-outlined">arrow_back</span>
      </button>
    </div>
  );
}

export default GetAllProperty;
