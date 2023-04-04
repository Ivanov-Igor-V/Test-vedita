<template>
  <div>
    <div v-if="!form.isEditting" class="d-flex justify-space-between align-start">
      <div>
        <div>
          ФИО: <strong>{{ form.fio }}</strong>
        </div>
        <div>
          СНИЛС: <strong>{{ form.snils }}</strong>
        </div>
        <div>
          Номер телефона:
          <strong>{{ form.phone }}</strong>
        </div>
        <div>
          ИНН: <strong>{{ form.inn }}</strong>
        </div>
        <div>
          Дата рождения:
          <strong>{{ form.birthday }}</strong>
        </div>
        <div>
          Серия и номер паспорта:
          <strong>{{ form.passport }}</strong>
        </div>
      </div>
      <v-btn small depressed width="36px" height="36px" @click="makeUserEditting">
        <v-icon color="grey"> mdi-pencil </v-icon>
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
