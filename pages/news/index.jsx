import Meta from "../components/partials/Meta";
const newsHome = () => {
  return (
    <div className="bg-yellow-50">
      <Meta
        title="Menu"
        description="Nerd Brainz coffee goes straight to the brain to create an effect that is long lasting and can motivate you to get out of bed in the morning"
      />
      {/* Start Hero Section */}
      <section className="text-gray-600  body-font flex w-full">
        <div className="flex flex-col news-hero-image w-full h-96 justify-center items-center">
          <h2 className="text-white text-center md:text-4xl font-bold align-middle mb-12">
            NERD BRAINZ NEWS
          </h2>
          <h6 className="text-custom-tan text-lg text-center italic">
            Nerd Brainz Coffee & Internet Cafe / Coffees, Drinks & Food
          </h6>
        </div>
      </section>
      {/* End Hero Section */}
      {/* Start articles */}
      <main className="w-full">
        <div className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-36 object-cover object-center rounded"
                src="/static/images/restaurant.jpeg"
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <div>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    Nerd Brainz Cafe & Eatery Open For Business
                  </h1>
                  <p className="text-custom-tan">
                    by Jay Womack / Nerd Brainz News / August 11, 2021
                  </p>
                </div>

                <p className="leading-relaxed my-5 text-xl">
                  Nerd Brainz Coffee & Eatery is dedicated to crafting artisan
                  food products with the best coffee in town. Bring some friends
                  down and enjoy the atmosphere and friendly environment. Your
                  friends will appreciate you introducing them to the most
                  poorly kept secret in the city.
                </p>
                <p className="leading-relaxed text-xl">
                  Nerd Brainz Coffee & Eatery is dedicated to crafting artisan
                  food products with the best coffee in town. Bring some friends
                  down and enjoy the atmosphere and friendly environment. Your
                  friends will appreciate you introducing them to the most
                  poorly kept secret in the city.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-36 object-cover object-center rounded"
                src="/static/images/woman_playing_guitar.jpeg"
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <div>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    Special Marketing Event To Promote Donations To The Shriners
                    Hospital
                  </h1>
                  <p className="text-custom-tan">
                    by The Fazan / Nerd Brainz News / August 12, 2021
                  </p>{" "}
                </div>

                <p className="leading-relaxed my-5 text-xl">
                  Nerd Brainz Coffee & Eatery is dedicated to crafting artisan
                  food products with the best coffee in town. Bring some friends
                  down and enjoy the atmosphere and friendly environment. Your
                  friends will appreciate you introducing them to the most
                  poorly kept secret in the city.
                </p>
                <p className="leading-relaxed text-xl">
                  Nerd Brainz Coffee & Eatery is dedicated to crafting artisan
                  food products with the best coffee in town. Bring some friends
                  down and enjoy the atmosphere and friendly environment. Your
                  friends will appreciate you introducing them to the most
                  poorly kept secret in the city.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-36 object-cover object-center rounded"
                src="/static/images/nb_logo.png"
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <div>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    This Site Or One Similar To It Could Be Yours
                  </h1>
                  <p className="text-custom-tan">
                    by Jay Womack / Nerd Brainz News / August 12, 2021
                  </p>{" "}
                </div>

                <p className="leading-relaxed my-5 text-xl">
                  @ Nerd Brainz we deal in quality and customer happiness. Our
                  number one goal is to make great money doing what we love. But
                  there is only one way we get there, and that is treating every
                  customer like they mean something to us. Because they do. We
                  do not just want to build web sites and never talk to the
                  customer again.
                </p>
                <p className="leading-relaxed text-xl">
                  We want to bring success into our customers lives and help
                  them fix business intelligence mistakes and compound on the
                  things that they are already doing right. We want to bring
                  E-commerce solutions and business intelligence to every one so
                  that they can make the most of the resources they have and we
                  can all retire early.{" "}
                  <span className="text-custom-tan">
                    To buy this site template or find out about e-commerce and
                    business intelligence solutions. Drop us a line at{" "}
                    <a href="www.nerdbrainz.com">
                      <span className="text-2xl underline">NerdBrainz.com</span>{" "}
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* End articles */}
    </div>
  );
};

export default newsHome;
