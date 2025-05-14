<template>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>CEP:</strong> <span v-html="zipcode?.cep || '-'"></span></li>
        <li class="list-group-item"><strong>Logradouro:</strong> <span v-html="zipcode?.logradouro || '-'"></span></li>
        <li class="list-group-item"><strong>Bairro:</strong> <span v-html="zipcode?.bairro || '-'"></span></li>
        <li class="list-group-item"><strong>Cidade:</strong> <span v-html="zipcode?.localidade || '-'"></span></li>
        <li class="list-group-item"><strong>UF:</strong> <span v-html="zipcode?.uf || '-'"></span></li>
    </ul>
</template>

<script>
export default {
    name: "ItemResult",
    props: {
        zipcode: {
            type: Object,
            required: true
        }
    }
};
</script>