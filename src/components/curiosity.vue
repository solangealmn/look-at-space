<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-3">
              <form>
                <div class="form-group">
                  <label for="choose-camera">Choose Camera</label>
                  <select id="choose-camera" class="custom-select" placeholder="Choose Camera">

                  </select>
                  </div>
                  <button id="find-photos" class="btn btn-block btn-warning mb-3" type="submit">Find Photos</button>
                </form>
            </div>
            <div id="mars-info" class="col-12 col-sm-9">

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
  color: #FFFFFF;
}
</style>

<script>


$(document).ready( ()=> {


    function popDropdown(camName){
      $('#choose-camera').append(`
        <option class="camOption" value="" active>Choose Camera</option>
        <option class="camOption" value="${camName}">${camName}</option>`);
      var cameras =[];
        $('.camOption').each(function(){
           if($.inArray(this.value, cameras) >-1){
              $(this).remove()
           }else{
              cameras.push(this.value);
           }
        });
        return cameras;
    }
    function displayPhotos(title, image, date){
      $( "#mars-info" ).html(`
        <h2>Number Sum ${title}</h2>
        <figure class="figure">
          <img src="${image}" class="figure-img img-fluid rounded">
          <figcaption class="figure-caption text-center">${date}</figcaption>
        </figure>`);
    }

    function getApiData() {
     return fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=4wUfxFTephUQ7HdFwRCpe2FvH4ElW9ZnbA4plSyB")
     .then(response => response.json())
     .then(json => getMarsInfo(json))
   }

function getMarsInfo(data) {
// console.log(data);
 _.map(data, function(item) {
   _.map(item, function(eachItem){
     popDropdown(eachItem.camera.full_name);
     $( "#find-photos" ).click( () =>{
       var camera = $('#choose-camera').val();
       if(camera === eachItem.camera.full_name){
         displayPhotos(eachItem.sol, eachItem.img_src, eachItem.earth_date);
       }
     })

   })
 })
}

getMarsInfo();
getApiData();

});

</script>
