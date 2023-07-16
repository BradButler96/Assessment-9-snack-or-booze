### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
	- It allows us to handle server and client-side routing in React applications

- What is a single page application?
	- It is a web application that dynamically rewriting the page with new data instead of the browser loading an entirely new page

- What are some differences between client side and server side routing?
	- Server-side-routing needs to make requests to the server as the user interacts with the page, client side does not need to make requests to the server. Client side is usually UI.

- What are two ways of handling redirects with React Router? When would you use each?
	- <Redirect /> & useHistory() - Redirect overwrites the location and does not allow the user to got back, useHistory() pushes the new location into the history object and allows the user to go back.

- What are two different ways to handle page-not-found user experiences using React Router? 
	- Set a route for all invalid URL params to navigate to a specified URL. Create a route that renders a "NotFound" component instead of redirecting.

- How do you grab URL parameters from within a component using React Router?
	- The useParams() hook

- What is context in React? When would you use it?
	- It's used to pass data from a parent component to a child component. It is useful if you need to pass data from a parent to grandchild, as this can be clunky without it.

- Describe some differences between class-based components and function components in React
	- Class-based components use classes to define components while function-based use functions
	- Function-based components are traditional JavaScript functions while class-based components require a render() function to be used

- What are some of the problems that hooks were designed to solve
	- Wrapper hell, huge components and confusing classes
