import req from '@/utils/request'

// 获取图形验证码
export const Getgraphiccaptcha = params => req.get('/imagecode/', params)
// 发送短信验证码
export const Sendsms = params => req.get('/smscode/', params)
// 注册
export const Register = params => req.post('/register/', params)
// 发送邮件
export const Sendemail = params => req.get('/sendemail/', params)
// 登录
export const Login = params => req.post('/login/', params)
// 修改qq
// export const Changeqq = params => req.post('/changeqq/', params)
// 修改用户名qq
export const Changeusername = params => req.post('/changeusername/', params)
// 修改密码
export const Changepd = params => req.post('/changepd/', params)
// 获取新邮箱验证码
export const SendEmailCodeView = params => req.get('/sendEmailCodeView/', params)
// 修改邮箱
export const Changeemail = params => req.post('/changeemail/', params)
// 获取个人信息
export const Getinfo = params => req.get('/getinfo/', params)
//首页商品分类
export const Getcategory = params => req.get('/getcategory/', params)
//验证token
export const Verifytoken = params => req.get('/verifytoken/', params)
//查询广告
export const Getad = params => req.get('/getad/', params)
//展示商品
export const Merchandise = params => req.get('/querygoods/', params)
//查询项目id
export const Queryproject = params => req.get('/querytypeid/', params)
//担保发布
export const Secureddeal = params => req.post('/secureddeal/', params)
//查询担保
export const Querysecured = params => req.get('/querysecured/', params)
//取消担保
export const Cancelsecured = params => req.get('/cancelsecured/', params)
//委托发布
export const Entrustdeal = params => req.post('/entrustdeal/', params)
//查询经纪人
export const Querysupuser = params => req.get('/querysupuser/', params)
//验证经纪人
export const Verifystaff = params => req.get('/verifystaff/', params)
//签到
export const Sign = params => req.get('/sign/', params)
//修改手机号
export const Changemobile = params => req.post('/changemobile/', params)
//忘记密码
export const Forgetpassword = params => req.post('/forgetpassword/', params)
//查询担保详细信息
export const Querysecuredinfo = params => req.get('/querysecuredinfo/', params)
//查询签到
export const Querysign = params => req.get('/querysign/', params)
//查询订单
export const Queryorder = params => req.get('/queryorder/', params)
//查询消息
export const Querymessage = params => req.get('/querymessage/', params)
//消息操作
export const Altermessage = params => req.get('/altermessage/', params)
//资讯
export const Queryinfo = params => req.get('/queryinfo/', params)
//商品详情推荐
export const Recommendgoods = params => req.get('/recommendgoods/', params)