<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">
                <font-awesome-icon icon="history" class="me-2" />
                Histórico de buscas
            </h5>
            <div v-if="!history.length" class="alert alert-warning mt-4" role="alert">
                Nenhum CEP encontrado no histórico.
            </div>
            <p v-if="history.length > 0" class="card-text">Aqui estão os CEPs que você pesquisou anteriormente:</p>
            <ul v-if="history.length > 0" class="list-group">
                <li class="list-group-item">
                    <div class="d-flex justify-content-between align-items-center">
                        <span>14169-644 - Rua São Paulo - São Paulo - SP</span>
                        <button class="btn btn-danger btn-sm">
                            <font-awesome-icon icon="remove" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchHistory",
    data() {
        return {
            history: [], // This will hold the search history
        };
    },
    methods: {
        // Define your methods here
    },
};
</script>