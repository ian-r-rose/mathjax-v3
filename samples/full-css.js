/*
 * Prints the CSS used for the CHTML output
 */

import {MathJax} from 'mathjax3/mathjax.js';
import {HTMLHandler} from 'mathjax3/handlers/html/HTMLHandler.js';
import {CHTML} from 'mathjax3/output/chtml.js';

MathJax.handlers.register(new HTMLHandler());

const chtml = new CHTML();

const html = MathJax.document('<html></html>', {OutputJax: chtml});
chtml.nodes.document = html.document; // shouldn't be needed

console.log(chtml.styleSheet(html).innerHTML);
