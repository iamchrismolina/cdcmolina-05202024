<script setup lang='ts'>
import VTaskForm from '@/components/molecules/VTaskForm.vue'
import VText from '@/components/atoms/VText.vue'
import VInput from '@/components/atoms/VInput.vue'
import VButton from '@/components/atoms/VButton.vue'
import { ref } from 'vue'
import { Status } from '@/types/tasks'


const newName = ref<string>('')
const newDescription = ref<string>('')
const status = ref<Status>('')

</script>

<template>
	<div class="modalFormContainer">
	<VTaskForm @submitTask="" class="modalForm">
		<VText :tag="'label'" :content="'Name Field'" />
		<VInput :inputType="'text'" :inputValue="newName" />
		<VText :tag="'label'" :content="'Description Field'" />
		<textarea :tag="'textarea'" rows='5' cols='45'></textarea>
	</VTaskForm>
	</div>
</template>

<style scoped>
.modalForm {
	display: flex;
	flex-direction: column;
	padding: 1rem;
	background-color: yellow;
}

.modalFormContainer {

	position: absolute;
	height: fit-content;
	right: 10;
	top: 10;
/*	inset: 0;*/
}


</style>