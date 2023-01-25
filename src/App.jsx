import "./App.css";
import PRODUCT from "./assets/image-product-desktop.jpg";

function App() {
  return (
    <div className="flex h-[35rem] w-[40rem] rounded-xl flex-row bg-base-100 shadow-xl font-montserrat">
      <figure className="">
        <img
          className="h-full w-[20rem] rounded-l-xl"
          src={PRODUCT}
          alt="Gabrielle CHANEL"
        />
      </figure>
      <div className="w-[20rem] pl-8 text-design-darkblue">
        <h2 className="text-xl pt-8 text-left tracking-widest text-design-darkblue">
          PERFUME
        </h2>
        <p className="text-design-darkblue font-fraunces text-[2.6rem] leading-10 text-left py-4">
          Gabrielle Essence Eau De Parfum
        </p>
        <p className="text-start">
          A floral, solar and voluptuous interpretation composed by Oliver
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="relative text-start mx-8">
          <p className="text-design-darkcyan font-fraunces text-3xl py-8">
            $149.99{" "}
            <span className="mx-5 absolute top-1/2 -translate-y-1/2 text-base line-through font-montserrat text-design-darkgrayblue">
              $169.99
            </span>
          </p>
        </div>
        {/* <div className="flex flex-col w-fit justify-center content-end m-auto h-full">
          <button className="bg-black">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
}

export default App;
