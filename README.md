# Reducks

## What if you could look at GIFs of funny ducks?
## What if you could live in a world of pure functions and centralised, immutable state?
# What if REDUCKS?

Redux is a small module that helps in building [Elm Architecture](https://github.com/evancz/elm-architecture-tutorial/) apps.
One's app can be considered as a function from the current state and an action to a new state.
It comes with a library of React bindings, which I reckon we'll use.
We're going to try and use it to build a gif viewer for funny ducks.

## Baby Steps

We start by defining a model / a state -- in our case a simple string will suffice.
Then we define actions that represent the ways of using the application to modify state.
As some types of action will have parameters that will vary depending on the use context,
we define *action creator* functions that can take parameters and will return actions
(represented as simple javascript objects).  
Now we're missing a function that will tie these two parts together.
A function with the signature: `(state, action) -> state`.
We write this function and call createStore on it.
We can then connect a React component to the Redux store using `connect`.
We pass two optional functions to `connect`: `mapStateToProps` and `mapDispatchToProps`.  
These translate the redux state and redux dispatch function into props that the React component can use simply.

## TODO:

 * Mention the rendering stuff
 * Microcomponents
 * ReactDOM and other bleeding edge things

## NEXT UP

#### TESTS
