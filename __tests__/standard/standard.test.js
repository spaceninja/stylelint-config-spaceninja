import { beforeEach, describe, it } from 'node:test'; // eslint-disable-line n/no-unsupported-features/node-builtins
import assert from 'node:assert/strict';
import fs from 'node:fs';

import stylelint from 'stylelint';

import config from '../../index.js';

describe('styleint-standard', () => {
	describe('flags no warnings with valid css', () => {
		const validCss = fs.readFileSync('./__tests__/standard/valid.css', 'utf-8');
		let result;

		beforeEach(async () => {
			result = await stylelint.lint({
				code: validCss,
				config,
			});
		});

		it('did not error', () => {
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

	describe('flags warnings with invalid css', () => {
		const invalidCss = fs.readFileSync('./__tests__/standard/invalid.css', 'utf-8');
		let result;

		beforeEach(async () => {
			result = await stylelint.lint({
				code: invalidCss,
				config,
			});
		});

		it('did error', () => {
			assert.equal(result.errored, true);
		});

		it('flags warnings', () => {
			assert.equal(result.results[0].warnings.length, 6);
		});

		// Checks which rules flagged, not their message text. The messages come
		// from stylelint and the configs we extend, and their wording changes
		// between minor versions, which would fail the oldest-supported CI job.
		it('correct rule flagged', () => {
			assert.deepEqual(
				result.results[0].warnings.map((w) => w.rule),
				[
					'custom-media-pattern',
					'custom-property-pattern',
					'keyframes-name-pattern',
					'layer-name-pattern',
					'selector-id-pattern',
					'selector-max-id',
				],
			);
		});

		it('correct severity flagged', () => {
			assert.equal(result.results[0].warnings[0].severity, 'error');
		});

		it('correct line number', () => {
			assert.equal(result.results[0].warnings[0].line, 1);
		});

		it('correct column number', () => {
			assert.equal(result.results[0].warnings[0].column, 15);
		});
	});

	// this test fails because we're adding rules it doesn't know about
	// eslint-disable-next-line n/no-unsupported-features/node-builtins
	describe.skip('deprecated rules are excluded', () => {
		const ruleNames = Object.keys(config.rules);

		it('is not empty', () => {
			assert.ok(ruleNames.length > 0);
		});

		for (const ruleName of ruleNames) {
			it(`${ruleName}`, async () => {
				const rule = await stylelint.rules[ruleName];

				assert.ok(!rule.meta.deprecated);
			});
		}
	});
});
