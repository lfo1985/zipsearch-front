<script setup>
import { mapActions, mapGetters } from 'vuex';
</script>
<template>
    <div class="d-flex justify-content-between w-100">
        <div class="btn-group" role="group" aria-label="Tipo de pesquisa">
            <input type="radio" class="btn-check" value="cep" name="options" id="option1" autocomplete="off" :checked="getType() === 'cep'" @change="changeType">
            <label class="btn btn-outline-secondary" for="option1">CEP</label>
            <input type="radio" class="btn-check" value="endereco" name="options" id="option2" autocomplete="off" :checked="getType() === 'endereco'" @change="changeType">
            <label class="btn btn-outline-secondary" for="option2">Endereço</label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SelectType',
    data() {
        return {
            typeCep: true,
            typeEndereco: false,
        };
    },
    props: {
        clearFields: {
            type: Function,
            default: () => {},
        },
    },
    methods: {
        changeType(event) {
            this.setType(event.target.value);
            this.setZipcode(null);
            this.setListZipcode([]);
            this.setShowResults(false);
        },
        ...mapActions([
            'setType',
            'setZipcode',
            'setListZipcode',
            'setShowResults',
            'setClearFields',
        ]),
        ...mapGetters([
            'getType',
        ]),
        resetSearch() {
            this.setZipcode(null);
            this.setListZipcode([]);
            this.setShowResults(false);
            this.setType('cep');
            this.clearFields();
        },
    },
};
</script>