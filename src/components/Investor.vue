<template>
  <div class="container">
    <div class="push-down"></div>
    <md-layout md-gutter>
        <md-layout md-flex-large="100" md-flex-xsmall="100" md-align="center">
            <span class="md-display-2">Investor Details</span>
        </md-layout>
        <md-layout v-for="investor in Investors" :key="investor.index" md-flex-large="100" md-flex-xsmall="100" md-align="left">
          <md-card class="md-primary" md-theme="orange-card" md-with-hover>
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">{{investor.name}}</div>
                <div class="md-subhead">{{investor.mobile}}</div>
                <br>
                <div v-if="investor.address">
                  <div>{{investor.address.blk}} {{investor.address.street}}</div>
                  <div>{{investor.address.unit}}</div>
                  <div>{{investor.address.country}} {{investor.address.postcode}}</div>
                </div>
              </md-card-header-text>

              <md-card-media md-medium>
                <img src="https://vuematerial.io/assets/examples/card-weather.png" alt="People">
              </md-card-media>
            </md-card-header>

            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card>
        </md-layout>
    </md-layout>
  </div>
</template>

<script>
export default {

    mounted() {
        this.$auth.check({
            then: (user) => {
                this.userID = user.uid
            },
            catch: () => {
                console.log("Auth Error")
            }
        })
        
    },
    firestore() {
        return {
            Investors : this.$store.state.firestore.collection("Investors")
        }
    },
    data() {
        return {
            investorID: this.$route.params.id,
            investors: "Hello"
           
        }
    },
    
    methods: {
        // methods
    }
    
}
</script>

<style scoped>
    /*stylesheets*/
</style>