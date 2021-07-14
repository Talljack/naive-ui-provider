module.exports = {
	root: true,

	env: {
		node: true,
	},
	extends: ['@vue/standard', 'plugin:vue/vue3-recommended', '@vue/typescript', ],

	rules: {
		/** #NIMBUS-TPL#eslint-rule#START */
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'comma-dangle': [
			'error',
			{
				arrays: 'always',
				objects: 'always',
				imports: 'never',
				exports: 'never',
				functions: 'never',
			},
		],
		'comma-spacing': [
			'error',
			{
				before: false,
				after: true,
			},
		],
		'no-shadow': ['warn', ],
		'standard/object-curly-even-spacing': [0, 'either', ],
		'standard/array-bracket-even-spacing': [0, 'either', ],
		'standard/no-callback-literal': 0,
		'array-bracket-spacing': 'off',
		'standard/computed-property-even-spacing': 0,
		'space-before-function-paren': ['error', 'always', ],
		'vue/max-attributes-per-line': [
			2,
			{
				singleline: 20,
				multiline: {
					max: 1,
					allowFirstLine: false,
				},
			},
		],
		indent: [2, 'tab', ],
		'no-tabs': 0,
		'no-mixed-spaces-and-tabs': 0,
		'vue/no-parsing-error': [
			2,
			{
				'x-invalid-end-tag': false,
			},
		],
	},

	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
}
