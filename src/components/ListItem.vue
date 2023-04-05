<template>
  <div>
    <div v-if="!form.isEditting" class="d-flex justify-space-between align-start">
      <div class="item-data">
        <div class="d-flex flex-column flex-md-row">
          <span class="mr-0 text--disabled mr-md-2 mb-1 mb-md-0">ФИО: </span>
          <span>{{ form.fio }}</span>
        </div>
        <div class="d-flex flex-column flex-md-row">
          <span class="mr-0 text--disabled mr-md-2 mb-1 mb-md-0">СНИЛС: </span>
          <span>{{ form.snils }}</span>
        </div>
        <div class="d-flex flex-column flex-md-row">
          <span class="mr-0 text--disabled mr-md-2 mb-1 mb-md-0">Номер телефона: </span>
          <span>{{ form.phone }}</span>
        </div>
        <div class="d-flex flex-column flex-md-row">
          <span class="mr-0 text--disabled mr-md-2 mb-1 mb-md-0">ИНН:</span>
          <span>{{ form.inn }}</span>
        </div>
        <div class="d-flex flex-column flex-md-row">
          <span class="mr-0 text--disabled mr-md-2 mb-1 mb-md-0">Дата рождения: </span>
          <span>{{ form.birthday }}</span>
        </div>
        <div class="d-flex flex-column flex-md-row">
          <span class="mr-0 text--disabled mr-md-2 mb-1 mb-md-0">Серия и номер паспорта: </span>
          <span>{{ form.passport }}</span>
        </div>
      </div>
      <v-btn x-small depressed width="36px" height="36px" @click="makeUserEditting">
        <v-icon class="item-edit-icon"> mdi-pencil </v-icon>
      </v-btn>
    </div>
    <UserForm v-else :form="form" @fieldChanged="changeField" />
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue';
export default {
  name: 'ListItem',
  components: { UserForm },
  props: {
    form: Object,
    index: Number,
    toggler: Boolean,
  },
  methods: {
    makeUserEditting() {
      this.$emit('makeUserEditting');
    },
    changeField(payload) {
      this.$emit('formChanged', payload);
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.item-data {
  div {
    font-size: 16px;
    line-height: 19px;
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  span {
    white-space: nowrap;
  }
}

.item-edit-icon {
  color: $icon-gray !important;
}
</style>
