<!--
SPDX-FileCopyrightText: 2024 Shota FUJI <pockawoooh@gmail.com>

SPDX-License-Identifier: Apache-2.0
-->

# ptimer (CLI tool)

This CLI application generates and extracts files from a `.ptimer` file.

## Usage

For more information, invoke the application with `--help` option.

```
$ go run . create ./foo.ptimer.json --out ./foo.ptimer
$ cat foo.ptimer.json | go run . create > foo.ptimer

$ go run . extract ./foo.ptimer --outdir ./foo-contents
$ cat foo.ptimer | go run . extract --outdir ./foo-contents
```