<script setup>
import { mapActions } from 'vuex';
</script>
<template>
    <button class="btn btn-secondary btn-sm" @click="registerHistory()">
        <font-awesome-icon icon="plus" class="me-2" />
        histórico
    </button>
</template>

<script>
export default {
    name: 'BtnAddHistory',
    props: {
        zipcode: {
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapActions([
            'setHistory',
            'setLoading',
        ]),
        registerHistory() {
            this.setLoading(true);
            Object.assign(this.zipcode, {
                user_id: localStorage.getItem('user_id')
            });

            this.$api.post('zipcode', this.zipcode).then(() => {
                this.$api.get('zipcode/'+localStorage.getItem('user_id')).then(response => {
                    this.setHistory(response.data.data);
                    this.setLoading(false);
                });
            });
        },
    }
};
</script>