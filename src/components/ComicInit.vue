<template>
  <div>
    <section class="hero is-info has-text-centered">
      <div class="hero-body">
        <p class="title">Comic Test Masivian</p>
        <p class="subtitle">By: Carlos Gutiérrez</p>
      </div>
    </section>
    <div class="container">
      <section class="section">
        <div
          class="tile is-ancestor has-text-centered"
          style="justify-content: center"
        >
          <div class="tile is-vertical is-6">
            <div class="tile">
              <div class="tile is-parent">
                <article class="tile is-child notification is-primary">
                  <p class="title">{{ comic.title }}</p>
                  <p class="subtitle">{{ comic.alt }}</p>
                  <figure class="image is-4by3">
                    <img :src="comic.img" />
                    <div class="container has-text-centered">
                      <div class="rate" style="justify-content: center">
                        <input type="radio" id="star5" name="rate" value="5" />
                        <label for="star5" title="text">5 stars</label>
                        <input type="radio" id="star4" name="rate" value="4" />
                        <label for="star4" title="text">4 stars</label>
                        <input type="radio" id="star3" name="rate" value="3" />
                        <label for="star3" title="text">3 stars</label>
                        <input type="radio" id="star2" name="rate" value="2" />
                        <label for="star2" title="text">2 stars</label>
                        <input type="radio" id="star1" name="rate" value="1" />
                        <label for="star1" title="text">1 star</label>
                      </div>
                    </div>
                  </figure>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div>
      <footer class="footer">
        <div class="content has-text-centered is-dark">
          <p><strong>Comic Test</strong> by Carlos Gutiérrez</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ComicInit",
  data() {
    return {
      comic: [],
    };
  },
  methods: {
    async getComicInfo() {
      try {
        const url =
          "https://secret-ocean-49799.herokuapp.com/http://xkcd.com/info.0.json";
        let result = await axios.get(url);
        this.comic = result.data;
        console.log("Rsponse API --->", this.comic);
      } catch (error) {
        console.log("Error call API --->", error);
      }
    },
  },
  created() {
    this.getComicInfo();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rate {
  float: left;
  height: 46px;
  padding: 0 10px;
}
.rate:not(:checked) > input {
  position: absolute;
  top: -9999px;
}
.rate:not(:checked) > label {
  float: right;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 30px;
  color: #fff;
}
.rate:not(:checked) > label:before {
  content: "★ ";
}
.rate > input:checked ~ label {
  color: #ffc700;
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
  color: #deb217;
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
  color: #c59b08;
}
</style>
