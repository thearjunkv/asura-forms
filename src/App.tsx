import Builder from './Builder';
import GlobalStyle from './styles/GlobalStyles';

function App() {
    return (
        <>
            <GlobalStyle />
            <Builder
                onSave={(v) => {
                    console.log(v);
                    localStorage.setItem('data', JSON.stringify(v));
                }}
            />
        </>
    );
}

export default App;
