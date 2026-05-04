const quotes = [
    {
        quote: "One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.",
        author: "Inscription of the One Ring",
    },
    {
        quote: "You shall not pass!",
        author: "Gandalf, The Fellowship of the Ring",
    },
    {
        quote: "One does not simply walk into Mordor.",
        author: "Boromir, The Fellowship of the Ring",
    },
    {
        quote: "Even the smallest person can change the course of the future.",
        author: "Galadriel, The Fellowship of the Ring",
    },
    {
        quote: "All we have to decide is what to do with the time that is given us.",
        author: "Gandalf, The Fellowship of the Ring",
    },
    {
        quote: "My precious.",
        author: "Gollum, The Two Towers",
    },
    {
        quote: "I can't carry it for you… but I can carry you!",
        author: "Samwise Gamgee, The Return of the King",
    },
    {
        quote: "There is some good in this world, Mr. Frodo… and it’s worth fighting for.",
        author: "Samwise Gamgee, The Two Towers",
    },
    {
        quote: "For Frodo.",
        author: "Aragorn, The Return of the King",
    },
    {
        quote: "A day may come when the courage of men fails… but it is not this day!",
        author: "Aragorn, The Return of the King",
    },
];

const { createApp } = Vue;

const app = createApp({
    setup() {
        return {
            quotes,
        };
    },
});

app.mount("#myApp");
