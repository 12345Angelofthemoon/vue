Vue.component('zns-dialog', {
  props: ['shadow', 'title'],
  data(){
    return {
      show: false
    }
  },
  methods: {
    open(){
      this.show=true;
    },
    close(){
      this.show=false;
    }
  },
  template: `
    <div v-if="show">
      <div class="dialog-shadow" v-if="shadow"></div>
      <div class="panel panel-default dialog-panel">
        <div class="panel-heading">
          <h2 class="panel-title">
            {{title}}
            <a href="#" class="glyphicon glyphicon-remove pull-right" @click="close()"></a>
          </h2>
        </div>
        <div class="panel-body">
          <slot/>
        </div>
      </div>
    </div>
  `
});
