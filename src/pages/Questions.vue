<template>
  <q-page>
    <div style="margin-top: 10px; margin-left: 70px;" class="q-pa-md q-gutter-sm">
      <q-btn style="font-size: 16px; color: white; background-color: #f68424 !important;" to="/Common" label="მთავარი" outline color="#3b414d" />
      <q-btn style="font-size: 16px; color: white; background-color: #f68424 !important;" to="/Branches" label="ფილიალები" outline color="#3b414d" />
      <q-btn style="font-size: 16px; color: white; background-color: #f68424 !important;" to="/Contact" label="კონტაქტი" outline color="#3b414d" />
      <q-btn style="font-size: 16px; color: white; background-color: #f68424 !important;" to="/Questions" label="ხშირად დასმული შეკითხვები" outline color="#3b414d" />
    </div>
    <div class="q-pa-md scroll" style="height: 300px">
      <q-pull-to-refresh @refresh="refresh">
        <div v-for="(item, index) in items" :key="index" class="q-mb-sm">
          <q-badge color="secondary">
            {{ items.length - index }}
          </q-badge>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </q-pull-to-refresh>
    </div>
  </q-page>
</template>

<script>
    export default {
        data () {
            return {
                items: [ {}, {}, {}, {}, {}, {}, {}, {}, {} ]
            }
        },

        methods: {
            refresh (done) {
                setTimeout(() => {
                    this.items.push({}, {}, {}, {}, {}, {}, {})
                    done()
                }, 1000)
            }
        }
    }
</script>

<style scoped>

</style>
