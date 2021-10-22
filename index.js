'use strict';

module.exports = {
	extends: 'stylelint-config-standard-scss',
	plugins: ['stylelint-declaration-block-no-ignored-properties', 'stylelint-order'],
	rules: {
		'at-rule-empty-line-before': null,
		'at-rule-no-unknown': null,
		'at-rule-no-vendor-prefix': true,
		'block-closing-brace-newline-after': [
			'always',
			{
				ignoreAtRules: ['if', 'else'],
			},
		],
		'color-hex-length': 'long',
		'declaration-empty-line-before': 'never',
		'font-family-name-quotes': 'always-where-recommended',
		'function-url-quotes': 'always',
		'max-line-length': [
			100,
			{
				ignore: ['comments'],
			},
		],
		'media-feature-name-no-vendor-prefix': true,
		'no-descending-specificity': null,
		'property-no-vendor-prefix': true,
		'rule-empty-line-before': [
			'always-multi-line',
			{
				ignore: ['after-comment'],
			},
		],
		'selector-attribute-quotes': 'always',
		'selector-max-id': 0,
		'selector-no-qualifying-type': [
			true,
			{
				ignore: ['attribute'],
			},
		],
		'selector-no-vendor-prefix': true,
		'string-quotes': 'double',
		'time-min-milliseconds': 100,
		'value-keyword-case': 'lower',
		'value-no-vendor-prefix': true,
		'order/properties-alphabetical-order': true,
		'plugin/declaration-block-no-ignored-properties': true,
		'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
		'scss/at-else-closing-brace-space-after': 'always-intermediate',
		'scss/at-else-empty-line-before': 'never',
		'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
		'scss/at-if-closing-brace-space-after': 'always-intermediate',
		'scss/at-function-parentheses-space-before': 'never',
		'scss/at-mixin-argumentless-call-parentheses': 'always',
		'scss/at-mixin-parentheses-space-before': 'never',
		'scss/at-rule-no-unknown': true,
		'scss/dollar-variable-colon-newline-after': 'always-multi-line',
		'scss/dollar-variable-colon-space-after': 'always-single-line',
		'scss/dollar-variable-colon-space-before': 'never',
		'scss/dollar-variable-empty-line-before': [
			'always',
			{
				except: ['after-dollar-variable', 'first-nested'],
				ignore: ['after-comment'],
			},
		],
		'scss/dollar-variable-no-missing-interpolation': true,
		'scss/double-slash-comment-empty-line-before': [
			'always',
			{
				ignore: ['between-comments', 'stylelint-commands'],
			},
		],
		'scss/double-slash-comment-whitespace-inside': 'always',
		'scss/declaration-nested-properties': 'never',
		'scss/selector-no-redundant-nesting-selector': true,
	},
};
