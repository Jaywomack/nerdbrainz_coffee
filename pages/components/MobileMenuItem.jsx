const MobileMenuItem = () => {
  return (
    <div className="flex">
      <div className="px-8 py-5">
        <div className="inline-flex justify-between w-full">
          <h2 className="title-font font-medium text-gray-900">COFFEE</h2>

          <h2 className="">$4.00 / 5.00</h2>
        </div>
        <div>
          <p className=" text-custom-tan">
            Locally roasted using "Mountain Top" beans.{" "}
            {`(Dark, Blonde, American & Decaf roasts)`} - 12oz & 20oz
          </p>
          <p className="bg-custom-tan rounded w-1/6 px-3">latte</p>
        </div>
      </div>
    </div>
  );
};
export default MobileMenuItem;
