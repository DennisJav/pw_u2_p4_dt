const estudiante = [
  { nombre: "Estudiante 1", apellido: "Apellido 1" },
  { nombre: "Estudiante 2", apellido: "Apellido 2" },
  { nombre: "Estudiante 3", apellido: "Apellido 3" },
  { nombre: "Estudiante 4", apellido: "Apellido 4" },
  { nombre: "Estudiante 5", apellido: "Apellido 5" },
  { nombre: "Estudiante 6", apellido: "Apellido 6" },
  { nombre: "Estudiante 7", apellido: "Apellido 7" },
  { nombre: "Estudiante 8", apellido: "Apellido 8" },
  { nombre: "Estudiante 9", apellido: "Apellido 9" },
  { nombre: "Estudiante 10", apellido: "Apellido 10" },
];

console.log(estudiante);

const app = Vue.createApp({
  data() {
    return {
      miarreglo: estudiante,
      nombre: "",
    };
  },

  methods: {
    agregarEstudiante(event) {
      console.log("Vamos a agregar");
      console.log(this.nombre);
      console.log(event);
      console.log(event.charCode);
      if (event.charCode == "13") {
        console.log("Presiono enter");
        const nuevoEstudiante = {
          nombre: this.nombre,
          apellido: "Nuevo apellido",
        };
        this.miarreglo.unshift(nuevoEstudiante);
      } else {
        console.log("No es enter");
      }
    },

    agregarEstudianteDos() {
      console.log("Vamos a agregar: ");
      const nuevo = {
        nombre: this.nombre,
        apellido: "hola",
      };
      this.miarreglo.unshift(nuevo);
    },
  },
});

function insertarEstudiate(estudiante) {}

//desestructuracion en JS
//function insertarEstudiante2({nombre,apellido}){
//}
//ahi se puede enviar nombre y apellido de estudiante si solo dejamos nombre se cre usando solo nombre
app.mount("#myAppVue2");
