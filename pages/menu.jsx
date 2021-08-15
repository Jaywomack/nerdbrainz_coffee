import MenuItemCard from "./components/MenuItemCard";
import MobileMenuItem from "./components/MobileMenuItem";
import Meta from "./components/partials/Meta";

const Menu = () => {
  return (
    <div className="min-h-screen bg-yellow-50">
      <Meta
        title="Menu"
        description="Nerd Brainz coffee goes straight to the brain to create an effect that is long lasting and can motivate you to get out of bed in the morning"
      />
      {/* Start Hero Section */}
      <section className="text-gray-600  body-font min-h-screen  menu-hero-image flex w-full min-h-screen justify-center items-center ">
        <div>
          <h2 className="text-white text-center text-2xl md:text-4xl font-bold align-middle">
            COFFEE, DRINKS & FOOD
          </h2>
          <h6 className="text-custom-tan text-center italic">
            Nerd Brainz Coffee & Internet Cafe / Coffees, Drinks & Food
          </h6>
        </div>
      </section>
      {/* End Hero Section */}
      {/* Start Warm and Cold Drinks Section */}
      <section className="hidden md:block">
        <div className="flex flex-wrap overflow-hidden px-24">
          <div className="w-full overflow-hidden lg:w-1/2 px-12">
            <h2 className=" text-2xl md:text-5xl my-12 border-b-2 border-custom-tan font-bold pb-3">
              WARM DRINKS -{" "}
              <span className="text-base md:text-3xl font-semibold">
                12 OZ / 20 OZ
              </span>
            </h2>
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
          </div>

          <div className="w-full overflow-hidden lg:w-1/2 px-12">
            <h2 className="text-5xl my-12 border-b-2 border-custom-tan font-bold pb-3">
              COLD DRINKS -{" "}
              <span className="text-3xl font-semibold">20 OZ</span>
            </h2>
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
          </div>
        </div>
      </section>
      {/* End Warm and Cold Drinks Section */}
      {/* Start Extras Section */}
      <section className="min-h-screen hidden md:block">
        <div className="flex flex-wrap overflow-hidden px-24">
          <div className="w-full overflow-hidden lg:w-1/2 px-12">
            <h2 className="text-5xl my-12 border-b-2 border-custom-tan font-bold pb-3">
              Extras
            </h2>
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
          </div>

          <div className="w-full overflow-hidden lg:w-1/2 px-12 md:mt-24">
            <h3 className="text-2xl font-bold my-12 text-center">
              LATTE / CAPPUCCINO FLAVORS
            </h3>
            <p className="text-xl font-bold text-gray-500 tracking-wide text-center">
              Mocha | Caramel | Salted Caramel | Hazelnut | French Vanilla |
              White Chocolate | Chocolate Chip Cookie Dough | and over 35 more!
            </p>
            <p className="text-base font-bold text-gray-500 tracking-wide text-center mb-4">
              {`(Sugar Free Options Are Also Available)`}
            </p>
            <p className="text-xl text-gray-500 tracking-wide text-center">
              Mix & Match to Make Any Flavor You Like
            </p>
          </div>
        </div>
      </section>
      {/* End Warm and Cold Drinks Section */}{" "}
      {/* Start Warm and Cold Drinks Section */}
      <section className="hidden md:block">
        <div className="flex flex-wrap overflow-hidden px-24">
          <div className="w-full overflow-hidden lg:w-1/2 px-12">
            <h2 className="text-4xl my-12 border-b-2 border-custom-tan font-bold pb-3">
              SANDWICHES / WRAPS
            </h2>
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
          </div>

          <div className="w-full overflow-hidden lg:w-1/2 px-12">
            <h2 className="text-4xl my-12 border-b-2 border-custom-tan font-bold pb-3">
              BRICK OVEN PIZZA - 10"X4"
              <span className="text-3xl font-semibold">20 OZ</span>
            </h2>
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
          </div>
        </div>
      </section>
      {/* End Warm and Cold Drinks Section */}
      {/* Start Extras Section */}
      <section className="min-h-screen hidden md:block">
        <div className="flex flex-wrap overflow-hidden px-24">
          <div className="w-full overflow-hidden lg:w-1/2 px-12">
            <h2 className="text-5xl my-12 border-b-2 border-custom-tan font-bold pb-3">
              SNACKS
            </h2>
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
          </div>

          <div className="w-full overflow-hidden lg:w-1/2 px-12 md:mt-24">
            <h3 className="text-2xl font-bold mt-12 text-center">
              + TOPPINGS FOR SANDWICHES / WRAPS
            </h3>
            <p className="text-xl font-bold text-gray-500 tracking-wide text-center">
              Lettuce | Tomatoes | Banana Peppers | Spinach | Cucumbers |
              Almonds | Black Olives
            </p>
            <h3 className="text-2xl font-bold mt-6 text-center">+ DRESSINGS</h3>
            <p className="text-xl font-bold text-gray-500 tracking-wide text-center">
              Ranch | Mayo | Mustard | Italian | Blue Cheese | Balsamic Vinegar
              | Honey Mustard
            </p>
            <h3 className="text-2xl font-bold mt-6 text-center">+ CHEESES</h3>
            <p className="text-xl font-bold text-gray-500 tracking-wide text-center">
              Swiss | American | Cheddar | Mozzarella | Feta
            </p>
          </div>
        </div>
      </section>
      {/* End Warm and Cold Drinks Section */}
      <section id="mobile-only-view" className="md:hidden bg-yellow-50">
        <h2 className="text-2xl md:text-5xl my-12 border-b-2 border-custom-tan font-bold pb-3 text-center">
          WARM DRINKS -{" "}
          <span className="text-base md:text-3xl font-semibold">
            12 OZ / 20 OZ
          </span>
        </h2>
        <MobileMenuItem />
        <MobileMenuItem />
        <MobileMenuItem />
        <h2 className="text-2xl md:text-5xl my-12 border-b-2 border-custom-tan font-bold pb-3 text-center">
          COLD DRINKS - <span className="text-base font-semibold">20 OZ</span>
        </h2>
        <MobileMenuItem />
        <MobileMenuItem />
        <MobileMenuItem />
        <h2 className="text-2xl md:text-5xl my-12 border-b-2 border-custom-tan font-bold pb-3 text-center">
          Extras
        </h2>
        <MobileMenuItem />
        <MobileMenuItem />
        <MobileMenuItem />
        <h3 className="text-2xl md:text-5xl my-12 border-b-2 border-custom-tan font-bold pb-3 text-center">
          LATTE / CAPPUCCINO FLAVORS
        </h3>
        <p className="text-xl font-bold text-gray-500 tracking-wide text-center mb-5">
          Mocha | Caramel | Salted Caramel | Hazelnut | French Vanilla | White
          Chocolate | Chocolate Chip Cookie Dough | and over 35 more!
        </p>
        <p className="text-base md:text-3xl font-semibold text-center mb-3">
          {`(Sugar Free Options Are Also Available)`}
        </p>
        <p className="text-base md:text-3xl font-semibold text-center mb-3">
          Mix & Match to Make Any Flavor You Like
        </p>
        <h2 className="text-2xl md:text-5xl my-12 border-b-2 border-custom-tan font-bold pb-3 text-center">
          SANDWICHES / WRAPS
        </h2>
        <MobileMenuItem />
        <MobileMenuItem />
        <MobileMenuItem />
        <h2 className="text-2xl md:text-5xl my-12 border-b-2 border-custom-tan font-bold pb-3 text-center">
          BRICK OVEN PIZZA - 10"X4"
        </h2>
        <MobileMenuItem />
        <MobileMenuItem />
        <MobileMenuItem />
        <h2 className="text-2xl md:text-5xl my-12 border-b-2 border-custom-tan font-bold pb-3 text-center">
          SNACKS
        </h2>
        <MobileMenuItem />
        <MobileMenuItem />
        <MobileMenuItem />
        <h3 className="text-2xl md:text-5xl my-12  font-bold pb-3 text-center">
          TOPPINGS FOR SANDWICHES / WRAPS
        </h3>
        <p className="text-xl font-bold text-gray-500 tracking-wide text-center mb-5 mx-5">
          Lettuce | Tomatoes | Banana Peppers | Spinach | Cucumbers | Almonds |
          Black Olives
        </p>
        <h3 className="text-2xl md:text-5xl my-12  font-bold pb-3 text-center">
          DRESSINGS
        </h3>
        <p className="text-xl font-bold text-gray-500 tracking-wide text-center mb-5 mx-5">
          Ranch | Mayo | Mustard | Italian | Blue Cheese | Balsamic Vinegar |
          Honey Mustard
        </p>
        <h3 className="text-2xl md:text-5xl my-12  font-bold pb-3 text-center">
          CHEESES
        </h3>
        <p className="text-xl font-bold text-gray-500 tracking-wide text-center mb-5 mx-5">
          Swiss | American | Cheddar | Mozzarella | Feta
        </p>
      </section>
    </div>
  );
};

export default Menu;
