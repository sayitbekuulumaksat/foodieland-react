import React, { useContext, useState } from "react";
import RecipesContext from "../../context/RecipesContext";
import OtherRecipes from "../Recipes/OtherRecipes";
import Inbox from "../Home/Inbox";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function Blog() {
  const recipes = useContext(RecipesContext);

  const [visibleRecipes, setVisibleRecipes] = useState(recipes.slice(0, 8));
  const swiperRecipes = recipes.slice(8);
  const handleSlideChange = (swiper) => {
    const startIndex = swiper.activeIndex * 8;
    const newVisibleRecipes = recipes.slice(startIndex, startIndex + 8);
    setVisibleRecipes(newVisibleRecipes);
  };

  return (
    <section className='mt-20'>
      <div className='container'>
        <div className='text-center'>
          <h2 className='mt-10 text-5xl font-bold'>Blog & Article</h2>
          <p className='mt-5 text-[#00000099] '>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vero
            facere mollitia.
          </p>
          <input
            type='text'
            className='mt-15 p-5 w-150 rounded-3xl border-2 border-gray-300  '
            placeholder='Search article, news or recipe...'
          />
          <button className='p-4 rounded-2xl w-40 bg-black text-white -ml-[170px] cursor-pointer'>
            Search
          </button>
        </div>
        <div className='mt-20 mx-auto grid grid-cols-3 gap-10'>
          {/* Blog List */}
          <div className='col-span-2 space-y-8'>
            {visibleRecipes.map((recipe, i) =>
              !recipe.advertising ? (
                <div key={i} className='flex items-center gap-5'>
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className='h-50 w-80 rounded-2xl object-cover'
                  />
                  <div>
                    <h3 className='font-semibold text-lg'>{recipe.title}</h3>
                    <p className='text-sm text-gray-600'>
                      {recipe.description}
                    </p>
                    <div className='flex items-center gap-3 mt-2'>
                      <img
                        src={recipe.author.photo}
                        alt={recipe.author.name}
                        className='h-8 w-8 rounded-full'
                      />
                      <span className='text-sm font-semibold'>
                        {recipe.author.name}
                      </span>
                      <span className='text-xs text-gray-400'>
                        {recipe.author.date}
                      </span>
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
          <OtherRecipes />

          {/* Swiper Section */}
          <div className='space-y-8 col-span-2'>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
            >
              {swiperRecipes.map((recipe, index) => (
                <SwiperSlide key={index}>
                  {" "}
                  <div className='p-4 border rounded-lg text-center shadow-md'>
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className='h-40 w-100 text-center rounded-lg object-cover'
                    />
                    <h3 className='mt-3 font-semibold text-lg'>
                      {recipe.title}
                    </h3>
                    <p className='mt-2 text-sm text-gray-500'>
                      {recipe.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <Inbox />
      </div>
    </section>
  );
}

export default Blog;
