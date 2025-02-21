// eslint-disable-next-line n/no-unsupported-features/node-builtins
import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import stylelint from 'stylelint';

import config from '../index.js';

const validScss = readFileSync('./__tests__/valid.scss', 'utf-8');

describe('flags no warnings with valid scss', () => {
	let result;

	beforeEach(async () => {
		result = await stylelint.lint({
			code: validScss,
			config,
		});
	});

	it('has no errors', () => {
		assert.equal(result.errored, false);
	});

	it('flags no warnings', () => {
		assert.equal(result.results[0].warnings.length, 0);
	});

	// Useful for logging when unexpected warning text is flagged.
	it('no warning text', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.text),
			[],
		);
	});

	// Useful for logging when unexpected rules are flagged.
	it('no rules flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[],
		);
	});
});
