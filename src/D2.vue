<template>
  <div id="app">
    <div class="container-fluid">
        <!-- Sidebar -->
        <div class="row">
          <div class="d-flex flex-column justify-content-between sidecol" style="background: #114483">
            <div>
              <ul class="nav flex-column">
                <li class="nav-item navitem mx-auto">
                  <b-button v-b-toggle.sidebar-1 class="my_text_button"><img class="sidebar_icon" src="./assets/sidebar_icon_0.svg" style="margin-right:5px"></b-button>
                  <b-sidebar id="sidebar-1" title="Sidebar" shadow>
                    <div class="px-3 py-2">
                      <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                      </p>
                      <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
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
            <div class="main_kontener">
                              <!-- Main Content Start-->
                <b-container fluid>
                    <p>cek</p>
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
                    <b-form @submit="onSubmit" @reset="onReset" class="konten">
                        <b-row>
                            <b-col lg="5" style="background-color:;">
                                <b-form-group id="input-group-1" label="ID" label-for="input-1">
                                    <b-form-input
                                        id="input-1"
                                        v-model="form.id"
                                        required
                                        placeholder="e.g SPV-1"
                                    >
                                    </b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col lg="1" style="background-color:;">
                            </b-col>
                            <b-col lg="5" style="background-color:;">
                                <b-form-group id="input-group-2" label="Create Password" label-for="input-2" description="At least 5 character long">
                                    <b-form-input
                                        id="input-1"
                                        v-model="form.password"
                                        type="password"
                                        required
                                    >
                                    </b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col lg="1" style="background-color:;">
                            </b-col>
                        </b-row>
                          <!-- row 1 end -->
                        <b-row>
                            <b-col lg="5">
                                <b-form-group id="input-group-3" label="Name" label-for="input-3">
                                    <b-form-input
                                        id="input-1"
                                        v-model="form.name"
                                        required
                                        placeholder="e.g Rika"
                                    >
                                    </b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col lg="1">
                            </b-col>
                            <b-col lg="5">
                                <b-form-group id="input-group-4" label="Confirm Password" label-for="input-4" description="Must same as above">
                                    <b-form-input
                                        id="input-1"
                                        v-model="form.cpassword"
                                        type="password"
                                        required
                                    >
                                    </b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col lg="1">
                            </b-col>
                        </b-row>
                              <!-- row 2 end -->
                        <b-row>
                            <b-col lg="5">
                                <b-form-group id="input-group-5" label="User Name" label-for="input-5" description="You can not change this after submitting">
                                    <b-form-input
                                        id="input-1"
                                        v-model="form.username"
                                        required
                                        placeholder="e.g SPV-Rika"
                                    >
                                    </b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col lg="1">
                            </b-col>
                        </b-row>
                                  <!-- row 3 end-->
                                  <!-- row button -->
                        <b-row>
                            <b-col lg="9">
                                
                            </b-col>
                            <b-col lg="1">
                                <div class="text-right">
                                    <b-button style="color:#114483; background-color:white; border-color:#114483;">Cancel</b-button>
                                </div>
                            </b-col>
                            <b-col lg="1">
                                <div class="text-right">
                                    <b-button type="submit" style="background-color:#114483;">Save</b-button>
                                </div>
                            </b-col>
                            <b-col lg="1">
                                
                            </b-col>
                        </b-row>
                          <!-- row button -->
                    </b-form>
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
                items: [
                    {
                        text: 'My Team',
                        href: '#'
                    },
                    {
                        text: 'Add Member',
                        active: true
                    }
                ],
                form: {
                id: '',
                password: '',
                name: '',
                cpassword: '',
                username: '',
                show: true,
                
                }
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                alert(JSON.stringify(this.form))
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.id = ''
                this.form.password = ''
                this.form.name = ''
                this.form.cpassword = ''
                this.form.username = ''
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
}
.main_kontener{
    background-color: none;
    padding-top:20px;
    padding-left: 10%;
}
.konten{
    padding-top: 30px;
    background-color: none;
    
}

hr{
    position: absolute;
    background: #C4C4C4;
    width: 98%;
    height: 1px;
}

</style>