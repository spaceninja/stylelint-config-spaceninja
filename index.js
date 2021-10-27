'use strict';

module.exports = {
	extends: 'stylelint-config-standard-scss',
	plugins: ['stylelint-declaration-block-no-ignored-properties', 'stylelint-order'],
	rules: {
		'declaration-empty-line-before': 'never',
		'selector-class-pattern': null,
		'selector-max-id': 0,
		'selector-no-qualifying-type': [
			true,
			{
				ignore: ['attribute'],
			},
		],
		'time-min-milliseconds': 100,
		'order/properties-alphabetical-order': true,
		'plugin/declaration-block-no-ignored-properties': true,
		'scss/declaration-nested-properties': 'never',
		'scss/selector-no-redundant-nesting-selector': true,
	},
};
