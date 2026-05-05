const { createApp, ref, onMounted } = Vue;

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
        const quotes = ref([]);
        const loading = ref(true);

        onMounted(async () => {
            const response = await fetch("assets/data/quotes.json");
            quotes.value = await response.json();
            loading.value = false;
        });

        return { quotes, loading };
    },
});

app.component("quote-list", QuoteList);

app.mount("#myApp");
