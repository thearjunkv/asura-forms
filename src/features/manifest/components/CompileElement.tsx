import { CompileJsx, CompileSectionJsx } from '../../../components/compile-jsx';
import { Element } from '../../../types/Element';

type TCompileElement = { element: Element; nestedAttrList: string[] };

const CompileElement: React.FC<TCompileElement> = ({ element, nestedAttrList }) => {
	if (element.elementType === 'Section') {
		return (
			<CompileSectionJsx element={element}>
				{element.children.map((el, i) => (
					<CompileElement
						element={el}
						key={i}
						nestedAttrList={[...nestedAttrList, element.name]}
					/>
				))}
			</CompileSectionJsx>
		);
	}
	return (
		<CompileJsx
			element={element}
			nestedAttrList={nestedAttrList}
		/>
	);
};

export default CompileElement;
