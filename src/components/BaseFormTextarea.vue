<template>
  <BaseFormField :title="title" :error="error">
    <textarea
      class="form__input form__input--area"
      name="comments"
      :placeholder="placeholder"
      v-model="dataValue"
    ></textarea>
  </BaseFormField>
</template>

<script>
import formFieldMixin from "@/mixins/formFieldMixin";
export default {
  mixins: [formFieldMixin],
};
</script>

