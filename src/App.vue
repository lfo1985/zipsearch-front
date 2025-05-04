<script setup>
import HeaderPage from './components/includes/HeaderPage.vue'
import SearchForm from './components/SearchForm.vue'
import SearchResult from './components/SearchResult.vue'
import SearchHistory from './components/SearchHistory.vue'
import ContainerLayer from './components/ContainerLayer.vue'
</script>

<template>
  <ContainerLayer>
    <HeaderPage />
    <SearchForm />
    <SearchResult />
    <SearchHistory />
  </ContainerLayer>
</template>
