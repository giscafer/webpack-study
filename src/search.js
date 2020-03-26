'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import webpackImg from './images/webpack.png';

class Search extends React.Component {
  render() {
    return (
      <div className='search-text'>
        Search Text 搜索
        <img src={webpackImg}></img>
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById('root'));
