<template>
  <div id="app">
    <v-app
      :style="{
        background: $vuetify.theme.themes.light.background,
      }"
    >
      <v-layout>
        <v-container class="w-75">
          <v-sheet rounded outlined class="mt-8 pa-8 pa-xs-4">
            <UserList :list="data" @saveNewForm="saveNewForm" />
          </v-sheet>
        </v-container>
      </v-layout>
    </v-app>
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue';
import DATA from '@/data.json';
export default {
  name: 'App',
  components: { UserList },
  data() {
    return {
      data: DATA,
      isEditting: false,
    };
  },
  methods: {
    swichStatus() {
      this.isEditting = !this.isEditting;
    },
    saveNewForm(e) {
      if (JSON.stringify(this.data) === JSON.stringify(e)) {
        this.isEditting = false;
        return;
      }
      this.data = JSON.parse(JSON.stringify(e));
      this.isEditting = false;
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/global.scss';
</style>
