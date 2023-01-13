import React from 'react';
import { FormLabel, FormInput } from '../ContactForm/ContactForm.styled';
import { useAppDispatch } from 'hooks';
import { change } from 'redux/filter/filterSlice';

const Filter: React.FC = () => {
  const dispatch = useAppDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
