import {computed, ref} from 'vue'

const notes = ref([
    {
        id: 1,
        title: 'Первая заметка',
        content: 'Пример текста',
        tasks: [
            { id: 1, text: 'Первая задача', completed: false },
            { id: 2, text: 'Вторая задача', completed: true }
        ]
    },
    {
        id: 2,
        title: 'Вторая заметка',
        content: 'Ещё одна заметка',
        tasks: []
    },
])

export function useTodoStore() {
    function addNote() {
        const id = Date.now()
        const newNote = {
            id,
            title: 'Новая заметка',
            content: '',
            tasks: []
        }
        notes.value.push(newNote)
        return newNote
    }

    function getNoteById(id) {
        return notes.value.find(n => n.id === id)
    }

    function updateNoteTitle(noteId, newTitle) {
        const note = getNoteById(noteId)
        if (note) {
            note.title = newTitle.trim() || 'Без названия' // Защита от пустого названия
        }
    }

    function updateNoteContent(noteId, newContent) {
        const note = getNoteById(noteId)
        if (note) {
            note.content = newContent
        }
    }

    function deleteNote(id) {
        notes.value = notes.value.filter((n) => n.id !== id)
    }

    function addTask(noteId) {
        const note = getNoteById(noteId)
        if (!note) return

        const id = Date.now()
        const newTask = {
            id,
            text: 'Новая задача',
            completed: false
        }
        note.tasks.push(newTask)
        return newTask
    }

    function updateTask(noteId, taskId, updates) {
        const note = getNoteById(noteId)
        if (!note) return

        const task = note.tasks.find(t => t.id === taskId)
        if (task) {
            if (updates.text !== undefined) task.text = updates.text
            if (updates.completed !== undefined) task.completed = updates.completed
        }
    }

    function deleteTask(noteId, taskId) {
        const note = getNoteById(noteId)
        if (!note) return

        note.tasks = note.tasks.filter(t => t.id !== taskId)
    }

    return {
        notes: computed(() => notes.value),
        addNote,
        getNoteById,
        updateNoteTitle,
        updateNoteContent,
        deleteNote,
        addTask,
        updateTask,
        deleteTask
    }
}