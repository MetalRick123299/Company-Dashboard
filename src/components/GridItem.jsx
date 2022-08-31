import React from 'react';

function GridItem({ props, onClick, index }) {
  const {
    first_name,
    company,
    title,
    email,
    owned_by,
    street,
    created,
    last_contacted,
  } = props;

  const initials = first_name
    .split(' ')
    .map((name) => name[0])
    .join('');

  return (
    <div className="container grid">
      <div onClick={(e) => onClick(e, index)} className="category firstName">
        <div className="initials">{initials || '—'}</div>
        {first_name || '—'}
      </div>
      <div className="category">{company || '—'}</div>
      <div className="category">{title || '—'}</div>
      <div className="category">{email || '—'}</div>
      <div className="category">{owned_by || '—'}</div>
      <div className="category">{street || '—'}</div>
      <div className="category">{created || '—'}</div>
      <div className="category">{last_contacted || '—'}</div>
    </div>
  );
}

export default GridItem;
