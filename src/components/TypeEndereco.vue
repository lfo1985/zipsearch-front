<script setup>
import { mapActions } from 'vuex';
import axios from 'axios';
import InputText from './Form/InputText.vue';
</script>
<template>
    <form class="form" @submit="handleSubmit">
        <h6>* Informe apenas o endereço, sem o número e complemento.</h6>
        <div class="row">
            <div class="col-md-6 col-sm-12 mb-2">
                <InputText
                    ref="endereco"
                    v-model="endereco"
                    id="endereco"
                    placeholder="Digite o endereço"
                    errorMessage="Informe o endereço."
                    :isEmptyValue="enderecoIsEmpty"
                />
            </div>
            <div class="col-md-4 col-sm-12 mb-2">
                <InputText
                    ref="cidade"
                    v-model="cidade"
                    id="cidade"
                    placeholder="Digite a cidade"
                    errorMessage="Informe a cidade."
                    :isEmptyValue="cidadeIsEmpty"
                />
            </div>
            <div class="col-md-2 col-sm-12">
                <InputText
                    ref="estado"
                    maxlength="2"
                    v-model="estado"
                    id="estado"
                    placeholder="Digite o UF"
                    errorMessage="Informe o UF."
                    :isEmptyValue="estadoIsEmpty"
                />
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
            loading: false,
            enderecoIsEmpty: false,
            cidadeIsEmpty: false,
            estadoIsEmpty: false
        };
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
                this.enderecoIsEmpty = true;
                return;
            }

            if(this.cidade === '') {
                this.cidadeIsEmpty = true;
                return;
            }

            if(this.estado === '') {
                this.estadoIsEmpty = true;
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