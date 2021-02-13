<template>
  <q-page>
    <div style="margin-top: 10px; margin-left: 70px;" class="q-pa-md q-gutter-sm">
      <q-btn style="font-size: 16px; color: white; background-color: #f68424 !important;" to="/Common" label="მთავარი" outline color="#3b414d" />
      <q-btn style="font-size: 16px; color: white; background-color: #f68424 !important;" to="/Branches" label="ფილიალები" outline color="#3b414d" />
      <q-btn style="font-size: 16px; color: white; background-color: #f68424 !important;" to="/Contact" label="კონტაქტი" outline color="#3b414d" />
      <q-btn style="font-size: 16px; color: white; background-color: #f68424 !important;" to="/Questions" label="ხშირად დასმული შეკითხვები" outline color="#3b414d" />
    </div>
    <div class="q-pa-md">
      <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
      >
        <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
        <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
      </q-carousel>
    </div>
  </q-page>
</template>

<script>
    export default {
        data () {
            return {
                tab: 'images',
                slide: 1
            }
        }
    }
</script>

<style scoped>

</style>
