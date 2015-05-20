const app = Object.freeze({
  init: async function init () {
    try {
      const data1 = await getData(); // hola
      const data2 = `${data1} mundo`;

      console.log(data2);
    } catch (error) {
      console.log(error);
    }
  }
});

app.init();