import React from 'react'

import './marquee.scss';

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);


/**Codeium: provide me any 10 valid pexel image urls */
const urls = [
  "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/13352195/pexels-photo-13352195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3651672/pexels-photo-3651672.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1415810/pexels-photo-1415810.jpeg?auto=compress&cs=tinysrgb&w=800",

];

type SliderProps = {
  leftToRight ?: boolean
}

function Slider({leftToRight = false} : SliderProps) {
  return (
    <div className={`slider`} style={{'--no-of-items': 8} as any}>
        {
          Array(8).fill(true).map(
            (_, index) => (
              <div key={index} className={`item ${leftToRight ? 'left-to-right' : 'right-to-left'}`} style={{'--item-index': index} as any}>
                <img src={urls[random(0, urls.length)]} width="100%" alt="img" />
              </div>
            )
          )
        }
    </div>
  )
}

function Marquee() {
  return (
    <main>
        <h2> Infinite Scroll </h2>
        <Slider key='right-to-left' leftToRight={false}/>
        <Slider key='left-to-right' leftToRight/>
    </main>
  )
}

export default Marquee