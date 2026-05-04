// console.log(Vue);

// Podemos utilizar la desestructuración y tomar algunas propiedades de Vue
const { createApp } = Vue;

const app = createApp({
    template: `
        <h1>Hola Mundo</h1>
    `,
});

app.mount("#myApp");
