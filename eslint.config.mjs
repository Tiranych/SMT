import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';

import pluginJs from '@eslint/js';

export default tseslint.config(
	pluginJs.configs.recommended,
	eslintConfigPrettier,
	...tseslint.configs.recommended,
	{
		ignores: ['node_modules/', 'public/', '*.config.js', '*.d.ts'],
	},
	{
		plugins: {
			prettier: eslintPluginPrettier,
		},
	},
	{
		rules: {
			'prettier/prettier': [
				'error',
				{
					trailingComma: 'es5',
					printWidth: 100,
					tabWidth: 4,
					semi: true,
					singleQuote: true,
					jsxSingleQuote: true,
					useTabs: true,
					plugins: ['@trivago/prettier-plugin-sort-imports'],
					importOrder: [
						'^[react]',
						'<THIRD_PARTY_MODULES>',
						'^@components',
						'^@pages',
						'^@utils',
						'(?=reset)',
						'(?=.css)',
						'^[./]',
					],
					importOrderSeparation: true,
					importOrderSortSpecifiers: true,
					endOfLine: 'auto',
				},
			],
			'no-loss-of-precision': 'off', // Игнорируем правило потери точности
			'@typescript-eslint/no-unused-expressions': 'off', //  Игнорируем правило неиспользуемых выражений
			'@typescript-eslint/no-explicit-any': 'warn', // Делаем warning при появлении any
			'@typescript-eslint/no-unused-vars': 'error', // Делаем error при неиспользуемых переменных
		},
	}
);
