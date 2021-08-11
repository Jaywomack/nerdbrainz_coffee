import Meta from "./components/partials/Meta";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  return (
    <div className="min-h-screen text-white bg-custom-black-light">
      <Meta
        title="Home"
        description="Nerd Brainz coffee goes straight to the brain to create an effect that is long lasting and can motivate you to get out of bed in the morning"
      />
      {/* Start Hero Section */}
      <section id="testimonials bg-custom-black-light">
        <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
          <div className="relative z-30 p-5 text-2xl text-white  bg-opacity-50 rounded-xl">
            <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
              <img
                className="h-64 w-64"
                src="/static/images/nb_logo.png"
                alt=""
              />
              <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center my-12">
                <h1 className="title-font text-3xl lg:text-7xl mb-4 font-medium text-white whitespace-nowrap">
                  Nerd Brainz Coffee
                </h1>
                <p className="mb-8 text-3xl mt-24 leading-relaxed font-bold">
                  We are small town coffee brewers thriving in the Lilac city
                </p>
                <button className="inline-flex text-white bg-custom-tan border-0 py-2 px-6 focus:outline-none hover:bg-custom-tan rounded text-lg">
                  SEE OUR MENU
                </button>
              </div>
            </div>
          </div>
          <video
            autoPlay
            loop
            muted
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
          >
            <source src="/static/images/coffee_drip.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </header>
      </section>
      {/* End Hero Section */}
      {/* Start Three Cards Wide Marketing Section */}
      <section className="text-gray-400 bg-custom-black-light body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20">
            Nerd Brainz Cafe
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="flex-grow pl-6  text-center">
                <img
                  className="rounded border-4 border-white mb-5 clip-image-bottom"
                  src="/static/images/aerial_coffee_shop.jpeg"
                  alt=""
                />
                <h2 className="text-white text-2xl uppercase title-font font-medium mb-5">
                  Rest, Enjoy & Socialize
                </h2>
                <p className="leading-relaxed text-base mb-5">
                  At Nerd Brainz people come from all around to rest, relax and
                  revive with good company, and great food!
                </p>
                <a className="mt-3 text-custom-tan inline-flex items-center ml-auto flex flex-col  ">
                  <i className="fas fa-wifi fa-7x text-custom-tan mb-2"></i>
                  <h2 className="text-custom-tan text-3xl">FREE WIFI</h2>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="flex-grow pl-6 text-center">
                <img
                  className="rounded mb-5"
                  src="/static/images/coffee_sign.jpeg"
                  alt=""
                />
                <h2 className="text-white text-2xl uppercase title-font font-medium mb-5">
                  Did Someone Say "Coffee"!
                </h2>
                <p className="leading-relaxed text-base mb-5">
                  At Nerd Brainz people come from all around to rest, relax and
                  revive with good company, and great food!
                </p>
                <a className="mt-3 text-custom-tan inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <img
                className="rounded border-4 border-white"
                src="/static/images/monday.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Three Cards Wide Marketing Section */}
      {/* Start Image Carousel Section */}
      <section className="hidden md:block bg-custom-black-dark">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={500}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={2000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <img
            className="rounded h-48 border-2 border-white"
            src="/static/images/aerial_coffee_shop.jpeg"
            alt=""
          />
          <img
            className="rounded h-48 border-2 border-white"
            src="/static/images/coffee_sign.jpeg"
            alt=""
          />
          <img
            className="rounded h-48 border-2 border-white"
            src="/static/images/coffee_image_board.jpeg"
            alt=""
          />
          <img
            className="rounded h-48 border-2 border-white"
            src="/static/images/gift_shop.jpeg"
            alt=""
          />
          <img
            className="rounded h-48 border-2 border-white"
            src="/static/images/woman_playing_guitar.jpeg"
            alt=""
          />
          <img
            className="rounded h-48 border-2 border-white"
            src="/static/images/seating.jpeg"
            alt=""
          />
          <img
            className="rounded h-48 border-2 border-white"
            src="/static/images/coffee_shop_gathering.jpeg"
            alt=""
          />
          <img
            className="rounded h-48 border-2 border-white"
            src="/static/images/aerial_coffee_shop.jpeg"
            alt=""
          />
          <img
            className="rounded h-48 border-2 border-white"
            src="/static/images/woman_playing_guitar.jpeg"
            alt=""
          />
        </Carousel>
      </section>
      {/* End Image Carousel Section */}
      {/* Start Animated Coffees Style Section */}
      <section className="text-gray-400 bg-custom-black-dark body-font pt-24">
        <div className="text-center">
          <p className="text-custom-tan mb-5 text-xl">
            We have over 30 different flavors to choose from
          </p>
          <h2 className="text-white text-3xl uppercase border-b-2 border-custom-tan pb-5 w-1/2 mx-auto">
            CHOOSE YOUR STYLE / CHOOSE YOUR FLAVOR
          </h2>
        </div>

        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-1/2 h-1/2 block mx-auto  mt-12"
                  src="/static/images/coffee_cup_art.png"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-white title-font text-lg font-medium text-center">
                  ESPRESSO
                </h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-1/2 h-1/2 block mx-auto  mt-12"
                  src="/static/images/coffee_cup_art.png"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-white title-font text-lg font-medium text-center">
                  TRADITIONAL DRIP
                </h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-1/2 h-1/2 block mx-auto  mt-12"
                  src="/static/images/coffee_cup_art.png"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-white title-font text-lg font-medium text-center">
                  CAPUCCINO
                </h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-1/2 h-1/2 block mx-auto  mt-12"
                  src="/static/images/coffee_cup_art.png"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-white title-font text-lg font-medium text-center">
                  LATTE
                </h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-1/2 h-1/2 block mx-auto  mt-12"
                  src="/static/images/coffee_cup_art.png"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-white title-font text-lg font-medium text-center">
                  FRAPPE
                </h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-1/2 h-1/2 block mx-auto  mt-12"
                  src="/static/images/coffee_cup_art.png"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-white title-font text-lg font-medium text-center">
                  MOCHA
                </h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-1/2 h-1/2 block mx-auto  mt-12"
                  src="/static/images/coffee_cup_art.png"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-white title-font text-lg font-medium text-center">
                  PROTEIN SHAKES
                </h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-1/2 h-1/2 block mx-auto  mt-12"
                  src="/static/images/coffee_cup_art.png"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-white title-font text-lg font-medium text-center">
                  SMOOTHIES
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Animated Coffees Style Section */}
      {/* Start Testimonials Carousel*/}
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <h2 className="text-3xl text-custom-tan mb-2 font-bold">
              Our Customers Love It Here{" "}
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-500 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">
              Nerd Brainz coffee is iconic. There live music events that
              randomly happen as you are enjoying your saturday morning coffee
              and the fact that you can always get a top notch cup of coffee in
              the morning. Nerd Brainz is the spot to people watch, and mingle.
              There is always professionals, hipsters, artists basically
              everyone you could ever want to meet enjoying a cup of coffee and
              enjoying the ambience. Nerd Brainz coffee is my favorite spot in
              town.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-custom-tan mt-8 mb-6"></span>
            <h2 className="text-white font-medium title-font tracking-wider text-sm">
              Talee Johnson
            </h2>
            <p className="text-custom-tan">Another Happy Customer</p>
          </div>
        </div>
      </section>
      {/* End Testimonials carousel */}
      {/* Start three wide cards events, amenities and gift shop */}
      <section className="text-gray-400 bg-custom-black-dark body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="flex-grow pl-6  text-center">
                <img
                  className="rounded border-4 border-white mb-5"
                  src="/static/images/woman_playing_guitar.jpeg"
                  alt=""
                />
                <h2 className="text-white text-lg title-font font-medium mb-5">
                  Open Mic Night
                </h2>
                <p className="leading-relaxed text-base mb-5">
                  Tune in on Open Mic Night! Come see our family friendly open
                  mic night at Nerd Brainz coffee and eatery! Grab your guitar
                  and come on down!
                </p>
                <a className="mt-3 text-custom-tan inline-flex items-center border-2 border-custom-tan p-5 rounded-lg">
                  Check Our Events
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="flex-grow pl-6  text-center">
                <img
                  className="rounded border-4 border-white mb-5"
                  src="/static/images/seating.jpeg"
                  alt=""
                />
                <h2 className="text-white text-lg title-font font-medium mb-5">
                  The Perfect Place To Meet Friends
                </h2>
                <p className="leading-relaxed text-base mb-5">
                  We have spaces large enough for large gatherings as well as
                  for lunch and Nerd Brainz Coffee and Eatery is the perfect
                  place to work remote with our high speed wifi.
                </p>
                <a className="mt-3 text-custom-tan inline-flex items-center border-2 border-custom-tan p-5 rounded-lg">
                  Our Space
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="flex-grow pl-6  text-center">
                <img
                  className="rounded border-4 border-white mb-5"
                  src="/static/images/gift_shop.jpeg"
                  alt=""
                />
                <h2 className="text-white text-lg title-font font-medium mb-5">
                  Built For Customer Comfort
                </h2>
                <p className="leading-relaxed text-base mb-5">
                  We build each of our cafe's with you in mind. Every picture,
                  seat and stool is designed to make you feel at home, and we
                  happily accommodate people with disabilities.
                </p>
                <a className="mt-3 text-custom-tan inline-flex items-center border-2 border-custom-tan p-5 rounded-lg">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End three wide cards events, amenities and gift shop */}
    </div>
  );
};

export default Home;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 10,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 5,
  },
};
