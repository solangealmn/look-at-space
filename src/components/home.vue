<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="jumbotron">
                <h1 class="display-2" id="apod-title"></h1>
                <figure class="figure">
                  <img id="apod-img-id" class="figure-img img-fluid rounded">
                  <figcaption id="copyright" class="figure-caption text-center"></figcaption>
                </figure>
                <p id="apod-explaination" class="lead"></p>
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
const url = "https://api.nasa.gov/planetary/apod?api_key=4wUfxFTephUQ7HdFwRCpe2FvH4ElW9ZnbA4plSyB";


$.ajax({
  url: url,
  success: function(data){
  if("copyright" in data) {
    $("#copyright").text("Image Credits: " + data.copyright);
  }
  else {
    $("#copyright").text("Image Credits: " + "Public Domain");
  }

  if(data.media_type == "video") {
    $("#apod-img-id").css("display", "none");
  }
  else {
    $("#apod-img-id").attr("src", data.url);
  }
  $("#apod-explaination").text(data.explanation);
  $("#apod-title").text(data.title);
}
});
});
</script>
