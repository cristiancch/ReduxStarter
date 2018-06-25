import expect from 'expect';
import {authorsFotmattedDropdown} from "./selectors";

describe('Author Selectors:', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for unse in a dropdown', () => {
      const authors = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'}
      ];

      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'scott-allen', text: 'Scott Allen'}
      ];

      expect(authorsFotmattedDropdown(authors)).toEqual(expected);
    });
  });
});
