//
// asScoreQueue = function(obj, comparator) {
//   obj = obj || {};
//   var storage = [];
//
//   obj.update = function update(deltaMillis) {
//     for(var i=0; i<storage.length; i++) {
//       storage[i].age += deltaMillis * 0.001;
//     }
//     storage.sort(comparator);
//   }
//
//   obj.push = function push(item) {
//     storage.push_back({ item: item, ageSeconds: 0 });
//   };
//
//   obj.pop = function pop(item) {
//     storage.pop();
//     throw "Not implemented";
//   };
// }
