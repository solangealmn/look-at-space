<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="jumbotron">
                <h1 class="display-2" id="apod_title"></h1>
                <figure class="figure">
                  <img id="apod_img_id" class="figure-img img-fluid rounded">
                  <figcaption id="copyright" class="figure-caption text-center"></figcaption>
                </figure>
                <iframe id="apod_vid_id" type="text/html" width="640" height="385" frameborder="0"></iframe>
                <p id="apod_explaination" class="lead"></p>
              </div>
            </div>
          </div>
        </div>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ffffff;
}
img {
  width: 100%;
  max-width: 600px;
  min-width: 300px;
}
</style>

<script>
$(document).ready( ()=> {
const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";


$.ajax({
  url: url,
  success: function(result){
  if("copyright" in result) {
    $("#copyright").text("Image Credits: " + result.copyright);
  }
  else {
    $("#copyright").text("Image Credits: " + "Public Domain");
  }

  if(result.media_type == "video") {
    $("#apod_img_id").css("display", "none");
    $("#apod_vid_id").attr("src", result.url);
  }
  else {
    $("#apod_vid_id").css("display", "none");
    $("#apod_img_id").attr("src", result.url);
  }
  $("#reqObject").text(url);
  $("#apod_explaination").text(result.explanation);
  $("#apod_title").text(result.title);
}
});
});
</script>
