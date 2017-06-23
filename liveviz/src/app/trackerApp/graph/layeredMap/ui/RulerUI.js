/**
 * Created by eliebuff on 23/06/2017.
 */
import React from 'react'


const RulerUI = ({maxVerticalValue, maxHorizontalValue}) => {

   var getItemTitle = (index)=>{
       return (index%5 == 0)? index : "-";
   }

    var getVerticalItems = ()=>{
        var itemSize = 100/(maxVerticalValue);
        for (var i = 0; i < maxVerticalValue ; i++) {
            rulerVerticalItems.push(<div style={{'height': itemSize + '%'}} className='rulerItem rulerItem_vertical' key={i}>{getItemTitle(maxVerticalValue - i)}</div>);
        }
    }

    var getHorizontalItems = ()=>{
        var itemSize = 100/(maxHorizontalValue);
        for (var i = 1; i < maxHorizontalValue + 1; i++) {
            rulerHorizontalItems.push(<div style={{width: itemSize + '%'}} className='rulerItem rulerItem_horizontal' key={i}>{getItemTitle(i)}</div>);
        }
    }

    var rulerVerticalItems = [];
    var rulerHorizontalItems = [];
    getVerticalItems()
    getHorizontalItems()

    return (
        <div className="rulerUI">
            <div className="rulerUI_origin">
                0
            </div>
            <div className="rulerUI_vertical">
                {rulerVerticalItems}
            </div>
            <div className="rulerUI_horizontal">
                {rulerHorizontalItems}
            </div>
        </div>
    )
}
export default RulerUI
