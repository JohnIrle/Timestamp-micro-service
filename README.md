<!--
SPDX-FileCopyrightText: 2019 John Irle

SPDX-License-Identifier: MIT
-->

# Timestamp Micro-service
An Express app that returns a JSON object with unix and natural language dates when given a url parameter of either unix or natural language.

## Live Example usage:
* [https://zenith-twine.glitch.me/December%2015,%202015](https://zenith-twine.glitch.me/December%2015,%202015)
* [https://zenith-twine.glitch.me/1450137600](https://zenith-twine.glitch.me/1450137600)
## Example output:
```json
{ "unix": 1450137600, "natural": "December 15, 2015" }
```

## Getting Started

```node
npm install
```

```node
npm start
```

Once the server has started, navigate to localhost:5000.

## Built With

* [Express](https://github.com/expressjs/express) - Handle server requests
* [Moment](https://github.com/moment/moment) - Parsing Dates

## Authors

* **John Irle** - [JohnIrle](https://github.com/JohnIrle)
