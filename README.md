####Object.getOwnPropertyDescriptors

Simple benchmark.js-based benchmarks for Object.getOwnPropertyDescriptors.

Not a lot of time has been spent tuning each benchmark, so the results may not
be super reliable.

This can be run with Node.js v6.3.1, with the following commands:

```bash
git clone https://github.com/caitp/getOwnPropertyDescriptors-bench.git

cd getOwnPropertyDescriptors-bench

npm install

node --harmony-object-own-property-descriptors .
```

Earlier versions may not include Object.getOwnPropertyDescriptors natively.

-------------------------------------------------------------------------------

These benchmarks compare native implementations with those implemented in the
original proposal's reference implementation
(https://github.com/tc39/proposal-object-getownpropertydescriptors), effectively
comparing the performance between a native implementation, and one implemented
in user-space.

Currently, the results appear to make the V8 native implementation look good,
typically running more than 2x the speed of the polyfill.

It is encouraged to submit additional tests, to compare object representations
involving API-created objects, various V8 elements representations, Proxy
objects, etc.

-------------------------------------------------------------------------------

####MIT License

Copyright (c) 2016 Caitlin Potter and Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
