import CategorySection from "../../generalComponents/CategorySection";
import Header from "../../generalComponents/header";

const ventasData = [
  {
    title: "4/2/2025",
    columns: [
      { key: "idVenta", label: "ID de Venta" },
      { key: "producto", label: "Producto" },
      { key: "categoria", label: "Categoría" },
      { key: "cantidad", label: "Cantidad" },
      { key: "precioTotal", label: "Precio Venta Total" },
      { key: "costoTotal", label: "Costo Total" },
      { key: "beneficioTotal", label: "Beneficio Total" },
      { key: "cliente", label: "Cliente" },
    ],
    data: [
      {
        idVenta: "10101010",
        producto: "PINO",
        categoria: "Tablas",
        cantidad: "100 UDS",
        precioTotal: "$1,000,000",
        costoTotal: "$500,000",
        beneficioTotal: "$500,000",
        cliente: "Claudio Cifa",
      },
      {
        idVenta: "10101010",
        producto: "PINO",
        categoria: "Tablas",
        cantidad: "100 UDS",
        precioTotal: "$1,000,000",
        costoTotal: "$500,000",
        beneficioTotal: "$500,000",
        cliente: "Claudio Cifa",
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
      { key: "costoTotal", label: "Costo Total" },
      { key: "beneficioTotal", label: "Beneficio Total" },
      { key: "cliente", label: "Cliente" },
    ],
    data: [
      {
        idVenta: "10101010",
        producto: "PINO",
        categoria: "Tablas",
        cantidad: "100 UDS",
        precioTotal: "$1,000,000",
        costoTotal: "$500,000",
        beneficioTotal: "$500,000",
        cliente: "Claudio Cifa",
      },
    ],
  },
];

const Ventas = () => {
  return (
    <>
      <Header title='STOCK' goBack="/" onAdd={() => console.log("Añadir Elemento")}/>
      <section className="p-6">

        <h2 className="text-3xl font-bold text-purple-700 mb-4">VENTAS</h2>
        {ventasData.map((section) => (
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

export default Ventas;