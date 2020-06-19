<template>
  <div
    class="wkmenu"
    @scroll.stop.prevent
    @click.stop.prevent>
    <div class="wkmenu-solt" v-show="cusComLogo">
      <div class="wkmenu-solt-border">
        <img :src="cusComLogo"  class="wkmenu-logo-icons" @click="toHome"/>
      </div>
    </div>
    <div :style="styleHight?`height:${styleHight}`:''" class="wkmenu-box" @scroll.stop.prevent>
      <div v-for="(item,index) in menuArr">
        <!--默认第一项是首页-->
        <div v-if="index==0" class="wkmenu-content">
          <div  class="wkmenu-menuItem">
            <img class="wkmenu-menuItem-icon" :src="item.icon" alt="" @click="toggleItem(item,index)">
            <div class="wkmenu-menuItem-text" :class="{'wkmenu-menuItem-text-active':curId==item.id}" @click="toggleItem(item,index)">{{item.name}}</div>
<!--            <img :src="menuSwitchUp" v-if="switchAllFlag" alt="" class="wkmenu-menuswitchicon"  @click="toggleMenuSwitch">-->
            <img src="./assets/img/down_down.png" v-if="switchAllFlag" alt="" class="wkmenu-menuswitchicon"  @click="toggleMenuSwitch">
            <!-- :class="{'wkmenu-menuswitchicon-rotate':switchAllFlag}" -->
            <img src="./assets/img/down_up.png" alt="" v-if="!switchAllFlag"  class="wkmenu-menuswitchicon"  @click="toggleMenuSwitch">
          </div>
          <!--二级菜单-->
          <div class="wkmenu-menuItem-silder-content">
            <div v-for="sonItem in item.menuPermissionDTOList" v-show="item.dropDown" class="wkmenu-menuItem-side">
              <div class="wkmenu-menuItem-text-son" :class="{'wkmenu-menuItem-text-son-active':curId==sonItem.id}" @click="toggleSonItem(item,sonItem,index)">{{sonItem.name}}</div>
            </div>
          </div>
        </div>
        <!--一级菜单-->

        <div v-else class="wkmenu-content" :class="{'wkmenu-close':item.dropDown}">
          <div class="wkmenu-menuItem"  @click="toggleItem(item,index)">
            <img class="wkmenu-menuItem-icon" :src="item.icon" alt="">
            <div class="wkmenu-menuItem-text" :class="{'wkmenu-menuItem-text-active':curId==item.id}">{{item.name}}</div>
          </div>
          <!--二级菜单-->
          <div class="wkmenu-menuItem-silder-content"  >
            <div v-for="sonItem in item.menuPermissionDTOList"  class="wkmenu-menuItem-side">
              <div class="wkmenu-menuItem-text-son" :class="{'wkmenu-menuItem-text-son-active':curId==sonItem.id}" @click="toggleSonItem(item,sonItem,index)">{{sonItem.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'WkMenu',
    data() {
      return {
        menuArr: [],
        curId: '',
        switchAllFlag: false,
        styleHight: '',
        curActiveUrl: '',
      };
    },
    props: {
      // cusMenuHeight: {
      //   type: String,
      //   default: '',
      // },
      curPath: {
        type: String,
        default: '',
      },
      cusComLogo: {
        type: String,
        default: '',
      },
      curIdPrpo: {
        default: '',
      },
      isToWinUrl: {
        type: Boolean,
        default: false,
      },
      curMenuArr: {
        type: Array,
        default: [],
      },
      menuSwitchDown: {
        type: String,
        default: 'https://online-edu-1259575047.cos.ap-beijing.myqcloud.com/pcapp/common/dropDown.png',
      },
      menuSwitchUp: {
        type: String,
        default: 'https://online-edu-1259575047.cos.ap-beijing.myqcloud.com/pcapp/common/dropUp.png',
      },
    },
    methods: {
      getClientHeight() {
        /* eslint-disable */
        var clientHeight = 0;
        if (document.body.clientHeight&&document.documentElement.clientHeight) {
          var clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
        } else {
          var clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
        }
        return clientHeight;
      },
      toggleItem(item, index) {
        if (item.menuPermissionDTOList && item.menuPermissionDTOList.length > 0) {
          this.menuArr[index].dropDown = !this.menuArr[index].dropDown;
          this.$set(this.menuArr, index, this.menuArr[index]);
          this.$emit('toPage', item, index, 'haveChild');
        } else {
         this.curId = item.id;
         localStorage.setItem('WKMENU_CURID', item.id);
         // this.curActiveUrl = item.totalUrl
         // localStorage.setItem('CUS_CURACTIVEURL', item.totalUrl)
          //直接跳转
          this.$emit('toPage', item, index, 'noHaveChild');
          if(this.isToWinUrl){
            window.location.href = item.url;
          }
        }
      },
      toggleSonItem(item, sonItem, index) {
       this.curId = sonItem.id;
       localStorage.setItem('WKMENU_CURID', sonItem.id);
      //  this.curActiveUrl = sonItem.totalUrl
       // localStorage.setItem('CUS_CURACTIVEURL', sonItem.totalUrl)
        this.$emit('toSonPage', item, sonItem, index);
        if(this.isToWinUrl){
          window.location.href = sonItem.url;
        }
      },
      toggleMenuSwitch() {
        this.switchAllFlag = !this.switchAllFlag;
        this.menuArr.forEach((item) => {
          item.dropDown = this.switchAllFlag;
        });
      },
        toHome() {
            this.$emit('customHomeClick');
        }
    },
    mounted() {
      //this.curActiveUrl=window.location.href&&window.location.href.split('?')[0];
      this.styleHight= (this.getClientHeight()-50)+'px';
      window.onresize = ()=>{
        this.styleHight = (this.getClientHeight()-50)+'px';
      }
      this.menuArr = [];
      this.curMenuArr.forEach((item) => {
        item.dropDown = false;
        this.menuArr.push(item);
      });
      this.curId = localStorage.getItem('WKMENU_CURID');
      this.curActiveUrl=  window.location.hash.split('?')[0];
        if(this.curActiveUrl){
            this.curActiveUrl=this.curActiveUrl.substr(1);
            this.menuArr.forEach(item=>{
                if(item.url == this.curActiveUrl){
                    this.curId= item.id
                }
                item.menuPermissionDTOList.forEach(sonItem=>{
                    if(sonItem.url == this.curActiveUrl){
                        this.curId= sonItem.id
                    }
                })
            })
        }
        if(this.curPath) {
            console.log('进入这个了')
            this.menuArr.forEach(item=>{
                if(item.url == this.curPath){
                    this.curId= item.id
                }
                item.menuPermissionDTOList.forEach(sonItem=>{
                    if(sonItem.url == this.curPath){
                        this.curId= sonItem.id
                    }
                })
            })
        }
      /* eslint-disable */
      // if (this.isToWinUrl) {
      //   if (this.curId) {
      //     this.curMenuArr.forEach((item) => {
      //       if (this.curId == item.id) {
      //         window.location.href= item.url;
      //
      //       }
      //       if (item.menuPermissionDTOList) {
      //         item.menuPermissionDTOList.forEach((sonItem) => {
      //           if (this.curId == sonItem.id) {
      //             window.location.href= sonItem.url;
      //
      //           }
      //         });
      //       }
      //     });
      //   }
      // }
    },
    watch: {
      curMenuArr: {
        handler(newName) {
          if(newName) {
            this.menuArr=[];
              newName.forEach((item) => {
                  item.dropDown = false;
                  this.menuArr.push(item);
              });
              this.curActiveUrl=  window.location.hash.split('?')[0];
              if(this.curActiveUrl){
                  this.curActiveUrl=this.curActiveUrl.substr(1);
                  this.menuArr.forEach(item=>{
                      if(item.url == this.curActiveUrl){
                          this.curId= item.id
                      }
                      item.menuPermissionDTOList.forEach(sonItem=>{
                          if(sonItem.url == this.curActiveUrl){
                              this.curId= sonItem.id
                          }
                      })
                  })
              }
              if(this.curPath) {
                  console.log('进入这个了')
                  this.menuArr.forEach(item=>{
                      if(item.url == this.curPath){
                          this.curId= item.id
                      }
                      item.menuPermissionDTOList.forEach(sonItem=>{
                          if(sonItem.url == this.curPath){
                              this.curId= sonItem.id
                          }
                      })
                  })
              }
          }
        },
        immediate: true
      },
        curPath: {
            handler(newName) {
                if(newName) {
                    let menuHasId=false;
                    this.menuArr.forEach(item=>{
                        if(item.url == newName){
                            this.curId= item.id
                            menuHasId=true
                        }
                        item.menuPermissionDTOList.forEach(sonItem=>{
                            if(sonItem.url == newName){
                                this.curId= sonItem.id
                                menuHasId=true
                            }
                        })
                    })
                    if(!menuHasId) {

                    }
                }
            },
            immediate: true
        },
        curIdPrpo: {
            handler(newName) {
                if(newName) {
                    this.curId = newName
                }
            },
            immediate: true
        }
    },
  };
</script>
