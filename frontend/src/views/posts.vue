<!-- <template>
  <div>
    <h1>hello world</h1>
    <div class="postList">
      <h1>Post List</h1>
      <h3 v-if="errorMsg">{{ errorMsg }}</h3>
      <table border="1">
        <tr>
          <td>ID</td>
          <td>Post</td>
          <td>Username</td>
          <td>Like</td>
          <td>Comment</td>
          <td>Share</td>
          <td>Action</td>
        </tr>
        <tr v-for="post in postList" :key="post._id">
          <td>{{ post._id }}</td>
          <td>{{ post.post }}</td>
          <td>{{ post.username }}</td>
          <td>{{ post.like }}</td>
          <td>{{ post.comment }}</td>
          <td>{{ post.share }}</td>
          <td>
            <button @click="deleteData(post._id)">Delete</button> |
            <button @click="findData(post._id)">Update</button>
          </td>
        </tr>
      </table>
    </div>

    <div class="Add">
      <h1>Add / Update Post</h1>
      <h3 v-if="errorMsg">{{ errorMsg }}</h3>
      <form @submit.prevent="addData">
        <table border="0">
          <tr>
            <td>ID</td>
            <td><input type="text" v-model="formData._id" /></td>
          </tr>
          <tr>
            <td>Post</td>
            <td><input type="text" v-model="formData.post" /></td>
          </tr>
          <tr>
            <td>Username</td>
            <td><input type="text" v-model="formData.username" /></td>
          </tr>
          <tr>
            <td>Like</td>
            <td><input type="text" v-model="formData.like" /></td>
          </tr>
          <tr>
            <td>Share</td>
            <td><input type="text" v-model="formData.share" /></td>
          </tr>
          <tr>
            <td>Comment</td>
            <td><input type="text" v-model="formData.comment" /></td>
          </tr>
          <tr>
            <td><input type="submit" id="Add" value="Add" /></td>
            <td>
              <input
                type="button"
                @click="updateData"
                id="Update"
                value="Update"
              />
            </td>
          </tr>
        </table>
      </form>
    </div>

  </div>

</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      postList: [],
      errorMsg: "",

      formData: {
        id: undefined,
        username: "",
        post: "",
        like: 0,
        share: 0,
        comment: 0,
      },
    };
  },
  methods: {
    getData() {
      axios
        .get("http://localhost:3000/api/v1/posts?page=0&limit=20")
        .then((response) => {
          console.log(response);
          this.postList = response.data.docs;
        })
        .catch((error) => {
          console.log(error);
          this.errorMsg = "Error";
        });
    },

    deleteData(id) {
      axios
        .delete("http://localhost:3000/api/v1/posts/" + id)
        .then((response) => {
          console.log(response);
          this.getData();
        })
        .catch((error) => {
          console.log(error);
          this.errorMsg = "Error";
        });
    },

    addData() {
      console.log(this.formData);
      axios
        .post("http://localhost:3000/api/v1/posts", this.formData)
        .then((response) => {
          console.log(response);
          this.getData();
        })
        .catch((error) => {
          console.log(error);
          this.errorMsg = "Error";
        });
    },

    findData(id) {
      axios
        .get("http://localhost:3000/api/v1/posts/" + id)
        .then((response) => {
          this.formData = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.errorMsg = "Error";
        });
    },

    updateData() {
      console.log(this.formData);
      axios
        .patch(
          "http://localhost:3000/api/v1/posts/" + this.formData._id,
          this.formData
        )
        .then((response) => {
          console.log(response);
          this.getData();
        })
        .catch((error) => {
          console.log(error);
          this.errorMsg = "Error";
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script> -->


<!-- -------------------------------------------------------- -->

<template>
  <div>

    <div class="userList">
      <h1>User List</h1>
      <h3 v-if="errorMsg">{{errorMsg}}</h3>
      <table border="1">
        <tr>
          <td>Username</td>
          <td>Gender</td>
          <td>MobilePhone</td>
          <td>Address</td>
          <td>Action</td>
        </tr>
        <tr v-for="user in userList" :key="user._id">
            <td>{{user.username}}</td>
            <td>{{user.gender}}</td>
            <td>{{user.mobilePhone}}</td>
            <td>{{user.address}}</td>
            <td>
              <button @click="deleteData(user._id)">Delete</button> | 
              <button @click="findData(user._id)">Update</button> 
              </td>
        </tr>
      </table>
    </div>

    <div class="userAdd">
      <h1>Add / Update User</h1>
      <h3 v-if="errorMsg">{{errorMsg}}</h3>
      <form @submit.prevent="addData">
      <table border="0">
        <tr>
            <td>ID</td>
            <td><input type="text" v-model="formData._id"/></td>
        </tr>
        <tr>
            <td>Username</td>
            <td><input type="text" v-model="formData.username"/></td>
        </tr>
        <tr>
            <td>Gender</td>
            <td><select v-model="formData.gender">
                <option value="M">M</option>
                <option value="F">F</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>Mobile Phone</td>
            <td><input type="text" v-model="formData.mobilePhone"/></td>
        </tr>
        <tr>
            <td>Address</td>
            <td><input type="text" v-model="formData.address"/></td>
        </tr>
        <tr>
            <td><input type="submit" id="Add" value="Add"/></td>
            <td><input type="button" @click="updateData" id="Update" value="Update"/></td>
        </tr>
      </table>
      </form>
    </div>

  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        userList: [],
        errorMsg: '',
        formData: {
          id:undefined,
          username : '',
          address : '',
          gender : '',
          mobilePhone : '',
          placeOfBirth : ''
        }
      }
    },
    methods: {


      getData(){
        axios
        .get('http://localhost:3000/api/v1/users?page=1&limit=1000')
        .then((response) => {
          console.log(response);
          this.userList = response.data.docs;

        }).catch((error) => {
          console.log(error);
          this.errorMsg = "Error"
        })
      },


      deleteData(id){
        axios   
        .delete('http://localhost:3000/api/v1/users/'+ id)
        .then((response) => {
          console.log(response);
          this.getData();

        }).catch((error) => {
          console.log(error);
          this.errorMsg = "Error"
        })
      },


      addData(){
        console.log(this.formData);
        axios
        .post('http://localhost:3000/api/v1/users',this.formData)
        .then((response) => {
          console.log(response);
          this.getData();

        }).catch((error) => {
          console.log(error);
          this.errorMsg = "Error"
        })
      },


      findData(id){
        axios
        .get('http://localhost:3000/api/v1/users/' + id)
        .then((response) => {
          this.formData = response.data;

        }).catch((error) => {
          console.log(error);
          this.errorMsg = "Error"
        })
      },

      
      updateData(){
        console.log(this.formData);
        axios
        .patch('http://localhost:3000/api/v1/users/'+ this.formData._id,this.formData)
        .then((response) => {
          console.log(response);
          this.getData();

        }).catch((error) => {
          console.log(error);
          this.errorMsg = "Error"
        })
      }
    },

    mounted() {
      this.getData();
    }
  }
</script>