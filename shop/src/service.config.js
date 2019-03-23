const MOCKURL='http://www.alin.com/';//mock模拟的url
const SERVER='http://localhost:3000';//真实url
const URL={
    getVarietyItem : MOCKURL + 'getVarietyItem',
    getHotProduct : MOCKURL + 'getHotProduct',
    registUser : SERVER+'/user/registUser',//控制器user.js下的registUser方法,user在index.js中命名
    loginUser : SERVER+'/user/loginUser',
    getTypes:SERVER+'/type/getTypes',
    getProductByType:SERVER+'/product/getProductByType'
};
export default URL;//??大写