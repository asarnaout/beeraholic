import React, { Component } from 'react';
import config from './config'

function Loading(props) {
    if (props.isLoading) {
      // While our other component is loading...
      if (props.timedOut) {
        // In case we've timed out loading our other component.
        return <div>Loader timed out!</div>;
      } else if (props.pastDelay) {
        // Display a loading screen after a set delay.
        return (<div className="padding-20"><img src={config.defaultLoaderCdn} className="loading-icon center-item" height={100} width={100} /></div>);
      } else {
        // Don't flash "Loading..." when we don't need to.
        return null;
      }
    } else if (props.error) {
      // If we aren't loading, maybe
      return <div>Error! Component failed to load</div>;
    } else {
      // This case shouldn't happen... but we'll return null anyways.
      return null;
    }
}

export default Loading;