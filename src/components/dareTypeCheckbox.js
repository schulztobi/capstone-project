import PropTypes from 'prop-types';
import { React } from 'react';
import { Checkbox, FormControlLabel, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  input: {
    borderRadius: '0',
  },

  wrapper: {
    '& .MuiFormControlLabel-label': {},
    '& .MuiSvgIcon-root': {
      marginBottom: '3px',
    },
  },
  formControlLabel: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'space-between',

    margin: '0 auto',
    padding: '0',
    width: '100%',
    height: '100%',
  },

  icon: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '11px',
    fontWeight: '600',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.18',
    letterSpacing: '0.5px',

    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 24,
    width: '85px',
    height: '48px',
    backgroundColor: '#000',
    color: theme.palette.primary.main,

    boxShadow: '3px 4px 15px 0 #0039783c',

    'input:hover ~ &': {
      // border: 'none',
      // backgroundImage: 'linear-gradient(317deg, #00119a 30%, transparent)',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      '&:before': {
        // display: 'block',
        // margin: '4px 0 0px 4px',
        // content: '""',
      },
    },
  },
  checkedIcon: {
    // color: theme.palette.uNeutral.white,
    // backgroundColor: theme.palette.uAccent.magenta,
    backgroundColor: '#EB591C',
    color: '#fff',
    boxShadow: 'none',
    '&:before': {},
    'input:hover ~ &': {},
    'input:disabled ~ &': {},
  },
}));
const DareTypeCheckbox = ({
  label,
  disabled,
  checkboxClick,
  isChecked,
  nameKey,
  iconActive,
  iconInActive,
}) => {
  const props = { isDisabled: disabled, checked: isChecked };
  const classes = useStyles(props);

  const handleChange = event => {
    // setCheckboxState({
    //   ...checkboxState,
    //   [event.target.name]: event.target.checked,
    // });
    checkboxClick(event);
  };

  return (
    <>
      <div className={classes.wrapper}>
        <FormControlLabel
          name={nameKey}
          className={classes.formControlLabel}
          control={
            <Checkbox
              style={{ backgroundColor: 'transparent' }}
              disableRipple
              checked={isChecked}
              disabled={disabled}
              onChange={e => handleChange(e)}
              icon={<div className={classes.icon}>{label}</div>}
              checkedIcon={
                <div className={clsx(classes.icon, classes.checkedIcon)}>
                  {label}
                </div>
              }
              inputProps={{ 'aria-label': 'decorative checkbox' }}
            />
          }
        />
      </div>
    </>
  );
};

export default DareTypeCheckbox;
