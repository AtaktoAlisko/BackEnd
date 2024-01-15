# BMI Calculator Web App

This BMI Calculator is a simple web application that helps users calculate their Body Mass Index (BMI) and track their BMI history.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)

## Features

- **BMI Calculation:** Enter weight and height to calculate BMI.
- **View History:** Check a history of BMI calculations with timestamps, weights, heights, and calculated BMIs.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/illus1um/BMI_Calculator.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd BMI_Calculator
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

1. **Start the server:**

    ```bash
    npm start
    ```

2. **Open your browser and visit [http://localhost:3000](http://localhost:3000).**

3. **Enter weight and height values, and click "Calculate BMI" to see the result.**

4. **Click "View History" to see a history of BMI calculations.**

## Dependencies

This project uses the following dependencies:

- **Express:** A web application framework for Node.js used to handle routing.
- **Body-parser:** Middleware for parsing incoming request bodies.
- **Nodemon:** A tool used for automatically restarting the server when changes are made in the code during development.

To install these dependencies, navigate to the project directory in your terminal and run:

```bash
npm install express body-parser nodemon
```
