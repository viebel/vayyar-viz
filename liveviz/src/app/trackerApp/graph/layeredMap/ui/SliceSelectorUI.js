import React from 'react'
import { Button, } from 'react-bootstrap'

const SliceSelectorUI = ({slice, setSlice}) =>
    <div className="layeredMapToolbar_btnBlock">
        <Button className="layeredMap_projectionIcons" bsStyle="primary"
                onClick={ () => setSlice(slice == "XY" ? "XZ" : "XY")} >
            <div className={"layeredMap__btnImg layeredMap_projection" + slice}/>
        </Button>
    </div>
export default SliceSelectorUI
