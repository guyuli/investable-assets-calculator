<template>
  <v-row>
    <v-col cols="12" sm="5">
      {{ question }}
      <v-select
        :items="items"
        :label="label"
        @change="selectionChanged"
        class="mt-3"
        outlined
        dense
        hide-details
        >
      </v-select>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    question: String,
    items: Array,
    label: String
  },
  data: () => ({
  }),
  methods: {
    selectionChanged(value) {
      this.$emit("selectionChanged", value);
    }
  },
}
</script>