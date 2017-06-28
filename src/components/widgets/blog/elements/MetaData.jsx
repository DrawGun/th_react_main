import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { DEFAULT_DATE_FORMAT } from 'constants/Date';

const MetaData = ({ author, createdAt, updatedAt }) =>
  <div className='post-meta-data'>
    <ul>
      <li>Автор поста: { author }</li>
      <li>Дата создания: { createdAt }</li>
      <li>Дата обновления: { updatedAt }</li>
    </ul>
  </div>;


MetaData.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
};

MetaData.defaultProps = {
  author: 'Author',
  createdAt: moment().format(DEFAULT_DATE_FORMAT),
  updatedAt: moment().format(DEFAULT_DATE_FORMAT)
};

export default MetaData;
