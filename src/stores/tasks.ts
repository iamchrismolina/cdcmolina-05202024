import { defineStore } from 'pinia'
import {ref, computed} from 'vue'
import type { Task } from '@/types/Task'
import { v4 as uuidv4 } from 'uuid'

const useTasksStore = defineStore('tasks', () => {

	const tasks = ref<Task[]>([])

	const createTask = (name: string, description?: string, status: Status) => {
		const newTask = {
			taskId: uuidv4(),
			name,
			description,
			status
		}
		tasks.value.push(newTask)
	}

	const updateTask = (taskId: uuid, name?: string, description?: string, status: Status) => {
		const task = tasks.value.find((t) => t.taskId === taskId)
		task.name = name ?? task.name
		task.description = description ?? task.description
		task.status = status ?? task.status
	}

	return { tasks, createTask, updateTask }
})

export { useTasksStore }