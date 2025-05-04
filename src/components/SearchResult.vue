<template>
    <div class="card mb-4">
        <div class="card-body">
            <h5 class="card-title">
                <font-awesome-icon icon="map-marked-alt" class="me-2" />
                Resultado
            </h5>
            <div v-if="!showResult && !showNoResult" class="alert alert-info mt-4">
                <p class="m-0">Por favor, digite o CEP acima e clique em "Buscar" para ver os resultados.</p>
            </div>
            <div v-if="showNoResult" class="alert alert-danger mt-4">
                <p class="m-0">CEP não encontrado. Por favor, verifique o número e tente novamente.</p>
            </div>
            <ul v-if="showResult" class="list-group list-group-flush">
                <li class="list-group-item"><strong>Logradouro:</strong> Rua São Paulo </li>
                <li class="list-group-item"><strong>Bairro:</strong> Centro </li>
                <li class="list-group-item"><strong>Cidade:</strong> São Paulo </li>
                <li class="list-group-item"><strong>UF:</strong> SP </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchResult',
    data() {
        return {
            result: {
                logradouro: null,
                bairro: null,
                cidade: null,
                uf: null,
            },
            showResult: false,
            showNoResult: false
        };
    },
    methods: {},
};
</script>