export const calcularPromedioGeneral = (estudiantes) => {
    if (estudiantes.length === 0) return 0;
    const suma = estudiantes.reduce((total, est) => total + est.promedio, 0);
    return (suma / estudiantes.length).toFixed(2);
  };
  