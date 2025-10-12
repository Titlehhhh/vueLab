<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  visible: Boolean,
  message: { type: String, default: "Подтвердите действие" },
  onConfirm: Function
})

const emit = defineEmits(['update:visible'])

function confirm() {
  emit('update:visible', false)
  if (props.onConfirm) props.onConfirm()
}

function cancel() {
  emit('update:visible', false)
}
</script>

<template>
  <div v-if="visible" class="modal-backdrop">
    <div class="modal-window">
      <p>{{ message }}</p>
      <button @click="confirm">Да</button>
      <button @click="cancel">Отмена</button>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top:0; left:0;
  width:100%; height:100%;
  background: rgba(0,0,0,0.5);
  display:flex;
  justify-content:center;
  align-items:center;
}

.modal-window {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  min-width: 300px;
  max-width: 90%;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  text-align: center;
}
</style>
