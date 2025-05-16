<template>
    <input 
        :value="modelValue"
        :id="id"
        type="text"
        class="form-control mb-2"
        :placeholder="placeholder"
        :maxlength="maxlength || ''"
        @input="$emit('update:modelValue', $event.target.value)"
    />
    <small v-if="isEmpty" class="text-danger" v-html="errorMessage"></small>
</template>

<script>
export default {
    data() {
        return {
            isEmpty: false,
        };
    },
    watch: {
        modelValue(value) {
            if (value.length > 0) {
                this.isEmpty = false;
            } else {
                this.isEmpty = true;
            }
        },
        isEmptyValue(value) {
            this.isEmpty = value;
        }
    },
    name: 'InputText',
    props: {
        modelValue: {
            Type: String,
            requered: true
        },
        placeholder: String,
        id: String,
        errorMessage: String,
        maxlength: String,
        isEmptyValue: {
            type: Boolean,
            default: false
        }
    }
}
</script>