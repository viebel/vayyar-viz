import React from 'react'
import { Button, } from 'react-bootstrap'
import {assoc} from 'ramda';


const LayerSelectorUI = ({layers, setLayers, availableLayers}) => {
    const setLayer = (layerItem)=>{
        var newLayers = assoc(layerItem, !layers[layerItem], layers);
        return setLayers(newLayers);
    }

    return (
        <div className="layerSelector layeredMapToolbar_btnBlock">
            {
                availableLayers.map((item) => {
                    var isSelectedClass = layers[item] ? 'selected' : "";
                    return (<Button key={item} className="layeredMap_layerIcons" bsStyle="primary"
                                    onClick={ () => {setLayer(item)}}>
                        <div
                            className={isSelectedClass + " layerSelector__btnImg layeredMap_projection_" + item.replace(" ", "")}/>
                        </Button>)
                })
            }
        </div>
    )
}
export default LayerSelectorUI
