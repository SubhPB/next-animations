/**
 * Byimaan
 */

import React from 'react';
import "./comp.scss";

type Props = {
    children: React.ReactNode;
    style ?: React.CSSProperties;
    summary: string;
}

function Month({children, style, summary}: Props) {
  return (
    <div className='month' style={style}>
        <details>
            <summary> {summary} </summary>
            {children}
        </details>
    </div>
  )
}

export default Month