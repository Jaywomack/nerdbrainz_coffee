const Footer = () => {
  return (
    <footer className="text-gray-300 bg-custom-black-mid body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-base lg:text-xl text-white tracking-widest text-sm mb-5">
              Contact us
            </h2>
            <nav className="list-none mb-10">
              <div>Nerd Brainz Coffee</div>
              <div>1337 Leet Ave</div>
              <div>Spokane, WA, 94301 USA</div>
              <div>{`(555)867-5309`}</div>
              <div>
                Email:{" "}
                <span className="text-custom-tan">
                  {" "}
                  JaredJamesWomack@nerdbrainz.com
                </span>
              </div>
              <img
                className="h-48 w-48 filter invert hidden md:block"
                src="/static/images/nb_logo.png"
                alt=""
              />
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-base lg:text-xl text-white tracking-widest text-sm mb-5">
              OPENING HOURS
            </h2>
            <nav className="list-none mb-10">
              <table className="mx-auto md:mx-0">
                <tbody>
                  <tr>
                    <th>Monday</th>
                    <td>9am - 5pm</td>
                  </tr>
                  <tr>
                    <th>Tuesday</th>
                    <td>9am - 5pm</td>
                  </tr>
                  <tr>
                    <th>Wednesday</th>
                    <td>9am - 5pm</td>
                  </tr>
                  <tr>
                    <th>Thursday</th>
                    <td>9am - 5pm</td>
                  </tr>
                  <tr>
                    <th>Friday</th>
                    <td>9am - 5pm</td>
                  </tr>
                  <tr>
                    <th>Sunday</th>
                    <td className="text-custom-tan">Closed</td>
                  </tr>
                </tbody>
              </table>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-base lg:text-xl text-white tracking-widest text-sm mb-5">
              NERD BRAINZ NEWS
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-5">
                <a href="/" className="text-gray-300 hover:text-white">
                  <p>Why Coffee is So Good!</p>
                  <span className="text-custom-tan italic">July 1, 2020</span>
                </a>
              </li>
              <li className="mb-5">
                <a href="/" className="text-gray-300 hover:text-white">
                  <p>The Proper Way To Grind and Store Coffee</p>
                  <span className="text-custom-tan italic">
                    December 1, 2020
                  </span>
                </a>
              </li>
              <li className="mb-5">
                <a href="/" className="text-gray-300 hover:text-white">
                  <p>Halloween Coffee Treats</p>
                  <span className="text-custom-tan italic">
                    October 30, 2020
                  </span>
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-base lg:text-xl text-white tracking-widest text-sm mb-5">
              SUBSCRIBE
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-gray-300"
                >
                  For Special Deals
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-custom-tan focus:border-custom-tan text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-custom-tan border-0 py-2 px-6 focus:outline-none hover:bg-custom-tan rounded">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-75">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a
            href="/"
            className="flex title-font font-bold text-base lg:text-xl items-center md:justify-start justify-center text-white"
          >
            <i className="fas fa-mug-hot fa-lg mb-2 text-custom-tan"></i>
            <span className="ml-3 text-xl text-custom-tan">
              &copy; NerdBrainz Coffee
            </span>
          </a>
          <p className="text-sm text-white sm:ml-6 sm:mt-0 mt-4">
            © 2020 NerdBrainz
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="/" className="text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="/" className="ml-3 text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="/" className="ml-3 text-white">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href="/" className="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
