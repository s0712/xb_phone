uglifyjs js/abc.js  -m -o js/abc.min.js   
 babel js/abc.js -o js/ddd.js
 scss 直接保存

uglifyjs 1.js 2.js 3.js -o all.min.js
uglifyjs js/*.js -o js/all.min.js



uglifyjs js/fz.js js/index.js js/lx.js  -o js/all.min.js
babel js --out-dir js