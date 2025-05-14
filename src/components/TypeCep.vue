<script setup>
import { mapActions } from "vuex";
import axios from "axios";
import onlyNumbers from "../utils/only-numbers";
import zipValidate from "../utils/zip-validate";
</script>
<template>
    <form @submit="handleSubmit">
        <div class="row">
            <div class="col-md-12 col-sm-12 mb-2">
                <div class="row">
                    <div class="col-md-6 col-sm-12 mb-2">
                        <input maxLength="8" v-model="cep" id="cep" type="text" class="form-control mb-2"
                            placeholder="Digite o CEP (ex: 01001000)" />
                        <small v-if="isEmpty" class="text-danger">
                            Informe o cep para localizar os dados de endereço.
                        </small>
                        <small v-if="isInvalid" class="text-danger">
                            O CEP informado não é válido.
                        </small>
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
            isEmpty: false,
            isInvalid: false,
            loading: false,
        };
    },
    watch: {
        cep(value) {
            if (value.length > 0) {
                this.isEmpty = false;
            } else {
                this.isEmpty = true;
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
                this.isEmpty = true;
                document.querySelector("#cep").focus();
                return;
            }

            if (zipValidate(this.cep) === false) {
                this.isInvalid = true;
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
