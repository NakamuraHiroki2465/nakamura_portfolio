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
            <section :style="this.width" class="section portfolio" role="ポートフォリオ題名">
                <div class="portfolio relative">
                    <img class="portfolio__image" src="../assets/images/nakamura_portfolio.png" alt="中村拡幹のポートフォリオ写真">
                    <h1 class="portfolio__title">NAKAMURA&nbsp;HIROKI<br>PORTFOLIO</h1>
                </div>
            </section>
            <section class="section about-section" role="自己紹介">
                <div class="about">
                    <div class="about__content">
                        <div class="about__content__name">
                            <p class="about__content__name__kana">なかむら&nbsp;&nbsp;&nbsp;ひろき</p>
                            <p class="about__content__name__kanji">中村&nbsp;拡幹</p>
                        </div>
                        <div class="about__content__explain">
                            <p class="about__content__explain__p">1995年生まれ。システムエンジニア7ヶ月ほど</p>
                            <p class="about__content__explain__p">大学4年の春に家業のホームページを作るためプログラミングを始めたことがきっかけでエンジニアの世界に入る</p>
                            <p class="about__content__explain__p">大学4年の秋から始めたフロントエンド開発のインターンでVue.jsを使用し、実務の難しさに触れる</p>
                            <p class="about__content__explain__p">入社後は通信系のERPシステム開発の基本設計から実装、テスト、リリースまでを経験</p>
                            <p class="about__content__explain__p">特技は筋トレとタイピング、趣味はテニスとサイクリング</p>
                            <p class="about__content__explain__p">好きな言葉は”冗談じゃない。いますぐトレーニングだ”</p>
                        </div>
                    </div>
                    <div class="about__image">
                        <img class="about__image__img" src="../assets/images/about.png" alt="自己紹介">
                    </div>
                </div>
            </section>
            <section class="section gengo-section">
                <div class="gengo">
                    <div class="gengo__title">
                        <p class="gengo__title__content">使用言語</p>
                    </div>
                    <div class="gengo__box">
                        <div class="gengo__box__wrapper">
                            <div class="gengo__box__wrapper__title">
                                <p class="gengo__box__wrapper__title__content">Java</p>
                            </div>
                            <div class="gengo__box__wrapper__content">
                                <img class="gengo__box__wrapper__content__image" src="../assets/images/Java.png" alt="Javaの使用経験">
                                <p class="gengo__box__wrapper__content__experience">使用経験&nbsp;:&nbsp;9ヶ月</p>
                                <p class="gengo__box__wrapper__content__framework">使用フレームワーク&nbsp;:&nbsp;Spring&nbsp;&nbsp;MVC</p>
                                <p class="gengo__box__wrapper__content__explain">9か月以上の経験あり。現職通信系企業のERPシステム開発の現場で使用</p>
                            </div>
                        </div>
                    </div>
                    <div class="gengo__box">
                        <div class="gengo__box__wrapper">
                            <div class="gengo__box__wrapper__title">
                                <p class="gengo__box__wrapper__title__content">Javascript</p>
                            </div>
                            <div class="gengo__box__wrapper__content">
                                <img class="gengo__box__wrapper__content__image" src="../assets/images/Javascript.png" alt="Javascriptの使用経験">
                                <p class="gengo__box__wrapper__content__experience">使用経験&nbsp;:&nbsp;1年</p>
                                <p class="gengo__box__wrapper__content__framework">使用フレームワーク&nbsp;:&nbsp;Vue.js</p>
                                <p class="gengo__box__wrapper__content__explain">1年以上の経験あり。WEB開発のインターンと通信系企業のERPシステム開発で使用</p>
                            </div>
                        </div>
                    </div>
                    <div class="gengo__box">
                        <div class="gengo__box__wrapper">
                            <div class="gengo__box__wrapper__title">
                                <p class="gengo__box__wrapper__title__content">HTML&amp;CSS</p>
                            </div>
                            <div class="gengo__box__wrapper__content">
                                <img class="gengo__box__wrapper__content__image" src="../assets/images/HTML,CSS.png" alt="HTML及びCSSの使用経験">
                                <p class="gengo__box__wrapper__content__experience">使用経験&nbsp;:&nbsp;1.5年</p>
                                <p class="gengo__box__wrapper__content__framework">使用フレームワーク&nbsp;:&nbsp;bulma,SCSS</p>
                                <p class="gengo__box__wrapper__content__explain">家業のホームページ作成時に使用し、フレックスボックスやbulmaなどのフレームワークを利用したレスポンシブなページを作成可能。<br>アコーディオンボタンなどの作成経験もあり</p>
                            </div>
                        </div>
                    </div>
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
    width:100vw;
    position:fixed;
    z-index:100;
}
main{
    padding:0 0 0 50px;
    @include sp(){
        padding:0 0 0 20px;
        width:100%;
        box-sizing:border-box;
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
    margin:0 0 250px 0;
    position:relative;
    @include lg(){
        min-width:1200px;
    }
    @include md(){
        min-width:1200px;
    }
    @include sp(){
        margin:0 0 150px 0 ;
    }
    .portfolio{
        margin-left: auto;
        margin-bottom:60px;
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

.about{
    @include lg(){
        display:flex;
        min-width:1200px;
    }
    @include md(){
        display:flex;
        min-width:1200px;
    }
    &__content{
        margin:0 50px;
        @include sp(){
            margin:0 10px;
        }
        &__name{
            &__kana{
                margin:0;
            }
            &__kanji{
                font-size:30px;
                font-weight:lighter;
                margin:0;
            }
        }
        &__explain{
            &__p{
                font-size:12px;
                @include lg(){
                    min-width:650px;
                }
                @include sp(){
                    margin:0;
                    padding:0;
                    line-height:25px;
                }
            }
        }
    }
    &__image{
        min-width:400px;
        height:300px;
        overflow:hidden;
        @include sp(){
            min-width:100%;
            margin:20px auto;
            &__img{
                width:95%;
                margin:0 auto;
            }
        }
    }
}
.about-section{
    @include subtitle(#F5EBD0,'ABOUT');
}
.relative{
    position:relative;
}
.section_title{
    font-style:italic;
    font-family:"Noto Sans";
    font-size:30px;
}
.gengo-section{
    @include subtitle(#B8D9BD,'SKILL');
}
.gengo{
    &__title{
        margin:0 50px;
        @include sp(){
            margin:0 10px;
        }
        &__content{
            font-size:25px;
            font-weight:lighter;
        }
    }
    &__box{
        margin:50px;
        @include sp(){
            margin:50px 10px;
        }
        &__wrapper{
            width:1200px;
            display:flex;
            @include sp(){
                width:100%;
                display:block;
            }
            &__title{
                width:150px;
                margin-right:50px;
                &__content{
                    font-size:20px;
                    margin:0;
                }
            }
            &__content{
                &__image{
                    @include lg(){
                        width:800px;
                    }
                    @include md(){
                        width:800px;
                    }
                    @include sp(){
                        width:100%;
                    }
                }
                &__experience{
                    font-size:20px;
                    margin:5px 0;
                }
                &__framework{
                    font-size:20px;
                    margin:5px 0;
                }
                &__explain{
                    font-size:12px;
                }
            }
        }
    }
}
</style>