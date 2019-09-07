# User can view the details of a product.

### Task List

- [x] Create a wireframe that includes a `GoalDetails` component.
- [ ] Check out a branch from `rc` named `view-details-front-end`.
- [ ] Define a stateful `GoalDetails` component in `client/components/goal-details.jsx` with an initial state that includes a `goal` set to `null` and an initial render method that returns `null`.
- [ ] Add a `componentDidMount` method to `GoalDetails` that retrieves the details of a specific goal by `id` from the server with a `GET` request. _e.g._ `"/api/goals.php?id=1"`
- [ ] Complete the implementation of `GoalDetails`'s render method to conditionally render a view of the goal's details (as soon as the details are loaded from the server).
- [ ] Add a property to `App`'s initial state named `view` that is an `Object` with two properties; `name` and `params`. `name` is a `String` set to `"home"` and `params` is an empty `Object`. _i.e._ `{ view: 'home', params: {} }`
- [ ] Define a `setView` method in `App` that takes two parameters; `name` and `params`. `setView` replaces `App`'s `view` state with the new `name String` and `params Object`.
- [ ] Pass `App`'s `setView` method through `Home` via props so that when a user clicks on a `Goal`, `App`'s `view` state gets replaced with `{ name: 'details', params: { id: goal.id } }`
- [ ] Modify `App`'s render method to conditionally render either `Home` or the `GoalDetails` based on whether `App`'s current `view.name` state is `"home"` or `"details"`. If the `GoalDetails` component is being rendered, pass it `App`'s `view.params` state via props as well as `App`'s `setView` method.
- [ ] Modify `GoalDetails`'s `componentDidMount` method to request goal details based on the props it now receives from `App`.
- [ ] Ensure that when the user clicks `home button` in `GoalDetails`, `App`'s `setView` callback gets called with `"home"` and an empty `Object` to switch the user back to the `Home` view.
- [ ] Push all commits to `origin view-goals-front-end`.
- [ ] Open a Pull Request from `view-goals-front-end` to `dev`.
