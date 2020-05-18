<template>
  <div
    class="wkmenu"
    @scroll.stop.prevent
    @click.stop.prevent>
    <div class="wkmenu-solt" v-show="cusComLogo">
      <div class="wkmenu-solt-border">
        <img :src="cusComLogo"  class="wkmenu-logo-icons" />
      </div>
    </div>
    <div :style="styleHight?`height:${styleHight}`:''" class="wkmenu-box" @scroll.stop.prevent>
      <div v-for="(item,index) in menuArr">
        <!--默认第一项是首页-->
        <div v-if="index==0" class="wkmenu-content">
          <div  class="wkmenu-menuItem">
            <img class="wkmenu-menuItem-icon" :src="item.icon" alt="" @click="toggleItem(item,index)">
            <div class="wkmenu-menuItem-text" :class="{'wkmenu-menuItem-text-active':curId==item.id}" @click="toggleItem(item,index)">{{item.name}}</div>
            <img :src="menuSwitchUp" v-if="switchAllFlag" alt="" class="wkmenu-menuswitchicon"  @click="toggleMenuSwitch">
            <!-- :class="{'wkmenu-menuswitchicon-rotate':switchAllFlag}" -->
            <img :src="menuSwitchDown" alt="" v-if="!switchAllFlag"  class="wkmenu-menuswitchicon"  @click="toggleMenuSwitch">
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
        curId: null || localStorage.getItem('CUSMENU-CURID'),
        switchAllFlag: false,
        styleHight: '',
      };
    },
    props: {
      // cusMenuHeight: {
      //   type: String,
      //   default: '',
      // },
      cusComLogo: {
        type: String,
        default: '',
      },
      isRefresh: {
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
        console.log('item', item);
        if (item.menuPermissionDTOList && item.menuPermissionDTOList.length > 0) {
          console.log('展示子页面');
          this.menuArr[index].dropDown = !this.menuArr[index].dropDown;
          this.$set(this.menuArr, index, this.menuArr[index]);
          this.$emit('toPage', item, index, 'haveChild');
        } else {
          this.curId = item.id;
          localStorage.setItem('CUSMENU-CURID', item.id);
          console.log('跳转');
          //直接跳转
          this.$emit('toPage', item, index, 'noHaveChild');
          window.location.href = item.url;
        }
      },
      toggleSonItem(item, sonItem, index) {
        this.curId = sonItem.id;
        localStorage.setItem('CUSMENU-CURID', sonItem.id);
        console.log('item', item, sonItem, index);
        console.log('二级直接跳转');
        this.$emit('toSonPage', item, sonItem, index);
        window.location.href = sonItem.url;
      },
      toggleMenuSwitch() {
        this.switchAllFlag = !this.switchAllFlag;
        this.menuArr.forEach((item) => {
          item.dropDown = this.switchAllFlag;
        });
      },
    },
    mounted() {
      this.styleHight = this.getClientHeight()+'px';
      window.onresize = ()=>{
        this.styleHight = this.getClientHeight()+'px';
      }
      console.log('zhelki', this.styleHight);
      //页面加载时根据，storage记录id打开页面????todo,跳转是否相同域名需要用vue.push
      this.curId = localStorage.getItem('CUSMENU-CURID');
      this.menuArr = [];
      this.curMenuArr.forEach((item) => {
        item.dropDown = false;
        this.menuArr.push(item);
      });
      /* eslint-disable */
      if (this.isRefresh) {
        if (this.curId) {
          this.curMenuArr.forEach((item) => {
            if (this.curId == item.id) {
              window.location.href= item.url;

            }
            if (item.menuPermissionDTOList) {
              item.menuPermissionDTOList.forEach((sonItem) => {
                if (this.curId == sonItem.id) {
                  window.location.href= sonItem.url;

                }
              });
            }
          });
        }
      }
    },
    // watch: {
    //   cusMenuHeight: {
    //     handler(newName) {
    //       if(newName) {
    //         console.log('newName',newName)
    //         this.styleObject= {
    //            height: newName,
    //            overflowY: 'scroll',
    //         }
    //       }
    //     },
    //     immediate: true
    //   },
    // },
  };
</script>
