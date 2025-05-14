<script setup>
import { mapGetters, mapActions } from 'vuex';
import TypeCep from './TypeCep.vue';
import TypeEndereco from './TypeEndereco.vue';
import SelectType from './SelectType.vue';
</script>
<template>
    <div class="d-flex mb-4">
        <SelectType />
    </div>
    <div class="mb-4" v-if="getType() === 'cep'">
        <TypeCep />
    </div>
    <div class="mb-4" v-if="getType() === 'endereco'">
        <TypeEndereco />
    </div>
    <div v-if="getLoading()" class="spinner-border text-primary mb-3" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</template>

<script>
export default {
    name: 'SearchForm',
    components: {
        SelectType,
        TypeCep,
        TypeEndereco,
    },
    mounted() {
        this.setType('cep');
    },
    methods: {
        ...mapGetters([
            'getType',
            'getLoading',
        ]),
        ...mapActions([
            'setType',
        ])
    },
};
</script>