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

## INSTALLATION

```bash
npm install svelte-datatables-net
```

## EXAMPLES AND DEVELOPING

To run the examples from `/src/routes`:

```bash
git clone https://github.com/joaquimnetocel/svelte-datatables-net.git
cd svelte-datatables-net
npm install
npm run dev
```

## COMPONENT STRUCTURE

- `createData`: A function to create a state with the data.
- `Search`: A svelte component with a search input.
- `RowsPerPage`: A svelte component with a select input to choose the number of rows per page.
- `Pagination`: A svelte component for pagination.
- `Sort`: A svelte component that enable sorting for a specific column.
- `typeData`: If you are using typescript, it is a type definition for the data state.

## PARAMETERS AND PROPS

- PARAMETERS OF `createData`:

| PARAMETER        | DESCRIPTION                                                                                                                                                                  | TYPE                                 | REQUIRED | DEFAULT                                     |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- | ------------------------------------------- |
| `data`           | AN ARRAY WITH THE DATA.                                                                                                                                                      | `Generic[]`                          | YES      | -                                           |
| `searchablekeys` | AN ARRAY WITH THE SEARCHABLE COLUMNS (KEYS OF `data`).                                                                                                                       | `(keyof Generic)[]`                  | NO       | `undefined`                                 |
| `searchString`   | THE SEARCH STRING CAN BE SET PREVIOUSLY WITH THIS PROP.                                                                                                                      | `string`                             | NO       | `''` (EMPTY STRING)                         |
| `rowsPerPage`    | THE INITIAL NUMBER OF ROWS PER PAGE.                                                                                                                                         | `string` (NUMERIC STRING OR `'all'`) | NO       | `'all'`                                     |
| `sortBy`         | THE INITIAL SORT COLUMN (A KEY OF `data`).                                                                                                                                   | `keyof Generic`                      | NO       | `undefined` (NO INITIAL SORTING)            |
| `sortOrder`      | THE INITIAL SORT ORDER.                                                                                                                                                      | 'ascending' OR 'descending'          | NO       | 'ascending'                                 |
| `sortFunction`   | A COMPARE FUNCTION THAT SPECIFIES THE INITIAL SORT ORDER. ([MORE DETAILS HERE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)) | `(a: Generic, b: Generic) => number` | NO       | A STANDARD FUNCTION TO SORT ALPHABETICALLY. |
| `activePage`     | ACTIVE PAGE FOR PAGINATION.                                                                                                                                                  | number                               | NO       | `1`                                         |

- PROPS OF `Search`:

| PROP          | DESCRIPTION                          | TYPE                | REQUIRED | DEFAULT        |
| ------------- | ------------------------------------ | ------------------- | -------- | -------------- |
| `data`        | data state created with `createData` | `typeData<Generic>` | YES      | -              |
| `placeholder` | SEARCH INPUT PLACEHOLDER.            | `string`            | NO       | 'Type here...' |
| `class`       | CSS CLASSES OF THE SEARCH INPUT.     | `string`            | NO       | -              |
| `style`       | CSS STYLES OF THE SEARCH INPUT.      | `string`            | NO       | -              |

- PROPS OF `Pagination`:

| PROP            | DESCRIPTION                                | TYPE                | REQUIRED | DEFAULT |
| --------------- | ------------------------------------------ | ------------------- | -------- | ------- |
| `data`          | data state created with `createData`       | `typeData<Generic>` | YES      | -       |
| `previous`      | PREVIOUS BUTTON TEXT.                      | `string`            | NO       | -       |
| `next`          | NEXT BUTTON TEXT.                          | `string`            | NO       | -       |
| `style`         | CSS STYLES FOR PAGINATION ITEMS.           | `string`            | NO       | -       |
| `class`         | CSS CLASSES FOR PAGINATION ITEMS.          | `string`            | NO       | -       |
| `styleDisabled` | CSS STYLES FOR DISABLED PAGINATION ITEMS.  | `string`            | NO       | -       |
| `classDisabled` | CSS CLASSES FOR DISABLED PAGINATION ITEMS. | `string`            | NO       | -       |
| `styleActive`   | CSS STYLES FOR ACTIVE PAGINATION ITEMS.    | `string`            | NO       | -       |
| `classActive`   | CSS CLASSES FOR ACTIVE PAGINATION ITEMS.   | `string`            | NO       | -       |

- PROPS OF `RowsPerPage`:

| PROP    | DESCRIPTION                          | TYPE                | REQUIRED | DEFAULT |
| ------- | ------------------------------------ | ------------------- | -------- | ------- |
| `data`  | data state created with `createData` | `typeData<Generic>` | YES      | -       |
| `class` | CSS CLASSES OF THE SELECT INPUT.     | `string`            | NO       | -       |
| `style` | CSS STYLES OF THE SELECT INPUT.      | `string`            | NO       | -       |

- PROPS OF `Sort`:

| PROP           | DESCRIPTION                                                                                                                                                          | TYPE                                 | REQUIRED | DEFAULT                                     |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- | ------------------------------------------- |
| `data`         | data state created with `createData`                                                                                                                                 | `typeData<Generic>`                  | YES      | -                                           |
| `key`          | COLUMN TO SORT.                                                                                                                                                      | `keyof Generic`                      | YES      | -                                           |
| `iconSize`     | SIZE OF THE SORT ICON                                                                                                                                                | `number`                             | NO       | 10                                          |
| `sortFunction` | A COMPARE FUNCTION THAT SPECIFIES THE SORT ORDER. ([MORE DETAILS HERE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)) | `(a: Generic, b: Generic) => number` | NO       | A STANDARD FUNCTION TO SORT ALPHABETICALLY. |
