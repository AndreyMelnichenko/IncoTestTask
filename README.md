# Project for API tests

Includes:
- GotJS as HTTP client
- TypeScript and ts-node for better working with request/response models and structures
- Mocha 8 as a test runner


## Man 
To run test do here ->
```
https://github.com/AndreyMelnichenko/IncoTestTask/actions/workflows/node.js.yml
```
### To run local
1. clone repo
2. type npm test

### To run test into Docker
1. docker build -t incotests:latest -f Dockerfile .
2. docker run --name test --rm -i incotests:latest bash -c "npm test"