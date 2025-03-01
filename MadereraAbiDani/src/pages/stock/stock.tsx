import Header from '../../generalComponents/header';
import CategorySection from "../../generalComponents/CategorySection";

const stockData = [
  {
    title: "TABLAS",
    columns: [
      { key: "producto", label: "Producto" },
      { key: "cantidad", label: "Cantidad" },
      { key: "costo", label: "Costo Unit." },
      { key: "precio", label: "Precio Venta Unit." },
      { key: "beneficio", label: "Beneficio Unit." },
      { key: "medida", label: "Medida" },
      { key: "largo", label: "Largo" },
      { key: "variante", label: "Variante" },
    ],
    data: [
      {
        producto: "PINO",
        cantidad: "100 UDS",
        costo: "$5,000",
        precio: "$10,000",
        beneficio: "$5,000",
        medida: "1x1",
        largo: "3 mts",
        variante: "Lijada",
      },
      {
        producto: "PINO",
        cantidad: "50 UDS",
        costo: "$4,000",
        precio: "$8,000",
        beneficio: "$4,000",
        medida: " ",
        largo: " ",
        variante: " ",
      },
    ],
  },
  {
    title: "TRONCOS",
    columns: [
      { key: "producto", label: "Producto" },
      { key: "cantidad", label: "Cantidad" },
      { key: "costo", label: "Costo Unit." },
      { key: "precio", label: "Precio Venta Unit." },
      { key: "beneficio", label: "Beneficio Unit." },
    ],
    data: [
      {
        producto: "PINO",
        cantidad: "200 UDS",
        costo: "$6,000",
        precio: "$12,000",
        beneficio: "$6,000",
      },
      {
        producto: "PINO",
        cantidad: "200 UDS",
        costo: "$6,000",
        precio: "$12,000",
        beneficio: "$6,000",
      },
    ],
  },
];

const Stock = () => {
  return (
    <>
      <Header title='STOCK' goBack="/" onAdd={() => console.log("Añadir Elemento")}/>
      <section className="p-6">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">STOCK</h1>
        {stockData.map((section) => (
          <CategorySection
            key={section.title}
            title={section.title}
            columns={section.columns}
            data={section.data}
            actionLabel="Editar"
            onActionClick={(item) => console.log("Editando:", item)}
          />
        ))}
      </section>
    </>
  );
};

export default Stock;