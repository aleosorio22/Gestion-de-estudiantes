const STORAGE_KEY = 'estudiantes_data';

// Obtener estudiantes desde localStorage o usar lista inicial
export const cargarEstudiantes = (listaInicial = []) => {
  const datos = localStorage.getItem(STORAGE_KEY);
  return datos ? JSON.parse(datos) : listaInicial;
};

// Guardar estudiantes en localStorage
export const guardarEstudiantes = (lista) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
};
