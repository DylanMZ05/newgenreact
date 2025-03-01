import React from "react";

interface Column {
  key: string;
  label: string;
}

interface DataItem {
  [key: string]: string | number;
}

interface CategorySectionProps {
  title: string;
  columns: Column[];
  data: DataItem[];
  actionLabel?: string;
  onActionClick?: (item: DataItem) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  columns,
  data,
  actionLabel = "Editar",
  onActionClick,
}) => {
  return (
    <div className="bg-purple-200 p-4 rounded-lg mb-4">
      <h2 className="text-xl font-bold text-purple-700 mb-2">{title}</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Encabezado */}
        <div
          className={`grid grid-cols-${columns.length + (onActionClick ? 1 : 0)} bg-purple-500 text-white font-semibold p-2`}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns.length + (onActionClick ? 1 : 0)}, 1fr)`, // ✅ Define un grid de columnas dinámico
          }}
        >
          {columns.map((col) => (
            <div key={col.key} className="text-center border-r">
              {col.label}
            </div>
          ))}
          {onActionClick && <div className="text-center px-4">Acción</div>}
        </div>

        {/* Filas de Datos */}
        {data.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-${columns.length + (onActionClick ? 1 : 0)} border-b p-2 items-center text-center`}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${columns.length + (onActionClick ? 1 : 0)}, 1fr)`,
            }}
          >
            {columns.map((col) => (
              <div key={col.key} className="text-gray-700 border-r">
                {item[col.key]}
              </div>
            ))}
            {onActionClick && (
              <div className="flex justify-center">
                <button
                  className="bg-purple-500 text-white px-3 py-1 rounded-md hover:bg-purple-600 transition cursor-pointer"
                  onClick={() => onActionClick(item)}
                >
                  {actionLabel}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;