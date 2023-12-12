
function Home() {
  return (
    <div>
      <h1>Bienvenido a la página de inicio</h1>
      <p>Esta es la página de inicio de nuestra aplicación.</p>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <button className="btn btn-primary">Button</button>
      <div className="flex">
        <div>hola</div>
        <div>hola</div>
      </div>
    </div>
  );
}

export default Home;
