import Header from "../../generalComponents/header";
import HomeCard from "./components/HomeCard";

const Home = () => {
  const pages = [
    "STOCK",
    "VENTAS",
    "REPARTOS",
    "ADMINISTRAR",
    "CLIENTES",
    "PROVEEDORES"
  ];

  return (
    <>
      <Header title="INICIO" />
      <main className="flex flex-col justify-center items-center">
        <section className="flex items-center justify-center flex-wrap gap-5 px-10">
          {pages.map((page) => (
            <HomeCard key={page} title={page} />
          ))}
        </section>
      </main>
    </>
  )
}

export default Home