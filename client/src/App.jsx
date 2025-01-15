import Task from "./components/Task.jsx";

function App() {
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-center text-5xl font-bold text-slate-500 p-2 m-4">
        Hola Valen
      </h1>
      <div className="flex justify-center p-2">
        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-3/4 m-4 mx-auto border border-slate-200 rounded-2xl">
        <Task />
      </div>
    </div>
  );
}

export default App;

