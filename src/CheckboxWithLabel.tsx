import * as React from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel, {
  FormControlLabelProps as MuiFormControlLabelProps,
} from '@material-ui/core/FormControlLabel';

import { CheckboxProps, fieldToCheckbox } from './Checkbox';

/**
 * Exclude props that are passed directly to the control
 * https://github.com/mui-org/material-ui/blob/v3.1.1/packages/material-ui/src/FormControlLabel/FormControlLabel.js#L71
 */
export interface CheckboxWithLabelProps extends CheckboxProps {
  Label: Omit<
    MuiFormControlLabelProps,
    'checked' | 'name' | 'onChange' | 'value' | 'inputRef'
  >;
}

export const CheckboxWithLabel: React.ComponentType<CheckboxWithLabelProps> = ({
  Label,
  ...props
}) => (
  <FormControlLabel
    control={<MuiCheckbox {...fieldToCheckbox(props)} />}
    {...Label}
  />
);

CheckboxWithLabel.displayName = 'FormikMaterialUICheckboxWithLabel';
