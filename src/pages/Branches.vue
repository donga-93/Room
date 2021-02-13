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
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        class="bg-secondary text-white shadow-1 rounded-borders"
      >
        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
          <q-btn v-if="active" size="lg" icon="home" color="yellow" flat round dense @click="onClick" />
          <q-btn v-else size="sm" :icon="btnProps.icon" color="white" flat round dense @click="onClick" />
        </template>

        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-page>
</template>

<script>
    export default {
        data () {
            return {
                slide: 'style',
                lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
            }
        }
    }
</script>

<style scoped>

</style>
