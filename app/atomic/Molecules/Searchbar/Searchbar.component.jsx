import React from 'react';
import Styles from './Searchbar.module.css';

import { Button, Text } from '../../Atoms';

const Searchbar = () => {
  return (
    <div className={Styles.searchbar}>
      <form
        className={Styles.form}
        action='#'
        method='get'
      >
        <input
          className={Styles.input}
          type='text'
          name='searchTerm'
          placeholder='Job Title, Skill, Keyword'
        />
        <input
          className={Styles.input}
          type='text'
          name='area'
          placeholder='Town, City, Postcode'
        />
        <Button>Search</Button>
      </form>
    </div>
  );
};

export default Searchbar;
