export interface taskType {
	id: string
	text: string
	done: boolean
}

export interface stateType {
	tasks: Array<taskType>
}