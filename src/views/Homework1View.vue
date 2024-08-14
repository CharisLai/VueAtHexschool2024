<script setup>
import { ref } from 'vue'

const data = [
  {
    id: 1,
    name: '珍珠奶茶',
    description: '香濃奶茶搭配QQ珍珠',
    price: 50,
    count: 20
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    description: '清新冬瓜配上新鮮檸檬',
    price: 45,
    count: 18
  },
  {
    id: 3,
    name: '翡翠檸檬',
    description: '綠茶與檸檬的完美結合',
    price: 55,
    count: 34
  },
  {
    id: 4,
    name: '四季春茶',
    description: '香醇四季春茶，回甘無比',
    price: 45,
    count: 10
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    description: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50,
    count: 25
  },
  {
    id: 6,
    name: '檸檬冰茶',
    description: '檸檬與冰茶的清新組合',
    price: 45,
    count: 20
  },
  {
    id: 7,
    name: '芒果綠茶',
    description: '芒果與綠茶的獨特風味',
    price: 55,
    count: 18
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    description: '抹茶與鮮奶的絕配',
    price: 60,
    count: 20
  }
]

const tempEdit = ref({
  id: '',
  name: ''
})

const drinks = ref(data)

function handleDrinkCount(id, count) {
  drinks.value = drinks.value.map((item) => {
    if (item.id === id) {
      item.count = count
    }
    return item
  })
}

const prepareEdit = (item) => {
  tempEdit.value = { ...item }
}

const confirmEdit = () => {
  const index = drinks.value.findIndex((item) => item.id === tempEdit.value.id)
  drinks.value[index] = tempEdit.value
  tempEdit.value = {}
}
</script>

<template>
  <div id="app">
    <h2>第一週作業挑戰: 餐點管理工具</h2>
    <h3>Hexschool</h3>
    <h4>Student : CharisLai</h4>
    <table>
      <thead>
        <tr>
          <th scope="col">品項</th>
          |
          <th scope="col">描述</th>
          |
          <th scope="col">價格</th>
          |
          <th scope="col">庫存</th>
          |
          <th scope="col">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in drinks" :key="item">
          <td>{{ item.name }}</td>
          <br />
          <td>
            <small>{{ item.description }}</small>
          </td>
          <br />
          <td>{{ item.price }}</td>
          <br />
          <td>
            <button @click="handleDrinkCount(item.id, item.count - 1)" :disabled="item.count < 1">
              -
            </button>
            {{ item.count }}
            <button @click="handleDrinkCount(item.id, item.count + 1)">+</button>
          </td>
          <br />
          <td>
            <button type="button" @click="prepareEdit(item)">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
    <hr />
    <div class="edit" v-if="tempEdit.id">
      <h3>Edit place</h3>
      Now : {{ tempEdit.name }}
      <br />
      <input type="text" v-model="tempEdit.name" />
      <button type="button" @click="confirmEdit">Confirm</button>
      <button type="button" @click="tempEdit = {}">Cancel</button>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
table {
  display: unset;
  justify-content: center;
}
a,
button {
  color: #4fc08d;
}

button {
  background: none;
  border: solid 1px;
  border-radius: 2em;
  font: inherit;
}
</style>
