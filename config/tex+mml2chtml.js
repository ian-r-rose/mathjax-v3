import {MathJax} from "../v3/mathjax3/mathjax.js";
import "../v3/mathjax3/handlers/html.js";
import {TeX} from "../v3/mathjax3/input/tex.js";
import {MathML} from "../v3/mathjax3/input/mathml.js";
import {CHTML} from "../v3/mathjax3/output/chtml.js";

let html = MathJax.Document(document, {
  InputJax: [new TeX(), new MathML()],
  OutputJax: new CHTML()
});

MathJax.HandleRetriesFor(function () {

    html.FindMath()
        .Compile()
        .GetMetrics()
        .Typeset()
        .UpdateDocument();

}).catch(err => {
  console.log(err.message);
  console.log(err.stack.replace(/\n.*\/system\.js:(.|\n)*/,""));
});
