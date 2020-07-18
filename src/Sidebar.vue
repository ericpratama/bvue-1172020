<template>
  <div id="app">
    <div class="container-fluid">
        <!-- Sidebar -->
        <div class="row">
          <div id="sidecol" class="d-flex flex-column justify-content-between sidecol" style="background: #114483">
            <div>
              <ul class="nav flex-column">
                <li class="nav-item navitem mx-auto">
                  <b-button v-on:click="greet" class="my_text_button"><img class="sidebar_icon" src="./assets/sidebar_icon_0.svg" style="margin-right:5px"></b-button>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" id="navlink" href="#">
                    <img v-if="counter=='open' " src = "./assets/longicon1.svg">
                    <img v-if="counter=='close' " src = "./assets/sidebar_icon_1.svg">
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "./assets/longicon1.svg">
                    <img v-if="counter=='close' " src = "./assets/sidebar_icon_1.svg">
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "./assets/longicon1.svg">
                    <img v-if="counter=='close' " src = "./assets/sidebar_icon_1.svg">
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "./assets/longicon1.svg">
                    <img v-if="counter=='close' " src = "./assets/sidebar_icon_1.svg">
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "./assets/longicon1.svg">
                    <img v-if="counter=='close' " src = "./assets/sidebar_icon_1.svg">
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "./assets/longicon1.svg">
                    <img v-if="counter=='close' " src = "./assets/sidebar_icon_1.svg">
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "./assets/longicon1.svg">
                    <img v-if="counter=='close' " src = "./assets/sidebar_icon_1.svg">
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "./assets/longicon1.svg">
                    <img v-if="counter=='close' " src = "./assets/sidebar_icon_1.svg">
                  </a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "./assets/longicon1.svg">
                    <img v-if="counter=='close' " src = "./assets/sidebar_icon_1.svg">
                  </a>
                </li>
              </ul>           
            </div>
            <div>
                <li class="nav-item navitem mx-auto">
                  <a href="#"><img  src="./assets/sidebar_icon_10.svg" style="margin-right:5px; text-align:center;"></a>
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
            <div class="container" style="margin-top:63px;">
              <div class="align-self-start"> 
                <div class="content_row text-left">
                  My Team
                </div>
              </div>
              <div>
                <div class="d-flex justify-content-between content_row">
                  <div class="align-self-center">
                    <span>
                      <img src="./assets/addmember_icon.svg"> Add member
                    </span>
                    <span class="divider"> | </span>
                    <span>
                      <img src="./assets/settoinactive_icon.svg"> Set to Inactive
                    </span>
                    <span class="divider"> | </span>
                    <span>
                      <img src="./assets/addtodownload_icon.svg"> Add to Download (Queue)
                    </span>
                  </div>
                  <div class="form-inline">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                    <button style="background:#114483; margin-left: 5px;" class="btn btn-primary" type="submit">
                      <img src="./assets/search.svg">
                    </button>
                  </div>
                </div>
                <div class="d-flex justify-content-between content_row">
                  <div>
                    <span>
                      <a style="margin-right:60px;" href=""><img src="./assets/active_icon.svg" alt=""></a>
                    </span>
                    <span>
                      <a href=""><img src="./assets/inactive_icon.svg" alt=""></a>
                    </span>
                  </div>
                  <div class="d-flex align-self-end">
                    <span>
                      <button class="my_text_button" id="show-addatt_btn" @click="showModalAddatt"> <img src="./assets/addattribute_icon.svg"> Add Attribute</button>
                      <b-modal ref="my-modal" hide-footer centered title="Add More Attribute">
                        <div>
                            <p class="text-left">This attribute affect on the user management level access.</p>
                            <p class="text-left">Click <span><a href="#">here</a></span> to manage user.</p>
                        </div>
                        <div class="d-flex flex-row" id="addatt_btn" v-on:click="addRowInput">
                          <input class="form-control" type="text" placeholder="Attribute">
                            <button class="my_text_button">
                              <img src="./assets/addmember_icon.svg">
                            </button>
                        </div>

                        <div class="d-flex flex-row justify-content-end">
                            <b-button class="mt-2" variant="outline-primary" @click="hideModalAddatt" style="margin-right:10px">Close Me</b-button>
                            <b-button class="mt-2" variant="primary" @click="hideModalAddatt">Save</b-button>
                        </div>
                      </b-modal>
                    </span>
                    <span class="divider"> | </span>
                    <span>
                      <img src="./assets/showcolumn_icon.svg"> Show Column
                    </span>
                  </div>
                </div>
                <div>
                  <b-table :items="items">
                  </b-table>     
                </div>
              </div>
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
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items:[
          { ID: 'JKT007', Mobile_User_Name: 'Amanda Rawless'},
          { ID: 'JKT008', Mobile_User_Name: 'Siska Erawati'},
          { ID: 'JOG001', Mobile_User_Name: 'Rika Sulistyawati'}
        ],
      row_items:[],
      row_item:[],
      counter:'close'
    }
  },
  methods: {
      showModalAddatt() {
        this.$refs['my-modal'].show()
      },
      hideModalAddatt() {
        this.$refs['my-modal'].hide()
      },
      greet: function () {
            // `this` inside methods points to the Vue instance
            // `event` is the native DOM event
            if (this.counter == 'close') {
                this.counter = 'open'
                // alert('status side bar ' + this.counter + '!')
                document.getElementById("sidecol").style.width = "219px";
                document.getElementById("sidecol").style.textAlign = "left";
            }
            else if (this.counter == 'open'){
                this.counter = 'close'
                document.getElementById("sidecol").style.width = "5%";
                // alert('close ' + this.counter + '!')
            }
        }
      // addRowInput() {
      //   this.item = ['<p>test<p>'];
      //   this.items.push(this.item);
      // }
    }
}
</script>
