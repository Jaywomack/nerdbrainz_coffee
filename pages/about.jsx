import Meta from "./components/partials/Meta";
const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <Meta
        title="Menu"
        description="Nerd Brainz coffee goes straight to the brain to create an effect that is long lasting and can motivate you to get out of bed in the morning"
      />
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Nerd Brainz Development
          </h1>
          <p className="mb-8 leading-relaxed">
            NerdBrainz is a concept that has been in the making for several
            years and across three continents. The brain child of best friends
            Jared and Alexander. The Idea was first conceived when they met as
            neighbours living and working in SE Asia, has now grown into a fully
            realised reality.
          </p>
          <p className="mb-8 leading-relaxed">
            With Jared and Alexander firmly at the helm. NerdBrainz’s has been a
            global company from day one. Taking full advantage of the latest
            communication software. They are able to cherry pick the best talent
            from across North America and Europe bringing together a
            cosmopolitan team of international players.
          </p>
          <p className="mb-8 leading-relaxed">
            At Nerdbrainz our driving ethos is, if it can be imagined we can
            build it. It is this motivation that is why we are seeing the
            company grow so fast.
          </p>
          <p className="mb-8 leading-relaxed">
            With a firm footing in developing static and E-commerce websites we
            take great pride in creating platforms that allow people to increase
            the size and earning potential of their current business, or realise
            their financial freedom from a new business venture. Because of this
            passion we offer so much more than just a website, we offer full
            professional and holistic services form graphic design, website
            marketing campaign, SEO optimization and business development.
          </p>
          <p className="mb-8 leading-relaxed">
            We listen to your proposals for the future direction of your company
            and we design custom websites that actually grow with your business,
            and can even facilitate and speed up that growth.
          </p>
          <p className="mb-8 leading-relaxed">
            If you are thinking of building a website or upgrading your current
            site. Just drop us a message and we will be happy to get right back
            to you.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-custom-tan border-0 py-2 px-6 focus:outline-none  rounded text-lg">
              NerdBrainz.com
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/static/images/nb_logo.png"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
