import React from "react";
import OtherRecipes from "./OtherRecipes";

function Ingredients() {
  return (
    <>
      <div className='container'>
        <div className='grid grid-cols-3 mt-20 gap-10'>
          <div className='col-span-2'>
            <h3 className='text-3xl font-semibold'>Ingredients</h3>
            <h4 className='text-xl font-semibold mt-5'>For main dish</h4>
            <div className='p-5 flex items-center gap-10 border-b border-b-gray-300'>
              <input type='checkbox' className='' name='carrot' />
              <label htmlFor='carrot'>Carrot</label>
            </div>
            <div className='p-5 flex items-center gap-10 border-b border-b-gray-300'>
              <input type='checkbox' className='' name='carrot' />
              <label htmlFor='carrot'>Carrot</label>
            </div>
            <div className='p-5 flex items-center gap-10 border-b border-b-gray-300'>
              <input type='checkbox' className='' name='carrot' />
              <label htmlFor='carrot'>Carrot</label>
            </div>
            <div className='p-5 flex items-center gap-10 border-b border-b-gray-300'>
              <input type='checkbox' className='' name='carrot' />
              <label htmlFor='carrot'>Carrot</label>
            </div>
            <div className='p-5 flex items-center gap-10 border-b border-b-gray-300'>
              <input type='checkbox' className='' name='carrot' />
              <label htmlFor='carrot'>Carrot</label>
            </div>
            <h4 className='text-xl font-semibold mt-10'>For the sauce</h4>
            <div className='p-5 flex items-center gap-10 border-b border-b-gray-300'>
              <input type='checkbox' className='' name='carrot' />
              <label htmlFor='carrot'>Carrot</label>
            </div>
            <div className='p-5 flex items-center gap-10 border-b border-b-gray-300'>
              <input type='checkbox' className='' name='carrot' />
              <label htmlFor='carrot'>Carrot</label>
            </div>
            <div className='p-5 flex items-center gap-10 border-b border-b-gray-300'>
              <input type='checkbox' className='' name='carrot' />
              <label htmlFor='carrot'>Carrot</label>
            </div>
          </div>
          <OtherRecipes />
        </div>
      </div>
    </>
  );
}

export default Ingredients;
