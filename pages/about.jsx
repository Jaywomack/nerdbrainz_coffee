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
            If you enjoyed this site and the experience that it could bring to
            your customers please reach out or click the button below to go to
            our agency site. Please get in touch. We would love to hear from you
            so that we can help you to craft your a unique solution to help your
            business thrive
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
