# B 端菜单组件
> 基于Vue.js 的 前端业务组件。

## B 端菜单组件
> Vue 引入

<wk-menu :curMenuArr="menuArr"/>

```` html
<wk-menu :curMenuArr="menuArr"/>
````

## API

### 属性

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|curMenuArr|菜单数组|Array|是|{phone: \'\',imgLink: \'\'}|
|cusCompany|公司信息|Object|否|{logo: \'\',name: \'\',version: \'\',versionImg: \'\',logoutIcon:: \'\'}|
|cusStyleType|菜单展示样式('1'：logo与公司名之间有分隔线，'2'：logo与公司名之间无分隔线,前提条件必须有logo )|Sting|否|'1'|

### 方法

|事件名|说明|返回值|
|---|------|-----|
|editorInfoClick|编辑机构资料|--|
|logoutClick|退出登录|--|

<script>
import WkMenu from './Menu';

export default {
  data() {
    return {
      menuArr:[
        {
          name:'应用管理',
          icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589198111077&di=3b683f0dfccfa94df2edbd2b4d3d4d77&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
          id:1,
          url:'http://www.baidu.com'
        },
         {
           name:'数据管理',
            icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589198111077&di=3b683f0dfccfa94df2edbd2b4d3d4d77&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
           id:2,

            menuPermissionDTOList:[
                          {
                           name: "数据列表",
                           parentId: 1,
                           id:9,
                           icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589198111077&di=3b683f0dfccfa94df2edbd2b4d3d4d77&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
                           url:'http://152.136.69.11/course.html#/',
                          },
                          {
                              name: "添加数据",
                              parentId: 1,
                              id:11,
                                                                                  icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589198111077&di=3b683f0dfccfa94df2edbd2b4d3d4d77&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
                             url:'http://152.136.69.11/marketing.html#/',
                          }
                      ]
         },
          {
            name:'教务管理',
             icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589198111077&di=3b683f0dfccfa94df2edbd2b4d3d4d77&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
             id:13,
              url:'',
               menuPermissionDTOList:[
                            {
                             name: "下线课管理",
                             parentId: 13,
                             id:18,
                             icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589198111077&di=3b683f0dfccfa94df2edbd2b4d3d4d77&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
                              url:'',
                            },
                             {
                               name: "直播课管理",                                                                        parentId: 11,                                                                             id:10,
                                                                                        icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589198111077&di=3b683f0dfccfa94df2edbd2b4d3d4d77&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
                                                                                                                         url:'',
                             },
                               {
                             name: "下线课管理",
                             parentId: 13,
                             id:8,
                             icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589198111077&di=3b683f0dfccfa94df2edbd2b4d3d4d77&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
                              url:'',
                            },
                             {
                               name: "直播课管理",                                                                        parentId: 13,                                                                             id:110,
                                                                                        icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589198111077&di=3b683f0dfccfa94df2edbd2b4d3d4d77&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
                                                                                                                         url:'',
                             },
                               {
                             name: "下线课管理",
                             parentId: 13,
                             id:118,
                             icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589198111077&di=3b683f0dfccfa94df2edbd2b4d3d4d77&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
                              url:'',
                            },
                             {
                               name: "直播课管理",                                                                        parentId: 13,                                                                             id:1110,
                                                                                        icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589198111077&di=3b683f0dfccfa94df2edbd2b4d3d4d77&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
                                                                                                                         url:'',
                             },
                               {
                             name: "下线课管理",
                             parentId: 13,
                             id:11118,
                             icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589198111077&di=3b683f0dfccfa94df2edbd2b4d3d4d77&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
                              url:'',
                            },
                             {
                               name: "直播课管理",                                                                        parentId: 13,                                                                             id:110,
                                                                                        icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589198111077&di=3b683f0dfccfa94df2edbd2b4d3d4d77&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
                                                                                                                         url:'',
                             },
                               {
                             name: "下线课管理",
                             parentId: 13,
                             id:118,
                             icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589198111077&di=3b683f0dfccfa94df2edbd2b4d3d4d77&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
                              url:'',
                            },
                             {
                               name: "直播课管理",                                                                        parentId: 13,                                                                             id:23,
                                                                                        icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589198111077&di=3b683f0dfccfa94df2edbd2b4d3d4d77&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
                                                                                                                         url:'',
                             }
                        ]
          },
      ],
    };
  },
  beforeCreate() {

  },
  components: {
    WkMenu,
  },
}
</script>
<style lang="less" scope>
@import 'assets/style/menu.less';
</style>
