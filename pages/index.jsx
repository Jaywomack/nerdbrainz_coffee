import Meta from "./components/partials/Meta";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Meta
        title="The Title"
        description="Nerd Brainz coffee goes straight to the brain to create an effect that is long lasting and can motivate you to get out of bed in the morning"
      />
      {/* Start Hero Section */}
      <section>
        <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
          <div className="relative z-30 p-5 text-2xl text-white  bg-opacity-50 rounded-xl">
            <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
              <i className="fas fa-mug-hot fa-7x text-pink-500"></i>
              <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  Knausgaard typewriter readymade marfa
                </h1>
                <p className="mb-8 leading-relaxed">
                  Kickstarter biodiesel roof party wayfarers cold-pressed. Palo
                  santo live-edge tumeric scenester copper mug flexitarian.
                  Prism vice offal plaid everyday carry. Gluten-free chia VHS
                  squid listicle artisan.
                </p>
                <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-500 rounded text-lg">
                  Button
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
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20">
            Nerd Brainz Cafe
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="flex-grow pl-6">
                <img
                  className="rounded border-4 border-white mb-5"
                  src="/static/images/aerial_coffee_shop.jpeg"
                  alt=""
                />
                <h2 className="text-white text-lg title-font font-medium mb-5">
                  Left Side Marketing
                </h2>
                <p className="leading-relaxed text-base mb-5">
                  At Nerd Brainz people come from all around to rest, relax and
                  revive with good company, and great food!
                </p>
                <a className="mt-3 text-pink-400 inline-flex items-center ml-auto">
                  <i className="fas fa-mug-hot fa-7x"></i>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="flex-grow pl-6">
                <img
                  className="rounded mb-5"
                  src="/static/images/coffee_sign.jpeg"
                  alt=""
                />
                <h2 className="text-white text-lg title-font font-medium mb-5">
                  Did Someone Say "NerdBrainz Coffee"!
                </h2>
                <p className="leading-relaxed text-base mb-5">
                  At Nerd Brainz people come from all around to rest, relax and
                  revive with good company, and great food!
                </p>
                <a className="mt-3 text-pink-400 inline-flex items-center">
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
                src="/static/images/coffee_image_board.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Three Cards Wide Marketing Section */}
      {/* Start Image Carousel Section */}
      <section className="hidden md:block">
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
          transitionDuration={1500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <img
            className="rounded h-72"
            src="/static/images/aerial_coffee_shop.jpeg"
            alt=""
          />
          <img
            className="rounded h-72"
            src="/static/images/coffee_sign.jpeg"
            alt=""
          />
          <img
            className="rounded h-72"
            src="/static/images/coffee_image_board.jpeg"
            alt=""
          />
          <img
            className="rounded h-72"
            src="/static/images/aerial_coffee_shop.jpeg"
            alt=""
          />
          <img
            className="rounded h-72"
            src="/static/images/aerial_coffee_shop.jpeg"
            alt=""
          />
          <img
            className="rounded h-72"
            src="/static/images/coffee_sign.jpeg"
            alt=""
          />
          <img
            className="rounded h-72"
            src="/static/images/coffee_image_board.jpeg"
            alt=""
          />
          <img
            className="rounded h-72"
            src="/static/images/aerial_coffee_shop.jpeg"
            alt=""
          />
          <img
            className="rounded h-72"
            src="/static/images/aerial_coffee_shop.jpeg"
            alt=""
          />
          <img
            className="rounded h-72"
            src="/static/images/coffee_sign.jpeg"
            alt=""
          />
          <img
            className="rounded h-72"
            src="/static/images/coffee_image_board.jpeg"
            alt=""
          />
          <img
            className="rounded h-72"
            src="/static/images/aerial_coffee_shop.jpeg"
            alt=""
          />
        </Carousel>
        ;
      </section>
      {/* End Image Carousel Section */}
      {/* Start Animated Coffees Style Section */}
      <section>
        <div>Art of coffee types</div>
      </section>
      {/* End Animated Coffees Style Section */}
      {/* Start Testimonials Carousel*/}
      <section>
        <div>Art of coffee types</div>
      </section>
      {/* End Testimonials carousel */}
      {/* Start three wide cards events, amenities and gift shop */}
      {/* End three wide cards events, amenities and gift shop */}
    </div>
  );
};

export default Home;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
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
