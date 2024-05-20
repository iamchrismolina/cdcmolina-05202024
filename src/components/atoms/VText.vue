<script setup lang='ts'>
const props = defineProps<{
	tag: string,
	content: string
}>()

function isTag = () => {
	['p', 'label', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].find((t) => t === tag.toLowerCase())
}

</script>
<template>
<component :is='isTag' v-bind='$attrs'>{{ content }}</component>

</template>
<style scoped></style>