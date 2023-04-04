<template>
  <div class="user-form">
    <form>
      <div class="input-container">
        <v-text-field
          label="ФИО"
          required
          :value="form.fio"
          @input="$event => emitChange({field: 'fio', value: $event})"
        />
        <!-- <v-text-field
          label="Дата рождения"
          required
          :value="form.birthday"
          @input="$event => emitChange({field: 'birthday', value: $event})"
        /> -->
        <v-menu
          ref="menu"
          :close-on-content-click="true"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template #activator="{ on, attrs }">
            <v-text-field
              :value="form.birthday"
              label="Дата рождения"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <v-date-picker
            :active-picker.sync="activePicker"
            min="1950-01-01"
            :value="form.birthday"
            @change="$event => emitChange({field: 'birthday', value: $event})"
          />
        </v-menu>

        <v-text-field
          v-mask="'#### ######'"
          label="Серия и номер паспорта"
          required
          :value="form.passport"
          @input="$event => emitChange({field: 'passport', value: $event})"
        />

        <v-text-field
          v-mask="'###-###-### ##'"
          :value="form.snils"
          label="СНИЛС"
          required
          @input="$event => emitChange({field: 'snils', value: $event})"
        />
        <v-text-field
          v-mask="'+7 (###) ###-##-##'"
          :value="form.phone"
          label="Телефон"
          required
          @input="$event => emitChange({field: 'phone', value: $event})"
        />
        <v-text-field
          v-mask="'############'"
          :value="form.inn"
          label="ИНН"
          required
          @input="$event => emitChange({field: 'inn', value: $event})"
        />
      </div>
    </form>
  </div>
</template>
<script>
export default {
	name: 'UserForm',
	props: {
		number: {
			type: Number,
		},
		form: {
			type: Object,
		}
	},
  data() {
    return {
      activePicker: null,
    }
  },
  methods: {
    emitChange(payload) {
      this.$emit('fieldChanged', payload)
    }
  }
};
</script>
<style lang="scss">
.input-container {
	display: grid;
	column-gap: 25px;
	grid-template-columns: repeat(3, 1fr);
}</style>
