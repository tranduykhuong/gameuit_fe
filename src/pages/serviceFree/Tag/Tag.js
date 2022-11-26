import React from 'react';
import './tag.css'

const Tag = ({content, icon, ...passProps}) => {
  return (
    <div className='tag' {...passProps}>
      <div className='flex items-center'>
        <p>{content}</p>
        {icon && <p className='ml-2'>x</p>}
      </div>
    </div>
  );
}

export default Tag;
