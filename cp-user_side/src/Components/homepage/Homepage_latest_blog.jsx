import React from "react";
import City from "../homepage/city.jpeg";

const Homepage_latest_blog = () => {
  const blogs = [
    {
      id: 1,
      img1: { City },
      date1: "25 jul. 2022",
      title: "We came first in Awwwards ceremony 2021",
      descreption:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quamtempore officiis. Lorem, ipsum dolor.",
    },
    {
      id: 2,
      img1: { City },
      date1: "25 jul. 2022",
      title: "We came first in Awwwards ceremony 2021",
      descreption:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quamtempore officiis. Lorem, ipsum dolor.",
    },
    {
      id: 3,
      img1: { City },
      date1: "25 jul. 2022",
      title: "We came first in Awwwards ceremony 2021",
      descreption:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quamtempore officiis. Lorem, ipsum dolor.",
    }
  ];

    return (
        <>
          <section className="py-10">
            <h1 className="text-center font-sans text-4xl sm:text-5xl font-bold mb-8">
              Our Latest Blog
            </h1>
            <div className="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-4 sm:px-8 md:grid-cols-3">
              {blogs.map((blog) => {
                return (
                  <article
                    key={blog.id}
                    className="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition duration-300 transform hover:-translate-y-2 hover:shadow-lg"
                  >
                    <a href="#">
                      <img
                        src={City}
                        className="h-56 w-full object-cover"
                        alt=""
                      />
                      <div className="flex-auto px-6 py-5">
                        <span className="mb-2 flex items-center text-sm font-semibold ">
                          {blog.date1}
                        </span>
                        <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
                          {blog.title}
                        </h3>
                        <p className="mb-4 text-base text-gray-900">{blog.descreption}</p>
                        <span className="inline-block cursor-pointer select-none  border border-[#FFF848] bg-[#FFF848] hover:bg-[#390255]  hover:border-[#390255] hover:text-white px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-[#390255] no-underline shadow-sm">
                          Read More
                        </span>
                      </div>
                    </a>
                  </article>
                );
              })}
            </div>
          </section>
        </>
      );
    };
    export default Homepage_latest_blog;
