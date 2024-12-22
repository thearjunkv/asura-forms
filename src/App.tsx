import { AlchemyLab } from './features/alchemy-lab';

function App() {
	return (
		<div
			style={{
				padding: '1em'
			}}
		>
			<AlchemyLab
				// paletteGridView={true}
				// height={380}
				onSave={data => {
					console.log(data);
					localStorage.setItem('data', JSON.stringify(data));
				}}
			/>
		</div>
	);
}

export default App;
