const { createApp } = Vue;

const QuoteList = {
    props: {
        cita: {
            type: String,
            required: true,
        },
        autor: {
            type: String,
            required: true,
        },
    },

    template: `
        <li>
            <span>{{ cita }}</span>
            <blockquote>- {{ autor }}</blockquote>
        </li>
    `,
};

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
            {
                id: 4,
                quote: "Even the smallest person can change the course of the future.",
                author: "Galadriel, The Fellowship of the Ring",
            },
        ];

        return { quotes };
    },
});

app.component("quote-list", QuoteList);

app.mount("#myApp");
