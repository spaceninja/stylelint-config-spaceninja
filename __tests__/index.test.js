'use strict';

const config = require('../');
const fs = require('fs');
const stylelint = require('stylelint');

const validScss = fs.readFileSync('./__tests__/valid.scss', 'utf-8');

describe('flags no warnings with valid scss', () => {
	let result;

	beforeEach(() => {
		result = stylelint.lint({
			code: validScss,
			config,
		});
	});

	it('did not error', () => {
		return result.then((data) => expect(data.errored).toBeFalsy());
	});

	it('flags no warnings', () => {
		return result.then((data) => expect(data.results[0].warnings).toHaveLength(0));
	});
});
