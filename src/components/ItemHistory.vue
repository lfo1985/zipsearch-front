<script setup>
import ZipData from './ZipData.vue';
import { defineEmits } from 'vue';
</script>
<template>
    <li class="list-group-item">
        <div class="row">
            <div class="col-md-2">{{ zipcode.cep }}</div>
            <div class="col-md-8">
                <ZipData
                    :localidade="zipcode.localidade"
                    :estado="zipcode.uf"
                    :logradouro="zipcode.logradouro"
                    :bairro="zipcode.bairro" />
            </div>
            <div class="col-md-2 d-flex justify-content-end align-items-center">
                <div>
                    <button @click="deleteZipcode" class="btn btn-danger btn-sm ms-2">
                        <font-awesome-icon icon="remove" />
                    </button>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name: "ItemHistory",
    emits: ['deleteZipcode'],
    props: {
        zipcode: {
            type: Object,
            required: true
        },
    },
    methods: {
        deleteZipcode() {
            this.$emit('deleteZipcode', this.zipcode._id);
        }
    },
};
</script>