<template>
  <div id="app">
    <v-app
      :style="{
        background: $vuetify.theme.themes.light.background,
      }"
    >
      <v-layout>
        <v-container fluid class="wrapper">
          <v-sheet rounded outlined class="ma-4 ma-sm-8 pa-4 pa-sm-8">
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
      console.log(this.data);
      this.isEditting = false;
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/global.scss';
@import '@/assets/styles/variables.scss';

.wrapper {
  max-width: 1200px !important;
  margin: 0 auto;
  padding: 0 !important;
}
</style>
