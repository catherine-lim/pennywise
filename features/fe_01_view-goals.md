# User can view Goals in Home screen

- [x] Create a wireframe that includes the components:
    - [x] `Header`
    - [x] `Onboarding`
    - [x] `Add Goal`
    - [x] `Goal Details`
    - [x] `Home`
- [ ] Check out a branch from `rc` named `view-goals-front-end`.
- [ ]  Define an `App` class component in `client/components/app.jsx`. `App` will have  no initial state for now.
- [ ] Define a stateless `Header` component in `client/components/header.jsx` that displays the store's name and home button. Add `Header` to `App`'s render method.
- [ ]  Define a stateless `GoalCard` component in `client/components/goal-card.jsx` that renders a single goal card.
- [ ] Define a stateful `Home` component in `client/components/home.jsx` that will render a grid of `GoalCards`. Give it an initial state of `goals` set to an empty `Array`.
- [ ] Define a method in `Home` named `getGoals` that retrieves all goals by sending a `GET` request to `/api/goals.php`.
- [ ]  Add a `componentDidMount` method to `Home` that calls `getGoals`.
- [ ]  Add `Home` to `App`'s render method.
- [ ]  Push all commits to `origin view-goals-front-end`.
- [ ]  Open a Pull Request from `view-goals-front-end` to `rc`.
