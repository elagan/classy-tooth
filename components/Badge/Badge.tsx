import React = require('react');
import './Badge.module.css';

const Badge = (props: { id: number }) => {
  return <div className="styledBadge">{props.id}❌</div>;
};

export default Badge;
