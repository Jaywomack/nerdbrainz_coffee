const MobileMenuItem = ({ title, price, description, category }) => {
  return (
    <div className="flex">
      <div className="px-8 py-5">
        <div className="inline-flex justify-between w-full">
          <h2 className="title-font font-medium text-gray-900 uppercase mb-2">
            {title}
          </h2>

          <h2>{price}</h2>
        </div>
        <div>
          <p className="text-custom-tan">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default MobileMenuItem;
