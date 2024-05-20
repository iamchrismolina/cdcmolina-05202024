<script setup lang='ts'>
const inputValue = defineModel('inputValue')

const props = defineProps<{
	inputType: string,
}>()
</script>

<template>
	<input :type='inputType' v-model='inputValue' v-bind="$attrs" />
</template>

<style scoped></style>