# Testing the Back End

Guided project for the **Node Testing 2** module.

## Prerequisites

- [TablePlus](https://tableplus.com) installed.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm install` to download dependencies.
- [ ] type `npm run start:watch` to start the API.

Please follow along as the instructor adds automated tests to the API.

# CHANGE JEST ENVIRONMENT TO NODE ( INSTEAD OF DOM ) FOR INTEGRATION TESTING
"jest": {
		"testEnvironment": "node"
	}
// For Integration tests - create folder "__tests__"
// For Unit tests - create .test or .spec model in same directory as file

// Libraries installed:
-- npm i supertest --save-dev ( package makes http requests / works with Express )