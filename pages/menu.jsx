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
            <MenuItemCard
              title="f2 espresso"
              description="Our signature blend. Made with a mixture of latvian and arabic coffees from the edges"
              category="Espresso"
              price="$2.50 / 5.00"
              imageURL="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGF0dGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
            <MenuItemCard
              title="Espresso Macchhiato"
              description="Our custom blend with a bit of foam. Frothy and delicious mix of our custom blend."
              category="Espresso"
              price="$3.50 / 6.00"
              imageURL="https://images.unsplash.com/photo-1612888327759-41a6ca7a52de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcHB1Y2lub3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
            <MenuItemCard
              title="cappucino"
              description="espresso coffee topped with frothed hot milk or cream and often flavored with cinnamon"
              category="Cappucino"
              price="$4.50 / 6.50"
              imageURL="https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwcHVjaW5vfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
            <MenuItemCard
              title="Cafe Mocha"
              description="Choclaty and amazing blend of our custom blend and cocoa goodness."
              category="Mocha"
              price="$4.50 / 6.50"
              imageURL="https://images.unsplash.com/photo-1578632352280-70ad666425e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcHB1Y2lub3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
            <MenuItemCard
              title="Maple Cinnamon Latte"
              description="Our custom blend of coffee perfectly mixed with cinnamon to accent the flavors."
              category="Latte"
              price="$4.00 / 6.25"
              imageURL="https://images.unsplash.com/photo-1579494398610-7435a2bee449?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhcHB1Y2lub3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
          </div>

          <div className="w-full overflow-hidden lg:w-1/2 px-12">
            <h2 className="text-5xl my-12 border-b-2 border-custom-tan font-bold pb-3">
              COLD DRINKS -{" "}
              <span className="text-3xl font-semibold">20 OZ</span>
            </h2>
            <MenuItemCard
              title="Cold Brew"
              description="Our signature cold brew. Made with a mixture of latin and african coffees from the edges of the rainforrest"
              category="Cold&nbsp;Brew"
              price="$2.50 / 5.00"
              imageURL="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWNlZCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
            <MenuItemCard
              title="Nitro Cold Brew"
              description="Over caffeinated is what this cold brew was built for. Our signature nitro blend will knock your socks off."
              category="Cold&nbsp;Brew"
              price="$3.50 / 6.00"
              imageURL="https://images.unsplash.com/photo-1592663527359-cf6642f54cff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aWNlZCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
            <MenuItemCard
              title="Iced Cappucino"
              description="espresso coffee topped with frothed hot milk or cream and often flavored with cinnamon"
              category="Cappucino"
              price="$4.50 / 6.50"
              imageURL="https://images.unsplash.com/photo-1589985902809-39d25db22101?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGljZWQlMjBjb2ZmZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
            <MenuItemCard
              title="Iced Cafe Mocha"
              description="Chocolatey and amazing blend of our custom blend and cocoa goodness."
              category="Mocha"
              price="$4.50 / 6.50"
              imageURL="https://images.unsplash.com/photo-1619397166882-370d90522ef4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aWNlZCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
            <MenuItemCard
              title="Iced Maple Cinnamon Latte"
              description="Our custom blend of coffee perfectly mixed with cinnamon to accent the flavors."
              category="Latte"
              price="$4.00 / 6.25"
              imageURL="https://images.unsplash.com/photo-1514053376103-51c19c5c8291?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGljZWQlMjBjb2ZmZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
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
            <MenuItemCard
              title="Pork Sandwich"
              description="Extra shot of espresso made with our rich custom blend of latvian and arabic coffee's"
              category="Extras"
              price="$1.00"
              imageURL="https://images.unsplash.com/photo-1498241804937-a517467c0db6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXNwcmVzc28lMjBzaG90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
            <MenuItemCard
              title="Extra flavor shot"
              description="See our list of assorted flavors that you can add to any of our drinks on request."
              category="Extras"
              price="$0.25"
              imageURL="https://images.unsplash.com/photo-1567357771095-695c40e0da98?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29mZmVlJTIwc3lydXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
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
            <h2 className=" text-2xl md:text-5xl my-12 border-b-2 border-custom-tan font-bold pb-3">
              SANDWICHES -{" "}
              <span className="text-base md:text-3xl font-semibold">
                Half / Full
              </span>
            </h2>
            <MenuItemCard
              title="Pork Sandwich"
              description="Our signature smoked pork, with fresh veggies and spiced to your exact taste"
              category="Pork"
              price="$9.00 / 14.25"
              imageURL="https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvayUyMHNhbmR3aWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
            <MenuItemCard
              title="Roast Beef Sandwich"
              description="Our custom blend of coffee perfectly mixed with cinnamon to accent the flavors."
              category="Roast&nbsp;Beef"
              price="$8.00 / 14.25"
              imageURL="https://images.unsplash.com/photo-1604467707321-70d5ac45adda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvayUyMHNhbmR3aWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
            <MenuItemCard
              title="Chicken Sandwich"
              description="Our custom blend of coffee perfectly mixed with cinnamon to accent the flavors."
              category="Chicken"
              price="$9.00 / 15.25"
              imageURL="https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHNhbmR3aWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
          </div>

          <div className="w-full overflow-hidden lg:w-1/2 px-12">
            <h2 className="text-4xl my-12 border-b-2 border-custom-tan font-bold pb-3">
              BRICK OVEN PIZZA - 10"X4"{" "}
              <span className="text-3xl font-semibold">Small/Large</span>
            </h2>
            <MenuItemCard
              title="Pepperoni Pizza"
              description="An old favorite with a new taste. Italian herbs and high quality pepperoni with a four cheese blend"
              category="Pizza"
              price="$9.00 / 15.25"
              imageURL="https://images.unsplash.com/photo-1565564194296-14db6e0bf8a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVwcGVyb25pJTIwcGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
            <MenuItemCard
              title="Mediterranean Pizza"
              description="An master piece from the old world. Italian herbs and high quality pepperoni with a four cheese blend and olives"
              category="Pizza"
              price="$9.00 / 15.25"
              imageURL="https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FuYWRpYW4lMjBwaXp6YXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
            <MenuItemCard
              title="Custom Pizza"
              description="Build your own pizza any way you like. Choose from tons of different toppings, crusts and sauces to create your own master piece."
              category="Pizza"
              price="$10.00 / 17.25"
              imageURL="https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbmFkaWFuJTIwcGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
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
            <MenuItemCard
              title="Chocolate Chip"
              description="Our home made choclate chip cookies leave nothing on the table. Literally, you will eat them all."
              category="Cookies"
              price="$2.00"
              imageURL="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29va2llc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            />
            <MenuItemCard
              title="Muffins"
              description="Our muffins are a master piece that needs to be enjoyed with a nice hot cup of coffe to full appreciate."
              category="Muffins"
              price="$3.00"
              imageURL="https://images.unsplash.com/photo-1585665187093-a3511c2fe57a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVmZmluc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
            <MenuItemCard
              title="Brownies"
              description="Our custom blend of coffee perfectly mixed with cinnamon to accent the flavors."
              category="Brownies"
              price="$2.00"
              imageURL="https://images.unsplash.com/photo-1589375025852-a66cdd127efb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnJvd25pZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
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
        <MobileMenuItem
          title="f2 espresso"
          description="Our signature blend. Made with a mixture of latvian and arabic coffees from the edges"
          category="Espresso"
          price="$2.50 / 5.00"
          imageURL="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGF0dGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <MobileMenuItem
          title="Espresso Macchhiato"
          description="Our custom blend with a bit of foam. Frothy and delicious mix of our custom blend."
          category="Espresso"
          price="$3.50 / 6.00"
          imageURL="https://images.unsplash.com/photo-1612888327759-41a6ca7a52de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcHB1Y2lub3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <MobileMenuItem
          title="cappucino"
          description="espresso coffee topped with frothed hot milk or cream and often flavored with cinnamon"
          category="Cappucino"
          price="$4.50 / 6.50"
          imageURL="https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwcHVjaW5vfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <MobileMenuItem
          title="Cafe Mocha"
          description="Choclaty and amazing blend of our custom blend and cocoa goodness."
          category="Mocha"
          price="$4.50 / 6.50"
          imageURL="https://images.unsplash.com/photo-1578632352280-70ad666425e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcHB1Y2lub3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <MobileMenuItem
          title="Maple Cinnamon Latte"
          description="Our custom blend of coffee perfectly mixed with cinnamon to accent the flavors."
          category="Latte"
          price="$4.00 / 6.25"
          imageURL="https://images.unsplash.com/photo-1579494398610-7435a2bee449?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhcHB1Y2lub3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <h2 className="text-2xl md:text-5xl my-12 border-b-2 border-custom-tan font-bold pb-3 text-center">
          COLD DRINKS - <span className="text-base font-semibold">20 OZ</span>
        </h2>
        <MobileMenuItem
          title="Cold Brew"
          description="Our signature cold brew. Made with a mixture of latin and african coffees from the edges of the rainforrest"
          category="Cold&nbsp;Brew"
          price="$2.50 / 5.00"
          imageURL="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWNlZCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <MobileMenuItem
          title="Nitro Cold Brew"
          description="Over caffeinated is what this cold brew was built for. Our signature nitro blend will knock your socks off."
          category="Cold&nbsp;Brew"
          price="$3.50 / 6.00"
          imageURL="https://images.unsplash.com/photo-1592663527359-cf6642f54cff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aWNlZCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <MobileMenuItem
          title="Iced Cappucino"
          description="espresso coffee topped with frothed hot milk or cream and often flavored with cinnamon"
          category="Cappucino"
          price="$4.50 / 6.50"
          imageURL="https://images.unsplash.com/photo-1589985902809-39d25db22101?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGljZWQlMjBjb2ZmZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <MobileMenuItem
          title="Iced Cafe Mocha"
          description="Chocolatey and amazing blend of our custom blend and cocoa goodness."
          category="Mocha"
          price="$4.50 / 6.50"
          imageURL="https://images.unsplash.com/photo-1619397166882-370d90522ef4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aWNlZCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <MobileMenuItem
          title="Iced Maple Cinnamon Latte"
          description="Our custom blend of coffee perfectly mixed with cinnamon to accent the flavors."
          category="Latte"
          price="$4.00 / 6.25"
          imageURL="https://images.unsplash.com/photo-1514053376103-51c19c5c8291?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGljZWQlMjBjb2ZmZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <h2 className="text-2xl md:text-5xl my-12 border-b-2 border-custom-tan font-bold pb-3 text-center">
          Extras
        </h2>
        <MobileMenuItem
          title="Pork Sandwich"
          description="Extra shot of espresso made with our rich custom blend of latvian and arabic coffee's"
          category="Extras"
          price="$1.00"
          imageURL="https://images.unsplash.com/photo-1498241804937-a517467c0db6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXNwcmVzc28lMjBzaG90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <MobileMenuItem
          title="Extra flavor shot"
          description="See our list of assorted flavors that you can add to any of our drinks on request."
          category="Extras"
          price="$0.25"
          imageURL="https://images.unsplash.com/photo-1567357771095-695c40e0da98?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29mZmVlJTIwc3lydXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
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
        <MobileMenuItem
          title="Pepperoni Pizza"
          description="An old favorite with a new taste. Italian herbs and high quality pepperoni with a four cheese blend"
          category="Pizza"
          price="$9.00 / 15.25"
          imageURL="https://images.unsplash.com/photo-1565564194296-14db6e0bf8a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVwcGVyb25pJTIwcGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <MobileMenuItem
          title="Mediterranean Pizza"
          description="An master piece from the old world. Italian herbs and high quality pepperoni with a four cheese blend and olives"
          category="Pizza"
          price="$9.00 / 15.25"
          imageURL="https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FuYWRpYW4lMjBwaXp6YXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <MobileMenuItem
          title="Custom Pizza"
          description="Build your own pizza any way you like. Choose from tons of different toppings, crusts and sauces to create your own master piece."
          category="Pizza"
          price="$10.00 / 17.25"
          imageURL="https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbmFkaWFuJTIwcGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <h2 className="text-2xl md:text-5xl my-12 border-b-2 border-custom-tan font-bold pb-3 text-center">
          BRICK OVEN PIZZA - 10"X4"
        </h2>
        <MobileMenuItem
          title="Pepperoni Pizza"
          description="An old favorite with a new taste. Italian herbs and high quality pepperoni with a four cheese blend"
          category="Pizza"
          price="$9.00 / 15.25"
          imageURL="https://images.unsplash.com/photo-1565564194296-14db6e0bf8a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVwcGVyb25pJTIwcGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <MobileMenuItem
          title="Mediterranean Pizza"
          description="An master piece from the old world. Italian herbs and high quality pepperoni with a four cheese blend and olives"
          category="Pizza"
          price="$9.00 / 15.25"
          imageURL="https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FuYWRpYW4lMjBwaXp6YXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <MobileMenuItem
          title="Custom Pizza"
          description="Build your own pizza any way you like. Choose from tons of different toppings, crusts and sauces to create your own master piece."
          category="Pizza"
          price="$10.00 / 17.25"
          imageURL="https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbmFkaWFuJTIwcGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <h2 className="text-2xl md:text-5xl my-12 border-b-2 border-custom-tan font-bold pb-3 text-center">
          SNACKS
        </h2>
        <MobileMenuItem
          title="Chocolate Chip"
          description="Our home made choclate chip cookies leave nothing on the table. Literally, you will eat them all."
          category="Cookies"
          price="$2.00"
          imageURL="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29va2llc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        />
        <MobileMenuItem
          title="Muffins"
          description="Our muffins are a master piece that needs to be enjoyed with a nice hot cup of coffe to full appreciate."
          category="Muffins"
          price="$3.00"
          imageURL="https://images.unsplash.com/photo-1585665187093-a3511c2fe57a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVmZmluc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <MobileMenuItem
          title="Brownies"
          description="Our custom blend of coffee perfectly mixed with cinnamon to accent the flavors."
          category="Brownies"
          price="$2.00"
          imageURL="https://images.unsplash.com/photo-1589375025852-a66cdd127efb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnJvd25pZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
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
