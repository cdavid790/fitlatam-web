export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold mb-6">
          Crea tu propio balance
        </h1>
        <p className="text-gray-300 max-w-xl mb-8">
          Entrenamiento, nutrición y bienestar personalizados en una sola app.
        </p>
        <button className="bg-green-500 text-black px-6 py-3 rounded-xl font-semibold">
          Empieza ahora
        </button>
      </section>

      {/* BENEFICIOS */}
      <section className="py-20 px-6 grid md:grid-cols-3 gap-10 text-center">
        <div>
          <h3 className="text-xl font-bold mb-2">Entrenamiento</h3>
          <p className="text-gray-400">Rutinas adaptadas a tu nivel y objetivos.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Nutrición</h3>
          <p className="text-gray-400">Planes diseñados para tu estilo de vida.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Bienestar</h3>
          <p className="text-gray-400">Equilibra cuerpo y mente.</p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Empieza hoy con Fitlatam
        </h2>
        <button className="bg-green-500 text-black px-6 py-3 rounded-xl font-semibold">
          Descargar app
        </button>
      </section>

    </main>
  );
}