<template>
  <div class="container">
    <div class="push-down"></div>
    <md-layout md-gutter>
        <md-layout md-flex-large="100" md-flex-xsmall="100" md-align="center">
            <span class="md-display-2">Investor Details</span>
        </md-layout>
        <md-layout md-flex-large="100" md-flex-xsmall="100" md-align="left">
            <md-whiteframe class="data-container">
                <md-list>
                    <md-subheader>Investor</md-subheader>

                    {{investorID}}
                    {{Investor}}
                
                </md-list>
            </md-whiteframe>
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
      console.log("InvestorID: ", this.investorID)

      return {
        Investor: this.$store.state.firestore.collection("Investors")
      }
    },
    data() {
        return {
            investorID: this.$route.params.id
            // models
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