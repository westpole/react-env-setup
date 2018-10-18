# ESLint sets of coding style rules

This library holds configuration primarely in two files:

  - .eslintignore (it defines which file should not be included into the check list as library starts check from `src/scripts` folder)
  - .eslintrc (contains configuration and exceptions)

Sets of rules are based on `eslint:recommended` and `airbnb` modules.

### Exceptions the default rules

1. Disable check for an imported module path. It allows `.jsx` extention in the path string.