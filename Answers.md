1. What problem does the context API help solve?

Context API solves the problem of prop-drilling because it enables components to share data without explicitly passing via each component manually.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are stockpiles of information that send data via dispatch from the app to the store. They are the only source of info for the store.
Reducers tell how the app's state changes in response to those actions sent from the store.
The store holds the state for the app. When your store is a single source of truth it means that the only way to change your data in UI is to dispatch a redux action which will change state within the redux reducer. But it can never be the other way around.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, meaning any component, anywhere in the app can access it if they hook into it. Component state is local, meaning that it lives within a specific component. It can only be updated within that component and then passed down to its children via props. You might use Application state instead of Component state when you have a much bigger app and prop drilling becomes tedious.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunks are the recommended middleware for basic Redux side effects logic. One thing they allow us to do is to make AJAX requests.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux is starting to grow on me. I am starting to understand how it stores and accesses state through MSTP and connect and I like that.