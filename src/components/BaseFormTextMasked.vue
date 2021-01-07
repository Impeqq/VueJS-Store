<template>
  <BaseFormField :title="title" :error="error">
    <MaskedInput
      class="form__input"
      :placeholder="placeholder"
      v-model="dataValue"
      :type="type"
      :mask="mask"
    />
  </BaseFormField>
</template>

<script>
import MaskedInput from "vue-masked-input";

import formFieldMixin from "@/mixins/formFieldMixin";
export default {
  name: "BaseFormTextMasked",
  props: {
    type: {
      default: "text",
    },
    mask: String,
  },
  mixins: [formFieldMixin],
  components: {
    MaskedInput,
  },
};
</script>

