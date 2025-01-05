import { FormLab } from './features/form-lab';
//import { Manifest } from './features/manifest';

function App() {
	return (
		<div
			style={{
				padding: '1em'
			}}
		>
			<FormLab
				// paletteGridView={true}
				// height={380}
				// title=''
				// formData={JSON.parse(localStorage.getItem('formData') || '')}
				onSave={formData => {
					console.log(formData);
					localStorage.setItem('formData', JSON.stringify(formData));
				}}
			/>
			{/* <Manifest
				formData={JSON.parse(localStorage.getItem('formData') || '')}
				onSubmit={values => console.log(values)}
			/> */}
		</div>
	);
}

export default App;
