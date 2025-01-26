import Inbox from "../Home/Inbox";
import Delicious from "../Home/Delicious";
import Cooker from "../../assets/images/contact/cooker.png";

function Conacts() {
  return (
    <>
      <div className='container '>
        <h2 className='text-5xl font-bold mt-40 text-center'>Contact us</h2>
        <div className='grid grid-cols-3 gap-10 mt-15'>
          <div
            className='col-span-1 bg-[#E7F9FD] rounded-3xl p-5'
            style={{
              background: `linear-gradient(to top, #E7F9FD, #0000000)`,
            }}
          >
            <img src={Cooker} />
          </div>
          <form className='col-span-2'>
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2'>
              <div className='sm:col-span-1'>
                <label
                  htmlFor='first-name'
                  className='block text-sm/6 font-medium text-gray-900'
                >
                  NAME{" "}
                </label>
                <div className='mt-2'>
                  <input
                    id='first-name'
                    name='first-name'
                    type='text'
                    placeholder='Enter your name...'
                    autoComplete='given-name'
                    className='block w-full rounded-3xl bg-white p-5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                  />
                </div>
              </div>
              <div className='sm:col-span-1'>
                <label
                  htmlFor='first-name'
                  className='block text-sm/6 font-medium text-gray-900'
                >
                  EMAIL ADDRESS{" "}
                </label>
                <div className='mt-2'>
                  <input
                    id='first-name'
                    name='first-name'
                    type='text'
                    placeholder='Your email address...'
                    autoComplete='given-name'
                    className='block w-full rounded-3xl bg-white p-5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                  />
                </div>
              </div>
              <div className='sm:col-span-1'>
                <label
                  htmlFor='first-name'
                  className='block text-sm/6 font-medium text-gray-900'
                >
                  Subject{" "}
                </label>
                <div className='mt-2'>
                  <input
                    id='first-name'
                    name='first-name'
                    type='text'
                    placeholder='Enter subject...'
                    autoComplete='given-name'
                    className='block w-full rounded-3xl bg-white p-5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                  />
                </div>
              </div>

              <div className='sm:col-span-1'>
                <label
                  htmlFor='last-name'
                  className='block text-sm/6 font-medium text-gray-900'
                >
                  ENquiry type
                </label>
                <div className='mt-2'>
                  <input
                    id='last-name'
                    name='last-name'
                    type='text'
                    autoComplete='family-name'
                    placeholder='Advertising'
                    className='block w-full rounded-3xl bg-white p-5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                  />
                </div>
              </div>
              <div className="col-span-full">
              <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                MESSAGES
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  placeholder="Enter your messages..."
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  defaultValue={''}
                />
              </div>
            </div>
            <button className="text-white bg-black rounded-2xl w-50 p-5">Submit</button>
            </div>
          </form>
        </div>
      </div>

      <Inbox />
      <Delicious />
    </>
  );
}

export default Conacts;
