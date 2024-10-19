import { TPaletteElement } from './types';
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
} from '../../assets/Icons';

export const layoutElements: TPaletteElement[] = [
	{
		element: 'Title',
		text: 'Title',
		icon: TitleIcon
	},
	{
		element: 'Paragraph',
		text: 'Paragraph',
		icon: ParagraphIcon
	},
	{
		element: 'Separator',
		text: 'Separator',
		icon: SeparatorIcon
	},
	{
		element: 'Spacer',
		text: 'Spacer',
		icon: SpacerIcon
	},
	{
		element: 'Section',
		text: 'Section',
		icon: SectionIcon
	}
];

export const formElements: TPaletteElement[] = [
	{
		element: 'Name',
		text: 'Name',
		icon: PersonIcon
	},
	{
		element: 'Address',
		text: 'Address',
		icon: HomeIcon
	},
	{
		element: 'Email',
		text: 'Email',
		icon: MailIcon
	},
	{
		element: 'PhoneNumber',
		text: 'Phone No.',
		icon: PhoneIcon
	},
	{
		element: 'Text',
		text: 'Text',
		icon: TextFieldIcon
	},
	{
		element: 'TextArea',
		text: 'TextArea',
		icon: TextBoxIcon
	},
	{
		element: 'Number',
		text: 'Number',
		icon: NumberIcon
	},
	{
		element: 'Dropdown',
		text: 'Dropdown',
		icon: SelectIcon
	},
	{
		element: 'Checkbox',
		text: 'Checkbox',
		icon: CheckboxIcon
	},
	{
		element: 'CheckboxGroup',
		text: 'Checkbox Group',
		icon: CheckboxGroupIcon
	},
	{
		element: 'Radio',
		text: 'Radio',
		icon: RadioIcon
	},
	{
		element: 'Date',
		text: 'Date',
		icon: CalendarIcon
	},
	{
		element: 'Time',
		text: 'Time',
		icon: TimePickerIcon
	},
	{
		element: 'Button',
		text: 'Button',
		icon: CursorClickIcon
	}
];

export const elements = [...layoutElements, ...formElements];
