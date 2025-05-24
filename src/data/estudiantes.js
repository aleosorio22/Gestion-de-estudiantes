// src/data/estudiantes.js

// Cada estudiante es un diccionario (objeto JS)
// Materias como tuplas simuladas (arrays de longitud fija con nombre y código)
// Usamos un set en otro lugar si queremos verificar carnés duplicados

const estudiantes = [
    {
      nombre: "Ana López",
      carne: "20230001",
      materias: [["Matemática I", "MAT101"], ["Lenguaje", "LEN102"]],
      promedio: 8.5
    },
    {
      nombre: "Carlos Pérez",
      carne: "20230002",
      materias: [["Programación I", "PRG101"], ["Matemática I", "MAT101"]],
      promedio: 7.8
    },
    {
      nombre: "Daniela Rodríguez",
      carne: "20230003",
      materias: [["Historia", "HIS101"], ["Ética", "ETI101"]],
      promedio: 9.0
    },
    // ... aquí van 27 más
  ];
  
  // Agregamos automáticamente 27 estudiantes más (simulados)
  for (let i = 4; i <= 30; i++) {
    estudiantes.push({
      nombre: `Estudiante ${i}`,
      carne: `202300${i.toString().padStart(2, "0")}`,
      materias: [
        ["Materia X", `MAT${100 + i}`],
        ["Materia Y", `MAT${200 + i}`]
      ],
      promedio: +(Math.random() * 4 + 6).toFixed(2) // Promedio entre 6.00 y 10.00
    });
  }
  
  export default estudiantes;
  