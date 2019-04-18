<template>
<div v-if="user">
<div class="home">
<h1> Currently being sold: </h1>
<p> ** You can click on the photo to see the comments or click on the Seller to see their information ** </p>
<image-gallery :photos="photos"  />
</div>
</div>
<div v-else>
<p>If you would like to see others postings, please register for an account</p>
<router-link to="/mypage" class="pure-button">Register</router-link>
</div>
</template>

<script>
// @ is an alias to /src
import ImageGallery from '@/components/ImageGallery.vue'
export default {
  name: 'home',
  components: {
    ImageGallery
  },
  computed: {
    photos() {
      return this.$store.state.photos;
    },
    user() {
      return this.$store.state.user;
    },
  },
  async created() {
    await this.$store.dispatch("getAllPhotos");
    await this.$store.dispatch("getUser");
  },
}
</script>
