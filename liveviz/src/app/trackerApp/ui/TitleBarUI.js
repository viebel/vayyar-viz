import React from 'react'
import { Row, Button, Col } from 'react-bootstrap'
import '../styles/TitleBar.css';

const playOrPauseButtonText = (phase) =>
(phase === "RUNNING") ? <i className="glyphicon glyphicon-pause"></i> : <i className="glyphicon glyphicon-play"></i>

const TitleBarUI = ({ setViewMode, displayParams, phase, status, error, sendCommand, toggleParams, toggleFlipDisplay, toggleRotateDisplay, resetDataState, resetOutputs }) =>
<Row className="page-toolbar titleBar">
    <Col xs={6}>
        <Button
            onClick={ () => sendCommand('Pause', phase) }
            bsStyle="primary"
        >
            { playOrPauseButtonText(phase) }
        </Button>
        <Button
            onClick={ () => {resetDataState(); sendCommand('Stop', phase); resetOutputs()} }
            bsStyle="primary"
        >
          { <i className="glyphicon glyphicon-stop"></i> }
        </Button>
        <Button
            onClick={ () => () => {resetDataState(); sendCommand('Closing', phase)} }
            bsStyle="primary">
            Exit
        </Button>
        <Button
            onClick={ () => sendCommand('Stop') }
            bsStyle="primary"
        >
          { <i className="glyphicon glyphicon-stop"></i> }
        </Button>
        <Button
            onClick={ () => sendCommand('Closing') }
            bsStyle="primary">
            Exit
        </Button>
    </Col>
    <Col xs={6}>
        <div className="text-right">
            <Button className="titleBar__iconBtn"
                onClick={ () => setViewMode('singleMap') }>
                <div className="titleBar__btnImg titleBar__singleGraphBtn"/>
            </Button>
            <Button className="titleBar__iconBtn"
                onClick={ () => setViewMode('multipleMap') }>
                <div className="titleBar__btnImg titleBar__multipleGraphBtn"/>
            </Button>
            <Button
                bsStyle="primary"
                onClick={ toggleFlipDisplay }>
                Flip
            </Button>
            <Button
                bsStyle="primary"
                onClick={ toggleRotateDisplay }>
                Rotate
            </Button>
            <Button
                id="menu-toggle"
                className="titleBar__toggleParams"
                onClick={ toggleParams }
                bsStyle="primary"
            >
                {displayParams? "Hide Params" : "Show Params"}
            </Button>
        </div>

        {/*<span> status: {status} </span>*/}
        {/*<span> error: {error} </span>*/}


    </Col>


</Row>

export default TitleBarUI
