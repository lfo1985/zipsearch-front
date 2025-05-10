<script setup>
import { mapState, mapGetters } from 'vuex';
</script>
<template>
    <div class="container-sm py-5" style="max-width: 600px;">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "ContainerLayer",
    methods: {
        ...mapState(['zipcode']),
        ...mapGetters(['getZipcode']),
    },
};
</script>