import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="blog-container">
      <h1>Questions and Answers</h1>
      <div className="question-container">
        <h3>What is the purpose of Context Api ?</h3>
        <p>
          <b>Ans: </b>
          The Context API is a React structure that enables you to exchange
          unique details and assists in solving prop-drilling from all levels of
          your application.
        </p>
      </div>
      <div className="question-container">
        <h3>What is Semantic Tag ?</h3>
        <p>
          <b>Ans: </b>
          Semantic HTML elements are those that clearly describe their meaning
          in a human- and machine-readable way.
        </p>
      </div>
      <div className="question-container">
        <h3>Difference between block and inline-block</h3>
        <p>
          <b>Ans: </b>A block element has some whitespace above and below it and
          does not tolerate any HTML elements next to it. An inline-block
          element is placed as an inline element (on the same line as adjacent
          content), but it behaves as a block element.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
