<script setup lang='ts'>
const props = defineProps<{
	tag: string,
	content?: string
}>()

function validateTag() {
	return ['p', 'textarea', 'label', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].find((t) => t === props.tag.toLowerCase())
}

</script>

<template>
	<component :is='validateTag()' v-bind='$attrs'>{{ content }}</component>
</template>

<style scoped></style>