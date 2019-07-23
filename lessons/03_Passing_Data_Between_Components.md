# Passing Data Between Components

React is strict when it comes to the direction we pass data. Data _always_
flows from a **parent** to a **child**, never the other way around. It is
prohibitively difficult to read data from a child component, so you should
avoid trying to break React and do something it wasn't meant to do or you'll
just end up with bugs all over the place and a bad taste in your mouth.

Alright, let's decide what type of app we're going to write. How about...

## The Todo List

The Todo List. Typical. Easy to understand. Simple. The perfect tutorial app.
We're going to write a nice, simple todo list which enables us to do CRUD
operations on checklists, and check off items in a checklist to track our
progress.

// todo: insert pictures of finished app

## The First Component

We need to start with our basic app, and then we'll pull Components out as it
gets too complex. This keeps us from over extracting Components while keeping
our code relatively clean. The first screen we want to show the user will
be a list of all our todo lists. Let's start by modifying our App file to include
some sample data. Add the following below the `import` statements:

```js
const data = [
  { title: 'My First List' },
  { title: 'React 101 Lesson Plan' },
];
```