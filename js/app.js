console.log("componente VUE");
//console.log(Vue)
const app = Vue.createApp({
  //se manejan opcion API
  //opcion 1,
  //opcion 2,
  //opcion n, etc ect
  // template: `
  //  <h1>HOLA MUNDO</h1>
  // <p> Desde Vue.JS</p>
  // <p>{{1+1}}</p>
  // `,

  data() {
    return {
      //vmaos a declarar propiedades reacttivas que serviran como modelo
      nombre: "Dennis",
      apellido: "Tapia",
      mensaje: "Dentro de propiedades reactivas",
    };
  },

  methods: {
    //me permite crear metodos js
    cambiarNombre() {
      console.log("Boton cambiar nombre");
      this.nombre = "Javier";
    },

    cambiarApellido() {
      console.log("Boton cambiar apellido");
      this.apellido = "Ortiz";
    },
  },
});
//identificador Cualquier el # es mandatorio
app.mount("#myAppVue");
