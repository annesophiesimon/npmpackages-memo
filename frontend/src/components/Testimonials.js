import React from "react";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const mockTestimonials = [
    {
      description:
        "Packages Hub has truly revolutionized the way we manage our npm packages. Its intuitive interface and seamless organization features have saved us countless hours of searching and setup time. Highly recommended for developers of all levels!",
      fullname: "John Doe",
      role: "Senior Developer",
      company: "Tech Solution Inc.",
    },
    {
      description:
        "As a frontend engineer, I'm always on the lookout for tools that streamline my workflow. Packages Hub not only simplifies package management but also offers advanced customization options, making it an indispensable part of my development toolkit.",
      fullname: "Emily Smith",
      role: "Frontend Engineer",
      company: "WebTech Co.",
    },
    {
      description:
        "I've tried several npm package managers, but none compare to Packages Hub. Its user-friendly design and robust features make package management effortless. Plus, the ability to organize packages by categories has greatly improved our team's collaboration and productivity.",
      fullname: "Alex Johnson",
      role: "Software Developer",
      company: "InnovateTech Labs",
    },
    {
      description:
        "Packages Hub is a game-changer for developers like me who are just starting their journey. Its clean interface and comprehensive documentation links have helped me quickly discover and integrate essential npm packages into my projects. Thanks to Packages Hub, I feel more confident in my development skills.",
      fullname: "Sarah Lee",
      role: "Junior Developer",
      company: "CodeCrafters Studio",
    },
  ];
  return (
    <section classNameName='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div class='max-w-5xl mx-auto text-center text-black tracking-widest pb-10 lg:pb-20'>
          <h1 class='text-3xl sm:text-5xl font-black'>TESTIMONIALS</h1>
        </div>
        <div className='flex flex-wrap -m-4'>
          {mockTestimonials.map((testimonial, index) => {
            return (
              <Testimonial
                key={index}
                description={testimonial.description}
                fullName={testimonial.fullname}
                role={testimonial.role}
                company={testimonial.company}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
