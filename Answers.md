1. What problem does the context API help solve?

It allows you to share data accross any components on any level.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions provide information to the store. Reducers take in the current state and based off the action it will return some new state and tell the store what to do. The store holds the state of the application.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

In application state, state is held globally whereas component state is held locally. You would want to use application state when there are a lot of states to manage.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It is a middleware that allows for action creators which return a function instead of an action.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

While Redux took a while to get a hang of, I feel like this is the best one especially for larger products. The organization, pattern and flow of that state system is powerful.
