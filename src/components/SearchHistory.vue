<script setup>
import {mapGetters, mapActions} from 'vuex';
import getZipcodes from '../services/zipcode';
</script>
<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">
                <font-awesome-icon icon="history" class="me-2" />
                Histórico de buscas
            </h5>
            <div v-if="!getHistory().length" class="alert alert-warning mt-4" role="alert">
                Nenhum CEP encontrado no histórico.
            </div>
            <p v-if="getHistory().length > 0" class="card-text">Aqui estão os CEPs que você pesquisou anteriormente:</p>
            <ul v-if="getHistory().length > 0" class="list-group">
                <li v-for="item in getHistory()" :key="item.id" class="list-group-item">
                    <div class="d-flex justify-content-between align-items-center">
                        <small>
                            <strong>{{ item.cep }}</strong> - {{ item.logradouro }} - {{ item.bairro }} - {{ item.localidade }} - {{ item.uf }}
                        </small>
                        <button @click="deleteZipcode(item._id)" class="btn btn-danger btn-sm ms-2">
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
    methods: {
        ...mapGetters(['getHistory']),
        ...mapActions(['setHistory']),
        getZipcodes() {
            this.$api.get('zipcode/'+localStorage.getItem('user_id')).then(response => {
                this.setHistory(response.data.data);
            });
        },
        deleteZipcode(id) {
            return this.$api.delete('zipcode/delete/'+id).then(response => {
                this.getZipcodes();
            });
        },
    },
    mounted() {
        this.getZipcodes();
    },
};
</script>