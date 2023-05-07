# Doggo App

Welcome to the Doggo App! This application helps you find the perfect furry friend to adopt by searching through a list of dogs based on various filters like breed, age, and location.

This document will guide you through the process of setting up and running the Doggo App on your local machine.

## Table of Contents

- [Prerequisites]
- [Installation]
- [Setting up Environment Variables]
- [Running the App]
- [Running Tests]
- [API Documentation]
- [Contributing]
- [License]

## Prerequisites

Before you can run the Doggo App locally, you'll need the following software installed on your machine:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/) (v14.x.x or later)
- [npm](https://www.npmjs.com/get-npm) (v7.x.x or later)

## Installation

Follow these steps to set up the Doggo App on your local machine:

1. **Clone the repository**: Open a terminal and run the following command to clone the Doggo App repository to your local machine:
    
    ```
    git clone <https://github.com/cosovanalex/doggo-app.git>
    
    ```
    
2. **Install dependencies**: Navigate to the project directory (where `package.json` is located) and run the following command to install the required dependencies:
    
    ```
    npm install
    
    ```
    

## Setting up Environment Variables

If the project uses environment variables (e.g., API keys or other sensitive information), create a `.env` file in the root directory of the project and add the necessary variables. Since the API documentation provided does not mention any API keys, you may not need this step. However, if you have any other configurations or environment variables, you can include them in the `.env` file.

## Running the App

To start the development server, run the following command in the terminal:

```
npm start

```

This command will start the development server on `http://localhost:3000` by default. You can access the app in your browser by navigating to this address.

## Running Tests

If you want to run tests for the project, execute the following command:

```
npm test

```

## API Documentation

The Doggo App utilizes a backend API to fetch dog and location information. You can find the API documentation [here](https://frontend-take-home.fetch.com/).
## Contributing

Contributions are always welcome! If you'd like to contribute to the Doggo App, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeatureName`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeatureName`)
5. Open a Pull Request

For detailed information on the project structure and coding guidelines, please refer to the `CONTRIBUTING.md` file in the repository.
