export const Hero = () => {
  return (
    <div className="bg-white">
      <section className="bg-[#FCF8F1] bg-opacity-30 py-8 sm:py-4 lg:py-2">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs sm:text-base font-semibold tracking-wider text-blue-600 uppercase">
                A digital marketing platform for all
              </p>
              <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-[5.5rem]">
                Ignite Your Digital Potential
              </h1>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                Innovative strategies to launch your brand into digital stardom.
              </p>
            </div>

            <div>
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
