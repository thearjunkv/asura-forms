import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    .form-alcmst__alchemy-lab,
    .form-alcmst__manifest {
        --white: hsl(0, 0%, 100%);
        --black: hsl(0, 0%, 0%);

        --red-color: #e30000;
        --red-color-light: #e32d2d;

        --grey-50: hsl(0, 0%, 97.5%);
        --grey-100: hsl(0, 0%, 95%);
        --grey-200: hsl(0, 0%, 88%);
        --grey-300: hsl(0, 0%, 82%);
        --grey-400: hsl(0, 0%, 75%);
        --grey-500: hsl(0, 0%, 63%);
        --grey-600: hsl(0, 0%, 50%);
        --grey-700: hsl(0, 0%, 38%);
        --grey-800: hsl(0, 0%, 25%);
        --grey-900: hsl(0, 0%, 10%);
        --grey-1000: hsl(0, 0%, 4%);

        background-color: var(--white);
        color: var(--grey-900);
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        font-size: 1rem;
        font-weight: 400;
        font-synthesis: none;

        text-rendering: optimizeSpeed;
        line-height: 1.5;
        letter-spacing: .007em;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }

        html:focus-within {
            scroll-behavior: smooth;
        }

        input,
        button,
        textarea,
        select {
            font: inherit;
            letter-spacing: inherit;
        }

        ::-webkit-input-placeholder { // update config provider as well
            color: var(--grey-500);
        }

        :-ms-input-placeholder {
            color: var(--grey-500);
        }

        ::-moz-placeholder {
            color: var(--grey-500);
        }

        ::placeholder {
            color: var(--grey-500);
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

        /* For WebKit browsers (Chrome, Safari, Edge) */
        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-track {
            background-color: var(--grey-100);
        }

        ::-webkit-scrollbar-thumb {
            background-color: var(--grey-300);
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: var(--grey-300);
        }

        * {
            scrollbar-width: thin;
            scrollbar-color: var(--grey-300) var(--grey-100);
        }

        // common styles

        & button {
            padding: .25em .85em;
            font-size: .85rem;
            background-color: var(--grey-900);
            color: var(--white);
            border: 1px solid var(--grey-900);
            border-radius: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            & svg {
                margin-right: .4em;
                width: 1.2em;
                display: flex;
            }

            & svg path {
                 fill: var(--white);
            }
        }
    }
`;
