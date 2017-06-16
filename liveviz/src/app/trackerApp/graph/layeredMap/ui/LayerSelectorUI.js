import React from 'react'
import {compose, reduce, filter, identity} from 'ramda'
import { Button, } from 'react-bootstrap'


const arrToObj = arr =>
    reduce((acc,value) => {
            acc[value] = true
            return acc
        },
        {},
        arr)

const objToArr = compose(Object.keys, filter(identity))

const LayerSelectorUI = ({layers, availableLayers, setLayers}) =>
    <div className="layerSelector layeredMap_btnBlock">
        {
            availableLayers.map((item) => {
                console.log(layers);
                    var isSelectedClass = layers[item]? 'selected' : "";
                   return (<Button key={item} className="layeredMap_layerIcons" bsStyle="primary"
                                   onClick={ () => { layers[item] = !layers[item]; return setLayers(layers)}}>
                        <div className={isSelectedClass + " layerSelector__btnImg layeredMap_projection_" + item.replace(" ", "")}/>
                    </Button>)
                }
            )
        }
    </div>
{/*<CheckboxChoices
 onChange={compose(setLayers, arrToObj)}
 args={{
 Description: "",
 Value: objToArr(layers),
 ListValues: availableLayers
 }}
 />*/}

export default LayerSelectorUI
