<template>
  <div>
    <form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="ФИО"
              required
              :value="form.fio"
              @input="($event) => emitChange({ field: 'fio', value: $event })"
            />
          </v-col>
          <v-col cols="12" md="4">
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
                @change="($event) => emitChange({ field: 'birthday', value: $event })"
              />
            </v-menu>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-mask="'#### ######'"
              label="Серия и номер паспорта"
              required
              :value="form.passport"
              @input="($event) => emitChange({ field: 'passport', value: $event })"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-mask
              :value="form.snils"
              label="СНИЛС"
              required
              @input="($event) => emitChange({ field: 'snils', value: $event })"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-mask="'+7 (###) ###-##-##'"
              :value="form.phone"
              label="Телефон"
              required
              @input="($event) => emitChange({ field: 'phone', value: $event })"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-mask="'############'"
              :value="form.inn"
              label="ИНН"
              required
              @input="($event) => emitChange({ field: 'inn', value: $event })"
            />
          </v-col>
        </v-row>
      </v-container>
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
    },
  },
  data() {
    return {
      activePicker: null,
    };
  },
  methods: {
    emitChange(payload) {
      this.$emit('fieldChanged', payload);
    },
  },
};
</script>
