# Creating a Project

Most tutorials involving React encourage you to use a program called
`create-react-app` when you're starting out. Personally, I **STRONGLY**
discourage this approach because it hides everything "until you're ready".
Except you're _never_ ready for all the things it hides, then you end up with
a production app running off `create-react-app` and you wonder why your
performance is terrible and your boss complains that React is a terrible
framework and that you shouldn't use it anymore.

So let's not go down that path. We'll do what everyone else does instead:
Create an empty project and copy working files and ignore their contents
until we're ready!

If you're following this tutorial, you've already succeeded! This tutorial
contains a minimal working React app with all the plumbing already set up!
Let's see something on a page, then we'll worry about what all these files
are for.

## Installing Dependencies

Before we begin, we have to download all the dependencies we need. The
`package.json` file contains all the dependencies, and dev dependencies this
project requires to run. All we need to do is tell `npm` to install them.

```
npm install
```

`npm` will go download all the dependencies and put them in a folder called
`node_modules`. You should **NOT** commit `node_modules`. Additionally, it
will create another file called `package-lock.json`. You **SHOULD** commit
`package-lock.json`, but the contents are irrelevant to you. It is safe to
delete this file at any time and rebuild it by running `npm install` again.
This file is important because it stores the resolved package versions of all
dependencies in the tree.

There is no separate call to install dev dependencies. The dev dependencies
are only installed if you run `npm install` from the project folder. If you
install this package from another package, it will only install the regular
dependencies, not the dev dependencies.

## Installing React

Let's install React so we can get started using it! To install a new package,
we need to use `npm` again:

```
npm install react
```

This will download and install the React package, put it in the
`node_modules` folder, and add it to the dependencies of our `package.json`.

## Our First Component

In this project, you'll find a folder named `src`. This will contain all of
our source code for the application. Let's start with a simple Hello World
application to get our feet wet.

Create a new file named `App.js` inside the `src` folder. Inside this file
we'll declare our component:

```jsx
import React from 'react';  // import the react package into constant React

const App = () => (         // This is an ES6 function! It makes `this` make sense
  <div>Hello World!</div>   // This is called jsx. More on that below
);
export default App;         // Export our function so other files can import it
```

That's it! We've declared a Component named cleverly named `App` and exported
it. React components are generally written using ES6, but you can write them
in any JavaScript language you want. I'll cover any of the ES6 syntax we
encounter as we go.

#### Import Statements

```jsx
import React from 'react';
```
This is called an `import` statement. It imports the contents of the `react`
package and stores it in a constant named `React`. I'll explain why we need
this later.

#### ES6 Functions

```jsx
const add = (a, b) => a + b;
const add = (a, b) => { return a + b; }
function add(a, b) { return a + b; }
```
All three of these functions are identical. The reason we use ES6 style
functions is to remove the confusion around some JavaScript internals,
specifically _hoisting_ and the binding of the `this` keyword.

ES6 functions are **NOT** hoisted, meaning you must declare them before you
use them. 99% of the time, This is a Good Thing. Additionally, ES6 style
functions have the value of `this` bound at the time of **DECLARATION**
instead of the time of **EXECUTION**. This means we can pass the function
around without worrying about the value of `this` or resorting to tricks like
`var self = this;`. Lastly, they're nice and concise! ES6 functions have
implicit returns for **SINGLE STATEMENT FUNCTIONS**. If you want to return
something and put curly braces like in the second example, you **MUST** put
return. Otherwise its a void function.

```jsx
const add = (a, b) => a + b;     // returns an int
const add = (a, b) => { a + b; } // returns undefined
```

#### JSX

```jsx
<div>Hello World!</div>
```

React's secret sauce is called **JSX**. JSX is syntactic sugar for writing
HTML inside of JavaScript. It's a lot like jsp's in Java or Razor files in
C#. If we use even a single line of JSX in a file, you **MUST** import
`react`. In reality, this gets translated into a method call in the `react`
package which would throw undefined errors if you didn't import it. You can
start a JSX block anywhere by using standard HTML syntax. Once you open an
HTML tag, you are writing HTML. Everything inside until the closing tag is
HTML. If you want to drop back to JavaScript, you simply use the **template
string** syntax of `{ /* javascript goes here */ }`. Anything inside the
curly braces is JavaScript. You can write a **SINGLE** statement inside the
curly braces. Whatever it evaluates to will be printed in the HTML inline.

```jsx
(<div>{1 + 2}</div>) // output: <div>3</div>

(<div>
{[1, 2, 3].map(it => (
  <span>{it * 2}</span>
))}
</div>)
/* outputs:
<div>
  <span>2</span>
  <span>4</span>
  <span>6</span>
</div>
*/
```

You can nest HTML in JavaScript in HTML in JavaScript in HTML... as many
times as necessary. Be warned, this is **NOT** a recommended practice.
Think if you _really_ need to nest that, or if you can pull something
into it's own Component.

#### Export

```jsx
export default App;
```

ES6 Modules allow exporting different values. The `default` keyword means if
we don't specify what we want to _import_, this is the value we should
return. We've already used a default export when we imported React. The
default export of the `react` package is imported into the `React` constant.

## Rendering the App

Alright! Let's get this on the page! What page? Uh oh. We only have a single
JavaScript file. React isn't magic. We still need HTML files, a webserver,
and all the other fun stuff.

Luckily for you, we're not going to go into that. This tutorial comes
complete with a fully functioning NodeJS server all ready to serve up our
content! We'll cover all the setup of this in a later lesson. All you need
to know now is if you run

```
npm run start:dev
```

You'll get a server to start, transpile all your source code into something
the browser will understand, linting support, AND watch for changes!

## Conclusions

If you navigate to `http://localhost:3000` you should see the text "Hello
World!" on the screen! Congratulations! You've rendered your first React
component!

You can now continue by merging branch `lesson-03` and continuing to [Lesson
3 - Passing Data Between Components](03_Passing_Data_Between_Components.md).