import { CompileJsx, CompileSectionJsx } from '../../../components/compile-jsx';
import { Element } from '../../../types/Element';

type TCompileElement = { element: Element };

const CompileElement: React.FC<TCompileElement> = ({ element }) => {
	if (element.elementType === 'Section') {
		return (
			<CompileSectionJsx element={element}>
				{element.children.map((el, i) => (
					<CompileElement
						element={el}
						key={i}
					/>
				))}
			</CompileSectionJsx>
		);
	}
	return <CompileJsx element={element} />;
};

export default CompileElement;
