<script setup>
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';
</script>
<template>
    <form class="form" @submit="handleSubmit">
        <h6>* Informe apenas o endereço, sem o número e complemento.</h6>
        <div class="row">
            <div class="col-md-6 col-sm-12 mb-2">
                <input v-model="endereco" id="endereco" type="text" class="form-control mb-2" placeholder="Digite o endereço" />
                <small v-if="isEmptyEndereco" class="text-danger">
                    Informe o endereço.
                </small>
            </div>
            <div class="col-md-4 col-sm-12 mb-2">
                <input v-model="cidade" id="cidade" type="text" class="form-control mb-2" placeholder="Digite a cidade" />
                <small v-if="isEmptyCidade" class="text-danger">
                    Informe a cidade.
                </small>
            </div>
            <div class="col-md-2 col-sm-12">
                <input maxlength="2" v-model="estado" id="estado" type="text" class="form-control mb-2" placeholder="Digite o UF" />
                <small v-if="isEmptyEstado" class="text-danger">
                    Informe o UF.
                </small>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 mb-2 mt-2">
                <button class="btn btn-success" type="submit">
                    <font-awesome-icon icon="search" class="me-2" />
                    Buscar
                </button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'TypeEndereco',
    data() {
        return {
            endereco: '',
            cidade: '',
            estado: '',
            isEmptyEndereco: false,
            isEmptyCidade: false,
            isEmptyEstado: false,
            loading: false,
        };
    },
    watch: {
        endereco(value) {
            if(value.length > 0) {
                this.isEmptyEndereco = false;
            } else {
                this.isEmptyEndereco = true;
            }
        },
        cidade(value) {
            if(value.length > 0) {
                this.isEmptyCidade = false;
            } else {
                this.isEmptyCidade = true;
            }
        },
        estado(value) {
            if(value.length > 0) {
                this.isEmptyEstado = false;
            } else {
                this.isEmptyEstado = true;
            }
        },
    },
    mounted() {
        document.querySelector('#endereco').focus();
    },
    methods: {
        ...mapActions([
            'setZipcode',
            'setListZipcode',
            'setShowResults',
            'setError',
            'setLoading',
        ]),
        handleSubmit(event) {
            event.preventDefault();

            if(this.endereco === '') {
                this.isEmptyEndereco = true;
                return;
            }

            if(this.cidade === '') {
                this.isEmptyCidade = true;
                return;
            }

            if(this.estado === '') {
                this.isEmptyEstado = true;
                return;
            }

            this.setLoading(true);
            this.setZipcode(null);
            this.setListZipcode([]);
            this.setError(false);
            this.setShowResults(false);

            axios.get(import.meta.env.VITE_URI_VIACEP + '/' + this.estado + '/' + this.cidade + '/' + this.endereco + '/json/').then(response => {
                this.setShowResults(true);
                this.setListZipcode(response.data);
                if(response.data.length === 0) {
                    this.setError(true);
                }
                this.setLoading(false);
            })
            .catch(() => {
                this.setError(true);
                this.setLoading(false);
                this.setShowResults(false);
            });
        },
    }
};
</script>