import Builder from './Builder';
import GlobalStyle from './styles/GlobalStyles';

function App() {
	return (
		<div className='form-alcmst'>
			<GlobalStyle />
			<Builder
				onSave={v => {
					console.log(v);
					localStorage.setItem('data', JSON.stringify(v));
				}}
			/>
		</div>
	);
}

export default App;
