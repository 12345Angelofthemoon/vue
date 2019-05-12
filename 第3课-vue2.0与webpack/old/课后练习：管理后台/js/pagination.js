Vue.component('zns-page', {
  props: ['count', 'cur'],
  data(){
    return {
      // cur: 1,
      // pages: [1, '...', 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, '...', 3000]
    };
  },
  methods: {
    pages(){
      let arr=[];
      // let start=0;
      //
      // if(this.cur-5<1){
      //   start=1;
      // }else{
      //   start=this.cur-5;
      // }

      for(let i=Math.max(1, this.cur-5);i<=Math.min(this.count, this.cur+5);i++){
        arr.push(i);
      }
      // this.cur-5, this.cur+5
      //return [1, '...', 3, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, '...', 3000];

      if(arr[0]>=3){
        arr.unshift('...');
      }
      if(arr[0]!=1){
        arr.unshift(1);
      }



      arr.push('...');
      arr.push(this.count);

      return arr;
    }
  },
  template: `
    <ul class="pagination">
      <li>
        <a href="#">
          <span>&laquo;</span>
        </a>
      </li>
      <li v-for="page in pages()">
        <span v-if="page=='...'">{{page}}</span>
        <a href="#" v-else>{{page}}</a>
      </li>
      <li>
        <a href="#">
          <span>&raquo;</span>
        </a>
      </li>
    </ul>
  `
});
