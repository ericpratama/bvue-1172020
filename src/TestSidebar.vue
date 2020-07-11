<template>
<div class="app">
    <div id="mySidebar" class="sidebar">
        <button class="openbtn" onclick="openNav()"> Open Sidebar</button>
        <div style="text-align:left;">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>
    </div>

    <div id="main">
        <button class="openbtn" onclick="openNav()"> Open Sidebar</button>  
        <h2>Collapsed Sidebar</h2>
        <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
    </div>
</div>
</template>

<style>


.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidebar a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
   
    color: #818181;
    display: block;
    transition: 0.3s;
    
    
    
    width:164px;
	font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    
}

.sidebar a:hover {
  color: #f1f1f1;
}
a {	
	width:164px;
	font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: left;
}


.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color: #444;
}

#mySidebar{
	width:80px;
}

#main {
  transition: margin-left .5s;
  padding: 16px;
}
</style>

<script>
function openNav() {
    document.getElementById("mySidebar").style.width = "219px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "";
    document.getElementById("main").style.marginLeft= "0";
}
</script>

