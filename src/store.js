import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* 测试数据 */
const date = 'Mon Oct 17 2016 00:00:00 GMT+0800 (中国标准时间)'
const ruleForm = {
    name: '测试活动',
    fenLeis:[
        {name: '未发布'},
        {name: '测试活动'},
        {name: '精彩活动'}
    ],
    fenLei: '未发布',
    tags: [{name:'喳喳'}],
    activeStartTimeDate: date,
    activeStartTimeTime: '00:45',
    activeEndTimeDate: date,
    activeEndTimeTime: '00:45',
    signStartTimeDate: date,
    signStartTimeTime: '00:45',
    signEndTimeDate: date,
    signEndTimeTime: '00:45',
    activePerson:'',
    activePersonNum:'',
    activeDescribe:'',
    UseMsgShow:'',
    evaluate:'',
    adTitle:'',
    adContent:'',
    adLink:'',
    province:'广东省',
    city:'广州市',
    detail:'番禺区广州大学城超谷科技园'
}

const signForm ={
    signUpLimit: '无限制',
    numLimit: '无限制',
    numLimitDetail: '',
    cost: '免费',
    costDetail: '',
    cancel: '不允许',
    audit: '不需要',
    needName: true,
    needTel: true,
    signFormList:[
        {title:'姓名',require:true},
        {title:'手机',require:true},
        {title:'性别',require:true},
        {title:'婚姻状况',require:true}
    ],
    sign: '必须报名',
    signType: '签到二维码',
    secretCode: ''
}

const shareForm ={
    title: '分享Allen的祖传链接',
    describe: '这个链接很吊！'
}

const selfForm ={
    signUpSuccess:true,       // 报名成功
    signUpSuccessText:'您已成功报名***(默认活动标题名)活动',
    auditSuccess:true,
    auditSuccessText:'您报名的***(默认活动标题名)活动，已审核通过',
    auditFailed:true,
    auditFailedText:'您报名的***(默认活动标题名)活动，审核不通过',
    signInSuccess:true,
    signInSuccessText:'***(默认用户名)您好！恭喜您签到成功！',
    signInFailed:true,
    signInFailedText:'抱歉，签到失败',
    signInDouble:true,
    signInDoubleText:'请勿重复签到！',
    remind:'不提醒',
    remindTime:'',
    remindText:'',
    useScore:'不使用',
    useScoreNum:'',
    signUpScore:'无积分',
    signUpScoreNum:'',
    shareScore:'无积分',
    shareScoreNum:'',
    shareReadScore:'无积分',
    shareReadScoreNum:'',
    shareReadScoreNumMax:'',
    shareSignUp:'无积分',
    shareSignUpNum:'',
    shareSignUpNumMax:'',
    afterShare:'',
    afterShareLink:'',
    afterSingUp:'',
    afterSingUpLink:'',
    shareImg:'',
    shareImgUrl:''
}
const data = [
    {
        id:'1111',
        name: 'Allen',
        type:'测试活动',
        status:'未开始',
        readNum:200,
        signUpNum:100,
        auditNum:5,
        activeMessage:{}
    },
    {
        id:'2222',
        name: '王小虎',
        type:'测试活动',
        status:'已结束',
        readNum:200,
        signUpNum:100,
        auditNum:8,
        activeMessage:{}
    }
]
/* 活动管理测试数据 */
/*
 * ruleForm  1、活动信息的表单
 * signFrom  2、报名的表单
 * shareFrom 3、报名的表单
 * selfFrom  4、个性设置的表单
 * activeList 活动列表
 * */
const state = {
    ruleForm: ruleForm,
    signForm: {},
    shareForm: {},
    selfForm: {},
    activeList:data
}

/* 从本地存储读取数据 */
for(var item in state){
  localStorage.getItem(item)?
    state[item] = JSON.parse(localStorage.getItem(item)): false;
}

const mutations = {
    setRuleForm(state, payload) {
        Object.assign(state.ruleForm, payload);
        localStorage.setItem('ruleForm',JSON.stringify(payload));
    },
    setSignForm(state, payload) {
        Object.assign(state.signForm, payload);
      localStorage.setItem('signForm',JSON.stringify(payload));

    },
    setShareForm(state, payload) {
        Object.assign(state.shareForm, payload);
      localStorage.setItem('shareForm',JSON.stringify(payload));
    },
    setSelfForm(state, payload) {
        Object.assign(state.selfForm, payload);
      localStorage.setItem('selfForm',JSON.stringify(payload));
    }
}

export default  new Vuex.Store({
    state,
    mutations
})
