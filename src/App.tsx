import AlchemyLab from './components/alchemy-lab';
import { AlchemyLabProvider } from './alchemy-lab';

function App() {
	return (
		<div
			style={{
				padding: '1em'
				// backgroundColor: 'grey'
			}}
		>
			<AlchemyLabProvider>
				<AlchemyLab
					// paletteGridView={true}
					height={600}
					onSave={data => {
						console.log(data);
						localStorage.setItem('data', JSON.stringify(data));
					}}
				/>
			</AlchemyLabProvider>
		</div>
	);
}

export default App;
