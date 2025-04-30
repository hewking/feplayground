/**
 *  实现一个函数 flattenDictionary，将一个多层嵌套的字典（对象）转换为只有一层的扁平字典。扁平化的过程中，
 * 键名需要通过路径合并，以点号（.）连接。
 * 
 * 
 * 输出结果示例：
{
  "a": 1,
  "b.c": 2,
  "b.d.e": 3,
  "f": 4,
  "g.h": [1, 2, 3]
}
 */

var obj = {
    "a": 1,
    "b": {
      "c": 2,
      "d": {
        "e": 3
      }
    },
    "f": 4,
    "g": {
      "h": [1, 2, 3]
    }
  }

  
  function flattenDictionary(nestedObj, result = {}, parentKey) {
    
    const keys = Object.keys(nestedObj);

    for(let key of keys) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;

        if (nestedObj[key] instanceof Object && !Array.isArray(nestedObj[key])) {
            const innerObj = nestedObj[key];
            const innerKeys = Object.keys(innerObj);

            // for (let innerKey of innerKeys) {
            //     result[path + '.' + innerKey] = innerObj[innerKey];
            //     // result[key + '.' + innerKey] = innerObj[innerKey];
            // }
            flattenDictionary(nestedObj[key], result, newKey);
        } else {
            result[newKey] = nestedObj[key];
        }
    }

    return result;

  }
  
  console.log(flattenDictionary(obj))
