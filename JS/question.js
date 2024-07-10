const htmlQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinking Text Marking Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Who is making the Web standards?",
    options: [
      "Google",
      "Microsoft",
      "Mozilla",
      "The World Wide Web Consortium",
    ],
    answer: "The World Wide Web Consortium",
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    options: ["<h1>", "<h6>", "<heading>", "<head>"],
    answer: "<h1>",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<br>", "<break>", "<lb>", "<linebreak>"],
    answer: "<br>",
  },
  {
    question: "What is the correct HTML for adding a background color?",
    options: [
      "<body style='background-color:yellow;'>",
      "<background>yellow</background>",
      "<body bg='yellow'>",
      "<body bgcolor='yellow'>",
    ],
    answer: "<body style='background-color:yellow;'>",
  },
  {
    question: "Choose the correct HTML element to define important text:",
    options: ["<strong>", "<b>", "<important>", "<i>"],
    answer: "<strong>",
  },
  {
    question: "Choose the correct HTML element to define emphasized text:",
    options: ["<em>", "<i>", "<italic>", "<strong>"],
    answer: "<em>",
  },
  {
    question: "Which character is used to indicate an end tag?",
    options: ["/", "<", "*", "^"],
    answer: "/",
  },
  {
    question: "How can you make a numbered list?",
    options: ["<ul>", "<ol>", "<dl>", "<list>"],
    answer: "<ol>",
  },
  {
    question: "How can you make a bulleted list?",
    options: ["<ul>", "<ol>", "<dl>", "<list>"],
    answer: "<ul>",
  },
];

const cssQuestions = [
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question:
      "Where in an HTML document is the correct place to refer to an external style sheet?",
    options: [
      "In the <head> section",
      "In the <body> section",
      "At the end of the document",
      "At the top of the document",
    ],
    answer: "In the <head> section",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<css>", "<script>", "<link>"],
    answer: "<style>",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "class", "font", "styles"],
    answer: "style",
  },
  {
    question: "Which property is used to change the background color?",
    options: ["background-color", "color", "bgcolor", "background"],
    answer: "background-color",
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["color", "font-color", "text-color", "fgcolor"],
    answer: "color",
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-size", "text-size", "font-style", "text-style"],
    answer: "font-size",
  },
  {
    question:
      "What is the correct CSS syntax to change the font of an element?",
    options: [
      "font-family: Arial;",
      "font: Arial;",
      "font-style: Arial;",
      "text-font: Arial;",
    ],
    answer: "font-family: Arial;",
  },
  {
    question: "How do you select an element with id 'demo'?",
    options: ["#demo", ".demo", "demo", "*demo"],
    answer: "#demo",
  },
  {
    question: "How do you select elements with class name 'test'?",
    options: [".test", "#test", "*test", "test"],
    answer: ".test",
  },
];

const bootstrapQuestions = [
  {
    question: "What is Bootstrap?",
    options: [
      "A CSS framework",
      "A JavaScript library",
      "A backend framework",
      "A database management system",
    ],
    answer: "A CSS framework",
  },
  {
    question: "Which class provides a full-width container in Bootstrap?",
    options: [
      ".container",
      ".container-fluid",
      ".container-full",
      ".container-wide",
    ],
    answer: ".container-fluid",
  },
  {
    question: "How do you create a button with Bootstrap?",
    options: [
      "<button class='btn'>Button</button>",
      "<button class='bootstrap-btn'>Button</button>",
      "<button class='button'>Button</button>",
      "<button class='btn-button'>Button</button>",
    ],
    answer: "<button class='btn'>Button</button>",
  },
  {
    question: "Which class is used to create a basic alert box in Bootstrap?",
    options: [".alert", ".alert-box", ".alert-container", ".alert-message"],
    answer: ".alert",
  },
  {
    question:
      "Which Bootstrap class can be used to add a responsive fixed width container?",
    options: [
      ".container",
      ".fixed-container",
      ".responsive-container",
      ".container-fixed",
    ],
    answer: ".container",
  },
  {
    question: "How do you create a navigation bar in Bootstrap?",
    options: [
      "<nav class='navbar'>...</nav>",
      "<div class='nav'>...</div>",
      "<header class='navigation'>...</header>",
      "<section class='nav-bar'>...</section>",
    ],
    answer: "<nav class='navbar'>...</nav>",
  },
  {
    question:
      "Which class would you use to create a large button in Bootstrap?",
    options: [".btn-lg", ".btn-large", ".btn-big", ".btn-xl"],
    answer: ".btn-lg",
  },
  {
    question: "How can you make a Bootstrap button disabled?",
    options: [
      "Add the class 'disabled'",
      "Add the attribute 'disabled'",
      "Both of the above",
      "None of the above",
    ],
    answer: "Both of the above",
  },
  {
    question: "Which class is used to create a badge in Bootstrap?",
    options: [".badge", ".label", ".tag", ".marker"],
    answer: ".badge",
  },
  {
    question: "Which Bootstrap class is used for pagination?",
    options: [".pagination", ".pager", ".pages", ".nav-pagination"],
    answer: ".pagination",
  },
];

