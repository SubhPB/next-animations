/** Byimaan */

import React from 'react';
import { AnimationLog } from '@/constants/calender';
import "./comp.scss";
import Link from 'next/link';

type Props = {
    style ?: React.CSSProperties;
    data: AnimationLog[];
    summary: string
}

function Week({ style, data, summary}:Props) {
  return (
    <div style={style} className="week">
        <details style={{width: '100%'}}>
            <summary> {summary} </summary>
            <ul>
                {
                    data.map(
                        animation => (
                            <Link key={animation.href} href={animation.href}>
                                <li>
                                    { animation.name }
                                </li>
                            </Link>
                        )
                    )
                }
            </ul>
        </details>
    </div>
  )
}

export default Week