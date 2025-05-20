<script setup>
import { mapActions } from "vuex";
import axios from "axios";
import onlyNumbers from "../utils/only-numbers";
import InputText from "./Form/InputText.vue";
</script>
<template>
    <form @submit="handleSubmit">
        <div class="row">
            <div class="col-md-12 col-sm-12 mb-2">
                <div class="row">
                    <div class="col-md-6 col-sm-12 mb-2">
                        <InputText
                            v-model="cep"
                            id="cep"
                            placeholder="Digite o CEP (ex: 01001000)"
                            errorMessage="Informe o cep para localizar os dados de endereço."
                            :isEmptyValue="cepIsEmpty"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                        <button class="btn btn-success" type="submit">
                            <font-awesome-icon icon="search" class="me-2" />
                            Buscar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: "TypeCep",
    data() {
        return {
            cep: "",
            cepIsEmpty: false,
            loading: false,
        };
    },
    watch: {
        cep(value) {
            if (value.length > 0) {
                this.cepIsEmpty = false;
            } else {
                this.cepIsEmpty = true;
            }
            this.cep = onlyNumbers(value);
        },
    },
    mounted() {
        document.querySelector("#cep").focus();
    },
    methods: {
        ...mapActions([
            "setZipcode",
            "setShowResults",
            "setListZipcode",
            "setError",
            "setLoading",
        ]),
        handleSubmit(event) {
            event.preventDefault();

            if (this.cep === "") {
                this.cepIsEmpty = true;
                document.querySelector("#cep").focus();
                return;
            }

            this.setLoading(true);
            this.setZipcode(null);
            this.setListZipcode([]);
            this.setError(false);
            this.setShowResults(false);

            axios
                .get(import.meta.env.VITE_URI_VIACEP + this.cep + "/json/")
                .then((response) => {
                    this.setShowResults(true);
                    this.setZipcode(response.data);
                    this.setLoading(false);
                    this.isEmpty = false;
                    this.isInvalid = false;
                })
                .catch(() => {
                    this.setError(true);
                    this.setLoading(false);
                    this.setShowResults(false);
                    this.isEmpty = false;
                    this.isInvalid = false;
                });
        },
    },
};
</script>
