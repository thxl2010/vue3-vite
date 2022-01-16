<template>
  <app-dialog-form
    title="添加虚拟评论"
    :confirm="handleSubmit"
    @closed="handleDialogClosed"
    @open="handleDialogOpen"
  ></app-dialog-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import type { IElForm } from '@/types/element-plus';
import type { IVirtualReply } from '@/api/types/product-reply';
import { addVirtualReply } from '@/api/product-reply';

const form = ref<IElForm | null>(null);
const formData = ref<IVirtualReply>({
  product_id: '',
  nickname: '',
  avatar: '',
  comment: '',
  pics: '',
  product_score: '',
  service_score: '',
  add_time: '',
});
const formLoading = ref(false);
const emit = defineEmits(['success']);

const handleDialogOpen = async () => {
  formLoading.value = true;
};

const handleDialogClosed = () => {
  form.value?.clearValidate(); // 清除验证结果
  form.value?.resetFields(); // 清除表单数据
};

const handleSubmit = async () => {
  const valid = await form.value?.validate();
  if (!valid) {
    return;
  }
  await addVirtualReply(formData.value);
  emit('success');
  ElMessage.success('保存成功');
};
</script>

<style lang="scss" scoped></style>
