# B 端菜单组件
> 基于Vue.js 的 前端业务组件。

## B 端菜单组件
> Vue 引入

<wk-menu :curMenuArr="menuArr" :cusComLogo="comLogo"/>

```` html
<wk-menu :curMenuArr="menuArr" :cusComLogo="comLogo"/>
````

## API

### 属性

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|curMenuArr|菜单数组{icon: \'\',id: \'\',name:\'\',url: \'\',totalUrl: \'\',menuPermissionDTOList\[\]},其中menuPermissionDTOList代表子菜单|Array|是|--|
|isToWinUrl|是否全路径跳转 |Boolean|否|false|
/cusComLogo/菜单头部logo |String|否|--|
/curPath/对比路径 |String|是|--|

### 方法

|事件名|说明|返回值|
|---|------|-----|
|toPage|一级菜单跳转|item, index, ishaveChild，其中ishaveChild有两个值haveChild代表有子节点,noHaveChild代表无子节点|
|toSonPage|二级菜单跳转|item, sonItem, index|
|customHomeClick|点击logo|--|

<script>
import WkMenu from './Menu';

export default {
  data() {
    return {
      menuArr:
      [
                             {
                                     		name: '应用管理',
                                     		icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589198111077&di=3b683f0dfccfa94df2edbd2b4d3d4d77&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
                                     		id: 1,
                                     		url: 'http://www.baidu.com',
                                     		totalUrl: 'http://localhost:8080/menu/zh-cn.html'
                                     	},
                                     	{
                                     		name: '数据管理',
                                     		icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589198111077&di=3b683f0dfccfa94df2edbd2b4d3d4d77&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
                                     		id: 2,
                       
                                     		menuPermissionDTOList: [{
                                     				name: "数据列表",
                                     				parentId: 1,
                                     				id: 21,
                                     				icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589198111077&di=3b683f0dfccfa94df2edbd2b4d3d4d77&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
                                     				url: 'http://152.136.69.11/course.html#/',
                                     					totalUrl: 'http://www.baidu.com'
                                     			},
                                     			{
                                     				name: "添加数据",
                                     				parentId: 1,
                                     				id: 22,
                                     				icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589198111077&di=3b683f0dfccfa94df2edbd2b4d3d4d77&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
                                     				url: 'http://152.136.69.11/marketing.html#/',
                                     					totalUrl: 'http://www.baidu.com'
                                     			}
                                     		]
                                     	}
                                  
                                     ],
      comLogo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589198111077&di=3b683f0dfccfa94df2edbd2b4d3d4d77&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
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
