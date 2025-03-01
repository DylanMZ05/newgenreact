import CategorySection from "../../generalComponents/CategorySection";
import Header from "../../generalComponents/header";

const repartosData = [
  {
    title: "4/2/2025",
    columns: [
      { key: "idVenta", label: "ID de Venta" },
      { key: "producto", label: "Producto" },
      { key: "categoria", label: "Categoría" },
      { key: "cantidad", label: "Cantidad" },
      { key: "precioTotal", label: "Precio Venta Total" },
      { key: "cliente", label: "Cliente" },
      { key: "ubicacion", label: "Ubicación" },
    ],
    data: [
      {
        idVenta: "10101010",
        producto: "PINO",
        categoria: "Tablas",
        cantidad: "100 UDS",
        precioTotal: "$1,000,000",
        cliente: "Claudio Cifa",
        ubicacion: "Calle 123",
      },
      {
        idVenta: "10101010",
        producto: "PINO",
        categoria: "Tablas",
        cantidad: "100 UDS",
        precioTotal: "$1,000,000",
        cliente: "Claudio Cifa",
        ubicacion: "Calle 123",
      },
    ],
  },
  {
    title: "3/2/2025",
    columns: [
      { key: "idVenta", label: "ID de Venta" },
      { key: "producto", label: "Producto" },
      { key: "categoria", label: "Categoría" },
      { key: "cantidad", label: "Cantidad" },
      { key: "precioTotal", label: "Precio Venta Total" },
      { key: "cliente", label: "Cliente" },
      { key: "ubicacion", label: "Ubicación" },
    ],
    data: [
      {
        idVenta: "10101010",
        producto: "PINO",
        categoria: "Tablas",
        cantidad: "100 UDS",
        precioTotal: "$1,000,000",
        cliente: "Claudio Cifa",
        ubicacion: "Calle 123",
      },
    ],
  },
];

const Repartos = () => {
  return (
    <>
      <Header title='STOCK' goBack="/" onAdd={() => console.log("Añadir Elemento")}/>
      <section className="p-6">

        <h2 className="text-3xl font-bold text-purple-700 mb-4">REPARTOS</h2>
        {repartosData.map((section) => (
          <CategorySection
            key={section.title}
            title={section.title}
            columns={section.columns}
            data={section.data}
            actionLabel="Ver"
            onActionClick={(item) => console.log("Viendo:", item)}
          />
        ))}
      </section>
    </>
  );
};

export default Repartos;