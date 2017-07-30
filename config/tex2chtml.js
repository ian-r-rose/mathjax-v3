import {MathJax} from "../mathjax3/mathjax.js";
import "../mathjax3/handlers/html.js";
import {TeX} from "../mathjax3/input/tex.js";
import {CHTML} from "../mathjax3/output/chtml.js";

let html = MathJax.document(document, {
  InputJax: new TeX(),
  OutputJax: new CHTML()
});

MathJax.handleRetriesFor(function () {

    html.findMath()
        .compile()
        .getMetrics()
        .typeset()
        .updateDocument();

}).catch(err => {
  console.log(err.message);
  console.log(err.stack.replace(/\n.*\/system\.js:(.|\n)*/,""));
});
