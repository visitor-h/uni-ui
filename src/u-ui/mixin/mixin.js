export default {
  data() {
    return {}
  },
  methods: {
    /**
     * 获取父组件实例，子组件的parentData参数的key去取父组件this中对应的参数，将父组件中对应参数的值覆盖子组件 parentData 中的参数值
     * @param parentName 父组件 name 名
     * 给子组件增加了一个  this.parent 属性，即父组件实例（或父父父...实例， 只要parentName 对应 父组件的 name）
     */
    getParentData(parentName='') {
      // 避免在 created 中去定义parent变量
      if(!this.parent) this.parent = false;
      // 这里的本质原理是，通过获取父组件实例（如 u-gird 的 this）
      // 将父组件 this 中对应的参数，赋值给本组件（如 u-gird-item）的parentData 对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过 this.parent.xxx 去监听父组件参数的变化
      this.parent = this.$u.$parent.call(this, parentName);
      if(this.parent) {
        // 遍历 parentData 中的属性，将 parent 中的同名属性赋值给 parentData
        Object.keys(this.parentData).map(key => {
          this.parentData[key] = this.parent[key];
        })
      }
    }
  }
}
