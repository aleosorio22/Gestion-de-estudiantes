import { useState } from 'react';

const AgregarEstudiante = ({ onAgregar }) => {
  const [nombre, setNombre] = useState('');
  const [carne, setCarne] = useState('');
  const [materias, setMaterias] = useState('');
  const [promedio, setPromedio] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!nombre || !carne || !materias || !promedio) {
      setError('Todos los campos son obligatorios');
      return;
    }

    const promedioNum = parseFloat(promedio);
    if (isNaN(promedioNum) || promedioNum < 0 || promedioNum > 10) {
      setError('El promedio debe ser un número entre 0 y 10');
      return;
    }

    const nuevasMaterias = materias.split(',').map(m => m.trim()).map((m, i) => [m, `MAT${i + 100}`]);
    const nuevoEstudiante = {
      nombre,
      carne,
      materias: nuevasMaterias,
      promedio: promedioNum
    };

    onAgregar(nuevoEstudiante);

    setNombre('');
    setCarne('');
    setMaterias('');
    setPromedio('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Agregar Estudiante</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre Completo
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Ej. Juan Pérez"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        
        <div>
          <label htmlFor="carne" className="block text-sm font-medium text-gray-700 mb-1">
            Carné
          </label>
          <input
            id="carne"
            type="text"
            placeholder="Ej. A12345"
            value={carne}
            onChange={(e) => setCarne(e.target.value)}
            className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        
        <div>
          <label htmlFor="materias" className="block text-sm font-medium text-gray-700 mb-1">
            Materias
          </label>
          <input
            id="materias"
            type="text"
            placeholder="Ej. Matemáticas, Programación, Física"
            value={materias}
            onChange={(e) => setMaterias(e.target.value)}
            className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <p className="mt-1 text-xs text-gray-500">Separadas por comas</p>
        </div>
        
        <div>
          <label htmlFor="promedio" className="block text-sm font-medium text-gray-700 mb-1">
            Promedio
          </label>
          <input
            id="promedio"
            type="number"
            placeholder="Ej. 8.5"
            step="0.01"
            min="0"
            max="10"
            value={promedio}
            onChange={(e) => setPromedio(e.target.value)}
            className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-200"
        >
          Agregar Estudiante
        </button>
      </form>
    </div>
  );
};

export default AgregarEstudiante;
