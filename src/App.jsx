import "./App.css";
import PRODUCT from "./assets/image-product-desktop.jpg";
import CART from "./assets/icon-cart.svg";

function App() {
  return (
    <div className="grid   sm:w-[40rem] w-[24rem] sm:grid-flow-col grid-flow-row rounded-xl bg-base-100 shadow-xl font-montserrat">
      {/* <picture
        className={`bg-[url('./assets/image-product-desktop.jpg')] bg-center sm:h-full sm:w-[20rem] h-[18rem] w-full sm:rounded-t-none sm:rounded-l-xl rounded-t-xl bg-cover`}
      /> */}
      <picture className=" sm:h-full sm:w-[20rem] h-[18rem] w-full">
        <img
          className="h-full w-full object-cover sm:rounded-t-none sm:rounded-l-xl rounded-t-xl bg-cover"
          src={PRODUCT}
        />
      </picture>
      <div className="w-full text-design-darkblue bg-white grid grid-flow-row sm:rounded-r-xl rounded-b-xl mt-8">
        <h2 className="text-sm ml-8 text-left tracking-[0.3rem] text-design-darkblue uppercase">
          Perfume
        </h2>
        <p className="text-design-darkblue ml-8 my-4 sm:w-fit w-full mr-6 font-fraunces text-[2.3rem] leading-10 text-left">
          Gabrielle Essence Eau De Parfum
        </p>
        <p className="text-start text-[0.96rem] mx-8">
          A floral, solar and voluptuous interpretation composed by Oliver
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="relative flex items-center text-start my-4 mx-8">
          <p className="text-design-darkcyan font-fraunces text-4xl">
            $149.99{" "}
            <span className="mx-5 absolute -translate-y-1/2 top-1/2 text-sm line-through font-montserrat text-design-darkgrayblue">
              $169.99
            </span>
          </p>
        </div>
        <div className="flex justify-center w-full">
          <button className="bg-design-darkcyan text-white sm:p-0 p-3 flex justify-center items-center mb-6 w-[80%] rounded-lg active:bg-emerald-900">
            <img src={CART} className="pr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