const jsQuestions = [
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    options: [
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script name='xxx.js'>",
      "<script file='xxx.js'>",
    ],
    answer: "<script src='xxx.js'>",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "alert('Hello World');",
      "msg('Hello World');",
      "msgBox('Hello World');",
      "alertBox('Hello World');",
    ],
    answer: "alert('Hello World');",
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function myFunction()",
      "function:myFunction()",
      "function = myFunction()",
      "function => myFunction()",
    ],
    answer: "function myFunction()",
  },
  {
    question: "How do you call a function named 'myFunction'?",
    options: [
      "myFunction()",
      "call myFunction()",
      "call function myFunction()",
      "execute myFunction()",
    ],
    answer: "myFunction()",
  },
  {
    question: "How do you write an IF statement in JavaScript?",
    options: ["if (i == 5)", "if i = 5 then", "if i == 5 then", "if (i = 5)"],
    answer: "if (i == 5)",
  },
  {
    question: "How does a WHILE loop start?",
    options: [
      "while (i <= 10)",
      "while i = 1 to 10",
      "while (i <= 10; i++)",
      "while (i == 10)",
    ],
    answer: "while (i <= 10)",
  },
  {
    question: "How can you add a comment in JavaScript?",
    options: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "' This is a comment",
      "# This is a comment",
    ],
    answer: "// This is a comment",
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "var colors = ['red', 'green', 'blue']",
      "var colors = 'red', 'green', 'blue'",
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = {'red', 'green', 'blue'}",
    ],
    answer: "var colors = ['red', 'green', 'blue']",
  },
  {
    question: "How do you find the number with the highest value of x and y?",
    options: ["Math.max(x, y)", "ceil(x, y)", "Math.ceil(x, y)", "top(x, y)"],
    answer: "Math.max(x, y)",
  },
  {
    question: "How do you round the number 7.25 to the nearest integer?",
    options: ["Math.round(7.25)", "rnd(7.25)", "Math.rnd(7.25)", "round(7.25)"],
    answer: "Math.round(7.25)",
  },
];

