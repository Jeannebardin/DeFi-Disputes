
## Gotchas

- The database fields are snake_case, but the frontend fields are camelCase. To make this work, you need to make sure you convert the fields from snake_case to camelCase when sending from the server to the client, and camelCase to snake_case when posting to the server. Remember that you can use the `as` keyword in your Knex `select` calls to control the names of the properties that come back from your queries. If you'd rather use an external library, you may find the following links useful:
  - https://www.npmjs.com/package/camelcase-keys
  - https://lodash.com/docs/4.17.4#camelCase
  - https://lodash.com/docs/4.17.4#snakeCase
  - https://lodash.com/docs/4.17.11#mapKeys
- Instead of using `res.render` you will need to use `res.json`



- Add the ability to like / dislike comments (once you have done the migrations/seeds/queries/api routes, you will need to write some front end `api` functions and `React` components to display these - have a particular look at the `client/api/index.js` and `client/components/Post.jsx` for pointers on how to add client side API routes and front end components)
