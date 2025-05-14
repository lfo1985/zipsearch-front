<script setup>
import { mapGetters } from 'vuex';
</script>
<template>
    <div class="container-sm py-5" style="max-width: 860px;">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "ContainerLayer",
    methods: {
        ...mapGetters(['getLoading']),
    },
};
</script>