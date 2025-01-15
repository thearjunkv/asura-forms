# Asura Forms

A React form builder with a drag-and-drop interface. The library provides a FormLab component for building customizable forms and a Manifest component for rendering, validation, and handling form submission.

### Peer Dependencies
This package requires the following peer dependencies:

- `react` (version >=16.8)
- `react-dom` (version >=16.8)
- `styled-components` (version ^6.0.0)
- `antd` (version ^5.0.0)
- `@dnd-kit/core` (version ^6.0.0)

### Installation

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
	    console.log(formData);
    };

    return (
        <FormLab
            title='Form name'
            paletteGridView={true} // Displays the sidebar elements in grid style
            height={700}
            themeOverride={} // Antd theme config
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
                themeOverride={} // Antd theme config
                formData={formData}
                onSubmit={onSubmit}
            />
        </div>
    );
}
```
