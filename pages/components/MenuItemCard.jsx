const MenuItemCard = () => {
  return (
    <div className="my-5 flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
      <img
        alt="team"
        className="flex-shrink-0 rounded-lg w-12 h-12 md:w-24 md:h-24 object-cover object-center sm:mb-0 mb-4"
        src="/static/images/latte.jpeg"
      />
      <div className="flex-grow sm:pl-8">
        <div className="inline-flex justify-between w-full">
          <h2 className="title-font font-medium text-base md:text-lg text-gray-900">
            COFFEE
          </h2>

          <h2 className="text-sm md:text-base">$4.00 / 5.00</h2>
        </div>
        <div className="inline-flex items-start">
          <p className="md:mb-4 text-custom-tan">
            Locally roasted using "Mountain Top" beans.{" "}
            {`(Dark, Blonde, American & Decaf roasts)`} - 12oz & 20oz
          </p>
          <p className="bg-custom-tan text-center px-5 py-1 rounded">latte</p>
        </div>
        <span className="inline-flex"></span>
      </div>
    </div>
  );
};
export default MenuItemCard;
