<script setup>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex';
import onlyNumbers from '../utils/only-numbers';
</script>
<template>
    <form @submit="handleSubmit" class="mb-4">
        <div class="input-group">
            <input :disabled="loading" v-model="cep" id="cep" type="text" class="form-control" placeholder="Digite o CEP (ex: 01001000)" />
            <button :disabled="loading" class="btn btn-primary" type="submit">
                <font-awesome-icon icon="search" class="me-2" />
                Buscar
            </button>
        </div>
        <small v-if="isEmpty" class="text-danger">
            Informe o cep para localizar os dados de endereço.
        </small>
        <small v-if="loading" class="text-muted">
            Carregando...
        </small>
    </form>
</template>

<script>
export default {
    name: 'SearchForm',
    data() {
        return {
            cep: '',
            isEmpty: false,
            loading: false,
        };
    },
    mounted() {
        document.querySelector('#cep').focus();
    },
    watch: {
        cep(value) {
            if(value.length > 0) {
                this.isEmpty = false;
            } else {
                this.isEmpty = true;
            }
        },
    },
    methods: {
        ...mapActions(['setZipcode', 'setShowResults', 'setShowNoResults', 'setHistory']),
        ...mapGetters(['getZipcode']),
        handleSubmit(event) {
            event.preventDefault();

            if(this.cep === '') {
                this.isEmpty = true;
                document.querySelector('#cep').focus();
                return;
            }

            let cep = onlyNumbers(this.cep);
            this.loading = true;
            axios.get(import.meta.env.VITE_URI_VIACEP + cep + '/json/')
                .then(response => {
                    this.setZipcode(response.data);
                    this.loading = false;
                    this.setShowNoResults(false);

                    const zipcode = this.getZipcode();
                    
                    Object.assign(zipcode, {
                        user_id: localStorage.getItem('user_id')
                    });

                    this.$api.post('zipcode', this.getZipcode())
                        .then(() => {
                            this.$api.get('zipcode/'+localStorage.getItem('user_id'))
                                .then(response => {
                                    this.setHistory(response.data.data);
                                });
                        });
                })
                .catch(error => {
                    alert('Erro: ' + error);
                    this.setShowNoResults(true);
                    this.loading = false;
                });
        },
    },
};
</script>