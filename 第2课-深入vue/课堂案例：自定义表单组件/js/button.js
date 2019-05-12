Vue.component('zns-button', {
  props: ['type'],
  template: `
    <button type="button" :class="btnClass" v-on="$listeners">
      <slot/>
    </button>
  `,
  computed: {
    btnClass(){
      const types={
        'primary': 'btn-primary',
        'warn': 'btn-warning',
        'danger': 'btn-danger'
      };

      return [
        'btn',
        types[this.type]||'btn-default'
      ];
    }
  }
});
