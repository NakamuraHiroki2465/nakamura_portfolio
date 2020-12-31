<template>
    <div>
        <header>
            <div v-if="!isSp" class="pc__layout">
                <ul class = "header__menu">
                    <li class = "header__menu__list">
                        ABOUT
                    </li>
                    <li class = "header__menu__list">
                        WORKS
                    </li>
                    <li class = "header__menu__list">
                        PRIVATE&nbsp;WORKS
                    </li>
                    <li class = "header__menu__list">
                        GITHUB
                    </li>
                </ul>
            </div>
            <div v-if="isSp" class="sp__layout">
                <div class="sp__layout__accordion" v-on:click="toggleMenu()">
                    <span v-bind:class="{open:!isOpenedHeaderMenu,close:isOpenedHeaderMenu}"></span>
                    <span v-bind:class="{open:!isOpenedHeaderMenu,close:isOpenedHeaderMenu}"></span>
                    <span v-bind:class="{open:!isOpenedHeaderMenu,close:isOpenedHeaderMenu}"></span>
                </div>
                <transition name = "show">
                    <div v-if="isOpenedHeaderMenu"  class="sp__layout__wrapper">
                        <ul class = "sp__layout__wrapper__menu">
                            <li class = "sp__layout__wrapper__menu__list">
                                ABOUT
                            </li>
                            <li class = "sp__layout__wrapper__menu__list">
                                WORKS
                            </li>
                            <li class = "sp__layout__wrapper__menu__list">
                                PRIVATE&nbsp;WORKS
                            </li>
                            <li class = "sp__layout__wrapper__menu__list">
                                GITHUB
                            </li>
                        </ul>
                        <div class="sp__layout__wrapper__copyright">
                            <small>©allrights reseved nakamura hiroki</small>
                        </div>
                    </div>
                </transition>
            </div>
        </header>
        <main>
            <section class="section" role="ポートフォリオ題名">
                <div class="portfolio relative">
                    <img class="portfolio__image" src="../assets/images/nakamura_portfolio.png" alt="中村拡幹のポートフォリオ写真">
                    <h1 class="portfolio__title">NAKAMURA&nbsp;HIROKI<br>PORTFOLIO</h1>
                </div>
            </section>

        </main>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            width : window.innnerWidth,
            isOpenedHeaderMenu : false
        }
    },
    methods:{
        toggleMenu:function(){
            this.isOpenedHeaderMenu = !this.isOpenedHeaderMenu
        },
    }
}
</script>
<style scoped lang="scss">
//共通レイアウト
@import '@/assets/css/common.scss';
//メニューアコーディオン用CSS
@import '@/assets/css/headerMenuAccordion.scss';
header{
    width:100%;
}
main{
    margin:0 0 0 50px;
    @include sp(){
        margin:0 0 0 20px;
    }
}
.pc__layout{
    .header__menu{
        width:500px;
        height:0;
        margin:0 100px 0 auto;
        list-style:none;
        display:flex;
        justify-content:space-between;
        &__list{
            height:60px;
            line-height:60px;
            list-style:none;
        }
    }
}
.sp__layout{
    &__wrapper{
        width:100vw;
        height:100vh;
        background-color:#F4F5F7;
        position:relative;
        position:fixed;
        z-index:100;
        transition:display 0.3s;
        &__menu{
            position:absolute;
            top:30%;
            left:50%;
            transform:translate(-50%,-50%);
            &__list{
                height:60px;
                line-height:60px;
                list-style:none;
            }
        }
        &__copyright{
            font-size:10px;
            position:absolute;
            bottom:20px;
            left:50%;
            transform:translate(-50%,-50%);
        }
    }
}
.show-enter-active,.show-leave-active{
    transition:opacity .3s;
}
.show-enter, .show-leave-to {
  opacity: 0;
}
.section{
    width:100%;
    .portfolio{
        width:100%;
        margin-left: auto;
        overflow:hidden;
        height:calc(100vh - 60px);
        min-height:600px;
        top:60px;
        &__image{
            margin:0;
            min-width:1400px;
            width:100%;
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
        }
        &__title{
            color:#FFFFFF;
            font-size:43px;
            font-weight:lighter;
            position:absolute;
            left:50px;
            bottom:10%;
            @include sp(){
                font-size:25px;
            }
            @include md(){
                font-size:30px
            }
        }
    }
}
.relative{
    position:relative;
}
.section_title{
    font-style:italic;
    font-family:"Noto Sans";
    font-size:30px;
}
#name_kanji{
    font-size:43px;
}
#name_hira{
    font-size:25px;
}

</style>