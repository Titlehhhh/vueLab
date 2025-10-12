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
    <div class="modal-window text-center p-4">
      <p class="fs-5 mb-4">{{ message }}</p>
      <div class="d-flex justify-content-center gap-2">
        <button class="btn btn-success px-4" @click="confirm">
          <i class="bi bi-check-circle me-1"></i> Да
        </button>
        <button class="btn btn-outline-secondary px-4" @click="cancel">
          <i class="bi bi-x-circle me-1"></i> Отмена
        </button>
      </div>
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
