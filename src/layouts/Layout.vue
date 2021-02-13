<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" round dense icon="menu" />

      <q-btn
        style="color: #f68424;"
        flat
        icon-right="logout"
        label="გამოსვლა"
        class="absolute-right" />
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="400"
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item>
          <q-breadcrumbs-el style="font-size: 56px; color: #f68424 !important;" to="/Common" label="Site.ge"   />
        </q-item>
        <q-item>
          <q-btn @click="leftDrawerOpen = !leftDrawerOpen" style="color: red; margin-left: 320px; top: -90px;" flat round icon="highlight_off" v-close-popup />
        </q-item>

        <div class="q-pa-md" style="max-width: 350px">
          <q-list bordered class="rounded-borders">
            <q-separator />
            <q-expansion-item>
              <template v-slot:header>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <p style="font-size: 20px;">ჯონ დო</p>
                </q-item-section>
              </template>

              <q-card>
                <q-card-section style="color: #3b414d">
                 მომხმარებლის პირადი ინფორმაცია
                 ჯონ დო არის ჩვენი კომპანიის მომხმარებელი.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-separator />

            <q-expansion-item>
              <template v-slot:header>
                <q-item-section avatar>
                  <q-icon color="green" name="account_circle" />
                </q-item-section>
                <q-item-section>
                  Online
                </q-item-section>
              </template>
            </q-expansion-item>
          </q-list>
        </div>

        <div class="q-pa-md q-gutter-sm">
            <q-btn label="ბალანსი" icon="control_point" color="primary" @click="open('right')" />
            <p style="margin-left: 52px;">0 ლ</p>
          <q-btn style="margin-left: 140px; margin-top: -150px;" label="გადასახდელი თანხა" icon="credit_card" color="primary" @click="open('right')" />
          <p style="margin-left: 252px; margin-top: -60px; color: lawngreen;">0 ლ</p>

          <q-dialog v-model="dialog" :position="position">
            <q-card style="width: 500px; height: 100%; margin-top: 20px;">
              <q-btn style="margin-left: 1px; color: red;" flat round icon="highlight_off" v-close-popup />


               <card></card>

            </q-card>
          </q-dialog>
        </div>

        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          class="text-grey-4"
          exact
          clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import { openURL } from 'quasar'
  export default {
    name: 'MyLayout',
    data () {
      return {
          dialog: false,
          position: 'top',
        leftDrawerOpen: this.$q.platform.is.desktop,
        navs: [
            {
              label: 'ტრანზაქციების ისტორია',
              icon: 'payment',
              to: '/'
            },
            {
              label: 'მისაღები ამანათები',
              icon: 'redeem',
              to: '/settings'
            },
            {
                label: 'გამოგზავნილი ამანათები',
                icon: 'arrow_right_alt',
                to: '/SentG'
            },
            {
                label: 'ჩამოსული ამანათები',
                icon: 'flight_land',
                to: '/Arrived'
            },
            {
                label: 'მიღებული(უკვე აღებული)',
                icon: 'done_outline',
                to: '/Take'
            },
            {
                to: '/Common'
            }
        ]
      }
    },
    methods: {
        open (position) {
            this.position = position
            this.dialog = true
        },
    },
    components: {
        'card' : require('components/card.vue').default
    }
  }
</script>

<style lang="scss">

</style>
