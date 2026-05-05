const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        const quotes = [
            {
                id: 1,
                quote: "One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.",
                author: "Inscription of the One Ring",
            },
            {
                id: 2,
                quote: "You shall not pass!",
                author: "Gandalf, The Fellowship of the Ring",
            },
            {
                id: 3,
                quote: "One does not simply walk into Mordor.",
                author: "Boromir, The Fellowship of the Ring",
            },
        ];

        const ulListStyle = {
            listStyle: "none",
            padding: 0,
        };

        const itemStyle = {
            // background-color
            backgroundColor: "#fffaf0",
            padding: "1rem",
            marginBottom: "0.5rem",
            borderLeft: "4px solid #7b3f00",
        };

        const titleColor = ref("#7b3f00");

        const toggleColor = () => {
            titleColor.value =
                titleColor.value === "#7b3f00" ? "#0066cc" : "#7b3f00";
        };

        return {
            quotes,
            ulListStyle,
            itemStyle,
            titleColor,
            toggleColor,
        };
    },
});

app.mount("#myApp");