const jsLevel2Questions = [
  {
    question:
      "Which built-in method combines the text of two strings and returns a new string?",
    options: ["concat()", "append()", "attach()", "combine()"],
    answer: "concat()",
  },
  {
    question:
      "Which built-in method returns the characters in a string beginning at the specified location?",
    options: ["substr()", "getSubstring()", "slice()", "split()"],
    answer: "substr()",
  },
  {
    question:
      "Which method returns the index within the calling String object of the first occurrence of the specified value?",
    options: ["indexOf()", "search()", "find()", "locate()"],
    answer: "indexOf()",
  },
  {
    question: "What will the code `console.log(typeof NaN);` output?",
    options: ["number", "NaN", "undefined", "string"],
    answer: "number",
  },
  {
    question:
      "Which of the following function of Number object returns a string value version of the current number?",
    options: ["toString()", "toFixed()", "toLocaleString()", "toPrecision()"],
    answer: "toString()",
  },
  {
    question:
      "Which of the following function of Array object adds and/or removes elements from an array?",
    options: ["splice()", "split()", "push()", "concat()"],
    answer: "splice()",
  },
  {
    question: "What is the purpose of the `bind()` method in JavaScript?",
    options: [
      "To create a new function with the same body and scope",
      "To bind an event to an HTML element",
      "To merge two arrays",
      "To clone an object",
    ],
    answer: "To create a new function with the same body and scope",
  },
  {
    question:
      "Which of the following methods removes the last element from an array and returns that element?",
    options: ["pop()", "push()", "splice()", "shift()"],
    answer: "pop()",
  },
  {
    question: "What will the code `console.log(0.1 + 0.2 === 0.3);` output?",
    options: ["false", "true", "undefined", "null"],
    answer: "false",
  },
  {
    question:
      "Which statement best describes the 'this' keyword in JavaScript?",
    options: [
      "It refers to the object from where it was called",
      "It refers to the current function",
      "It refers to the global object",
      "It is a reference to the function's prototype",
    ],
    answer: "It refers to the object from where it was called",
  },
];

const jsLevel3Questions = [
  {
    question:
      "What will be the output of the following code?\n```javascript\nconsole.log(('b' + 'a' + + 'a' + 'a').toLowerCase());\n```",
    options: ["banana", "baNaNa", "baaaa", "undefined"],
    answer: "banana",
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A function having access to its own scope only",
      "A function having access to the scope of its parent function",
      "A function having access to the global scope only",
      "A function having access to its own scope and the scope of the parent function",
    ],
    answer:
      "A function having access to its own scope and the scope of the parent function",
  },
  {
    question: "What is the difference between `==` and `===` in JavaScript?",
    options: [
      "`==` checks for value equality, `===` checks for both value and type equality",
      "`==` checks for type equality, `===` checks for value equality",
      "`==` is used for comparison, `===` is used for assignment",
      "There is no difference",
    ],
    answer:
      "`==` checks for value equality, `===` checks for both value and type equality",
  },
  {
    question: "What is the use of the `apply()` method in JavaScript?",
    options: [
      "To call a function with a given `this` value and arguments provided as an array",
      "To apply a style to an HTML element",
      "To bind a function to an object",
      "To merge two objects",
    ],
    answer:
      "To call a function with a given `this` value and arguments provided as an array",
  },
  {
    question:
      "Which method is used to create a new array with all elements that pass the test implemented by the provided function?",
    options: ["filter()", "map()", "forEach()", "some()"],
    answer: "filter()",
  },
  {
    question:
      "What will be the output of the following code?\n```javascript\n(function() {\n    var a = b = 5;\n})();\nconsole.log(b);\n```",
    options: ["5", "undefined", "ReferenceError", "TypeError"],
    answer: "5",
  },
  {
    question:
      "What is the difference between `null` and `undefined` in JavaScript?",
    options: [
      "`null` represents the intentional absence of any object value, `undefined` represents an uninitialized variable",
      "`null` represents an uninitialized variable, `undefined` represents the intentional absence of any object value",
      "`null` and `undefined` are the same",
      "Both `null` and `undefined` represent the absence of a value",
    ],
    answer:
      "`null` represents the intentional absence of any object value, `undefined` represents an uninitialized variable",
  },
  {
    question:
      "What will be the output of the following code?\n```javascript\nlet obj = { a: 1, b: 2, a: 3 };\nconsole.log(obj);\n```",
    options: [
      "{ a: 1, b: 2 }",
      "{ a: 3, b: 2 }",
      "{ a: 3, b: 1 }",
      "SyntaxError",
    ],
    answer: "{ a: 3, b: 2 }",
  },
  {
    question: "How can you check if an object is an array in JavaScript?",
    options: [
      "Array.isArray(obj)",
      "obj.isArray()",
      "typeof obj === 'array'",
      "obj instanceof Array",
    ],
    answer: "Array.isArray(obj)",
  },
  {
    question:
      "What will be the output of the following code?\n```javascript\nconsole.log(typeof typeof 1);\n```",
    options: ["number", "string", "undefined", "object"],
    answer: "string",
  },
];

