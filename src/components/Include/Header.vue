<template>
   
  <header id="header">
    <div class="container">

      <div id="logo" class="pull-left">
        <!-- Uncomment below if you prefer to use a text logo -->
        <!-- <h1><a href="#main">C<span>o</span>nf</a></h1>-->
        <!-- <a href="#intro" class="scrollto"><img src="assets/img/logo.png" alt="" title=""></a> -->
         <h1 class="mb-4 pb-0"><span>The Event</span></h1>
      </div>

      <nav id="nav-menu-container">
        <ul class="nav-menu">
          <li class="menu-active"><a href="#intro">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#speakers">Speakers</a></li>
          <!-- <li><a href="#schedule">Schedule</a></li> -->
          <li><a href="#venue">Venue</a></li>
          <!-- <li><a href="#hotels">Hotels</a></li> -->
          <!-- <li><a href="#gallery">Gallery</a></li> -->
          <!-- <li><a href="#supporters">Sponsors</a></li> -->
          <li><a href="#contact">Contact</a></li>
          <!-- <li><a href="/login">Login</a></li> -->
          <div class="navbar-nav ml-auto">
                        <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown"> 
                            <!-- Display the user's full name if logged in, otherwise show 'User Account' -->
                            {{ uid ? userName.name : 'User Account' }}
                        </a>
                        <div class="dropdown-menu bg ">
                            <!-- Show Login/Signup if user is not logged in -->
                            <a v-if="!uid" href="/login"  class="dropdown-item a">Login</a>
                            <a v-if="!uid" href="/register" class="dropdown-item a">Register</a>

                            <!-- Show Logout and user-specific links if user is logged in -->
                            <button v-if="uid" class="dropdown-item a" @click="logout">Logout</button>
                            <a v-if="uid" href="/MyProfile" class="dro,text-blackpdown-item a">My Profile</a>
                            <!-- <a v-if="uid" href="/MyOrder" class="dropdown-item">My Order</a> -->
                            
                            <!-- Display the full name of the user in the dropdown -->
                            <!-- <router-link v-if="uid" :to="'/home/'" class="dropdown-item">
                            {{ userName.full_name }}
                            </router-link> -->
                        </div>
                      </div>
                </div>
          </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      
      uid: sessionStorage.getItem('uid'), 
      userName: JSON.parse(sessionStorage.getItem('userName'))
    };
  },
  props: {
    msg: String
  },
  methods: {
    logout() {
      this.uid = "";  // Clear uid
      this.userName = "";  // Clear userName
      sessionStorage.removeItem('uid'); // Clear the session storage
      sessionStorage.removeItem('userName'); // Clear the session storage
      window.location.reload(); // Reload the page to reflect logout
    }
  }
}
</script>
<style>
  .bg{
    background-color: black
  }
.a:hover{
    background-color: rgba(132, 96, 232, 0.732)
  }
</style>