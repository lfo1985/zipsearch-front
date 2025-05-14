<script setup>
import {mapGetters, mapActions} from 'vuex';
</script>
<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">
                <font-awesome-icon icon="history" class="me-2" />
                Histórico de buscas
            </h5>
            <template v-if="getHistory().length > 0">
                <div class="d-flex justify-content-end align-items-center mb-4 mt-4">
                    <button @click="deleteAllZipcode" class="btn btn-danger btn-sm ms-2">
                        <font-awesome-icon icon="trash-alt" class="me-2" />
                        Limpar histórico
                    </button>
                </div>
                <p class="card-text">Aqui estão os CEPs que você pesquisou anteriormente:</p>
                <ul class="list-group">
                    <li v-for="item in getHistory()" :key="item.id" class="list-group-item">
                        <div class="row">
                            <div class="col-md-2">{{ item.cep }}</div>
                            <div class="col-md-8">
                                <small>
                                    {{ item.logradouro }} - {{ item.bairro }} - {{ item.localidade }} - {{ item.uf }}
                                </small>
                            </div>
                            <div class="col-md-2 d-flex justify-content-end align-items-center">
                                <div>
                                    <button @click="deleteZipcode(item._id)" class="btn btn-danger btn-sm ms-2">
                                        <font-awesome-icon icon="remove" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </template>
            <div v-if="!getHistory().length" class="alert alert-warning mt-4" role="alert">
                Nenhum CEP encontrado no histórico.
            </div>
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
            return this.$api.delete('zipcode/delete/'+id).then(() => {
                this.getZipcodes();
            });
        },
        deleteAllZipcode() {
            return this.$api.delete('zipcode/'+localStorage.getItem('user_id')).then(() => {
                this.getZipcodes();
            });
        },
    },
    mounted() {
        this.getZipcodes();
    },
};
</script>