import React from 'react';
import './menu-item.style.scss';
const MenuItem = ({title}) =>(
    <div className="menu-item">
    <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">shop now </span>
</div>
)
export default MenuItem;