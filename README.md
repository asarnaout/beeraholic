# Description:

Beeraholic is your personal assistant for looking up your favorite beers.

Beeraholic is built over React and Redux for the frontend while Node.js (w / Express) and Redis were used to build the backend.

Beeraholic will help you find your favorite beer, search Beeraholic's huge directory with your favorite beer's name, creation date, IBU and ABV.

# Structure:

**/server**: Holds the server side code for serving the frontend application.

**/src**: Holds the frontend react code.

**/src/Components**: These represent the presentational layer, i.e: Dumb components which contain no logic/state. The purpose of these components is pure UI rendering and should contain minimum/no logic at all.An ideal react component should contain the render() method only.

**/src/Containers**: These represent the stateful components which perform logic (Communicating with APIs/Maintaining state/etc). A container should not perform any UI functionality and should return a single UI Component.

# React-Redux:

## State:

Redux stores the state of your whole application in an object tree within a single store.

## A react container should contain the following two methods:

**mapStateToProps**: Specifies the prop values that will be sent to the presentational component and ties them to the state.

**mapDispatchToProps**: Specifies the prop functions that will be sent to the presentational component and dispatches actions (explained below) to update the redux state.

## Action Creators:

Action Creators are located in /src/Actions, these return actions - that are javascript objects - to the containers that will trigger reducer functions on getting dispatched by the container (in the mapDispatchToProps function). An action creator should always return an action type and might return an additional value to be used by the reducer.

## Reducers:

Reducers are located in /src/Reducers, these define functions that will respond to dispatched actions. Note that a reducer must NEVER mutate a state, it should always return brand new objects using the Object.assign method for instance. Also note that each reducer function represents a property in the state tree. So for example if you have a single reducer called items, then your state tree will be { items: {} }

Reducers must be combined via the combineReducers function to generate the state and its reducer. This could be found in /src/Reducers/main-reducer.


### The redux state is read as follows:

![alt text](https://raw.githubusercontent.com/asarnaout/beeraholic/master/ReadState.png)


### The redux state is updated as follows:

![alt text](https://raw.githubusercontent.com/asarnaout/beeraholic/master/UpdateState.png)


## When to use Redux?

A container should store its data in the Redux store only if this data has to be shared among other containers/components, otherwise, the setState() API should sufficient enough for the container to manage its own state. An example for this is found in /src/Containers/ContactUsContainer where there is no gain from sharing the container's state among other containers/components and thus the setState() API was used in this case.

### The flow of the application and the infrastructure is illustrated in the following figure:

![alt text](https://raw.githubusercontent.com/asarnaout/beeraholic/master/Infrastructure.png)