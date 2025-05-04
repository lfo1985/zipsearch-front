<template>
    <form class="input-group mb-4">
        <input type="text" class="form-control" placeholder="Digite o CEP (ex: 01001000)" />
        <button class="btn btn-primary" type="submit">
            <font-awesome-icon icon="search" class="me-2" />
            Buscar
        </button>
    </form>
</template>

<script>
export default {
    name: 'SearchForm',
    data() {
        return {};
    },
    methods: {},
};
</script>