import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/MenuItem';
import { connect } from 'react-redux';
import { selectDirSection } from '../../store/directory/dirSelector';
import { createStructuredSelector } from 'reselect';

const Directory = ({sections}) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirSection
});

export default connect(mapStateToProps)(Directory);
