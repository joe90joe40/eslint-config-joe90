module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true
	},
	'globals': {
		'document': false,
		'navigator': false,
		'window': false
	},
	'plugins': [ 'import', 'react', 'promise' ],
	'parserOptions': {
		'ecmaVersion': 2018,
		'ecmaFeatures': { 'jsx': true },
		'sourceType': 'module'
	},
	'parser': 'babel-eslint',
	'settings': {
		'react': { 'version': '16' },
		'import/core-modules': []
	},
	'rules': {
		'arrow-body-style': [ 2, 'as-needed' ],
		'arrow-parens': [ 2, 'as-needed', { 'requireForBlockBody': true } ],
		'array-bracket-spacing': [ 2, 'always', { singleValue: true, objectsInArrays: true, arraysInArrays: true } ],
		'block-scoped-var': 2,
		'brace-style': [ 2, '1tbs' ],
		'comma-dangle': [ 2, 'never' ],
		'comma-spacing': [ 2, { before: false, after: true } ],
		'comma-style': [ 2, 'last' ],
		'computed-property-spacing': [ 2, 'never' ],
		'consistent-return': 1,
		'constructor-super': 2,
		'curly': [ 2, 'all' ],
		'eol-last': 2,
		'func-style': 0,
		'guard-for-in': 2,
		'indent': [ 2, 'tab', { SwitchCase: 1 } ],
		'jsx-quotes': [ 1, 'prefer-double' ],
		'import/no-unresolved': 2,
		'import/named': 2,
		'import/namespace': 2,
		'import/default': 2,
		'import/export': 2,
		'import/no-named-as-default-member': 1,
		'import/no-duplicates': 1,
		'import/unambiguous': 0,
		'import/no-named-as-default': 0,
		'keyword-spacing': 2,
		'no-class-assign': 2,
		'no-confusing-arrow': [ 2, { 'allowParens': true } ],
		'no-const-assign': 2,
		'no-else-return': 2,
		'no-extra-semi': 2,
		'no-floating-decimal': 2,
		'no-irregular-whitespace': 2,
		'no-multi-spaces': 2,
		'no-param-reassign': 2,
		'no-this-before-super': 2,
		'no-undef': 2,
		'no-unexpected-multiline': 2,
		'no-unused-expressions': 1,
		'no-useless-computed-key': 2,
		'no-useless-concat': 2,
		'no-useless-constructor': 2,
		'no-mixed-requires': 2,
		'no-mixed-spaces-and-tabs': 2,
		'no-multiple-empty-lines': [ 2, { max: 1 } ],
		'no-spaced-func': 2,
		'no-trailing-spaces': 2,
		'no-underscore-dangle': 0,
		'no-unused-vars': 2,
		'no-useless-rename': [ 2, { 'ignoreDestructuring': false, 'ignoreImport': false, 'ignoreExport': false } ],
		'object-curly-spacing': [ 2, 'always', { objectsInObjects: true, arraysInObjects: true } ],
		'object-shorthand': [ 2, 'always', { 'ignoreConstructors': false, 'avoidQuotes': true } ],
		'operator-linebreak': [ 2, 'after' ],
		'padding-line-between-statements': [ 2,
			{ blankLine: 'always', prev: '*', next: 'return' },
			{ blankLine: 'always', prev: [ 'const', 'let', 'var' ], next: '*' },
			{ blankLine: 'any', prev: [ 'const', 'let', 'var' ], next: [ 'const', 'let', 'var' ] }
		],
		'prefer-destructuring': [ 0, { 'array': true, 'object': true }, { 'enforceForRenamedProperties': false } ],
		'prefer-rest-params': 2,
		'prefer-spread': 2,
		'prefer-template': 2,
		'prefer-arrow-callback': 2,
		'promise/always-return': 2,
		'promise/no-return-wrap': 2,
		'promise/catch-or-return': 2,
		'prefer-const': 2,
		'quotes': [ 2, 'single', { avoidEscape: true, allowTemplateLiterals: true } ],
		'radix': 2,
		'react/jsx-boolean-value': 1,
		'react/jsx-no-bind': 1,
		'react/jsx-no-undef': 1,
		'react/jsx-sort-props': 0,
		'react/jsx-uses-react': 1,
		'react/jsx-uses-vars': 1,
		'react/no-did-mount-set-state': 1,
		'react/no-did-update-set-state': 1,
		'react/no-multi-comp': [ 1, { ignoreStateless: true } ],
		'react/no-unknown-property': 1,
		'react/prop-types': [ 1, { ignore: [ 'localise', 'localiseByNameSpace', 'localiseObjProp', '$actions' ] } ],
		'react/self-closing-comp': 1,
		'react/jsx-wrap-multilines': 1,
		'react/no-unused-prop-types': 1,
		'react/jsx-curly-spacing': [ 2, { 'when': 'always', 'allowMultiline': false, 'spacing': { 'objectLiterals': 'never' } } ],
		'strict': 0,
		'semi': [ 2, 'always' ],
		'semi-spacing': [ 2, { 'before': false, 'after': true } ],
		'space-before-blocks': 2,
		'space-before-function-paren': [ 2, { 'anonymous': 'always', 'named': 'never' } ],
		'space-in-parens': [ 2, 'never' ],
		'spaced-comment': [ 2, 'always', { 'exceptions': [ '-' ] } ],
		'template-curly-spacing': [ 2, 'always' ],
		'vars-on-top': 2,
		'wrap-iife': [ 2, 'inside' ]
	}
};
