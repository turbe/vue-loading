### vue-loading

vue-loading 是通过自定义组件方式开发的一款简单的加载状态组件，主要用于页面加载时、请求时显示。

主要分为两个模式的loading
* 全局loading （el需要挂钩body,即 document.body || document.documentElement ）
* 局部loading （el 需要挂钩当前局部dom的ref值，如：this.$refs.loadingArea）

另外，可添加loading的文案，如：加载中...

拓展方向：
* 可自定义配置loading的gif图
* 可并用toast

# 用法

* 注册

        vue.use(loading)
* 使用 show()

      this.$loading.show({
        el: document.body || document.documentElement,
        text:"加载中..." // 可为空
      })

* 使用 hide()

      this.$loading.hide()
    

