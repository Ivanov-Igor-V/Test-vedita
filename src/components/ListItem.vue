<template>
  <div>
    <div
      v-if="!form.isEditting"
      class="d-flex justify-space-between align-center"
    >
      <div>
        <p>
          ФИО:&nbsp;&nbsp;&nbsp;<strong>{{ form.fio }}</strong>
        </p>
        <p>
          СНИЛС:&nbsp;&nbsp;&nbsp;<strong>{{ form.snils }}</strong>
        </p>
        <p>
          Номер телефона:&nbsp;&nbsp;&nbsp;<strong>{{ form.phone }}</strong>
        </p>
        <p>
          ИНН:&nbsp;&nbsp;&nbsp;<strong>{{ form.inn }}</strong>
        </p>
        <p>
          Дата рождения:&nbsp;&nbsp;&nbsp;<strong>{{ form.birthday }}</strong>
        </p>
        <p>
          Серия и номер паспорта:&nbsp;&nbsp;&nbsp;<strong>{{ form.passport }}</strong>
        </p>
      </div>
      <v-btn
        small
        depressed
        width="36px"
        height="36px"
        @click="makeUserEditting"
      >
        <v-icon color="grey">
          mdi-pencil 
        </v-icon>
      </v-btn>
    </div>
    <UserForm
      v-else
      :form="form"
      @fieldChanged="changeField"
    />
  </div>
</template>
<script>
import UserForm from '@/components/UserForm.vue';

export default {
    name: 'ListItem',
    components: {UserForm},
    props: {
        form: Object,
        index: Number,
		    toggler: Boolean
    },
    methods: {
        makeUserEditting() {
            this.$emit('makeUserEditting')
        },
        changeField(payload) {
            this.$emit('formChanged', payload)
        }
    }
}
</script>
<style lang="scss">
    
</style>