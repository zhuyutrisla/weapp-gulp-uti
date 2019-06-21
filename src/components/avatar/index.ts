Component({
  data: {
    x: 'xx',
    b: {
      nn: 1,
      bb: false
    }
  },
  properties: {
    yy: String, // string 类型
    lll: { // number 类型
      value: 124,
      type: Number,
      observer(newVal: number, oldVal: number) {
        const x = newVal + oldVal + this.data.b.nn; //observer this 绑定

      }
    }
  },
});