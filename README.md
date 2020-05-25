# B 端菜单组件

> Vue.js 2.x B端的业务组件。

## 安装

```
$ yarn add wkmenu
```

## B 端菜单组件

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

### 方法

|事件名|说明|返回值|
|---|------|-----|
|toPage|一级菜单跳转|item, index, ishaveChild，其中ishaveChild有两个值haveChild代表有子节点,noHaveChild代表无子节点|
|toSonPage|二级菜单跳转|item, sonItem, index|
## 需要的环境

- node.js >= 9.0.0
- npm >= 5.0.0

## 样式采用less

