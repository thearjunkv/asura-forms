import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        --white: hsl(0, 0%, 100%);
        --black: hsl(0, 0%, 0%);

        --grey-50: hsl(0, 0%, 98%);
        --grey-100: hsl(0, 0%, 94%);
        --grey-200: hsl(0, 0%, 88%);
        --grey-300: hsl(0, 0%, 82%);
        --grey-400: hsl(0, 0%, 75%);
        --grey-500: hsl(0, 0%, 63%);
        --grey-600: hsl(0, 0%, 50%);
        --grey-700: hsl(0, 0%, 38%);
        --grey-800: hsl(0, 0%, 25%);
        --grey-900: hsl(0, 0%, 13%);
        --grey-1000: hsl(0, 0%, 4%);
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    ul[role='list'],
    ol[role='list'] {
        list-style: none;
    }

    html:focus-within {
        scroll-behavior: smooth;
    }

    body {
        text-rendering: optimizeSpeed;
        line-height: 1.5;
        letter-spacing: 0.5px;
        font-size: 1rem;
        font-weight: 400;
        background-color: var(--white);

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    a {
        text-decoration: none;
    }

    img,
    picture {
        max-width: 100%;
        display: block;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
        letter-spacing: inherit;
    }

    ::-webkit-input-placeholder {
        color: var(--grey-600);
    }

    :-ms-input-placeholder {
        color: var(--grey-600);
    }

    ::-moz-placeholder {
        color: var(--grey-600);
    }

    ::placeholder {
        color: var(--grey-600);
    }

    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
`;

export default GlobalStyle;
