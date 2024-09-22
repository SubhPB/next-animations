/** Byimaan */

import React from 'react';

import "./comp.scss"

type Props = {
    children :React.ReactNode;
    style ?: React.CSSProperties;
    yearValue ?: string
}

function Year({children, style, yearValue}: Props) {
  return (
    <div  className={'year'} style={style} >
        {children}
    </div>
  )
}

export default Year