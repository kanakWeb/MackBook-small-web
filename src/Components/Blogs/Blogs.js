import React from "react";

const Blogs = () => {
  return (
    <div className="container py-5">
        <h2 className="py-5 text-center">Some Question To Answer</h2>
      <div>
        <h3 className="fw-bold py-4">What is context API?</h3>
        <p className="fs-5">
          The React Context API creates global variables that can be
          passed around a React app. It is an alternative to "prop
          drilling," or moving the prop from grandparent to child to
          parent. Using Redux, a lighter approach to state management
          and context, is also touted as an easier option. The React
          context API returns a consumer and a provider. The Provider
          component does exactly what its name implies: it provides
          the state to its children and holds the "store" and is the
          parent of all the components that might need that store. A
          consumer works as if they are a component that consumes and
          uses the state. React Context objects accept a displayName
          as a string property, and React DevTools determine what to
          display for the context using this string. The nested
          component t is often necessary to update the context from a
          component and somewhere deeply in the component tree. Pass a
          function down through the context to allow consumers to
          update the context in this case.
        </p>
      </div>
      <div>
        <h3 className="fw-bold py-4">What is semantic Tag?</h3>
        <p className="fs-5">
          semantic tags define the function and category of your text
          and simplify the work for browsers and search engines, as
          well as for developers. It also helps the search engine read
          the page and find the required information faster. When the
          number of smart devices keeps growing, semantics become
          important for accessibility. It works for page navigation
          for assistive technologies as well. It is also easier to
          create consistent styling with CSS, as you can easily select
          all similar elements. It defines the purpose of the element
          by using semantic markup. Using semantic tags helps the
          browser understand the meaning of the content instead of
          just displaying it. It's used to convey the structure of the
          document in a clear manner. Foreign alphabets are also
          called semantic HTML5 elements that help with the deal. It
          simply makes that same understanding easier for machines.
          correctly using the correct semantic HTML tags in place of
          div
        </p>
      </div>
    </div>
  );
};

export default Blogs;
