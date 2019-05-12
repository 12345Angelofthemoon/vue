Vue.component('zns-table', {
  props: ['cols', 'rows'],
  template: `
  <table class="table">
    <thead>
      <tr>
        <th v-for="col in cols">{{col.label}}</th>
        <th>
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows">
        <td v-for="col in cols">{{row[col.name]}}</td>
        <td>
          <button type="button" class="btn btn-default">修改</button>
          <button type="button" class="btn btn-danger" @click="$emit('delete', row)">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
  `
});
