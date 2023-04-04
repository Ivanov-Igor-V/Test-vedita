<template>
  <div>
    <div class="header">
      {{ title }}
    </div>
    <div class="text--disabled header_empty">
      {{ description }}
    </div>
  </div>
</template>
<script>
export default {
	name: 'ListHeader',
	props: {
		title: {
			type: String,
			default: 'Список пользователей',
		},
		description: {
			type: String,
			default: 'Не добавлено',
		},
		empty: Boolean
	},
};
</script>
<style lang="scss">
.header {
	line-height: 24px;
	font-size: 20px;
	margin-bottom: 16px;

	&_empty {
		line-height: 16px;
		font-size: 14px;
	}
}
</style>
