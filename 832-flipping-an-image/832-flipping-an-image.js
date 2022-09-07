/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
     return image.map(a=>{return a.reverse().map(b=>b^1)})
};