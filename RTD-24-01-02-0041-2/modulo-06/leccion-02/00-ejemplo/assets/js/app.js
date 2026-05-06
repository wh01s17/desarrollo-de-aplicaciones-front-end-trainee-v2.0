const { createApp, ref, onMounted } = Vue;

const app = createApp({
    setup() {
        const personajes = ref([]);
        const personajeSeleccionado = ref(null);
        const mostrarDetalles = ref(false);
        const loading = ref(true);
        const error = ref(null);

        onMounted(async () => {
            try {
                const response = await fetch("assets/data/personajes.json");

                if (!response.ok) throw new Error("No se pudo cargar la data");

                personajes.value = await response.json();
            } catch (err) {
                error.value = err.message;
            } finally {
                loading.value = false;
            }
        });

        const seleccionarPersonaje = () => {
            mostrarDetalles.value = false;
        };

        return {
            personajes,
            personajeSeleccionado,
            mostrarDetalles,
            loading,
            error,
            seleccionarPersonaje,
        };
    },
});

app.mount("#myApp");
