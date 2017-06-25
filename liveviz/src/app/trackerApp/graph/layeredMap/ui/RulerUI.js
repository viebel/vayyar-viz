import React from 'react'
import {range, map} from 'ramda'

const getItemHorizontal = index =>
(index % 5 === 0)? index : "|"

const getItemVertical = index =>
(index % 5 === 0)? index : "__";

const getVerticalItems = (maxVerticalValue) =>
map(i =>
  <div
    style={{height: 100/maxVerticalValue + '%'}}
    className='rulerItem rulerItem_vertical'
    key={i}
    >
    {getItemVertical(maxVerticalValue - i)}
  </div>,
  range(0, maxVerticalValue)
)

const getHorizontalItems = (maxHorizontalValue) =>
map(i =>
  <div
    style={{width: 100/maxHorizontalValue + '%'}}
    className='rulerItem rulerItem_horizontal'
    key={i}
    >
    {getItemHorizontal(i)}
  </div>,
  range(1, maxHorizontalValue + 1)
)

const RulerUI = ({maxVerticalValue, maxHorizontalValue}) =>
<div className="rulerUI">
  <div className="rulerUI_origin">
    0
  </div>
  <div className="rulerUI_vertical">
    {getVerticalItems(maxVerticalValue)}
  </div>
  <div className="rulerUI_horizontal">
    {getHorizontalItems(maxHorizontalValue)}
  </div>
</div>

export default RulerUI
