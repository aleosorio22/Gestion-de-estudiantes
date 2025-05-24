import { useEffect, useState } from 'react';
import estudiantesIniciales from './data/estudiantes';
import { cargarEstudiantes, guardarEstudiantes } from './utils/storage';
import AgregarEstudiante from './components/AgregarEstudiante';
import ListaEstudiantes from './components/ListaEstudiantes';
import BuscarEstudiante from './components/BuscarEstudiante';
import DetalleEstudiante from './components/DetalleEstudiante';
import { calcularPromedioGeneral } from './utils/promedio';

function App() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [mostrarSobresalientes, setMostrarSobresalientes] = useState(false);
  const [detalleActivo, setDetalleActivo] = useState(null);

  useEffect(() => {
    const cargados = cargarEstudiantes(estudiantesIniciales);
    setEstudiantes(cargados);
  }, []);

  const agregarEstudiante = (nuevo) => {
    const carnesSet = new Set(estudiantes.map(e => e.carne));
  
    if (carnesSet.has(nuevo.carne)) {
      alert(`Ya existe un estudiante con el carné ${nuevo.carne}`);
      return;
    }
  
    const nuevos = [...estudiantes, nuevo];
    setEstudiantes(nuevos);
    guardarEstudiantes(nuevos);
  };
  
  const eliminarEstudiante = (carne) => {
    const filtrados = estudiantes.filter(est => est.carne !== carne);
    setEstudiantes(filtrados);
    guardarEstudiantes(filtrados);
  };

  const estudiantesFiltrados = estudiantes.filter(est => {
    const coincideBusqueda =
      est.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      est.carne.includes(filtro);

    const cumplePromedio = !mostrarSobresalientes || est.promedio > 8.0;

    return coincideBusqueda && cumplePromedio;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-indigo-600 text-white shadow-lg p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Sistema de Gestión de Estudiantes</h1>
          <p className="mt-2 text-indigo-100">
            Administra la información académica de forma eficiente
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Estadísticas</h2>
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                  {estudiantes.length} estudiantes
                </span>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg p-4 mb-4">
                <p className="text-sm font-medium">Promedio General</p>
                <p className="text-3xl font-bold">{calcularPromedioGeneral(estudiantes)}</p>
              </div>
              
              <button
                onClick={() => setMostrarSobresalientes(!mostrarSobresalientes)}
                className={`w-full py-2 px-4 rounded-md transition-colors duration-200 ${
                  mostrarSobresalientes 
                    ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200' 
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {mostrarSobresalientes
                  ? '👥 Mostrar todos los estudiantes'
                  : '🌟 Mostrar solo con promedio > 8.0'}
              </button>
            </div>
            
            <AgregarEstudiante onAgregar={agregarEstudiante} />
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Estudiantes</h2>
              <BuscarEstudiante onBuscar={setFiltro} />
              <ListaEstudiantes
                estudiantes={estudiantesFiltrados}
                onEliminar={eliminarEstudiante}
                onVerDetalle={setDetalleActivo}
              />
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>Sistema de Gestión de Estudiantes &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
      
      <DetalleEstudiante
        estudiante={detalleActivo}
        onCerrar={() => setDetalleActivo(null)}
      />
    </div>
  );
}

export default App;
