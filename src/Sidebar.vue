<template>
  <div id="app">
    <div class="container-fluid">
        <!-- Sidebar -->
        <div class="row">
          <div class="d-flex flex-column justify-content-between sidecol" style="background: #114483">
            <div>
              <ul class="nav flex-column">
                <li class="nav-item navitem mx-auto">
                  <b-button v-b-toggle.sidebar-backdrop class="my_text_button"><img class="sidebar_icon" src="./assets/sidebar_icon_0.svg" style="margin-right:5px"></b-button>
                  <b-sidebar id="sidebar-backdrop"  
                    :backdrop-variant="dark" 
                    backdrop
                    no-header
                    width="10%"
                  >
                    <div class="d-flex flex-column justify-content-between" style="background: #114483">
                      <div>
                        <ul class="nav flex-column">
                          <li class="nav-item navitem mx-auto">
                            <a class="nav-link" href="#"><img class="sidebar_icon" src="./assets/sidebar_icon_0.svg" style="margin-right:5px"></a>
                          </li>
                          <li class="nav-item navitem mx-auto">
                            <a class="nav-link sidebarlink" href="#" style="color:white;"><img class="sidebar_icon" src="./assets/sidebar_icon_1.svg" style="margin-right:5px">Dashboard</a>
                          </li>
                          <li class="nav-item navitem mx-auto">
                            <a class="nav-link sidebarlink" href="#"><img class="sidebar_icon" src="./assets/sidebar_icon_2.svg" style="margin-right:5px">Representative</a>
                          </li>
                          <li class="nav-item navitem mx-auto">
                            <a class="nav-link sidebarlink" href="#"><img class="sidebar_icon" src="./assets/sidebar_icon_3.svg" style="margin-right:5px">Maps</a>
                          </li>
                          <li class="nav-item navitem mx-auto">
                            <a class="nav-link sidebarlink" href="#"><img class="sidebar_icon" src="./assets/sidebar_icon_4.svg" style="margin-right:5px">Messages</a>
                          </li>
                          <li class="nav-item navitem mx-auto">
                            <a class="nav-link sidebarlink" href="#"><img class="sidebar_icon" src="./assets/sidebar_icon_5.svg" style="margin-right:5px">Places</a>
                          </li>
                          <li class="nav-item navitem mx-auto">
                            <a class="nav-link sidebarlink" href="#"><img class="sidebar_icon" src="./assets/sidebar_icon_6.svg" style="margin-right:5px">Schedule</a>
                          </li>
                          <li class="nav-item navitem mx-auto">
                            <a class="nav-link sidebarlink" href="#"><img class="sidebar_icon" src="./assets/sidebar_icon_7.svg" style="margin-right:5px">Form</a>
                          </li>
                          <li class="nav-item navitem mx-auto">
                            <a class="nav-link sidebarlink" href="#"><img class="sidebar_icon" src="./assets/sidebar_icon_8.svg" style="margin-right:5px">Report</a>
                          </li>
                          <li class="nav-item navitem mx-auto">
                            <a class="nav-link sidebarlink" href="#"><img class="sidebar_icon" src="./assets/sidebar_icon_9.svg" style="margin-right:5px">Download File</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <li class="nav-item navitem mx-auto">
                          <a href="#"><img  src="./assets/sidebar_icon_10.svg" style="margin-right:5px;"></a>
                        </li>
                      </div> 
                    </div>
                  </b-sidebar>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#"><img class="sidebar_icon" src="./assets/sidebar_icon_1.svg" style="margin-right:5px"></a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#"><img class="sidebar_icon" src="./assets/sidebar_icon_2.svg" style="margin-right:5px"></a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#"><img class="sidebar_icon" src="./assets/sidebar_icon_3.svg" style="margin-right:5px"></a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#"><img class="sidebar_icon" src="./assets/sidebar_icon_4.svg" style="margin-right:5px"></a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#"><img class="sidebar_icon" src="./assets/sidebar_icon_5.svg" style="margin-right:5px"></a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#"><img class="sidebar_icon" src="./assets/sidebar_icon_6.svg" style="margin-right:5px"></a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#"><img class="sidebar_icon" src="./assets/sidebar_icon_7.svg" style="margin-right:5px"></a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#"><img class="sidebar_icon" src="./assets/sidebar_icon_8.svg" style="margin-right:5px"></a>
                </li>
                <li class="nav-item navitem mx-auto">
                  <a class="nav-link" href="#"><img class="sidebar_icon" src="./assets/sidebar_icon_9.svg" style="margin-right:5px"></a>
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
            <!-- </div>
              <table style="margin-top:63px; width: 100%;">
                <tbody class="tbody1">
                  <tr>
                    <td>Add Member</td>
                    <td class="divider" >|</td>
                    <td>Set Inactive</td>
                    <td class="divider">|</td>
                    <td>Add to Download (Queue)</td>
                    <td style="width: 30%; text-align: right;">
                      <div class="form-inline">
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                        <button style="background:#114483; margin-left: 5px;" class="btn btn-primary" type="submit">
                          <img src="./assets/search.svg">
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table style="width: 100%;">
                <tbody>
                  <tr>
                    <td style="width: 20px;">
                      <a href=""><img src="./assets/active_icon.svg" alt=""></a>
                    </td>
                    <td style="width: 20px;">
                      <a href=""><img src="./assets/inactive_icon.svg" alt=""></a>
                    </td>
                    <td style="align-content: flex-end;">Add Attribute</td>
                    <td>|</td>
                    <td>Shown Column</td>
                  </tr>
                </tbody>
                  <tr>
                    <th scope="col">checkbox</th>
                    <th scope="col">ID</th>
                    <th scope="col">Mobile User Name</th>
                    <th scope="col">Name</th>
                  </tr>
              </table>
            </div>      -->
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
      row_item:[]
    }
  },
  methods: {
      showModalAddatt() {
        this.$refs['my-modal'].show()
        document.getElementById("sidebar-backdrop").style.width = "219px";
      },
      hideModalAddatt() {
        this.$refs['my-modal'].hide()
      }
      // addRowInput() {
      //   this.item = ['<p>test<p>'];
      //   this.items.push(this.item);
      // }
    }
}
</script>
