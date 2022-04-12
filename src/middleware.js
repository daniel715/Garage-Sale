//type1 test.js
//this type will be used as router.beforeEach
export default ({to,from,next}) => {}


//type2 test2.js
//this type will be used as router.beforeEach and router.afterEach
const beforeEach = ({to,from,next}) => {};
const afterEach = ({to,from}) => {};
export default {beforeEach,afterEach};