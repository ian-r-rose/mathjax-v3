/*
 * Processes a document without inserting the font-face CSS
 */

import {MathJax} from 'mathjax3/mathjax.js';
import {HTMLHandler} from 'mathjax3/handlers/html/HTMLHandler.js';

import {TeX} from 'mathjax3/input/tex.js';
import {CHTML} from 'mathjax3/output/chtml.js';
import {TeXFont} from 'mathjax3/output/chtml/fonts/tex.js';

MathJax.handlers.register(new HTMLHandler());

//
// Override styleSheet() method of CHTML to produce emoty style sheet
//
class myCHTML extends CHTML {
    styleSheet(html) {
        const sheet = this.html('style');
        sheet.id = 'CHTML-styles';
        return sheet;
    }
}

//
// The options for the MathJax document
//
const OPTIONS = {
    InputJax: new TeX(),
    OutputJax: new myCHTML()
};

//
// The HTML to process (from command line, or a default)
//
const HTML = process.argv[3] || 'This is some math: \\(\\sin(x+1)\\)';

let html;
try {
    //
    //  Use browser document, if there is one
    //
    html = MathJax.document(document, OPTIONS);
    document.body.insertBefore(document.createElement('hr'), document.body.firstChild);
    var div = document.createElement('div');
    div.innerHTML = HTML; div.style.marginBottom = '1em';
    document.body.insertBefore(div, document.body.firstChild);
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
    OPTIONS.OutputJax.nodes.document = html.document; // shouldn't be needed
}

//
// Process the document
//
html.findMath()
    .compile()
    .getMetrics()
    .typeset()
    .updateDocument();

//
// Print the result
//
console.log(html.document.body.parentNode.outerHTML);
