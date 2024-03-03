# Nuxt Movies App

This is a Nuxt.js application for browsing and searching movies.

## Description
Nuxt Movies App is a web application built with Nuxt.js, a progressive framework for creating universal applications in Vue.js. The app allows users to browse and search for movies using data from a movie API. It utilizes Vue.js for the frontend, Nuxt.js for server-side rendering and routing, and other dependencies such as Vue Router and VueUse.

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Run the following command to install the dependencies:

   ```shell
   npm install

## Configuration
The application uses environment variables for configuration. Create a `.env` file in the root directory of the project and define your environment variables there. Refer to the `.env.example` file for the list of required variables.


## Additional Packages

This application uses the following additional packages:

- Nuxt WindiCSS: A utility-first CSS framework for rapid UI development.
- Vue Router: The official router for Vue.js.

## Form Builder Design Pattern

### Usage Example
To incorporate the Form Builder Design Pattern into your Nuxt Movies App, follow these steps:

- Create a Form Builder Class:
- Design a class (e.g., InputFieldBuilder) that allows dynamic construction of form fields
- Implement methods for setting labels, names, types, and initial values.

- Usage Example:
- Import the InputFieldBuilder class into your components.

```
import InputFieldBuilder  from "~/builder/InputFieldBuilder";
```

- Create an instance of the builder.

```
const inputField = ref(new InputFieldBuilder());
```

- Chain methods to configure your form fields (e.g., username, email, password).

```
inputField
  .setLabel('Username')
  .setName('username')
  .setType('input')
  .setValue('')
  .build();

inputField
  .setLabel('Email')
  .setName('email')
  .setType('input')
  .setValue('')
  .build();
```
- Retrieve the built fields as an array.

```
const fields = inputField.fields;
```

