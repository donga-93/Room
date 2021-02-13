<template>
  <q-page>
  <div class="q-pa-md bg-grey-10 text-white">
    <q-badge color="secondary">
      Model: {{ value }} (-20 to 20, step 4)
    </q-badge>

    <q-slider
      v-model="value"
      :min="-20"
      :max="20"
      :step="4"
      dark
      label
      label-always
      color="light-green"
    />

    <q-badge color="secondary">
      Model: {{ value }} (-20 to 20, step 4)
    </q-badge>

    <q-slider
      v-model="value"
      :min="-20"
      :max="20"
      :step="4"
      dark
      label
      label-always
      color="red"
    />
  </div>

  <template>
    <div class="q-pa-md">
      <div class="q-gutter-sm">
        <q-badge color="teal">
          Model: {{ model }}
        </q-badge>
        <q-badge color="purple" text-color="white" class="q-ma-md">
          Mask: YYYY-MM-DD HH:mm
        </q-badge>
      </div>

      <div class="q-gutter-md row items-start">
        <q-date v-model="model" mask="YYYY-MM-DD HH:mm" color="purple" />
        <q-time v-model="model" mask="YYYY-MM-DD HH:mm" color="purple" />
      </div>
    </div>
  </template>
  </q-page>
</template>

<script>
    export default {
        data () {
            return {
                value: 0,
                model: '2019-02-22 21:02',
            }
        }
    }
</script>

<style scoped>

</style>
