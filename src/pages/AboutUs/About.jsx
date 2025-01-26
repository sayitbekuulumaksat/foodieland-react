import React from "react";
import AuthorPhoto from "../../assets/images/About/photo.chef.png";
import ChefPhoto from "../../assets/images/About/Mask.png";
import Rectangle from "../../assets/images/About/Rectangle.png";

function About() {
  return (
    <section className='about-chef'>
      <div className='container text-center'>
        <h2 className='text-5xl mt-30  font-bold'>
          Full Guide to Becoming a Professional Chef
        </h2>

        <div className='flex items-center justify-center gap-3 mt-5 '>
          <img src={AuthorPhoto} className='h-15 w-15 rounded-full' />
          <span className=' font-semibold border-r border-r-gray-200 pr-5'>
            John Smith
          </span>
          <span className=' text-gray-400'>15 March 2022</span>
        </div>
        <p className='text-gray-400  p-10'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
          sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
        </p>
        <img src={ChefPhoto} alt='' className='size-full mt-10' />
        <div className='grid grid-cols-3 mt-15'>
          <div className='col-span-2 text-left '>
            <h3 className='text-3xl font-semibold'>
              How did you start out in the food industry?
            </h3>
            <p className='text-[#00000099] mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>
            <h3 className='text-3xl font-semibold mt-15'>
              What do you like most about your job?{" "}
            </h3>
            <p className='text-[#00000099] mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>
            <h3 className='text-3xl font-semibold mt-15'>
              Do you cook at home on your days off?{" "}
            </h3>
            <img src={Rectangle} alt='' className='mt-5' />
            <p className='text-[#00000099] mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>
            <h3 className='text-3xl font-semibold mt-15'>
              What would your advice be to young people looking to get their
              foot in the door?
            </h3>
            <p className='text-[#00000099] mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>
            <p className='text-4xl p-10 bg-[] mt-5' style={{
                    background: `linear-gradient(to right, #0000000D, #0000000)`,
                  }}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur ac ultrices odio.”
            </p>
            <h3 className='text-3xl font-semibold mt-15'>
              What is the biggest misconception that people have about being a
              professional chef?
            </h3>
            <p className='text-[#00000099] mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
              suscipit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
