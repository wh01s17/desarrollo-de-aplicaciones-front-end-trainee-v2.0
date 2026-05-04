const { createApp, ref } = Vue;

const app = createApp({
    template: `
        <h3>{{ message }}</h3>
        <blockquote>- {{ author }}</blockquote>
    `,

    // setup(), es la funcion de entrada en un componente realizado con Composition API, y nos permite declarar su logica
    setup() {
        const message = ref("Luke, yo soy tu padre :o");
        const author = ref("Darth Vader");

        setTimeout(() => {
            message.value = "Nooooooooooo!";
            author.value = "Luke Skywalker";
        }, 3000);

        return {
            message,
            author,
        };
    },
});

app.mount("#myApp");
