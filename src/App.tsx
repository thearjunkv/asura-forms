import AlchemyLab from './components/alchemy-lab';
import { AlchemyLabProvider } from './alchemy-lab';
import { ConfigProvider } from 'antd';

const theme = {
	token: {
		colorPrimary: '#3572EF',
		colorPrimaryHover: '#3572EF',
		colorPrimaryActive: '#3572EF',
		colorBorder: 'hsl(0, 0%, 88%)',
		colorBorderHover: 'hsl(0, 0%, 88%)',
		borderRadius: 4,
		colorText: 'hsl(0, 0%, 10%)',
		colorTextPlaceholder: 'hsl(0, 0%, 63%)' // update global style as well
	}
};

function App() {
	return (
		<div
			style={{
				padding: '1em'
			}}
		>
			<AlchemyLabProvider>
				<ConfigProvider theme={theme}>
					<AlchemyLab
						paletteGridView={true}
						height={680}
						onSave={data => {
							console.log(data);
							localStorage.setItem('data', JSON.stringify(data));
						}}
					/>
				</ConfigProvider>
			</AlchemyLabProvider>
		</div>
	);
}

export default App;
