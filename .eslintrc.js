module.exports = {
	root: true,
	extends: [
		'plugin:vue/recommended',
		'eslint:recommended',
		// 'plugin:prettier-vue/recommended',
	],
	settings: {
		usePrettierrc: true,
	},
	rules: {
		'prettier-vue/prettier': [
			'error',
			{
				printWidth: 100,
				singleQuote: true,
				semi: true,
				trailingComma: 'all',
				useTabs: true,
				tabWidth: 8,
				endOfLine: "auto",
				bracketSameLine: true
			},
		],
	},
};
