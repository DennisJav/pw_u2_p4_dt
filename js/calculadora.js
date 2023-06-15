const app = Vue.createApp({
  data() {
    return {
      resu: null,
    };
  },

  methods: {
    leerNumeros(value) {
      this.resu = resu + value;
    },
  },
});

app.mount("#myAppCalculadora");
