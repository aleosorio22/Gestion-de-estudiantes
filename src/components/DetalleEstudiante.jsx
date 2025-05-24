const DetalleEstudiante = ({ estudiante, onCerrar }) => {
    if (!estudiante) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
        <div className="bg-white rounded p-6 w-full max-w-md shadow-lg relative">
          <button
            onClick={onCerrar}
            className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
          >
            ✖
          </button>
          <h2 className="text-xl font-bold mb-4">Materias de {estudiante.nombre}</h2>
          <ul className="list-disc pl-5 space-y-1">
            {estudiante.materias.map(([nombre, codigo], idx) => (
              <li key={idx}>
                <strong>{nombre}</strong> <span className="text-gray-500">({codigo})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default DetalleEstudiante;
  