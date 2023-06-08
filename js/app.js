console.log("componente VUE");
//console.log(Vue)
const app = Vue.createApp({
  //se manejan opcion API
  //opcion 1,
  //opcion 2,
  //opcion n, etc ect

  template: `
    <h1>HOLA MUNDO</h1>
    <p> Desde Vue.JS</p>
    `,
});
//identificador Cualquier el # es mandatorio
app.mount("#myAppVue");
