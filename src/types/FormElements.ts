export type TTextAttrs = {
    type: string;
    id: string;
    name: string;
    placeholder: string;
    readOnly: boolean;
    disabled: boolean;
    minLength: number;
    maxLength: number;
};

export type TNumberAttrs = {
    type: string;
    id: string;
    name: string;
    placeholder: string;
    readOnly: boolean;
    disabled: boolean;
    min: number;
    max: number;
};

export type TTextareaAttrs = {
    id: string;
    name: string;
    placeholder: string;
    readOnly: boolean;
    disabled: boolean;
    minLength: number;
    maxLength: number;
    rows: number;
    cols: number;
};

export type TDropdownAttrs = {
    id: string;
    name: string;
    disabled: boolean;
};

export type TCheckboxAttrs = {
    type: string;
    name: string;
};

export type TRadioAttrs = {
    type: string;
    name: string;
    disabled: boolean;
};

export type TDateAttrs = {
    type: string;
    id: string;
    name: string;
    readOnly: boolean;
    disabled: boolean;
};

export type TTimeAttrs = {
    type: string;
    id: string;
    name: string;
    readOnly: boolean;
    disabled: boolean;
};

export type TButtonAttrs = {
    type: 'button' | 'reset' | 'submit';
    id: string;
    disabled: boolean;
    placeholder: string;
};

export type TName = {
    elementType: 'Name';
    attributes: TTextAttrs;

    label: string;
    labelPosition: 'top' | 'left';

    labelStyles: string;
    elementStyles: string;

    uid: string;
    required: boolean;
};

export type TEmail = {
    elementType: 'Email';
    attributes: TTextAttrs;

    label: string;
    labelPosition: 'top' | 'left';

    labelStyles: string;
    elementStyles: string;

    uid: string;
    required: boolean;
};

export type TPhoneNumber = {
    elementType: 'Phone number';
    attributes: Omit<TNumberAttrs, 'min' | 'max'>;

    label: string;
    labelPosition: 'top' | 'left';

    labelStyles: string;
    elementStyles: string;

    uid: string;
    required: boolean;
    requireCountryCode: boolean;
};

export type TText = {
    elementType: 'Text';
    attributes: TTextAttrs;

    label: string;
    labelPosition: 'top' | 'left';

    labelStyles: string;
    elementStyles: string;

    uid: string;
    required: boolean;
};

export type TNumber = {
    elementType: 'Number';
    attributes: TNumberAttrs;

    label: string;
    labelPosition: 'top' | 'left';

    labelStyles: string;
    elementStyles: string;

    uid: string;
    required: boolean;
};

export type TTextarea = {
    elementType: 'Textarea';
    attributes: TTextareaAttrs;

    label: string;
    labelPosition: 'top' | 'left';

    labelStyles: string;
    elementStyles: string;

    uid: string;
    required: boolean;
};

type TDropdownOptions =
    | {
          dataSourceType: 'values';
          options: {
              label: string;
              value: string;
              selected: boolean;
              disabled: boolean;
          }[];
      }
    | {
          dataSourceType: 'api';
          apiConfig: {
              url: string;
              requestHeaders: { [key: string]: string | number | boolean }[];
              dataPath: string;
              labelKey: string;
              valueKey: string;
          };
      };

export type TDropdown = {
    elementType: 'Dropdown';
    attributes: TDropdownAttrs;

    label: string;
    labelPosition: 'top' | 'left';

    labelStyles: string;
    elementStyles: string;

    uid: string;
    required: boolean;
} & TDropdownOptions;

export type TCheckbox = {
    elementType: 'Checkbox';
    attributes: TCheckboxAttrs;

    label: string;
    labelPosition: 'top' | 'left';

    labelStyles: string;
    elementStyles: string;

    uid: string;
    required: boolean;
    options: {
        label: string;
        value: string;
        checked: boolean;
        disabled: boolean;
    }[];
};

export type TRadio = {
    elementType: 'Radio';
    attributes: TRadioAttrs;

    label: string;
    labelPosition: 'top' | 'left';

    labelStyles: string;
    elementStyles: string;

    uid: string;
    required: boolean;
    options: {
        label: string;
        value: string;
        checked: boolean;
        disabled: boolean;
    }[];
};

export type TDate = {
    elementType: 'Date';
    attributes: TDateAttrs;

    label: string;
    labelPosition: 'top' | 'left';

    labelStyles: string;
    elementStyles: string;

    required: boolean;
    uid: string;
};

export type TTime = {
    elementType: 'Time';
    attributes: TTimeAttrs;

    label: string;
    labelPosition: 'top' | 'left';

    labelStyles: string;
    elementStyles: string;

    uid: string;
    required: boolean;
};

export type TButton = {
    elementType: 'Button';
    attributes: TButtonAttrs;

    elementStyles: string;

    uid: string;
};

type Temp =
    | TName
    | TEmail
    | TPhoneNumber
    | TText
    | TNumber
    | TTextarea
    | TDropdown
    | TCheckbox
    | TRadio
    | TDate
    | TTime
    | TButton;

export type FormElement = Partial<Temp>;
