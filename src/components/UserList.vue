<template>
  <div class="d-flex flex-column">
    <div
      class="d-flex justify-space-between align-center "
    >
      <ListHeader
        :title="isEditting ? 'Добавление пользователей' : undefined"
        :description="isEditting ? 'Заполните данные' : `${!list.length ? 'Не добавлены' : '' }`"
      />
      <v-btn
        v-if="localList.length < 1 || isEditting"
        class="bg-primary"
        color="primary"
        :disabled="isButtonDisabled"
        @click="mainButtonHandler"
      >
        {{ mainButtonText }}
      </v-btn>
    </div>
    <div
      v-for="(user, index) in localList"
      :key="user.id"
      class="mb-7"
    >
      <div class="text-h6 primary--text mb-4">
        Пользователь №{{ index + 1 }}
      </div>
      <ListItem
        :form="user"
        :index="index"
        class="mb-4"
        :toggler="toggleUserAdding"
        @makeUserEditting="makeFieldEditting(index)"
        @formChanged="changeField(index, $event)"
      />
      <v-divider
        v-if="index !== localList.length - 1"
        class="mb-6"
      />
    </div>
    <v-btn
      v-if="localList.length || isEditting"
      class="align-self-center"
      outlined
      color="primary"
      :disabled="isButtonDisabled"
      @click="addEmptyForm"
    >
      Еще
    </v-btn>
  </div>
</template>

<script>
import ListHeader from '@/components/ListHeader.vue';
import ListItem from '@/components/ListItem.vue';

export default {
	name: 'UserList',
	components: {ListHeader,  ListItem},
	props: {
		list: {
			type: Array,
			required: true,
			default: () => ([])
		},
	},
	data() {
		return {
			localList: [],
			isEditting: false,
			toggleUserAdding: false,
			hasChanges:  false
		}
	},
	
	computed: {
		mainButtonText() {
			return this.isEditting ? 'Сохранить' : 'Добавить'
		},
		isButtonDisabled() {
			if (this.localList.some(element => Object.values(element).some(el => el === ''))  ) return true
			return false
		}
	},
	watch: {
		toggleUserAdding(oldVal, newVal) {
			console.log(oldVal, newVal);
			this.addEmptyForm()
		}
	},
	mounted() {
		this.localList = JSON.parse(JSON.stringify(this.list))
	},
	methods: {
		mainButtonHandler() {
			if (this.localList.length < 1) {this.isEditting = true; this.addEmptyForm(); return}
			this.toggleUserAdding = false
			this.isEditting = false
			this.localList.forEach(el => this.$set(el, 'isEditting', false))
			this.$emit("saveNewForm", this.localList)
			this.hasChanges = false
		},
		addEmptyForm() {
			this.isEditting = true
			const newForm = {
				birthday: '',
				fio: '',
				frontId: Date.now(),
				snils: '',
				phone: '',
				inn: '',
				passport: '',
				isEditting: true,
			}
			this.localList.push(newForm)
		},
		makeFieldEditting(index) {
			this.isEditting = true
			this.$set(this.localList[index], 'isEditting', true)
		},
		changeField(index, e) {
			this.hasChanges = true
			this.$set(this.localList[index], e.field , e.value)
		}
	}
}
</script>
