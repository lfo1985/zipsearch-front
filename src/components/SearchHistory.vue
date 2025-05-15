<script setup>
import {mapGetters, mapActions} from 'vuex';
import ItemHistory from './ItemHistory.vue';
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
                    <ItemHistory
                        v-for="item in getHistory()"
                        :key="item._id"
                        :zipcode="item"
                        @deleteZipcode="deleteZipcode"
                    />
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
        ...mapActions(['setHistory', 'setLoading']),
        getZipcodes() {
            this.$api.get('zipcode/'+localStorage.getItem('user_id')).then(response => {
                this.setHistory(response.data.data);
                this.setLoading(false);
            }).catch(() => {
                this.setLoading(false);
            });
        },
        deleteZipcode(id) {
            this.setLoading(true);
            return this.$api.delete('zipcode/delete/'+id).then(() => {
                this.getZipcodes();
            }).catch(() => {
                this.setLoading(false);
            });
        },
        deleteAllZipcode() {
            this.setLoading(true);
            return this.$api.delete('zipcode/'+localStorage.getItem('user_id')).then(() => {
                this.getZipcodes();
            }).catch(() => {
                this.setLoading(false);
            });
        },
    },
    mounted() {
        this.getZipcodes();
    },
};
</script>