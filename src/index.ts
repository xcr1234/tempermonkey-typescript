// 引入第三方模块：
// 例如引入lodash，在写代码时有代码提示
import * as _ from 'lodash'
// 引入项目中的文件：
import Test from './test'

// => { '4': 1, '6': 2 }
console.log(_.countBy([6.1, 4.2, 6.3], Math.floor))

const test = new Test()
test.doTest()

console.log('new content')
