import React from 'react';

const Flow = () => {
  return (
    <section id="works" className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-blue-900/50 to-black text-gray-900 relative bg-gray-900 py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pt-10 pb-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl text-white font-extrabold mx-auto sm:text-4xl md:text-5xl lg:text-6xl">
            What We Do?
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-base text-gray-400 leading-relaxed sm:text-lg md:text-xl">
            Our AI solution will help you from start to finish
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden lg:block xl:px-44 top-2 md:px-20 lg:px-28"> {/* Changed to lg:block */}
            <img
              alt=""
              loading="lazy"
              width={1000}
              height={500}
              decoding="async"
              className="w-full"
              style={{ color: 'transparent' }}
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
            />
          </div>

          <div className="relative flex flex-col items-center gap-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8"> {/* Changed to lg:grid */}
            {[
              {
                step: '1',
                title: 'Fill out this form',
                description: 'Fill all your requirements in the form and submit it.',
              },
              {
                step: '2',
                title: 'Form accepted',
                description: 'We will review the form and get back to you with personalized solutions and pricing.',
              },
              {
                step: '3',
                title: 'Solution Delivered',
                description: 'After acceptance of the terms, we will deliver the solution to you.',
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center w-full">
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-lg sm:text-xl font-semibold text-gray-700">{item.step}</span>
                </div>
                <h3 className="mt-6 text-lg sm:text-xl text-white font-semibold leading-tight md:mt-10">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-gray-400 md:text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='text-white text-center mt-4'>To get started,
        <a className='text-white text-center'
          href="https://docs.google.com/forms/d/e/1FAIpQLSdNb-uLNN4wEYkNAs26lnkmdDGWvdSXjyx-hlHglzopLgCFHw/viewform">(Fill this Form)</a>
      </div>
      <div
        className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
        style={{
          background:
            'radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)',
        }}
      ></div>
    </section>
  );
};

export default Flow;