const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        const message = ref("Luke, yo soy tu padre :o");
        const author = ref("Darth Vader");

        const changeMessage = () => {
            message.value = "Nooooooooooo!";
            author.value = "Luke Skywalker";
        };

        return {
            message,
            author,
            changeMessage,
        };
    },
});

app.mount("#myApp");
