# asura-forms

A React form builder with a drag-and-drop interface. The library provides a `FormLab` component for building forms and a `Manifest` component for rendering and validating them dynamically.

## Features

-   Drag-and-drop interface for building forms
-   Support for various form elements like inputs, checkboxes, radio buttons, etc.
-   Dynamic form rendering with validation
-   Easy integration with your existing React project

## Installation

```bash
npm install asura-forms
```

## Usage

#### FormLab component

```javascript
import { FormLab } from 'asura-forms';

function App() {
    // Initial form data (optional), used to edit an existing form
    const formData = [];
  
    // Callback function to handle form saving
    const onSave = formData => {
	    console.log('Form saved:', formData);
	    // Handle or store form data
    };

    return (
        <FormLab
            title='Form name'
            paletteGridView={true} // Displays the sidebar elements in grid style
            height={700} 
            formData={formData}
            onSave={onSave}
        />
    );
}
```

#### Manifest component

```javascript
import { Manifest } from 'asura-forms';

function App() {
    // Form data generated from the FormLab component, passed as a prop to Manifest component.
    const formData = [];

    // Callback function to handle form submission.
    const onSubmit = formValues => {
        console.log(formValues);
    };

    return (
        // The Rendered form takes up full width, so it’s wrapped in a container to control layout and styling.
        <div
            style={{
                margin: '40px auto',
                padding: '.5em 1em',
                width: '400px',
                border: '1px solid lightgrey',
                borderRadius: '5px',
            }}
        >
            <Manifest
                formInstance={formInstance} // ant form instance (optional)
                formData={formData}
                onSubmit={onSubmit}
            />
        </div>
    );
}
```
