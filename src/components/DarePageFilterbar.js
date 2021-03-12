import PropTypes from 'prop-types';
import { React } from 'react';
import { Checkbox, FormControlLabel, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  input: {
    borderRadius: '0',
  },

  wrapper: {
    width: '316px',
    margin: '16px auto',
    marginBottom: '16px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    '& .MuiFormControlLabel-root': {
      margin: 0,
      padding: 0,
    },
    '& .MuiIconButton-root': {
      padding: 0,
      margin: 0,
    },
    '& .MuiFormControlLabel-label': {},
    '& .MuiSvgIcon-root': {
      marginBottom: '3px',
    },
  },
  formControlLabel: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',

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

    borderRadius: 3,
    width: '90px',
    height: '35px',
    backgroundColor: '#000',
    color: '#fff',

    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.2)',

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
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    boxShadow: 'none',
    '&:before': {},
    'input:hover ~ &': {},
    'input:disabled ~ &': {},
  },
}));
const DarePageFilterbar = ({
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
              checked
              disabled={false}
              onChange={e => handleChange(e)}
              icon={<div className={classes.icon}>Community</div>}
              checkedIcon={
                <div className={clsx(classes.icon, classes.checkedIcon)}>
                  Community
                </div>
              }
            />
          }
        />
        <FormControlLabel
          name={nameKey}
          className={classes.formControlLabel}
          control={
            <Checkbox
              style={{ backgroundColor: 'transparent' }}
              disableRipple
              checked={false}
              disabled={false}
              onChange={e => handleChange(e)}
              icon={<div className={classes.icon}>Private</div>}
              checkedIcon={
                <div className={clsx(classes.icon, classes.checkedIcon)}>
                  Private
                </div>
              }
            />
          }
        />
        <FormControlLabel
          name={nameKey}
          className={classes.formControlLabel}
          control={
            <Checkbox
              style={{ backgroundColor: 'transparent' }}
              disableRipple
              checked={false}
              disabled={false}
              onChange={e => handleChange(e)}
              icon={<div className={classes.icon}>Group</div>}
              checkedIcon={
                <div className={clsx(classes.icon, classes.checkedIcon)}>
                  Group
                </div>
              }
            />
          }
        />
      </div>
    </>
  );
};

export default DarePageFilterbar;
