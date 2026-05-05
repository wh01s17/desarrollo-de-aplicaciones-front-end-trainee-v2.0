const { createApp } = Vue;

// Los componentes, al igual que las clases, se deben declarar utilizando PascalCase
const QuoteList = {
    template: `
        <ul>
            <li
                v-for="{ id, quote, author } in quotes"
                :key="id"
            >
                <span>{{ quote }}</span>
                <blockquote>- {{author}}</blockquote>
            </li>
        </ul>
    `,

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

        // Expone las variables en el HTML
        return { quotes };
    },
};

const app = createApp({});

// Los nombre del componente que se consumirá en el HTML, se debe declarar con kebab-case
app.component("quote-list", QuoteList);

app.mount("#myApp");
