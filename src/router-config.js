
import activePublic from './page/activePublic/index.vue'
import step1 from './page/activePublic/step1.vue'
import step2 from './page/activePublic/step2.vue'
import step3 from './page/activePublic/step3.vue'
import step4 from './page/activePublic/step4.vue'

import totalpages from './page/activeManage/totalpages.vue'
import activeManage from './page/activeManage/index.vue'
import detail from './page/activeManage/detail.vue'

import page1 from './page/activeManage/page1.vue'
import page2 from './page/activeManage/page2.vue'
import page3 from './page/activeManage/page3.vue'
import page4 from './page/activeManage/page4.vue'
import page5 from './page/activeManage/page5.vue'


export default [
  {
    path: '/activeManage',component:totalpages,
    children:[
      { path: ''      , component: activeManage  },
      {
        path: 'detail', component: detail,

        children: [
          {path:'',component: page1},
          {
            path: 'page1', component: page1,
            children: [
              {path: '', component: step1},
              {path: 'step1', component: step1},
              {path: 'step2', component: step2},
              {path: 'step3', component: step3},
              {path: 'step4', component: step4}
            ]
          },
          { path: 'page2', component: page2  },
          { path: 'page3', component: page3  },
          { path: 'page4', component: page4  },
          { path: 'page5', component: page5  }
        ]
      },
    ]
  },{
    path:'/activePublic',component:activePublic,
    children:[
      { path: ''      , component: step1  },
      { path: 'step1', component: step1  },
      { path: 'step2', component: step2  },
      { path: 'step3', component: step3  },
      { path: 'step4', component: step4  }
    ]
  }
]
