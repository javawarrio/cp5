<template>
  <div class = "photo">
 <h1> Name:{{photos.title}} </h1>

<img v-bind:src="photos.path" />
  <p> Description:{{photos.description}} </p>
  <p> Price: ${{photos.price}} </p>
  <p> Type: {{photos.type}} </p>
  <p> {{photos.user.name}} </p>
  <p> Posted: {{formatDate(photos.created)}} </p>
<br>
<h1>Reviews</h1>
<hr>
<div v-for="comment in comments">

        <span v-if="comment.photoID == photos._id" >
       <h3>--{{comment.comment}} </h3>
        <br>
        <p>Posted by:{{comment.photoUser}} {{formatDate(comment.created)}} </p>
        <hr>
</span>


      </div>
<br>

<div v-if="user">
<h3>Add a Review</h3>
      <form v-on:submit.prevent="addComment(photos, user)">
        <textarea v-model="addedComment"></textarea>
        <br />
        <br>
        <button class="button" type="submit">Submit</button>
      </form>

      </div>
<div v-else>
    <p>If you would like to comment, please register for an account or login.</p>
    <router-link to="/register" class="pure-button">Register</router-link> or
    <router-link to="/login" class="pure-button">Login</router-link>
  </div>

  </div>
</template>

<script>
// @ is an alias to /src
import moment from 'moment';

export default {
  name: 'photo',
  props: {
    addedComment: String,
    comments: {},
  },
  data() {
  return{
    addedComment: '',
    }
  },
  components: {
  },
  computed: {
  user() {
    return this.$store.state.user;
  },
    photos() {
      return this.$store.state.photo1;
    },
    comments() {
   return this.$store.state.comments;
   },

  },
  async created() {
    await this.$store.dispatch("getUser");
    await this.$store.dispatch("getOnePhotos");
    await this.$store.dispatch("getComments");
  },
  methods: {
   formatDate(date) {
     if (moment(date).diff(Date.now(), 'days') < 15)
       return moment(date).fromNow();
     else
       return moment(date).format('d MMMM YYYY');
   },
   addComment(photos, user) {
   let photoID = photos._id;
   let photoUser = user.name;

   this.$store.dispatch("addComment",{addedComment: this.addedComment, photoID, photoUser });
   this.$store.dispatch("getComments");
   this.addedComment = '';
   },

}
}
</script>

<style scoped>
.button {
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.button:hover {background-color: #3e8e41}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>
