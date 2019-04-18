<template>
<div class = "menu">
<h1 class = "retroshadow bottom">Exotic Animal Shop Center</h1>
 <div class="center">
 <iframe width="600" height="450" src="https://www.youtube.com/embed/eIRebXXHkvs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 </div>
</div>
 </template>

 <script>
 export default {
   name: 'mypage',
   components: {
   },
   data() {
     return {
       show: false,
     }
   },
   computed: {
     user() {
       return this.$store.state.user;
     },
     photos() {
      return this.$store.state.photos;
    }
   },
   async created() {
     await this.$store.dispatch("getUser");
     await this.$store.dispatch("getMyPhotos");
   },
   methods: {
     async logout() {
       try {
         this.error = await this.$store.dispatch("logout");
       } catch (error) {
         console.log(error);
       }
     },
     async uploadFinished() {
       this.show = false;
       try {
         this.error = await this.$store.dispatch("getMyPhotos");
       } catch (error) {
         console.log(error);
       }
     },
     escape() {
         this.show = false;
       },
       toggleUpload() {
         this.show = true;
       },
   }
 }
 </script>

 <style scoped>
 .header {
   display: flex;
 }
 .header a {
   padding-left: 50px;
   color: #222;
   font-size: 2em;
 }
 .header svg {
   margin-top: 12px;
 }
 </style>
