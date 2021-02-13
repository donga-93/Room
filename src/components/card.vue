<template>
  <q-expansion-item
    style="border-radius: 2%;width: 494px; background-color: #f2c037;"
    icon="credit_card"
    label="Card"
    expand-icon-class="text-whit">

    <div style="width: 500px;" class="text-subtitle2"></div>
    <q-card-section class="q-pt-none">
      <q-form
        @submit="cardToSubmit"
        class="q-gutter-md"
      >
        <q-card style="right: 15px; min-width: 360px">
          <q-form
            @submit.prevent="submitCard"
            class="list q-mb-sm"
          >
            <q-input
              style="width: 100%"
              outlined
              v-model="cardToSubmit.number"
              label="ბარათის ნომერი"
              lazy-rules
              :rules="[
              val => val !== null && val !== '' || this.$t('regPleaseType'),
            ]"
            />

            <q-input
              style="width: 50%"
              outlined
              v-model="cardToSubmit.number2"
              label="შეიყვანეთ თანხა"
              lazy-rules
              :rules="[
              val => val !== null && val !== '' || this.$t('regPleaseType'),
            ]"
            />

            <q-card-actions align="right" class="text-primary">
              <q-btn color="secondary" label="გადახდა" />
              <q-btn color="deep-orange" label="გაუქმება"  />
            </q-card-actions>
          </q-form>
        </q-card>
      </q-form>
    </q-card-section>
  </q-expansion-item>
</template>

<script>
    import {mapActions} from "vuex";
    export default {
        name: "AddNewCard",
        data() {
            return {
                cardToSubmit: {
                    expanded: false,
                    dialog: false,
                    maximizedToggle: true,
                    number: '',
                    number2: '',
                }
            }
        },
    }
</script>

<style scoped>
</style>
