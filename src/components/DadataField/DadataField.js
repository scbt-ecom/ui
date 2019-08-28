import React, { useState, useRef, useEffect } from 'react';
import Autorenew from '@material-ui/icons/Autorenew';
import InputAdornment from '@material-ui/core/InputAdornment';
import Autosuggest from 'react-autosuggest';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

import { getSuggestionValue } from './helpers';
import getDadata from './getDadata';
import debounce from '../../utils/debounce';

import useStyles from './styles';

function renderInputComponent(inputProps) {
  const { classes, isLoading, ...other } = inputProps;

  return (
    <TextField
      variant={'outlined'}
      multiline
      InputProps={{
        classes: {
          input: classes.input,
        },
        endAdornment: isLoading && (
          <InputAdornment position="end">
            <Autorenew color={'primary'} className={classes.loadingIcon} />
          </InputAdornment>
        ),
      }}
      disabled={isLoading}
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  return (
    <MenuItem component="div" selected={isHighlighted}>
      <div>{suggestion.value}</div>
    </MenuItem>
  );
}

export default React.memo(function IntegrationAutosuggest(props) {
  const classes = useStyles(props);
  const [state, setState] = useState({
    single: typeof props.value === 'string' ? props.value : '',
  });
  const [stateSuggestions, setStateSuggestions] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const isSuggestionSelected = useRef(false);
  const currentSuggestion = useRef(null);

  const inputValue = useRef('');
  const setDebouncedSuggestions = useRef(
    debounce((inputValue, dadataOptions) => {
      getDadata(props.type, inputValue, dadataOptions).then(
        ({ suggestions }) => {
          setStateSuggestions(suggestions);
        }
      );
    }, 500)
  );

  useEffect(() => {
    // only when 'fio' type, because no tested in address type
    if (typeof props.value === 'string') {
      setState({ single: props.value || '' });
    }
  }, [props.value]);

  const getSuggestions = value => {
    inputValue.current = value.toLowerCase();
    setDebouncedSuggestions.current(inputValue.current, props.dadataOptions);
  };

  const handleSuggestionsFetchRequested = ({ value }) => {
    setStateSuggestions(getSuggestions(value));
  };

  const handleSuggestionsClearRequested = () => {
    if (stateSuggestions && stateSuggestions.length) {
      setStateSuggestions([]);
    }
  };

  const handleChange = (event, { newValue }) => {
    isSuggestionSelected.current = false;
    setState({
      ...state,
      single: newValue,
    });
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    const { type, dadataOptions } = props;
    isSuggestionSelected.current = true;
    // spike, because dadata not returns postal code
    // we must do specific query for only one suggestion
    if (type === 'address' && !suggestion.data.postal_code) {
      setIsLoading(true);
      getDadata(type, suggestion.unrestricted_value, {
        ...dadataOptions,
        count: 1,
        restrict_value: true,
      }).then(res => {
        currentSuggestion.current =
          res && res.suggestions && res.suggestions[0];
        props.onChange(currentSuggestion.current);
        setIsLoading(false);
      });
    } else {
      currentSuggestion.current = suggestion;
      props.onChange(currentSuggestion.current);
    }
  };

  const onBlur = e => {
    const { type } = props;
    if (isSuggestionSelected.current) {
      return;
    }
    // if value not selected from list
    if (state.single) {
      const value =
        type === 'fio' ? state.single.trim() : currentSuggestion.current;
      return props.onChange(value);
    }
    props.onChange(null);
  };

  const autosuggestProps = {
    renderInputComponent,
    suggestions: stateSuggestions || [],
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue,
    renderSuggestion,
    onSuggestionSelected,
  };

  const {
    label,
    placeholder,
    onChange,
    dadataOptions,
    value,
    ...otherInputProps
  } = props;

  return (
    <div className={classes.root}>
      <Autosuggest
        {...autosuggestProps}
        inputProps={{
          classes,
          label,
          placeholder,
          value: state.single,
          onChange: handleChange,
          isLoading,
          ...otherInputProps,
          onBlur,
        }}
        theme={{
          suggestionsContainer: classes.suggestionsContainer,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderSuggestionsContainer={options => (
          <Paper {...options.containerProps} square>
            {options.children}
          </Paper>
        )}
      />
    </div>
  );
});
