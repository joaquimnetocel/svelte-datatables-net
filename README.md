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

## DEMOS

- [REPL: BOOTSTRAP 5 EXAMPLE](https://svelte-5-preview.vercel.app/#H4sIAAAAAAAACq1Y_2_aOBT_V7zsdGwSIQVKt-UCOgptx8SgK2ynadkPbvII3hw7sp22DPG_n5xAvtK1J50qtbbf5_Pey_tmb1tjRShIw_62NRgOwbCNYRQZTUNtIr2Rd0AVGE1D8lh4-sSRniCRQhSzoO8aSrrGwGWuImHEhUJbvXbVGCus8C2FZrpfxcxThLORAKygKr3GAWFYyycKQrk_veH38hrENQ4OuAVg4a0PGy5UstyhleAhaqS-mv5BuTQZqMZfLtMgjzOpEBYCbz5LEBL10bdUzxYR30bvmkh_v40aY2C_gDaaCAdgo85pE3lEbWzUmMG9h6Wi0EC7ZpHb7mTkOQ3wgdrtZdQplmgkYg9kjdvNuOdYiE1m903Rrg5tjXmSMYdMrTnLuKc5d8olOseM1-zmLn_EudXTXok5ZAHQIz5n3A98zTKP20WP0VcuflaJ3aLRnxmxmxHPuVScVWm9PESC4Nxgp2RwLihgVnf2NGNPiwE-bZc_lap6kHLqSBCZ5bVTyusXCHCNeZYxFyrGQmVWz0pWr_ARq2_yaroHdqQQj0fpbUa7xnFWv93u086284ReCvAzi70nLLbzxNwQb41FTn33FPWskNOY5T3Tftzd7_tWpqCQVMUxgvroj-Tk1W-nzav9cHJVhIU-tQsDoVmQpXNGU0acxiGTNvrW0O42mqih3Wt8L8ILg8pGjV6jpIoLda4_J6HVjSyUICywUaPGmgsfhI0aWHrAfMKCA2L3Olm8_stljpVOYz2BmZMOQHsN2E9GskMJ-5ly1gJWfddYKxVJ27I8n7V-SB8ouRMtBspiUWjdcq6kEjj6u9c6aXUsn0hleVLmglZIWMuT0jVSrQJo3zWk2lCQawB1OCdMQSCI2mjpGnffnpoXXxbLT7OuhX9F4qo9ZGH30ziIPkwn4bsZ5idff7V_Ke_T8v5SRn53Mz7rfeHrdRTHo3k4HS5-jA6qPcGl5IIEhPVdAzPONiGP9x5ZgyQk5TAwJ6-TW8J8OxI8yo7623Ip7dLI-eQOeRRL2XcNjzOFCQNhynB_2VUQ4YPZzSSucl6YJlpcDG9G79Gf6OZi8Xm6XKDrixt0Pby6QKaZI4taBL9HmJKAmUTfgqYHTIFA4a3ZKSivOUfNdgfpP6FvniEFD0qvpMJCpbtcT1v_Cn3zpKSvotHXiBWFh5Izob_XU6G6ypERZnkowGy7xiAtbtuxtLBKSIVI5-GaYg_WnPog-q6x3ESA1iCg1Wq5RqZzxUVo6iwITlFxkyQEWeVvsXxyV4xWdf-c6AHzi7GrhqvQ8IWwEUYJg9RBCRQ8VVybMkT3Jo4Vr0eQR3paoTtMY-i7Rs81Bj3HSk-fwLZ1Ltsnz0R3NLrzXHRXo7vPRWNKXWMwnE6P4h2rELSyJCmRapfUKqecx8ruhWkWu0r33_XwajIbLifz2aMNty_zH7FUZLVJigpY1i_V47Qsyp3I8B3CgmCT4ttkFiYlwfAdCZLnLIIHHEYUqgUU08yJKHv71uui8i4uS12lG2iJ9SucksN8zH8KBiBp4jpEK5gwBmJUxCa3xlHsmEg9I_0D3N_vj6OHniJ3cMDiZFdFVns3pqWUM_zMlG9fklXlUdBK7vZ01oDfosACtUb9fh-d7B4ZB6VxqUzdh45UgrNgMJujm4vR_Ga8QJfzz7Nxy7H2krJfWxuohKIBXYzL4fm0NPhd5aQ3UmY62SW_TakEicA_7MJq9ajshi8eikE1CY5a1870-NX_Tvv9JZiI07dPf9sgfmM3mIwdSzPrVqwjZv4v08mjazeYDT9e_FfzyRB5RDaaLL8eETpWJYoaU421o265v6kwty8Be-ujFai3CEsk-P2u7ks9a_rUH2wFv28Rf-dYqprqEkQH6EkQDp7G6PfpcVAtKq7aWvpzd5VQVeLiWEkUBuVeKDatRVaZDqd8TS_ez_-ZzK5QpTxaLA5vQVwSIfX_D-zQcv4IZIr3iPllFVF0--iU2KHJ8uLj4tjkydeHlWNligcuM5pGyH2yIuAbthIx7L7v_gUNcAG6ZREAAA==)
- [REPL: SKELETON EXAMPLE](https://svelte-5-preview.vercel.app/#H4sIAAAAAAAACqVWbW_iOBD-K1ZupbQSS8pb9zYNSJS-LCdaUGHvtGr6wSTTYNXYke0UcSj_feUEnARo0em-2TPzzDNvnmRjvRIK0nKfNxbDS7Bcqx_HVs1S61hf5DtQBVbNkjwRgZZ4MhAkVj2f-YosYy4U2uizr26wwgrPKdTy-2vCAkU4GwjACva1ExwRhrV-qGApt9InvpITEBMc7eymgEWw2F24UNkxRa-CL5Gdx_c13DmXXxko-8pn2ijgTCqEhcDrnxKERF30nPvZIBK66HsN6ZxdZN8A-xeoXUM4Ahc12zUUELV2kf0IqwBLRcFGaa2MbTQNeEwjvIO2OgY6whINRBKAPMC2DPYaC7E2vN_KvLq0B8gLg-wzteDMYNsFdsQlusaMH_AWIT_ggrXdqSD7LAJ6JGaD_YsvmIm4UY4Y_eLibR_YKpO-GWDLAK-5VJztwzpFiQTBBWGzQjgWFDA7DLZt0KNygduNaqpUHRapgA4EkaavzUpf_4YIHyAvDXKqEiyUYb2ssN7jI6zfimlaATsyiMer9KeBTXBi5rfVOh1so2jonYDQMHZOMDaKxjyRYIFFAf1-CnpZ6mnCijfT-Djcl-1TpqCQVOU1grroSyY5-3TbnG2Xk69iLLTULS2EWkmX7xkNGXCaLJl00bOtw7VryNbh2S9l89KicpHdsSuuuFDXOp0Mtq8ZixCEi2wsA2AhYZF9GMZUCcIiF9k7XXqeHc6vfOY5xQZmXlGPOWGhGwseG1F3Uy1Zmi1tL-7lPj0ZY9bLCV3PyW5bTS5E2tuE4gAWnIYgur41W8eAFiCgXq_7FnJyj07msuK7VJ_eLj2Px7pD6B3TBLq-1fGtXsdzcumHVo0L3-o1Lk7aNbVd87RdS9u1TtthSn2r1x-N9iw95zC3vJRPt9Ofo9kUTW6f0KR_f1uq6bZEpQLtff_MCAgez3DU9a15ohRnvlXW3BCpGxlO1ZrqGOc4eIsET1joohCLt0jA-qoK6QeKvMMxwJwmcBVwyoW7WhAFBnjQ1Wx6doGrBeCwqJoS5pwpSzc9SPr_4POhzNT5m-tubBLaaW94g84CSoK3bNTOPUe7KdM4FZ7_z5q987T32H-4_c_MWaMPpIPh7FdF7DmmUlpe1NBTcx6ujd3mD8DBYm_Z1bOdpa8ISyT4Ki2ziWr2KuxtBF_VSZh6jgqPK3XGn6hx9JlW77V9dSk_X20cnURq0jUZes5uljzHZKdv-buY_hj_M3y8R3vdqrNkOQdxR4TUf4gpmo0_MBnhrcX4bt8iDyavZL7fIKxTYJFapGg4u32Y6qB0HFbNWvKQvBIILVeJBNKX9Dfvxeo2KQsAAA==)
- [REPL: FETCH EXAMPLE](https://svelte-5-preview.vercel.app/#H4sIAAAAAAAACqVWbW_iOBD-KyPvSQGJTdpd7ZcQkFhge-h6BQGn1arpBxMbkmtiR_akCEX57yfnBQJtqVb3zTPPMy9-PBnIyTaKuSbuY04ETThxyShNSY_gITWGfuExctIjWmYqMB5PBypKcegLH32MklQqhLyyJhQp0k3Me5W9zUSAkRRjxSnyS3RBd5GgBp8hT3TtXcq9XnC1oLuGt-JUBWFjSIXlsYCtkglYVYefWZNcfxYcrX7JFj7GHEFjuzoM4I_S0-kalvAxkEIjNM0uOWWGDAOg-iCCIwCdbnPRKkJxnUqhecPe0whhyzEIO1aImGrXcViWJId_tRR2IBMnVZJlAWqr228nMvhZknZm26Cdbh8cB9a_FtPVeDlbrF2oQqlS9FDHNmnspgxQDeYhjfPx6azk1bia-Uq3d96zU6viY0qV8bqn9L0WVD2kiRjLOEuEduHRipjVA2ujqCgPAUW-k-pgzoxXsxZJYT21E7VmxAXr9sbq-QIAzsqsUEVi54JlnbUgFX4_uFCWNX4AgNo_V4wrFyyqAy5YJHZWFVhUj1X0feE5p-kX-af6xS8Gp9MtDH85HU1mD3cwGa1Htm37Incx5KLwhXfSdBMJ5qZKpkfXID-XvSi_NC-tPzhPp1QMqyu6nlNaNVI5wWRbxDTgoYwZVwOfrA8ph5Arbtog4FQZnfQic0vVYSOZJ0v54YXGGR_45JtPht88p_K-y7q98cnw9uZD3hfD-_Ix76vhff2YR-PYJ8PR_f0F03Ne360Scjld_XO_XsFiuoTF6G7aUvS1QBcL6zhWSqZruhv4ZJMhSuGTNjKJtHlGtsJDbHrc0OB5p2QmmAuMqued4of-ecgowOiFvxWwiTPeD2QslbsPI-THwIs3LSenaRtDTtlJM1THcwm2LDNEZp1fH8gSrr7gQW4-pGI4m0AniKPguRyzrueYNO0yzlmd_1-12hfF8Pty9PD7tcej9fRuvvz1BjSp9-ts_vAGulrPx3-d-T3nqKfxn5T2cCPZ4cjLP3EahBc_RfZpC1MNSu6Ldjl1rhGyYa7k3o5Y4TnI3gZLXa7gzXq9Qmlt3SssjTJ4vsRbYviYO-bGxVGboxye04yn5xylMFY1vKs_5z_N3rwYAFtkyYarH5HS5j9CAev5O5R7WjPmPy4ZVTOV7NW65MyOudhhWMBsPf17ZZoyfeROudwLX5AeSSSLthFnxEWV8eKp-A-es-sKNwkAAA==)

## EXAMPLES AND DEVELOPING

To run the examples from `/src/routes`:

```bash
git clone https://github.com/joaquimnetocel/svelte-datatables-net.git
cd svelte-datatables-net
npm install
npm run dev
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
| `parSortFunction`      | A COMPARE FUNCTION THAT SPECIFIES THE INITIAL SORT ORDER. ([MORE DETAILS HERE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)) | `(a: Generic, b: Generic) => number` | NO       | A STANDARD FUNCTION TO SORT ALPHABETICALLY. |
| `parActivePage`        | ACTIVE PAGE FOR PAGINATION.                                                                                                                                                  | number                               | NO       | `1`                                         |

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
