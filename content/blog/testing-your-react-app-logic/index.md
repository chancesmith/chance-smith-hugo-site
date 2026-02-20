---
layout: post
title: "Testing Your React App Logic"
date: "2024-03-16T08Z"
tags: development, testing
---

I find myself and other teams avoiding writing tests. Mostly because we're out of practice or if there aren't enough examples in the codebase.

So, I've been thinking about how to make it easier to add tests to your app.

Here, I'd like to share some quick ways to add a test with your next feature, such as bug fixing or refactoring. Here's the list.

1. [The Utility](#the-utility)
2. [The Slice](#the-slice)
3. [The View Brain](#the-view-brain)
4. [The Shipping Container](#the-shipping-container)
5. [The Whole View](#the-whole-view)
6. [The App](#the-app)

## Quick Ways To Add A Test To Your Frontend

<h3 id="the-utility">1. The Utility</h3>

Any new or untested utility function is a great place start writing tests. These functions are typically small and simple to test.

If you have utility functions like this, you can write a test for it.

```js
const formatMsToTime = (ms) => {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  return `${hours}:${minutes}`;
};
```

So, let's write a test for it.

```ts
test("formatMsToTime", () => {
  expect(formatMsToTime(1000)).toBe("0:0");
  expect(formatMsToTime(60000)).toBe("0:1");
  expect(formatMsToTime(3600000)).toBe("1:0");
  expect(formatMsToTime(3661000)).toBe("1:1");
});
```

<h3 id="the-slice">2. The Slice</h3>

A function with logic and state setters, we can slice out the logic with a new function. This new function will return the value we want the new state to be. Now we have something we can test.

So, if we knew we were having a bug with a function, we could slice out the logic into a testable unit.

```ts
// Before
const handleSortItems = () => {
  const sortedItems = [...state.items].sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 2; // <-- 🐛
    return 0;
  });
  setState({ ...state, items: sortedItems });
};
```

```ts
// After: Slicing out `sortItems` for testing.
const sortItems = (items: Item) => {
  return [...items].sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1; // <-- 🤌 fixed
    return 0;
  });
};

const handleSortItems = () => {
  const sortedItems = sortItems(state.items);
  setState({ ...state, items: sortedItems });
};
```

<h3 id="the-view-brain">3. The View Brain</h3>

One of my favorites, is abstracting the logic that the view needs. All our view state will live in a class, useReducer, custom hook or a tool like MST. Every state modifier will be tested in our view-brain.

```ts
// Before
const [skillAreas, setSkillAreas] = useState([]);
const [stagedQuestions, setStagedQuestions] = useState([]);
const [modalOpen, setModalOpen] = useState(false);
const handleAddQuestion = (question: Question) => {
  /* logic + setStagedQuestions() + setModeOpen(false) */
};
const handleReorderSkillAreas = (newSkillAreas: SkillArea[]) => {
  /* sorting logic + setSkillAreas() */
};
const handleOpenModal = () => {
  /* setModalOpen(true) */
};
```

Having all your state setters in that same place as your handlers with logic, makes it hard to test. We can merge all the state and logic into a testable unit, a custom hook.

```ts
// After: merge all the state and logic into a testable unit, a custom hook.
const {
  skillAreas,
  stagedQuestions,
  addQuestion,
  reorderSkillAreas,
  modalOpen,
} = useEditAssessment();
```

Now, we can make a test suite against the `useEditAssessment()` hook to test all the state changes. As an alternative, we could also use a useReducer.

<h3 id="the-shipping-container">4. The Shipping Container</h3>

Decouple your view from your API calls. Just pass in the data your view needs.

Yes, we could have the view do everything.

```tsx
// Before
const MyView = () => {
  const [data, setData] = useState([]);
  const [skillAreas, setSkillAreas] = useState([]);
  const [stagedQuestions, setStagedQuestions] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  // Get data
  useEffect(() => { fetch('/api/data').then((res) => res.json()).then(setData) }, []);

  const handleSubmit = () => { /* fetch('/api/assessment', { method: 'POST', body: JSON.stringify({ skillAreas, stagedQuestions }) }) */ };

  const handleAddQuestion = (question: Question) => { /* logic + setStagedQuestions() + setModeOpen(false) */ };
  const handleReorderSkillAreas = (newSkillAreas: SkillArea[]) => { /* sorting logic + setSkillAreas() */ };
  const handleOpenModal = () => { /* setModalOpen(true) */ };

  return (/* JSX */);
};
```

Yet, we can decouple the view from the API calls.

```tsx
// After: only passing the props the view needs.
const MyViewContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const handleSubmit = (skillAreas, stagedQuestions) => {
    fetch("/api/assessment", {
      method: "POST",
      body: JSON.stringify({ skillAreas, stagedQuestions }),
    });
  };

  return <MyView data={data} handleSubmit={handleSubmit} />;
};
```

Now we can mock any of variation data and any response from the server.

```ts
// MyView.test.tsx
test("MyView", async () => {
  const data = [{ id: 1, name: "React" }];
  const handleSubmit = jest.fn();
  render(<MyView data={data} handleSubmit={handleSubmit} />);
  // ...test the inner state changes based on user events
});
```

Next time you get a error response from the server, you can test how your view handles it.

```ts
// MyView.test.tsx
test("shows error message", async () => {
  const data = [{ id: 1, name: "React" }];
  const handleSubmit = jest
    .fn()
    .mockRejectedValueOnce({ message: "Server Error" });

  render(<MyView data={data} handleSubmit={handleSubmit} />);

  // Test the error response
  fireEvent.click(screen.getByText("Submit"));

  expect(await screen.findByText("Server Error")).toBeInTheDocument();
});
```

<h3 id="the-whole-view">5. The Whole View</h3>

If we want to test everything, we can set up a mock server your tests can use.

Here is an example with [MSW](https://mswjs.io/).

```ts
// MyVewContainer.test.tsx
import { rest } from "msw";

test("MyView", async () => {
  const server = setupServer(
    rest.get("/api/data", (req, res, ctx) =>
      res(ctx.json([{ id: 1, name: "React" }]))
    ),
    rest.post("/api/assessment", (req, res, ctx) =>
      res(ctx.json({ success: true }))
    )
  );

  server.listen();

  render(<MyViewContainer />);

  // ...

  server.close();
});
```

Ideally, you'd have a [test setup file](https://mswjs.io/docs/integrations/node#test-runner) that starts and stops the server for you.

If you did that you're tests would be a little cleaner.

```ts
// MyVewContainer.test.tsx
import { server } from '../setupTests/server';

test('MyView', async () => {
  server.use( http.get('/api/data', (req, res, ctx) => res(ctx.json([{ id: 1, name: 'React' }])));
  server.use( http.post('/api/assessment', (req, res, ctx) => res(ctx.json({ success: true }))));

  render(<MyViewContainer />);

  // ...
});
```

<h3 id="the-app">6. The App</h3>

Pick up an E2E tool and test your app with a few user flows. Focus on navigating through the app without errors. Use tools like [Playwright](https://playwright.dev/) or [Cypress](https://www.cypress.io/).

## The Point Is

You can decided to test the logic of your app at any level.

Now you have some easy ways to adding tests for your valuable app logic.

I've found that [testing your app will save you time](./is-it-slow-to-test) in the long run. It will also help you understand your app better.
