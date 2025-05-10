<script setup>
import { mapState, mapGetters } from 'vuex';
</script>
<template>
    <div class="card mb-4">
        <div class="card-body">
            <h5 class="card-title">
                <font-awesome-icon icon="map-marked-alt" class="me-2" />
                Resultado
            </h5>
            <div v-if="!getShowResults() && !getShowNoResults()" class="alert alert-info mt-4">
                <p class="m-0">Por favor, digite o CEP acima e clique em "Buscar" para ver os resultados.</p>
            </div>
            <div v-if="getShowNoResults()" class="alert alert-danger mt-4">
                <p class="m-0">CEP não encontrado. Por favor, verifique o número e tente novamente.</p>
            </div>
            <ul v-if="getShowResults()" class="list-group list-group-flush">
                <li class="list-group-item"><strong>Logradouro:</strong> <span v-html="getZipcode()?.logradouro || '-'"></span></li>
                <li class="list-group-item"><strong>Bairro:</strong> <span v-html="getZipcode()?.bairro || '-'"></span></li>
                <li class="list-group-item"><strong>Cidade:</strong> <span v-html="getZipcode()?.localidade || '-'"></span></li>
                <li class="list-group-item"><strong>UF:</strong> <span v-html="getZipcode()?.uf || '-'"></span></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchResult',
    methods: {
        ...mapGetters(['getZipcode', 'getShowResults', 'getShowNoResults']),
    },
};
</script>