import Rectangle from "../../assets/images/directions/Rectangle.png";

function Directions() {
  return (
    <section className='container '>
      <h3 className='text-3xl font-semibold'>Directions</h3>
      <div className='flex gap-10 items-start border-b border-b-gray-200 w-220 mt-10 pb-10'>
        <input type='checkbox' className=' size-10' />
        <div className='col-span-2'>
          <h4 className='text-2xl  font-semibold'>
            1. Lorem ipsum dolor sit amet.
          </h4>
          <p className=' mt-10 text-[#00000099]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eos
            reiciendis magnam nobis ab? Provident similique, laboriosam eaque,
            ipsa natus voluptatem sequi, adipisci repellat ab inventore corporis
            quo labore fuga.
          </p>
          <img src={Rectangle} alt='Rectangle' className='mt-10' />
          <p className='text-[#00000099] mt-10'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            quaerat, repudiandae exercitationem atque ut sint cupiditate. Sit,
            aliquid numquam! Doloribus odio sit velit eos libero reprehenderit
            exercitationem, eligendi iusto illum.
          </p>
        </div>
      </div>
      <div className='flex gap-10 items-start border-b border-b-gray-200 w-220 mt-10 pb-10'>
        <input type='checkbox' className=' size-10' />
        <div className='col-span-2'>
          <h4 className='text-2xl  font-semibold'>
            2. Lorem ipsum dolor sit amet.
          </h4>
          <p className=' mt-10 text-[#00000099]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eos
            reiciendis magnam nobis ab? Provident similique, laboriosam eaque,
            ipsa natus voluptatem sequi, adipisci repellat ab inventore corporis
            quo labore fuga.
          </p>
        </div>
      </div>
      <div className='flex gap-10 items-start border-b border-b-gray-200 w-220 mt-10  pb-10'>
        <input type='checkbox' className=' size-10' />
        <div className='col-span-2'>
          <h4 className='text-2xl  font-semibold'>
            3. Lorem ipsum dolor sit amet.
          </h4>
          <p className=' mt-10 text-[#00000099]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eos
            reiciendis magnam nobis ab? Provident similique, laboriosam eaque,
            ipsa natus voluptatem sequi, adipisci repellat ab inventore corporis
            quo labore fuga.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Directions;
