import {
	CalendarIcon,
	CheckboxGroupIcon,
	CheckboxIcon,
	CursorClickIcon,
	HomeIcon,
	MailIcon,
	NumberIcon,
	ParagraphIcon,
	PersonIcon,
	PhoneIcon,
	RadioIcon,
	SectionIcon,
	SelectIcon,
	SeparatorIcon,
	SpacerIcon,
	TextBoxIcon,
	TextFieldIcon,
	TimePickerIcon,
	TitleIcon
} from '../../../assets/Icons';
import { Element } from '../../../types/Element';

type TPaletteElementDataList = { name: Element['elementType']; text: string; icon: JSX.Element }[];

export const layoutElementDataList: TPaletteElementDataList = [
	{
		name: 'Title',
		text: 'Title',
		icon: TitleIcon
	},
	{
		name: 'Paragraph',
		text: 'Paragraph',
		icon: ParagraphIcon
	},
	{
		name: 'Separator',
		text: 'Separator',
		icon: SeparatorIcon
	},
	{
		name: 'Spacer',
		text: 'Spacer',
		icon: SpacerIcon
	},
	{
		name: 'Section',
		text: 'Section',
		icon: SectionIcon
	}
];

export const formElementDataList: TPaletteElementDataList = [
	{
		name: 'Name',
		text: 'Name',
		icon: PersonIcon
	},
	{
		name: 'Address',
		text: 'Address',
		icon: HomeIcon
	},
	{
		name: 'Email',
		text: 'Email',
		icon: MailIcon
	},
	{
		name: 'PhoneNumber',
		text: 'Phone No.',
		icon: PhoneIcon
	},
	{
		name: 'Text',
		text: 'Text',
		icon: TextFieldIcon
	},
	{
		name: 'TextArea',
		text: 'TextArea',
		icon: TextBoxIcon
	},
	{
		name: 'Number',
		text: 'Number',
		icon: NumberIcon
	},
	{
		name: 'Select',
		text: 'Select',
		icon: SelectIcon
	},
	{
		name: 'Checkbox',
		text: 'Checkbox',
		icon: CheckboxIcon
	},
	{
		name: 'CheckboxGroup',
		text: 'Checkbox Group',
		icon: CheckboxGroupIcon
	},
	{
		name: 'Radio',
		text: 'Radio',
		icon: RadioIcon
	},
	{
		name: 'Date',
		text: 'Date',
		icon: CalendarIcon
	},
	{
		name: 'Time',
		text: 'Time',
		icon: TimePickerIcon
	},
	{
		name: 'Button',
		text: 'Button',
		icon: CursorClickIcon
	}
];

export const paletteElementDataList = [...layoutElementDataList, ...formElementDataList];
