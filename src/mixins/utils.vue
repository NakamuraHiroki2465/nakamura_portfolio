<script>
export default {
    data : function() {
      return {
        isSp : false,
        width : window.innerWidth,
        loading : true
      }
    },
    mounted() {
        this.width = window.innerWidth;
        this.loading = false;
        if (this.width < 769 || navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
          this.isSp = true
        }else{
          this.isSp = false
        }
        window.addEventListener('resize',this.handleResize)
    },
    beforeDestroy:function(){
        window.removeEventListener('resize',this.handleResize)
    },
    methods : {
        handleResize : function() {
            this.width = window.innerWidth;
            if (this.width < 769 || navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
              return this.isSp = true;
            } else {
              return this.isSp = false;
            }
          }
    }
}
</script>