<template>
<div>

<div v-if="user">
    <div class="header">
      <div>
        <h1> {{user.name}}'s information page </h1>
        <hr>
        <br> <br>
        <h3>~Seller's Username: {{user.username}}</h3>
        <h3>~Seller's address: {{user.address}} </h3>
        <h3>~Seller's phone number: {{user.phone}} </h3>
      </div>
      <div>
      </div>
    </div>
    <escape-event @escape="escape"></escape-event>
    <uploader :show="show" @escape="escape" @uploadFinished="uploadFinished" />

<div class="emoji-toggle emoji-vote">
  <input type="checkbox" id="toggle4" class="toggle">
  <div class="emoji"></div>
  <label for="toggle4" class="well"></label>
</div>
</div>
<di



  </div>

</template>


<script>
import EscapeEvent from '@/components/EscapeEvent.vue'
import Uploader from '@/components/Uploader.vue'
import ImageGallery from '@/components/ImageGallery.vue'
export default {
  name: 'about',
  components: {
    EscapeEvent,
    Uploader,
    ImageGallery,
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
   },
  },
  async created() {
    await this.$store.dispatch("getOneUser", this.$route.params.id);
    await this.$store.dispatch("getSellerPhotos", this.$route.params.id);
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
        this.show = true;
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
@charset "UTF-8";
.emoji-toggle {
  position: relative;
  width: 60px;
  margin: 40px auto;
}
.emoji-toggle .well {
  display: block;
  background: #eee;
  height: 20px;
  border-radius: 10px;
  cursor: pointer;
}
.emoji-toggle .toggle {
  opacity: 0;
  border: 0;
  outline: none;
  height: 100%;
  width: 100%;
  background: transparent;
  position: absolute;
  cursor: pointer;
  z-index: 100;
}
.emoji-toggle .toggle ~ .emoji:before {
  content: "\01F431";
  position: absolute;
  left: 0;
  top: -15px;
  font-size: 40px;
  transition: 0.2s;
}
.emoji-toggle .toggle:checked ~ .emoji:before {
  left: 100%;
  margin-left: -1em;
}
.emoji-toggle .toggle ~ label {
  white-space: nowrap;
}
.emoji-toggle .toggle ~ label:before {
  position: absolute;
  right: 100%;
  margin-right: 5px;
  top: 0;
}
.emoji-toggle .toggle ~ label:after {
  position: absolute;
  left: 100%;
  margin-left: 5px;
  top: 0;
}

.emoji-happy .toggle ~ .emoji:before {
  content: "😄";
}
.emoji-happy .toggle:checked ~ .emoji:before {
  content: "😠";
}
.emoji-happy .toggle ~ label:before {
  content: "Happy";
}
.emoji-happy .toggle ~ label:after {
  content: "Mad";
}

.emoji-travel .toggle ~ .emoji:before {
  content: "✈";
}
.emoji-travel .toggle:checked ~ .emoji:before {
  content: "🚃";
}
.emoji-travel .toggle ~ label:before {
  content: "Plane";
}
.emoji-travel .toggle ~ label:after {
  content: "Train";
}

.emoji-food .toggle ~ .emoji:before {
  content: "🍔";
}
.emoji-food .toggle:checked ~ .emoji:before {
  content: "🍕";
}
.emoji-food .toggle ~ label:before {
  content: "Burger";
}
.emoji-food .toggle ~ label:after {
  content: "Pizza";
}

.emoji-vote .toggle ~ .emoji:before {
  content: "👍";
}
.emoji-vote .toggle:checked ~ .emoji:before {
  content: "👎";
}
.emoji-vote .toggle ~ label:before {
  content: "Thumbs Up";
}
.emoji-vote .toggle ~ label:after {
  content: "Thumbs Down";
}

.emoji-love .toggle ~ .emoji:before {
  content: "💘";
}
.emoji-love .toggle:checked ~ .emoji:before {
  content: "💔";
}
.emoji-love .toggle ~ label:before {
  content: "Loves Me";
}
.emoji-love .toggle ~ label:after {
  content: "Loves Me Not";
}

</style>
