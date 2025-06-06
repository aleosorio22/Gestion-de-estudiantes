import { useState } from 'react';

const BuscarEstudiante = ({ onBuscar }) => {
  const [termino, setTermino] = useState('');

  const handleChange = (e) => {
    const texto = e.target.value;
    setTermino(texto);
    onBuscar(texto); // Llama al callback para filtrar en App
  };

  return (
    <div className="mb-4 relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </div>
      <input
        type="text"
        placeholder="Buscar por nombre o carné..."
        value={termino}
        onChange={handleChange}
        className="w-full p-2.5 pl-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
};

export default BuscarEstudiante;
