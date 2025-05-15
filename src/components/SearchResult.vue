<script setup>
import { mapActions, mapGetters } from 'vuex';
import ItemResult from './ItemResult.vue';
import BtnAddHistory from './BtnAddHistory.vue';
</script>
<template>
    <div v-if="getShowResults()" class="card mb-4">
        <div class="card-body">
            <h5 class="card-title">
                <font-awesome-icon icon="map-marked-alt" class="me-2" />
                Resultado
            </h5>
            <div v-if="getType() === 'cep'">
                <div class="d-flex justify-content-end align-items-center">
                    <BtnAddHistory :zipcode="getZipcode()" />
                </div>
                <ItemResult :zipcode="getZipcode()" />
            </div>
            <div v-if="getType() === 'endereco'">
                <div v-for="itemZipcode in getListZipcode()" class="border-top border-2 border-secondary mt-3 pt-3">
                    <div class="d-flex justify-content-end align-items-center">
                        <BtnAddHistory :zipcode="itemZipcode" />
                    </div>
                    <ItemResult :zipcode="itemZipcode" />
                </div>
            </div>
        </div>
    </div>
    <div v-if="getError()" class="alert alert-danger mt-4">
        <p class="m-0">Não foi possível localizar o endereço com as informações fornecidas. Verifique o CEP ou os dados de cidade, estado e logradouro.</p>
    </div>
</template>

<script>
export default {
    name: 'SearchResult',
    methods: {
        ...mapGetters([
            'getZipcode',
            'getShowResults',
            'getListZipcode',
            'getError',
            'getType'
        ]),
        ...mapActions([
            'setHistory',
            'setLoading'
        ]),
        registerHistory(zipcode) {
            this.setLoading(true);
            Object.assign(zipcode, {
                user_id: localStorage.getItem('user_id')
            });

            this.$api.post('zipcode', zipcode).then(() => {
                this.$api.get('zipcode/'+localStorage.getItem('user_id')).then(response => {
                    this.setHistory(response.data.data);
                    this.setLoading(false);
                });
            });
        },
    },
};
</script>