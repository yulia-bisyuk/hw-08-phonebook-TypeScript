import React from 'react';
import { FormLabel, FormInput } from '../ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { change } from 'redux/filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(change(e.currentTarget.value));
  };

  return (
    <FormLabel>
      Find contacts by name
      <FormInput
        autoComplete="off"
        type="text"
        name="filter"
        onChange={onChange}
        required
      />
    </FormLabel>
  );
};

export default Filter;
