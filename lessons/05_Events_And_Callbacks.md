# Events and Callbacks

Let's add a button to our page to enable us to add a new list. We will
hardcode the new list title for now.

```jsx
// src/App.js

  <div>
    <SortedListOfLists todoLists={todoLists} />
    <button>
      Add New List
    </button>
  </div>
```

This just gives us a simple button that does nothing when we click it. In
order to do something, we have to register an event handler. In React, event
handlers are named `on<EventName>`. For instance, the on click handler is
called `onClick`. If we pass a function to `onClick`, it will be invoked
when the user clicks the button:

```jsx
<button onClick={console.log('you clicked me!')}>
  Add New List
</button>
```

Save and refresh and... oops! The console already says 'you clicked me!'
on render! Why?

**We didn't pass a function**. We _invoked_ `console.log` when the Component
rendered. What we meant to do is:

```jsx
<button onClick={() => console.log('you clicked me!')}>
  Add New List
</button>
```

Now when you refresh, clicking the button will print 'you clicked me!'.

One of the **most common mistakes** is invoking the function on render
instead of passing a function to the handler. It is imperative that you keep
your console clear of errors and warnings, and monitor it for extraneous
output that might indicate you invoked rather than passed a function
somewhere.

Let's go ahead and extract this button into a new Component named
`AddListButton.js`. I'll leave this as an exercise to the student to do so.

Our `App.js` should then look like this:

```jsx
const Component = () => (
  <div>
    <SortedListOfLists todoLists={todoLists} />
    <AddListButton />
  </div>
);
```

## Callbacks

We've already experienced passing data from a parent to a child component,
but sometimes, we want to extract some data from a child component into the
parent component.

Bad news. We can't do that. What we _can_ do though, is give the child
component a callback function it can invoke whenever it wants and pass the
data through the arguments into the parent component.

Our `AddListButton` should add a new element to our array of lists. We don't
want our `App.js` responsible for knowing how to add a new list or come up
with a name; that's the job of the `AddListButton`! We need to tell the
button what to do when the user adds a list. For this, we'll declare a custom
**callback**. We can name it whatever we want. Let's go ahead and add a
property named `onAddList` to the AddListButton, and change our event handler
to invoke it with a hardcoded list name.

Don't forget to add the PropTypes!

```jsx
import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ onAddList }) => (
  <button onClick={() => onAddList({ title: 'A New List', priority: 4 })}>
    Add New List
  </button>
);
Component.propTypes = {
  onAddList: PropTypes.func.isRequired,
};
export default Component;
```

Then, in our `App.js` we simply add the new property with a callback function.
Let's write a function to push the new list into the array.

```jsx
// src/App.js

const addList = (todoList) => {
  todoLists.push(todoList);
  console.log(todoLists);
};

// ...
    <AddListButton onAddList={addList} />
```

Refresh and click the button. What outputs to the console? What happens to
the browser?

Clicking the button invokes the `addList` function correctly as we can see
via the `console.log` that gets printed out when we click it. However, the
list doesn't rerender! That's because we modified data and React doesn't
know about the modification, so it can't rerender. We could explicitly tell
React to rerender, but that is cumbersome and not very React-like. Instead,
we'll need to introduce one more topic: state.

# Conclusions

In this lesson we learned about the **onClick** handler, and how to pass
functions to a child component for extracting information from the child. In
the next lesson, we'll learn how to make pages rerender when data changes!

Commit, `git merge lesson-06`, and continue on to [Lesson 6 - State and
Lifecycle](06_State_And_Lifecycle.md)