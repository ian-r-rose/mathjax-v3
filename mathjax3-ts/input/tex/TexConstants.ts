/*************************************************************
 *
 *  Copyright (c) 2017 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


/**
 * @fileoverview Constant definitions for the TeX Parser. These should
 *     eventually be combined with the MathML structure.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */

export namespace TexConstant {

  export const Inherit = '_inherit_';

  export const Auto = '_auto_';

  export const Size = {
    INFINITY: 'infinity',
    SMALL: 'small',
    NORMAL: 'normal',
    BIG: 'big'
  };

  export const Color = {
    TRANSPARENT: 'transparent'
  };

  export const Variant = {
    NORMAL: 'normal',
    BOLD: 'bold',
    ITALIC: 'italic',
    BOLDITALIC: 'bold-italic',
    DOUBLESTRUCK: 'double-struck',
    FRAKTUR: 'fraktur',
    BOLDFRAKTUR: 'bold-fraktur',
    SCRIPT: 'script',
    BOLDSCRIPT: 'bold-script',
    SANSSERIF: 'sans-serif',
    BOLDSANSSERIF: 'bold-sans-serif',
    SANSSERIFITALIC: 'sans-serif-italic',
    SANSSERIFBOLDITALIC: 'sans-serif-bold-italic',
    MONOSPACE: 'monospace',
    INITIAL: 'inital',
    TAILED: 'tailed',
    LOOPED: 'looped',
    STRETCHED: 'stretched',
    CALIGRAPHIC: '-tex-caligraphic',
    OLDSTYLE: '-tex-oldstyle'
  };

  export const Form = {
    PREFIX: 'prefix',
    INFIX: 'infix',
    POSTFIX: 'postfix'
  };

  export const LineBreak = {
    AUTO: 'auto',
    NEWLINE: 'newline',
    NOBREAK: 'nobreak',
    GOODBREAK: 'goodbreak',
    BADBREAK: 'badbreak'
  };

  export const LineBreakStyle = {
    BEFORE: 'before',
    AFTER: 'after',
    DUPLICATE: 'duplicate',
    INFIXLINBREAKSTYLE: 'infixlinebreakstyle'
  };

  export const IndentAlign = {
    LEFT: 'left',
    CENTER: 'center',
    RIGHT: 'right',
    AUTO: 'auto',
    ID: 'id',
    INDENTALIGN: 'indentalign'
  };

  export const IndentShift = {
    INDENTSHIFT: 'indentshift'
  };

  export const LineThickness = {
    THIN: 'thin',
    MEDIUM: 'medium',
    THICK: 'thick'
  };

  export const Notation = {
    LONGDIV: 'longdiv',
    ACTUARIAL: 'actuarial',
    RADICAL: 'radical',
    BOX: 'box',
    ROUNDEDBOX: 'roundedbox',
    CIRCLE: 'circle',
    LEFT: 'left',
    RIGHT: 'right',
    TOP: 'top',
    BOTTOM: 'bottom',
    UPDIAGONALSTRIKE: 'updiagonalstrike',
    DOWNDIAGONALSTRIKE: 'downdiagonalstrike',
    UPDIAGONALARROW: 'updiagonalarrow',
    VERTICALSTRIKE: 'verticalstrike',
    HORIZONTALSTRIKE: 'horizontalstrike',
    PHASORANGLE: 'phasorangle',
    MADRUWB: 'madruwb'
  };

  export const Align = {
    TOP: 'top',
    BOTTOM: 'bottom',
    CENTER: 'center',
    BASELINE: 'baseline',
    AXIS: 'axis',
    LEFT: 'left',
    RIGHT: 'right'
  };

  export const Lines = {
    NONE: 'none',
    SOLID: 'solid',
    DASHED: 'dashed'
  };

  export const Side = {
    LEFT: 'left',
    RIGHT: 'right',
    LEFTOVERLAP: 'leftoverlap',
    RIGHTOVERLAP: 'rightoverlap'
  };

  export const Width = {
    AUTO: 'auto',
    FIT: 'fit'
  };

  export const Actiontype = {
    TOGGLE: 'toggle',
    STATUSLINE: 'statusline',
    TOOLTIP: 'tooltip',
    INPUT: 'input'
  };

  export const Length = {
    VERYVERYTHINMATHSPACE: 'veryverythinmathspace',
    VERYTHINMATHSPACE: 'verythinmathspace',
    THINMATHSPACE: 'thinmathspace',
    MEDIUMMATHSPACE: 'mediummathspace',
    THICKMATHSPACE: 'thickmathspace',
    VERYTHICKMATHSPACE: 'verythickmathspace',
    VERYVERYTHICKMATHSPACE: 'veryverythickmathspace',
    NEGATIVEVERYVERYTHINMATHSPACE: 'negativeveryverythinmathspace',
    NEGATIVEVERYTHINMATHSPACE: 'negativeverythinmathspace',
    NEGATIVETHINMATHSPACE: 'negativethinmathspace',
    NEGATIVEMEDIUMMATHSPACE: 'negativemediummathspace',
    NEGATIVETHICKMATHSPACE: 'negativethickmathspace',
    NEGATIVEVERYTHICKMATHSPACE: 'negativeverythickmathspace',
    NEGATIVEVERYVERYTHICKMATHSPACE: 'negativeveryverythickmathspace'
  };

  export const Overflow = {
    LINBREAK: 'linebreak',
    SCROLL: 'scroll',
    ELIDE: 'elide',
    TRUNCATE: 'truncate',
    SCALE: 'scale'
  };

  export const Unit = {
    EM: 'em',
    EX: 'ex',
    PX: 'px',
    IN: 'in',
    CM: 'cm',
    MM: 'mm',
    PT: 'pt',
    PC: 'pc'
  };

  export const TexClass = {
    ORD:   0,
    OP:    1,
    BIN:   2,
    REL:   3,
    OPEN:  4,
    CLOSE: 5,
    PUNCT: 6,
    INNER: 7,
    VCENTER: 8,
    NONE:   -1
  };

  export const TexClassNames = [
    'ORD',
    'OP',
    'BIN',
    'REL',
    'OPEN',
    'CLOSE',
    'PUNCT',
    'INNER',
    'VCENTER'
  ];

}
