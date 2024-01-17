module.exports = {
	root: true,
	extends: ["eslint:recommended", "prettier", "plugin:svelte/recommended"],
	ignorePatterns: ["*.cjs"],
	overrides: [
		{
			files: ["*.svelte", "*.js", "*.css"],
			parser: "svelte-eslint-parser",
		}
	],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2022
	},
	env: {
		browser: true,
		node: true
	},
	rules: {
		quotes: ["error", "double"]
	}
};
