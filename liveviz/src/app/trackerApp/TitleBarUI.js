import React from 'react'
import { Button } from 'react-bootstrap'

const playOrPauseButtonText = (running) =>
running ? <i className="glyphicon glyphicon-pause"></i> : <i className="glyphicon glyphicon-play"></i>

const TitleBarUI = ({ setViewMode, displayParams, running, status, error, toggleRunning, toggleParams }) =>
<div className="page-toolbar">
    <Button
      onClick={ toggleRunning }
      bsStyle="primary"
      >
      { playOrPauseButtonText(running) }
    </Button>
    <Button
      onClick={ () => setViewMode('singleMap') }
      bsStyle="primary"
      >
      Single
    </Button>
    <Button
      onClick={ () => setViewMode('multipleMap') }
      bsStyle="primary"
      >
      Multiple
    </Button>
    <span> status: {status} </span>
    <span> error: {error} </span>

    <Button
      id="menu-toggle"
      onClick={ toggleParams }
      bsStyle="primary"
      >
      {displayParams? "Hide Params" : "Show Params"}
    </Button>
</div>

export default TitleBarUI
