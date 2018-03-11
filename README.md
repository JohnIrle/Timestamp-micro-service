# Timestamp Micro-service
An Express app that returns a JSON object with unix and natural language dates, when given a url parameter of either unix or natural language.

## Example usage:
[https://zenith-twine.glitch.me/December%2015,%202015](https://zenith-twine.glitch.me/December%2015,%202015)
[https://zenith-twine.glitch.me/1450137600](https://zenith-twine.glitch.me/1450137600)
## Example output:
```json
{ "unix": 1450137600, "natural": "December 15, 2015" }
```
