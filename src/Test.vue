<template>
  <div id="app">
    <div class="container-fluid">
        <!-- Sidebar -->
        <div class="row">
          <div id="sidecol" class="d-flex flex-column justify-content-between sidecol" style="background: #114483">
            <div>
              <ul class="nav flex-column">
                <li class="nav-item navitem mx-auto" id="example-2">
                  <b-button v-on:click="greet" class="my_text_button"><img class="sidebar_icon" src="./assets/sidebar_icon_0.svg" style="margin-right:5px"></b-button>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "./assets/longicon1.svg" >
                    <img v-if="counter=='close' " src = "./assets/sidebar_icon_1.svg" >
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <!-- <img class="sidebar_icon" src="./assets/sidebar_icon_2.svg" style="margin-right:5px"> -->
                    <img v-if="counter=='open' " src = "./assets/longicon1.svg" style="margin-right:5px">
                    <img v-if="counter=='close' " src = "./assets/sidebar_icon_2.svg" style="margin-right:5px">
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <!-- <img class="sidebar_icon" src="./assets/sidebar_icon_3.svg" style="margin-right:5px"> -->
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <!-- <img class="sidebar_icon" src="./assets/sidebar_icon_4.svg" style="margin-right:5px"> -->
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <!-- <img class="sidebar_icon" src="./assets/sidebar_icon_5.svg" style="margin-right:5px"> -->
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <!-- <img class="sidebar_icon" src="./assets/sidebar_icon_6.svg" style="margin-right:5px"> -->
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <!-- <img class="sidebar_icon" src="./assets/sidebar_icon_7.svg" style="margin-right:5px"> -->
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <!-- <img class="sidebar_icon" src="./assets/sidebar_icon_8.svg" style="margin-right:5px"> -->
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <!-- <img class="sidebar_icon" src="./assets/sidebar_icon_9.svg" style="margin-right:5px"> -->
                  </a>
                </li>
              </ul>           
            </div>
            <div>
                <li class="nav-item navitem mx-auto">
                  <a href="#"><img  src="./assets/sidebar_icon_10.svg" style="margin-right:5px;"></a>
                </li>
            </div>            
          </div>

          <!-- Navbar-->
          <div class="col navcol">
            <nav class="navbar navbar-expand-lg navbar-light" style="background-color:#EBEBEB;">
              <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <span class="navbar-text" style="margin-right:12px">Project</span>
                  </li>
                  <li class="nav-item dropdown">
                    <button class="btn btn-secondary btn-outline-light text-body dropdown-toggle" style="background: #FCFCFC; border-radius: 6px;" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Virtusee Project Name
                      <img src="./assets/dropdown arrow.svg" style="margin-left:32px">
                    </button>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
                <span class="navbar-text">
                  <img src="./assets/lonceng.svg" style="margin-right:5px">Help and Support
                </span>
                <span class="linedivide1"></span>
                <div class="dropdown">
                  <button class="btn btn-secondary text-body dropdown-toggle" style="background:#EBEBEB; border-color:#EBEBEB;" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img src="./assets/icon profil.svg" alt="" style="margin-right:5px">
                      Dropdown button
                      <img src="./assets/dropdown arrow.svg" alt="" style="margin-left:32px">
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
            </nav>
            
            <!-- Main Content Start-->
            <div>
                              <!-- Main Content Start-->
                <b-container fluid class="main_kontener">
                    <b-row>
                        <b-col lg="11">
                            <b-breadcrumb :items="items"></b-breadcrumb>
                        </b-col>
                        <b-col lg="1">
                            
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col lg="11">
                            <hr>
                        </b-col>
                        <b-col lg="1">
                            
                        </b-col>
                    </b-row>
                    <div class="konten">
                        <b-tabs class="tabs1" >
                            <b-tab  class="tabs2" title="ACCOUNT" active>
                              <template v-slot:title>
                                <img class="sidebar_icon" src="./assets/d4textaccount.svg" style="">
                              </template>
                                <b-form class="tabs3"  @submit="onSubmit" @reset="onReset">
                                    <p class="d4_header">Change Password</p>
                                    <b-row>
                                        <b-col lg="5">
                                            <b-form-group id="input-group-1" label="Create Password" label-for="input-1" description="At least 5 character long">
                                                <b-form-input
                                                    id="input-1"
                                                    v-model="form.password"
                                                    type="password"
                                                    required
                                                >
                                                </b-form-input>
                                            </b-form-group>
                                        </b-col>
                                        <b-col lg="1">
                                        </b-col>
                                        <b-col lg="5">
                                            <b-form-group id="input-group-2" label="Confirm Password" label-for="input-2" description="Re-type your new password">
                                                <b-form-input
                                                    id="input-2"
                                                    v-model="form.cpassword"
                                                    type="password"
                                                    required
                                                >
                                                </b-form-input>
                                            </b-form-group>
                                        </b-col>

                                    </b-row>
