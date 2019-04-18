<template>
<div>
  <div class="image" v-for="photo in photos" v-bind:key="photo._id">

<p class="photoTitle">{{photo.title}}</p>
<hr size= "60" width = "500">
  <div @click="clickMethod(photo)">
    <img :src="photo.path" />
  </div>
    <p class="photoDate">
    </p>

  <router-link :to="{ name: 'about', params: { id: photo.user._id}}" v-if="photo.user.name"> 🤩 Seller: {{photo.user.name}} </router-link>

    <p>-Description: {{photo.description}}</p>
    <p>-Price: ${{photo.price}}</p>
    <p>-Type: {{photo.type}}</p>
    <p>-Posted: {{formatDate(photo.created)}} </p>
  </div>
</div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'ImageGallery',
  props: {
    photos: Array,
  },
  methods: {
   formatDate(date) {
     if (moment(date).diff(Date.now(), 'days') < 15)
       return moment(date).fromNow();
     else
       return moment(date).format('d MMMM YYYY');
   },
   clickMethod(photo) {
      this.$store.commit("setPhotoId",photo);
        this.$router.push('photo');
      },
 },
}
</script>

<style scoped>
.photoTitle {
  margin: 0px;
  font-size: 2.0em;
  text-align: center;
}
.photoDate {
  margin: 0px;
  font-size: 0.9em;
  font-weight: normal;
}
p {
  margin: 0px;
}
.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 75%;
}
.image img {
  max-width: 500px;
  max-height: 500px;
  image-orientation: from-image;
}

hr.style-seven {
    overflow: visible; /* For IE */
    height: 30px;
    border-style: solid;
    border-color: black;
    border-width: 1px 0 0 0;
    border-radius: 20px;
}
hr.style-seven:before { /* Not really supposed to work, but does */
    display: block;
    content: "";
    height: 30px;
    margin-top: -31px;
    border-style: solid;
    border-color: black;
    border-width: 0 0 1px 0;
    border-radius: 20px;
}
</style>
