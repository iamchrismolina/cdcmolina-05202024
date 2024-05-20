<script setup lang='ts'>
import { useTasksStore } from '@/stores/tasks.ts'
const { tasks, createTask } = useTasksStore()
import VButton from '@/components/atoms/VButton.vue'
import VInput from '@/components/atoms/VInput.vue'
import VText from '@/components/atoms/VText.vue'
import VTaskForm from '@/components/molecules/VTaskForm.vue'
import VModal from '@/components/organisms/VModal.vue'
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import type { Task, Status } from '@/types/tasks'

const name = ref<string>('')
const description = ref<string>('')
const status = ref<Status>('TODO')

function addTask() {
	createTask(name.value, description.value, status.value)
	name.value = ''
	description.value = ''
	status.value = 'TODO'
}

</script>

<template>

	<aside class="form-container">
		<VTaskForm @submitTask='addTask'>
			<VText for='name' :tag="'label'" :content="'Name'" />
			<VInput v-model:input-value='name' id='name' :inputType="'text'" maxlength='250' required />
			<VText for='description' :tag="'label'" :content="'Description'" />
			<textarea v-model='description' id='description' rows='5' cols='45' maxlength='1000'></textarea>
			<VText for='status' :tag="'label'" :content="'Status'" />
			<select v-model='status' id='status'>
				<option value='TODO' selected>TODO</option>
				<option value='IN_PROGRESS'>IN PROGRESS</option>
				<option value='DONE'>DONE</option>
			</select>
			<VButton :buttonType="'submit'" :buttonText="'Add Task'"/>
		</VTaskForm>
	</aside>

	<main class="tasks">

		<section class="tasks--container">
			<h3>TODO</h3>
				<ul>
					<template v-for='(task, idx) in tasks' :key="uuidv4()">
						<li v-if="task.status == 'TODO'">
							<div class="task">
								<div>Task ID: {{ task.taskId }}</div>
								<span>Name: {{ task.name }}</span>
								<p>Description: {{ task.description }}</p>
								<span>Status: {{ task.status }}</span>
							</div>
						</li>
					</template>
				</ul>
		</section>

		<section class="tasks--container">
			<h3>IN PROGRESS</h3>
			<ul>
				<template v-for="(task, idx) in tasks" :key="uuidv4()">
					<li v-if="task.status == 'IN_PROGRESS'">
							<div class="task">
								<div>Task ID: {{ task.taskId }}</div>
								<span>Name: {{ task.name }}</span>
								<p>Description: {{ task.description }}</p>
								<span>Status: {{ task.status }}</span>
							</div>
					</li>
				</template>
			</ul>
		</section>

		<section class="tasks--container">
			<h3>DONE</h3>
			<ul>
				<template v-for="(task, idx) in tasks" :key="uuidv4()">
					<li v-if="task.status === 'DONE'">
							<div class="task">
								<div>Task ID: {{ task.taskId }}</div>
								<span>Name: {{ task.name }}</span>
								<p>Description: {{ task.description }}</p>
								<span>Status: {{ task.status }}</span>
							</div>
					</li>
				</template>
			</ul>
		</section>
	</main>
	<Teleport to="body">
		<VModal />
	</Teleport>
</template>

<style scoped>
.tasks {
	display: flex;
	width: 100%;
	height: 100vh;
	justify-content: space-around;
	border: 2px solid black;
	padding: 1rem;
	gap: 0.5rem;
	background-color: green;
	border-radius: 5px;
}	

.task {
	border: 2px solid black;
	border-radius: 5px;
	padding: 0.5rem;
	background-color: white;
}

.tasks--container {
	border: 2px solid black;
	padding: 1rem;
	width: 100%;
	height: 95%;
	text-align: center;
	display: flex;
	flex-direction: column;
	background-color: pink;
	border-radius: 5px;
}

</style>