module.exports = {
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
	],
	env: {
		es6: true,
		node: true,
		browser: true,
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 8,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'no-unused-vars': [
			'warn',
			{ args: 'none', argsIgnorePattern: 'req|res|next|val' },
		],
		'prettier/prettier': ['error'],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
