# svelte-datatables-net

![GITHUB VERSION](https://img.shields.io/github/package-json/v/joaquimnetocel/svelte-datatables-net?label=github%20version&logo=github&color=lightgray) ![NPM VERSION](https://img.shields.io/npm/v/svelte-datatables-net?color=red&logo=npm&label=npm%20version) ![NPM Downloads](https://img.shields.io/npm/dw/svelte-datatables-net?color=red&label=npm%20downloads&logo=npm) ![NPM License](https://img.shields.io/npm/l/svelte-datatables-net?color) [![Twitter](https://img.shields.io/twitter/follow/:twitterHandle.svg?style=social&label=@joaquimnetocel)](https://twitter.com/joaquimnetocel)

**svelte-datatables-net** is a svelte/sveltekit component that turns data into an interactive HTML table.

![BOOTSTRAP EXAMPLE](./demonstration.gif)

## VERSIONS

- VERSION 1.0.0 OR ABOVE WORKS WITH SVELTE 5 ONLY (NEWER AND RECOMMENDED VERSIONS WITH IMPROVEMENTS!)
- PREVIOUS VERSIONS WORKS WITH SVELTE 3, 4 AND 5.

## FEATURES

- POSSIBILITY OF CHOOSING THE SEARCHABLE COLUMNS.
- POSSIBILITY OF CHOOSING THE SORTABLE COLUMNS.
- PAGINATION.
- POSSIBILITY OF CHOOSING AND CHANGING THE NUMBER OF ROWS PER PAGE.
- NON-OPINIONATED STYLING.
- NON-OPINIONATED POSITIONING.
- TYPESCRIPT SUPPORT.

## DEMOS

- [REPL: BOOTSTRAP 5 EXAMPLE](https://svelte.dev/repl/d5a7803dd61041b0b6e0d0efcd743580)
- [REPL: SKELETON EXAMPLE](https://svelte.dev/repl/b2e43168303f4f1ba67c84a0c3c0fea0)
- [REPL: FETCH EXAMPLE](https://svelte.dev/repl/755b541084534ad9b507e37af2e4c218)

## INSTALLATION

```bash
npm install svelte-datatables-net
```

## COMPONENT STRUCTURE

- `functionCreateDatatable`: A function to create an object with all the states of the component.
- `Datatable`: Datatable element surrounding your table structure.
- `Search`: A svelte component with a search input.
- `RowsPerPage`: A svelte component with a select input to choose the number of rows per page.
- `PaginationItems`: A svelte component for pagination.
- `Sort`: A svelte component that enable sorting for a specific column.
- `typeDatatable`: If you are using typescript, it is a type definition for the component states.

## PARAMETERS AND PROPS

- PARAMETERS OF `functionCreateDatatable`:

| PARAMETER              | DESCRIPTION                                                                                                                                                                  | TYPE                                 | REQUIRED | DEFAULT                                     |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- | ------------------------------------------- |
| `parData`              | AN ARRAY WITH THE DATA.                                                                                                                                                      | `Generic[]`                          | YES      | -                                           |
| `parSearchableColumns` | AN ARRAY WITH THE SEARCHABLE COLUMNS (KEYS OF `parData`).                                                                                                                    | `(keyof Generic)[]`                  | NO       | `undefined`                                 |
| `parSearchString`      | THE SEARCH STRING CAN BE SET PREVIOUSLY WITH THIS PROP.                                                                                                                      | `string`                             | NO       | `''` (EMPTY STRING)                         |
| `parRowsPerPage`       | THE INITIAL NUMBER OF ROWS PER PAGE.                                                                                                                                         | `string` (NUMERIC STRING OR `'all'`) | NO       | `'all'`                                     |
| `parSortBy`            | THE INITIAL SORT COLUMN (A KEY OF `parData`).                                                                                                                                | `keyof Generic`                      | NO       | `undefined` (NO INITIAL SORTING)            |
| `parSortOrder`         | THE INITIAL SORT ORDER.                                                                                                                                                      | 'ascending' OR 'descending'          | NO       | 'ascending'                                 |
| `parSortFunction`      | A COMPARE FUNCTION THAT SPECIFIES THE INITIAL SORT ORDER. ([MORE DETAILS HERE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)) | (a: Generic, b: Generic) => number   | NO       | A STANDARD FUNCTION TO SORT ALPHABETICALLY. |

- PROPS OF `Datatable`:

| PROP            | DESCRIPTION                                                                                 | TYPE                     | REQUIRED | DEFAULT |
| --------------- | ------------------------------------------------------------------------------------------- | ------------------------ | -------- | ------- |
| `propDatatable` | A BINDABLE OBJECT WITH THE DATATABLE STATES (OBJECT CREATED WITH `functionCreateDatatable`) | `typeDatatable<Generic>` | YES      | -       |

- PROPS OF `Search`:

| PROP              | DESCRIPTION                      | TYPE     | REQUIRED | DEFAULT        |
| ----------------- | -------------------------------- | -------- | -------- | -------------- |
| `propPlaceholder` | SEARCH INPUT PLACEHOLDER.        | `string` | NO       | 'Type here...' |
| `class`           | CSS CLASSES OF THE SEARCH INPUT. | `string` | NO       | -              |
| `style`           | CSS STYLES OF THE SEARCH INPUT.  | `string` | NO       | -              |

- PROPS OF `PaginationItems`:

| PROP                 | DESCRIPTION                                                                              | TYPE                                         | REQUIRED | DEFAULT |
| -------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------- | -------- | ------- |
| `propTag`            | HTML TAG OF THE PAGINATION ITEM.                                                         | `'span' OR 'div' OR 'li' OR 'button' OR 'a'` | YES      | -       |
| `propInnerTag`       | HTML TAG INSIDE THE PAGINATION ITEM.                                                     | `'span' OR 'div' OR 'li' OR 'button' OR 'a'` | NO       | `span`  |
| `propPrevious`       | PREVIOUS BUTTON TEXT.                                                                    | `string`                                     | NO       | -       |
| `propNext`           | NEXT BUTTON TEXT.                                                                        | `string`                                     | NO       | -       |
| `propShortMode`      | IF IN SHORT MODE, PAGINATION WILL SHOW ONLY FORWARD AND BACKWARD BUTTONS.                | `boolean`                                    | NO       | `false` |
| `propShortModeLimit` | IF THE NUMBER OF PAGES IS GREATER THAN `propShortModeLimit` THE SHORT MODE IS ACTIVATED. | `number`                                     | NO       | `1000`  |
| `style`              | CSS STYLES FOR PAGINATION ITEMS.                                                         | `string`                                     | NO       | -       |
| `class`              | CSS CLASSES FOR PAGINATION ITEMS.                                                        | `string`                                     | NO       | -       |
| `propDisabledStyle`  | CSS STYLES FOR DISABLED PAGINATION ITEMS.                                                | `string`                                     | NO       | -       |
| `propDisabledClass`  | CSS CLASSES FOR DISABLED PAGINATION ITEMS.                                               | `string`                                     | NO       | -       |
| `propActiveStyle`    | CSS STYLES FOR ACTIVE PAGINATION ITEMS.                                                  | `string`                                     | NO       | -       |
| `propActiveClass`    | CSS CLASSES FOR ACTIVE PAGINATION ITEMS.                                                 | `string`                                     | NO       | -       |
| `propInnerClass`     | CSS CLASSES FOR THE TAG INSIDE PAGINATION ITEMS.                                         | `string`                                     | NO       | -       |
| `propInnerStyle`     | CSS CLASSES FOR THE TAG INSIDE PAGINATION ITEMS.                                         | `string`                                     | NO       | -       |

- PROPS OF `RowsPerPage`:

| PROP    | DESCRIPTION                      | TYPE     | REQUIRED | DEFAULT |
| ------- | -------------------------------- | -------- | -------- | ------- |
| `class` | CSS CLASSES OF THE SELECT INPUT. | `string` | NO       | -       |
| `style` | CSS STYLES OF THE SELECT INPUT.  | `string` | NO       | -       |

- PROPS OF `Sort`:

| PROP               | DESCRIPTION                                                                                                                                                          | TYPE                                 | REQUIRED | DEFAULT                                     |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- | ------------------------------------------- |
| `propDatatable`    | AN OBJECT WITH THE DATATABLE STATES (OBJECT CREATED WITH `functionCreateDatatable`)                                                                                  | `typeDatatable<Generic>`             | YES      | -                                           |
| `propColumn`       | COLUMN TO SORT.                                                                                                                                                      | `keyof Generic`                      | YES      | -                                           |
| `propIconSize`     | SIZE OF THE SORT ICON                                                                                                                                                | `number`                             | NO       | 10                                          |
| `propSortFunction` | A COMPARE FUNCTION THAT SPECIFIES THE SORT ORDER. ([MORE DETAILS HERE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)) | `(a: Generic, b: Generic) => number` | NO       | A STANDARD FUNCTION TO SORT ALPHABETICALLY. |

## EXAMPLES AND DEVELOPING

ONCE YOU'VE INSTALLED THE DEPENDENCIES WITH `npm install`, START A DEVELOPMENT SERVER TO RUN THE EXAMPLES IN THE `routes` FOLDER WITH `npm run dev`.
