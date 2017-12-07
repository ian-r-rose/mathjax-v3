/*
 * Prints the @font-face CSS directives for the CHTML TeX font
 */

import {TeXFont} from 'mathjax3/output/chtml/fonts/tex.js';
import {CssStyles} from 'mathjax3/output/chtml/CssStyles.js';

class myFont extends TeXFont {}
myFont.defaultVariants = [];
myFont.defaultDelimiters = {};
myFont.defaultChars = {};
myFont.defaultVariantClasses = {};
myFont.defaultStyles = {};

const font = new myFont({
    fontURL: 'mathjax2/css'  // your URL here
});

const styles = new CssStyles();
styles.addStyles(font.styles);

console.log(styles.cssText);
