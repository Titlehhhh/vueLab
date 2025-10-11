<script setup>
import TodoItem from '@/components/TodoItem.vue'
import { useTodoStore } from '@/stores/todo.js'
import { ref, computed } from 'vue'

const todoStore = useTodoStore()

console.log('todoStore:', todoStore)
console.log('todoStore.notes:', todoStore.notes)
console.log('Array.isArray:', Array.isArray(todoStore.notes))

const selectedId = ref(1)
const showDeleteModal = ref(false)
const noteToDelete = ref(null)

const selectedNote = computed(() => todoStore.getNoteById(selectedId.value))

function selectNote(id) {
  selectedId.value = id
}

function confirmDeleteNote(id) {
  noteToDelete.value = id
  showDeleteModal.value = true
}
function addNote() {
  const newNote = todoStore.addNote()
  selectedId.value = newNote.id
}
function deleteNote() {

}



function addTask() {
  if (!selectedNote.value) return
  todoStore.addTask(selectedNote.value.id)
}

function updateTask(taskId, updates) {
  if (!selectedNote.value) return
  todoStore.updateTask(selectedNote.value.id, taskId, updates)
}

function deleteTask(taskId) {
  if (!selectedNote.value) return
  todoStore.deleteTask(selectedNote.value.id, taskId)
}


</script>

<template>
  <div class="todo-container">
    <p>Todo</p>
    <div class="todo-layout">
      <div class="sidebar">
        <button class="btn btn-primary w-100" @click="addNote">
          Добавить
        </button>
        <div class="notes-list">
          <ul class="list-group">
            <TodoItem
                v-for="note in todoStore.notes.value"
                :key="note.id"
                :note="note"
                :isSelected="note.id === selectedId"
                @update:title="todoStore.updateNoteTitle(note.id, $event)"
                @select="selectNote"
                @delete="deleteNote"
            />
          </ul>
        </div>
      </div>

      <div class="content-area">
        <div v-if="selectedNote" class="note-editor">
          <input
              :value="selectedNote.title"
              @input="todoStore.updateNoteTitle(selectedNote.id, $event.target.value)"
              class="form-control form-control-lg mb-3"
          >
          <textarea
              :value="selectedNote.content"
              @input="todoStore.updateNoteContent(selectedNote.id, $event.target.value)"
              class="form-control mb-3"
              rows="3"
          ></textarea>

          <div class="tasks-section">
            <button @click="addTask" class="btn btn-sm btn-success mb-3">
              + Добавить задачу
            </button>

            <div v-for="task in selectedNote.tasks" :key="task.id" class="task-item">
              <input
                  type="checkbox"
                  :checked="task.completed"
                  @change="updateTask(task.id, { completed: $event.target.checked })"
              >
              <input
                  type="text"
                  :value="task.text"
                  @input="updateTask(task.id, { text: $event.target.value })"
                  :class="{ 'completed': task.completed }"
              >
              <button @click="deleteTask(task.id)">×</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.todo-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.todo-layout {
  flex: 1;
  display: flex;
  min-height: 0;
  overflow: hidden;
}

.sidebar {
  width: 300px;
  min-width: 300px;
  border-right: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
}

.notes-list {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
}

.list-group {
  height: 100%;
  overflow-y: auto;
}

.content-area {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
}
</style>