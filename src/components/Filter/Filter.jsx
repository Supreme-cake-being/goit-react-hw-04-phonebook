import PropTypes from 'prop-types';

import { Label, Input } from './Filter.styled';

const Filter = ({ filterValue, onFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        onChange={onFilter}
        value={filterValue}
      ></Input>
    </Label>
  );
};

export default Filter;

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
