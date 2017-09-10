# moveJS

MoveJS is a small JavaScript library that lets the user move absolute positioned elements.

## Installation

With [npm](https://www.npmjs.com/package/move_js):
```
  $ npm install move_js
``` 
With a stand-alone build:
```
  <script src='moveJS.min.js'></script> 
```
## Usage

Add movable element:
```
  move.addMovableElement(CSS_Selector);
```
Remove movable element:
```
  move.removeMovableElement(CSS_Selector);
```
Get information about moveJS, e.g. version, author, description, et cetera:
```
  move.information;
```
Get all movable elements:
```
  move.movableElements
```

## Example

We want the user to be able to move a *div* with the id *container*

HTML:
```
  <div id="container" style="position:absolute"></div>
```
JavaScript:
```
  move.addMovableElement("#container");
```

## License

(MIT License)

Copyright (c) 2017 Leonard Maass

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
