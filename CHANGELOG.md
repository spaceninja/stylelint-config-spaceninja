# Unreleased

- Updated `stylelint` peer dependency to v15
- Updated `stylelint-order` to v6

# 12.0.0 - 2022-12-13

- Major version bump due to dependencies
- Updated `stylelint-config-standard-scss` to v6

# 11.0.0. - 2022-07-25

- Updated `stylelint-config-standard-scss` to v5
- Removed: stylelint less than 14.9.0 from peer dependencies.

# 10.0.0 - 2022-02-28

- Updated `stylelint-config-standard-scss` to v3

# 9.0.1 - 2021-10-26

- Unintentionally listed some dependencies as devdependencies

# 9.0.0 - 2021-10-26

- Major version bump due to new rules
- Removed many rules already declared in shared configs
- Added `stylelint-a11y`
- Added `stylelint-high-performance-animation`

# 8.0.0 - 2021-10-22

- Major version bump due to dependencies
- Updated `stylelint` to v14.0.0
- Replace `stylelint-config-standard` and `stylelint-scss` with `stylelint-config-standard-scss`
- Updated `stylelint-order` to v5.0.0
- Updated `stylelint-declaration-block-no-ignored-properties` to v2.4.0

# 7.0.0 - 2020-02-11

- Major version bump due to dependencies
- Updated `stylelint-config-standard` to v20
- Updated `stylelint` to v13.1.0

# 6.0.0 - 2020-02-07

- Major version bump due to dependencies
- Updated `stylelint` to v13
- Updated `stylelint-order` to v4
- Updated `eslint` to v6.8.0
- Updated `jest` to v25

# 5.0.0 - 2019-11-19

- Major version bump due to Stylelint v12

# 4.0.0 - 2018-11-07

- Removed `indentation` in favor of `stylelint-config-standard`'s setting

# 3.0.0 - 2018-10-18

- Forked from [stylelint-config-saymedia](https://github.com/saymedia/stylelint-config-saymedia)
- Removed all `*-pattern` naming rules, to be replaced with BEM-style at a later date

# 2.4.0 - 2018-04-25

- Change: all package.json rules to use `~` instead of `^` to avoid accidental minor version upgrades and problems.
- Changed: updated to [`stylelint@9.2.0`](https://github.com/stylelint/stylelint/releases/tag/9.2.0).
- Changed: updated to [`stylelint-config-standard@18.2.0`](https://github.com/stylelint/stylelint-config-standard/releases/tag/18.2.0).
- Changed: updated to [`stylelint-scss@3.0.1`](https://github.com/kristerkari/stylelint-scss/releases/tag/3.0.1).

# 2.3.0 - 2018-02-23

- Changed: updated to [`stylelint@9.1.1`](https://github.com/stylelint/stylelint/releases/tag/9.1.1).
- Changed: updated to [`stylelint-config-standard@18.1.0`](https://github.com/stylelint/stylelint-config-standard/releases/tag/18.1.0).
- Changed: updated to [`stylelint-declaration-block-no-ignored-properties@1.1.0`](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties/releases/tag/1.1.0).
- Changed: updated to [`stylelint-order@0.8.1`](https://github.com/hudochenkov/stylelint-order/releases/tag/0.8.1).
- Changed: updated to [`stylelint-scss@2.4.0`](https://github.com/kristerkari/stylelint-scss/releases/tag/2.4.0).

# 2.2.0 - 2017-11-29

- Removed: `except: ["first-nested"]` option from `scss/double-slash-comment-empty-line-before` rule, because it's not what we actually wanted.

# 2.1.0 - 2017-11-28

- Removed: `no-descending-specificity` rule, due to false positives, pending [#2489](https://github.com/stylelint/stylelint/issues/2489)

# 2.0.0 - 2017-11-28

- Changed: updated to [`stylelint-config-standard@18.0.0`](https://github.com/stylelint/stylelint-config-standard/releases/tag/18.0.0).
- Removed: `no-unknown-animations` rule, per discussion in [this PR](https://github.com/stylelint/stylelint-config-recommended/pull/9).

# 1.1.0 - 2017-11-17

- Changed `at-mixin-argumentless-call-parentheses` to "always"

# 1.0.0 - 2017-10-20

- Initial release
