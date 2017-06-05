import React from 'react';
import Boolean from 'controls/Boolean'
import Slider from 'controls/Slider'
import Number from 'controls/Number'
import Switch from 'controls/Switch'
import TextInput from 'controls/TextInput'
import MinMaxSlider from 'controls/MinMaxSlider'
import Dropdown from 'controls/Dropdown'
import Checkbox from 'controls/Checkbox'
import BooleanView from 'controls/BooleanView'
import TextView from 'controls/TextView'
import MinMaxSliderView from 'controls/MinMaxSliderView'
import MultipleValueView from 'controls/MultipleValueView'


const DefaultControl = (props) =>
    <div> Unsupported Param: {props.type} <br/>
        {JSON.stringify(props)}
    </div>

const ParamUI = (props) => {
    const typeToComponent = (type, isEditable) =>
    {
        const editableComponent = {
            Boolean: Boolean,
            Switch: Switch,
            Slider: Slider,
            Number: Number,
            TextInput:TextInput,
            MinMaxSlider:MinMaxSlider,
            Dropdown:Dropdown,
            Checkbox:Checkbox,
        };

        const viewComponent = {
            Boolean: BooleanView,
            Slider: TextView,
            Switch: BooleanView,
            Number: TextView,
            TextInput: TextView,
            MinMaxSlider: MinMaxSliderView,
            Dropdown: TextView,
            Checkbox:MultipleValueView,
        };
        return (isEditable? editableComponent[type] : viewComponent[type]) || DefaultControl;
    }
    const Component = typeToComponent(props.type, props.isEditable);
    return <Component {...props}/>;
}

export default ParamUI;