import "./App.css";
import PRODUCT from "./assets/image-product-desktop.jpg";
import CART from "./assets/icon-cart.svg";

function App() {
  return (
    <div className="grid md:h-[35rem] h-[50rem]  md:w-[40rem] w-[28rem] md:grid-flow-col grid-flow-row rounded-xl bg-base-100 shadow-xl font-montserrat">
      <figure className="">
        <img
          className="md:h-full md:w-[20rem] h-[20rem] w-full md:rounded-t-none md:rounded-l-xl rounded-t-xl"
          src={PRODUCT}
          alt="Gabrielle CHANEL"
        />
      </figure>

      <div className="w-[20rem] text-design-darkblue grid grid-flow-row">
        <h2 className="text-sm mt-8 ml-8 text-left tracking-[0.3rem] text-design-darkblue">
          PERFUME
        </h2>
        <p className="text-design-darkblue ml-8 w-full font-fraunces text-[2.6rem] leading-10 text-left my-">
          Gabrielle Essence Eau De Parfum
        </p>
        <p className="text-start mx-8">
          A floral, solar and voluptuous interpretation composed by Oliver
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="relative flex items-center text-start mx-8">
          <p className="text-design-darkcyan font-fraunces text-4xl">
            $149.99{" "}
            <span className="mx-5 absolute translate-y-[0.15rem] text-base line-through font-montserrat text-design-darkgrayblue">
              $169.99
            </span>
          </p>
        </div>
        <div className="flex justify-center w-full">
          <button className="bg-design-darkcyan text-white flex justify-center items-center my-8 w-[80%] rounded-lg active:bg-emerald-900">
            <img src={CART} className="pr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
