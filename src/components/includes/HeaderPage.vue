<script setup>
import Logo from './../../assets/logo.png'
</script>
<template>
    <nav class="navbar bg-light mb-4 rounded shadow px-3">
        <span class="navbar-brand mb-0 h1">
            <img :src="Logo" style="width: 160px;">
        </span>
    </nav>
</template>

<script>
export default {
    name: 'HeaderPage',
};
</script>