<!-- ACCOUNT DETAILS-->
                                    <b-row>
                                        <b-col lg="5">
                                            <b-form-group id="input-group-3" label="ID" label-for="input-3" description="You can not change this field" disabled>
                                                <b-form-input
                                                    id="input-3"
                                                    v-model="form.id"
                                                    required
                                                    type="text"
                                                    readonly 
                                                    placeholder="JKT0003"
                                                >
                                                </b-form-input>
                                            </b-form-group>
                                        </b-col>
                                        <b-col lg="1">
                                        </b-col>
                                        <b-col lg="5">
                                            <b-form-group id="input-group-4" label="Name" label-for="input-4">
                                                <b-form-input
                                                    id="input-4"
                                                    v-model="form.name"
                                                    required
                                                    placeholder="Rika Sulistiyawati"
                                                >
                                                </b-form-input>
                                            </b-form-group>
                                        </b-col>
                                        
                                    </b-row>
                                    <!-- --------- -->
                                    <p class="d4_header">Account Details</p>
                                    <b-row class="row_ac_detail">
                                        <b-col lg="5">
                                            <b-form-group id="input-group-5" label="User Name" label-for="input-5" description="You can not change this field" disabled>
                                                <b-form-input
                                                    id="input-5"
                                                    v-model="form.username"
                                                    required
                                                    type="text"
                                                    readonly 
                                                    placeholder="RikaJOG"
                                                >
                                                </b-form-input>
                                            </b-form-group>
                                        </b-col>
                                        <b-col lg="1">
                                        </b-col>
                                        <b-col lg="5">
                                            <b-form-group id="input-group-6" label="attribute1" label-for="input-6">
                                                <b-form-input
                                                    id="input-1"
                                                    v-model="form.attribute1"
                                                    required
                                                    placeholder="Atribute"
                                                >
                                                </b-form-input>
                                            </b-form-group>
                                        </b-col>
                                        <!-- Main Content Start-->
                                        
                                    </b-row>
                                </b-form>
                            </b-tab>
                              <b-tab title="SCHEDULE"><p>I'm the second tab</p>
                                <template v-slot:title>
                                  <img class="sidebar_icon" src="./assets/d4textschedule.svg" style="">
                                </template>
                              </b-tab>
                        </b-tabs>
                    </div>
                </b-container>
                            <!-- Main Content Start-->
            </div>
                              <!-- Main Content End-->

          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
name: 'app',
    data() {
        return {
            form: {
                password: '',
                cpassword: '',
                id: '',
                name: '',
                username: '',
                attribute1: '',
                show: true,   
            },
            counter:'close',
        }
    },
    methods: {
        greet: function () {
            // `this` inside methods points to the Vue instance
            // `event` is the native DOM event
            if (this.counter == 'close') {
                this.counter = 'open'
                
                document.getElementById("sidecol").style.width = "219px";
                document.getElementById("sidecol").style.textAlign = 'left';
            }
            else if (this.counter == 'open'){
                this.counter = 'close'
                document.getElementById("sidecol").style.width = "5%";
                
            }
        },
          onSubmit(evt) {
          evt.preventDefault()
          alert(JSON.stringify(this.form))
        },
        onReset(evt) {
          evt.preventDefault()
          // Reset our form values
          this.form.email = ''
          this.form.name = ''
          this.form.food = null
          this.form.checked = []
          // Trick to reset/clear native browser form validation state
          this.show = false
          this.$nextTick(() => {
            this.show = true
          })
        }
      }
    
}






</script>
<style>
body{
    margin:0 px;
    padding:0 px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
}
#app{
    background-color:#E5E5E5;
}
.main_kontener{
    padding-left:50px !important;
    padding-right: 50px !important;
    background-color: none;
    padding-top:20px;
    font-family: Roboto;
    font-style: normal;
    background-color: #f5f5f5;
}
.konten{
    padding-top: 60px;
}
.tab-content{
    background-color: white;
    margin-left: 10px;
    padding-top:10px;
    text-align: left;
}
.tabs2{
  padding-left:5%;
  padding-right:5%;
}
hr{
    position: absolute;
    background: #C4C4C4;
    width: 98%;
    height: 1px;
}
/* bagian text dan header dalam konten */
.d4_header{
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color:#555555;
}

.d-block{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #555555;
}
.form-text{
  color:red;
}
.text-muted{
  color:red;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 19px;
}
/* bagian text dan header dalam konten */
.nav-tabs .nav-link.active, .nav-item.show .nav-link {
  text-align: center;
  width: 208px;
  height: 90px;
  color: #114483 !important;
  border-color: #dee2e6 #dee2e6 #fff !important;
  border-top: 5px solid #114483 !important;
}
.nav-tabs .nav-link{
  border: 0px solid transparent !important;
  border-top-left-radius: 1px !important;
  border-top-right-radius: 1px !important;
  text-align: center;
  width: 208px;
  height: 90px;
}
a {
  color: #555555 !important;
  text-decoration: none;
  background-color: transparent;
}

.ujung{
  background-color: blue;
  padding-right:0px;
}
/* sidebar */
.sidecol{
    padding-left: 0px;
    padding-right: 0px;
    width: 5%;
    height: 970px;
    background: #114483;
    transition: all 500ms linear;
}
</style>