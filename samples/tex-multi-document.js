import {MathJax} from "mathjax3/mathjax.js";

import {TeX} from "mathjax3/input/tex.js";
import {CHTML} from "mathjax3/output/chtml.js";
import {RegisterHTMLHandler} from "mathjax3/handlers/html.js";
import {chooseAdaptor} from "mathjax3/adaptors/chooseAdaptor.js";

RegisterHTMLHandler(chooseAdaptor());

let OPTIONS = {
  InputJax: new TeX(),
  OutputJax: new CHTML()
};

let HTML = `
  <p id='p1' class="math">
  This is \\$ some math: \\(x+1\\).
  </p>
  <p id='p2'>
  \\[x+1\\over x-1\\]
  and more
  \\(\\sin(x^2)\\)
  </p>
`;

var html;
try {
  //
  //  Use browser document, if there is one
  //
  html = MathJax.document(document,OPTIONS);
  document.body.insertBefore(document.createElement("hr"),document.body.firstChild);
  var div = document.createElement('div');
  div.innerHTML = HTML; div.style.marginBottom = "1em";
  document.body.insertBefore(div,document.body.firstChild);
} catch (err) {
  //
  //  Otherwise, make a new document (measurements not supported here)
  //
  html = MathJax.document(
    '<html><head><title>Test MathJax3</title></head><body>'
    + HTML +
    '</body></html>',
    OPTIONS
  );
}

MathJax.handleRetriesFor(function () {

    html.findMath({elements:['#p1']})
        .compile()
        .getMetrics()
        .typeset()
        .updateDocument()
        .reset();
        
    console.log(html.document.body.parentNode.outerHTML);

}).catch(err => {
  console.log(err.message);
  console.log(err.stack.replace(/\n.*\/system\.js:(.|\n)*/,""));
});
