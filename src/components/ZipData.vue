<template>
    <small v-html="text"></small>
</template>

<script>
export default {
    name: 'ZipData',
    data() {
        return {
            text: '',
        };
    },
    props: {
        localidade: {
            type: String,
            required: true,
        },
        estado: {
            type: String,
            required: true,
        },
        logradouro: {
            type: String,
            required: true,
        },
        bairro: {
            type: String,
            required: true,
        },
    },
    mounted() {
        let data = [
            this.localidade,
            this.estado,
            this.logradouro,
            this.bairro,
        ];
        this.text = data.filter(item => item !== '').join(', ');
    },
};
</script>