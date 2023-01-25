import "./App.css";
import PRODUCT from "./assets/image-product-desktop.jpg";

function App() {
  return (
    <div className="flex h-96 w-[40rem] rounded-xl flex-row bg-base-100 shadow-xl">
      <figure className="">
        <img
          className="h-full w-[20rem] rounded-l-xl"
          src={PRODUCT}
          alt="Shoes"
        />
      </figure>
      <div className="w-[20rem] text-black">
        <h2 className="text-xl text-left p-4 tracking-widest pl-12 text-green-800">
          PERFUME
        </h2>
        <p className="text-black text-[2.6rem] leading-10 text-left pl-12">
          Gabrielle Essence Eau De Parfum
        </p>
        <p>
          A floral, solar and voluptuous interpretation composed by Oliver
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div>
          <p className="text-green-800">
            $149.99 <span className="px-8">$169.99</span>
          </p>
        </div>
        <div className="flex flex-col w-fit justify-center content-end m-auto h-full">
          <button className="bg-black">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default App;
