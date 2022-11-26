import React from 'react';
import './tag.css'
import { TiDeleteOutline } from 'react-icons/ti';

const Tag = ({content, icon}) => {
  return (
    <div className='tag'>
      <div className='flex items-center'>
        <p>{content}</p>
        {icon && <p className='ml-2'>x</p>}
      </div>
    </div>
  );
}

export default Tag;
