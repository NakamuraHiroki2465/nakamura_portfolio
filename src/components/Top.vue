<template>
    <div>
        <header>
            <div v-if="!isSp" class="pc__layout">
                <ul class = "header__menu">
                    <li class = "header__menu__list">
                        <a class="header__menu__list__link" @click="scrollTo('about')">ABOUT</a>
                    </li>
                    <li class = "header__menu__list">
                        <a class="header__menu__list__link" @click ="scrollTo('works')">WORKS</a>
                    </li>
                    <li class = "header__menu__list">
                        <a class="header__menu__list__link" @click ="scrollTo('private')">PRIVATE&nbsp;WORKS</a>
                    </li>
                    <li class = "header__menu__list">
                        <a class="header__menu__list__link" href="https://github.com/NakamuraHiroki2465/FukumatuyaVue">GITHUB</a>
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
                                <a class="sp__layout__wrapper__menu__list__link" @click="scrollTo('about')">ABOUT</a>
                            </li>
                            <li class = "sp__layout__wrapper__menu__list">
                                <a class="sp__layout__wrapper__menu__list__link" @click="scrollTo('works')">WORKS</a>
                            </li>
                            <li class = "sp__layout__wrapper__menu__list">
                                <a class="sp__layout__wrapper__menu__list__link" @click="scrollTo('private')">PRIVATE&nbsp;WORKS</a>
                            </li>
                            <li class = "sp__layout__wrapper__menu__list">
                                <a class="sp__layout__wrapper__menu__list__link" href="https://github.com/NakamuraHiroki2465/FukumatuyaVue">GITHUB</a>
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
            <section class="section about-section" id ="about" role="自己紹介">
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
            <section class="section works-section" id="works">
                <div class="works">
                    <ul class="works__wrapper">
                        <li class="works__wrapper__list"  @click ="scrollTo('work-1')">
                            <div v-if="isSp" class="works__wrapper__list__title">
                                <h2 class="works__wrapper__list__title__content">1.&nbsp;通信系企業のERPシステム開発</h2>
                            </div>
                            <div class="works__wrapper__list__content">
                                <img class="works__wrapper__list__content__image" src="../assets/images/works_1.png" alt="2020年6月~">
                                <span class="works__wrapper__list__content__explain">2020年6月&nbsp;～</span>
                            </div>
                            <div v-if="!isSp" class="works__wrapper__list__title">
                                <h2 class="works__wrapper__list__title__content">1.&nbsp;通信系企業のERPシステム開発</h2>
                            </div>
                        </li>
                        <li class="works__wrapper__list"  @click ="scrollTo('work-2')">
                            <div v-if="isSp" class="works__wrapper__list__title">
                                <h2 class="works__wrapper__list__title__content">2.&nbsp;不動産投資関係のWEBアプリ開発</h2>
                            </div>
                            <div class="works__wrapper__list__content">
                                <img class="works__wrapper__list__content__image" src="../assets/images/works_2.png" alt="2019年9月~2020年2月">
                                <span class="works__wrapper__list__content__explain">2019年9月&nbsp;～&nbsp;<br v-if="isSp">2020年2月</span>
                            </div>
                            <div v-if="!isSp" class="works__wrapper__list__title">
                                <h2 class="works__wrapper__list__title__content">2.&nbsp;不動産投資関係のWEBアプリ開発</h2>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="section work1-section" id="work-1">
                <div class="work1">
                    <div class="work1__title">
                        <p class="work1__title__content">1.通信系企業のERPシステム開発</p>
                        <p class="work1__title__subcontent">期間&nbsp;:&nbsp;2020年6月～現在まで</p>
                    </div>
                    <div class="work1__wrapper">
                        <div class="work1__wrapper__framework">
                            <div class="work1__wrapper__framework__title">
                                <p class="work1__wrapper__framework__title__content border-line">使用フレームワーク</p>
                            </div>
                            <div class="work1__wrapper__framework__explain">
                                <ul class="work1__wrapper__framework__explain__ul">
                                    <li class="work1__wrapper__framework__explain__ul__list list-point">
                                        Spring&nbsp;MVC
                                    </li>
                                    <li class="work1__wrapper__framework__explain__ul__list list-point">
                                        Handlebars(Javascriptのテンプレートエンジン)
                                    </li>
                                    <li class="work1__wrapper__framework__explain__ul__list list-point">
                                        Backbone.js(クライアントサイドMVC)
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="work1__wrapper__gengo">
                            <div class="work1__wrapper__gengo__title">
                                <p class="work1__wrapper__gengo__title__content border-line">使用言語</p>
                            </div>
                            <div class="work1__wrapper__gengo__explain">
                                <ul class="work1__wrapper__gengo__explain__ul">
                                    <li class="work1__wrapper__gengo__explain__ul__list list-point">
                                        Java
                                    </li>
                                    <li class="work1__wrapper__gengo__explain__ul__list list-point">
                                        Javascript
                                    </li>
                                    <li class="work1__wrapper__gengo__explain__ul__list list-point">
                                        HTML&amp;CSS
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="work1__wrapper__abstract">
                            <div class="work1__wrapper__abstract__title">
                                <p class="work1__wrapper__abstract__title__content border-line">
                                    概要
                                </p>
                            </div>
                            <div class="work1__wrapper__abstract__explain">
                                <p class="work1__wrapper__abstract__explain__content">画面側の実装</p>
                                <ul class="work1__wrapper__abstract__explain__ul">
                                    <li class="work1__wrapper__abstract__explain__ul__list list-point">
                                        画面の入力項目の項目追加（チェックボックス,テキストボックス,ファイル添付）
                                    </li>
                                    <li class="work1__wrapper__abstract__explain__ul__list list-point">
                                        ファイル添付時の拡張子バリデーション追加
                                    </li>
                                    <li class="work1__wrapper__abstract__explain__ul__list list-point">
                                        チェックボックス変更時の表示項目制御,バリデーション制御
                                    </li>
                                    <li class="work1__wrapper__abstract__explain__ul__list list-point">
                                        javaライブラリーのpdf-boxを利用したPDFファイルの操作検証
                                    </li>
                                </ul>
                                <p class="work1__wrapper__abstract__explain__content">バッチ処理の実装</p>
                                <ul class="work1__wrapper__abstract__explain__ul">
                                    <li class="work1__wrapper__abstract__explain__ul__list list-point">
                                        Batch処理におけるDBの結合を含む抽出処理
                                    </li>
                                    <li class="work1__wrapper__abstract__explain__ul__list list-point">
                                        Batch処理におけるDBの更新トランザクション処理の実装
                                    </li>
                                    <li class="work1__wrapper__abstract__explain__ul__list list-point">
                                        Batch処理における更新件数などのログ出力の実装
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="work1__wrapper__phase">
                            <div class="work1__wrapper__phase__title">
                                <p class="work1__wrapper__phase__title__content border-line">
                                    携わったフェーズ
                                </p>
                            </div>
                            <div class="work1__wrapper__phase__explain">
                                <p class="work1__wrapper__phase__explain__content">
                                    基本設計,実装設計,実装,単体テスト設計,単体テスト,結合テスト,障害対応,リリース
                                </p>
                            </div>
                        </div>
                        <div class="work1__wrapper__stumbling">
                            <div class="work1__wrapper__stumbling__title">
                                <p class="work1__wrapper__stumbling__title__content border-line">
                                    つまづきポイント
                                </p>
                            </div>
                            <div class="work1__wrapper__stumbling__explain">
                                <ul class="work1__wrapper__stumbling__explain__ul">
                                    <li class="work1__wrapper__stumbling__explain__ul__list">
                                        <p class="work1__wrapper__stumbling__explain__ul__list__problem">
                                            リリース後の本番障害で、PDF-BOXを利用した印影画像添付の処理でファイルの向きと画像が横向きで横伸びするエラーがおきた
                                        </p>
                                        <p class="work1__wrapper__stumbling__explain__ul__list__title">
                                            【解決方法】
                                        </p>
                                        <p class="work1__wrapper__stumbling__explain__ul__list__solve">
                                            PDF-BOXの公式ドキュメントを参照しながら、EclipseでPDFファイルの全ての変換処理にブレークポイントを組み込み、処理の流れで生成されたPDFファイルを出力しながら原因を解決
                                        </p>
                                    </li>
                                    <li class="work1__wrapper__stumbling__explain__ul__list">
                                        <p class="work1__wrapper__stumbling__explain__ul__list__problem">
                                            ドロップダウンリストの入力項目の内容でバリデーションの表示制御を行う実装時に、リストの値の取得前に値をもとに表示制御が行われてしまう
                                        </p>
                                        <p class="work1__wrapper__stumbling__explain__ul__list__title">
                                            【解決方法】
                                        </p>
                                        <p class="work1__wrapper__stumbling__explain__ul__list__solve">
                                           非同期処理で値の取得を行っていたため、非同期処理の流れに沿って表示制御の実装を行うことで解決 
                                        </p>
                                    </li>
                                    <li class="work1__wrapper__stumbling__explain__ul__list">
                                        <p class="work1__wrapper__stumbling__explain__ul__list__problem">
                                            入力画面の小項目の項目追加ボタン押下時に一度に複数の項目が生成されてしまう
                                        </p>
                                        <p class="work1__wrapper__stumbling__explain__ul__list__title">
                                            【解決方法】
                                        </p>
                                        <p class="work1__wrapper__stumbling__explain__ul__list__solve">
                                            小項目とは別の項目の値を変化させたときにも小項目のインスタンスがnewされており、複数回インスタンスをnewすることでメモリ上にインスタンスが残っていたことが原因。<br>別の項目の値を変化させたときの小項目のnew インスタンスを初期化とほぼ同じ処理で置き換えることで複数回インスタンスが生成されることを抑制し、解決
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section work2-section" id="work-2">
                <div class="work2">
                    <div class="work2__title">
                        <p class="work2__title__content">2.不動産投資関係のWEBアプリ開発</p>
                        <p class="work2__title__subcontent">期間&nbsp;:&nbsp;2019年9月～2020年2月</p>
                    </div>
                    <div class="work2__wrapper">
                        <div class="work2__wrapper__framework">
                            <div class="work2__wrapper__framework__title">
                                <p class="work2__wrapper__framework__title__content border-line">使用フレームワーク</p>
                            </div>
                            <div class="work2__wrapper__framework__explain">
                                <ul class="work2__wrapper__framework__explain__ul">
                                    <li class="work2__wrapper__framework__explain__ul__list list-point">
                                        Vue.js
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="work2__wrapper__gengo">
                            <div class="work2__wrapper__gengo__title">
                                <p class="work2__wrapper__gengo__title__content border-line">使用言語</p>
                            </div>
                            <div class="work2__wrapper__gengo__explain">
                                <ul class="work2__wrapper__gengo__explain__ul">
                                    <li class="work2__wrapper__gengo__explain__ul__list list-point">
                                        Javascript
                                    </li>
                                    <li class="work2__wrapper__gengo__explain__ul__list list-point">
                                        HTML&amp;CSS
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="work2__wrapper__abstract">
                            <div class="work2__wrapper__abstract__title">
                                <p class="work2__wrapper__abstract__title__content border-line">
                                    概要
                                </p>
                            </div>
                            <div class="work2__wrapper__abstract__explain">
                                <ul class="work2__wrapper__abstract__explain__ul">
                                    <li class="work2__wrapper__abstract__explain__ul__list list-point">
                                       画面項目の表示制御
                                    </li>
                                    <li class="work2__wrapper__abstract__explain__ul__list list-point">
                                        画面項目のレイアウト作成
                                    </li>
                                    <li class="work2__wrapper__abstract__explain__ul__list list-point">
                                        DBからレコード取得
                                    </li>
                                    <li class="work2__wrapper__abstract__explain__ul__list list-point">
                                        非同期処理での並列処理によるレコード取得
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="work2__wrapper__phase">
                            <div class="work2__wrapper__phase__title">
                                <p class="work2__wrapper__phase__title__content border-line">
                                    携わったフェーズ
                                </p>
                            </div>
                            <div class="work2__wrapper__phase__explain">
                                <p class="work2__wrapper__phase__explain__content">
                                    実装
                                </p>
                            </div>
                        </div>
                        <div class="work2__wrapper__stumbling">
                            <div class="work2__wrapper__stumbling__title">
                                <p class="work2__wrapper__stumbling__title__content border-line">
                                    つまづきポイント
                                </p>
                            </div>
                            <div class="work2__wrapper__stumbling__explain">
                                <ul class="work2__wrapper__stumbling__explain__ul">
                                    <li class="work2__wrapper__stumbling__explain__ul__list">
                                        <p class="work2__wrapper__stumbling__explain__ul__list__problem">
                                            数千のレコードの特定のカラムの値に応じて、別テーブルから値を取得する処理を実装する際、レコード毎にfor文でまわしていたことで全てのレコードの取得までに時間がかかりすぎて、タイムアウトになってしまう
                                        </p>
                                        <p class="work2__wrapper__stumbling__explain__ul__list__title">
                                            【解決方法】
                                        </p>
                                        <p class="work2__wrapper__stumbling__explain__ul__list__solve">
                                            for文での取得は直列処理であったため処理速度が遅くなっていたことから、Promiseを利用している他ソースやMDN Web Docsなどを参照し、Promise構文をもちいて並列に値を取得することで解決
                                        </p>
                                    </li>
                                    <li class="work2__wrapper__stumbling__explain__ul__list">
                                        <p class="work2__wrapper__stumbling__explain__ul__list__problem">
                                            Vue.jsの学習経験が一切なかったため、開発参画時に何をどう修正したらよいか手付かず状態だった
                                        </p>
                                        <p class="work2__wrapper__stumbling__explain__ul__list__title">
                                            【解決方法】
                                        </p>
                                        <p class="work2__wrapper__stumbling__explain__ul__list__solve">
                                           UdemyのVue.jsの講座を一周し、Vue.jsの本を図書館で借りて辞書として活用しながら実装を行った。また、アウトプットを増やすため、父の経営するお店のホームページをVue.jsを用いて制作した 
                                        </p>
                                    </li>
                                    <li class="work2__wrapper__stumbling__explain__ul__list">
                                        <p class="work2__wrapper__stumbling__explain__ul__list__problem">
                                            スマートフォンページの表示時とPC画面での表示時でレイアウト崩れが起きる
                                        </p>
                                        <p class="work2__wrapper__stumbling__explain__ul__list__title">
                                            【解決方法】
                                        </p>
                                        <p class="work2__wrapper__stumbling__explain__ul__list__solve">
                                            bulmaを利用したフレキシブルなレイアウトやflexboxなどを利用した柔軟なレイアウトの作成方法を学んだ<br>別の項目の値を変化させたときの小項目のnew インスタンスを初期化とほぼ同じ処理で置き換えることで複数回インスタンスが生成されることを抑制し、解決
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section private-section" id="private">
                <div class="private">
                    <div class="private__title">
                        <p class="private__title__content">個人制作物</p>
                    </div>
                    <div class="private__wrapper">
                        <div class="private__wrapper__content">
                            <div class="private__wrapper__content__abstract">
                                <p class="private__wrapper__content__abstract__title">
                                    概要
                                </p>
                                <p class="private__wrapper__content__abstract__content">
                                    Vue.jsを使用し、両親の経営する割烹料理のホームページを作成<br>Vue-routerを使用してルーティングを行い、<br>CSSフレームワークとしてbulma、<br>JavascriptのフレームワークとしてjQueryなどを使用
                                </p>
                            </div>
                            <div class="private__wrapper__content__gengo">
                                <p class="private__wrapper__content__gengo__title">
                                    使用言語
                                </p>
                                <ul class="private__wrapper__content__gengo__ul">
                                    <li class="private__wrapper__content__gengo__ul_list list-point">
                                        Javascript
                                    </li>
                                    <li class="private__wrapper__content__gengo__ul_list list-point">
                                        HTML&amp;CSS
                                    </li>
                                </ul>
                            </div>
                            <div class="private__wrapper__content__framework">
                                <p class="private__wrapper__content__framework__title">
                                    使用フレームワーク
                                </p>
                                <ul class="private__wrapper__content__framework__ul">
                                    <li class="private__wrapper__content__framework__ul__list list-point">
                                        Vue.js
                                    </li>
                                    <li class="private__wrapper__content__framework__ul__list list-point">
                                        Git
                                    </li>
                                </ul>
                            </div>
                            <div class="private__wrapper__content__tool">
                                <p class="private__wrapper__content__tool__title">
                                    使用ツール
                                </p>
                                <ul class="private__wrapper__content__tool__ul">
                                    <li class="private__wrapper__content__tool__ul__list list-point">
                                        GitHub
                                    </li>
                                    <li class="private__wrapper__content__tool__ul__list list-point">
                                        npm
                                    </li>
                                </ul>
                            </div>
                            <div class="private__wrapper__content__source">
                                <p class="private__wrapper__content__source__title">
                                    ソースコード
                                </p>
                                <a class="private__wrapper__content__source__link" href="https://github.com/NakamuraHiroki2465/FukumatuyaVue">
                                    こちらから
                                </a>
                            </div>
                            <div class="private__wrapper__content__source">
                                <p class="private__wrapper__content__source__title">
                                    サイトへ飛ぶ
                                </p>
                                <a class="private__wrapper__content__source__link" href="https://www.fukumatuya.com">
                                    こちらから
                                </a>
                            </div>
                        </div>
                        <div class="private__wrapper__image">
                            <div class="private__wrapper__image__title">
                                <p class="private__wrapper__image__title__content">福松家</p>
                            </div>
                            <div class="private__wrapper__image__wrapper"
                                @mouseover="mouseOverAction" 
                                @mouseleave="mouseLeaveAction" 
                            >
                                <router-link 
                                    tag="div" 
                                    to ="https://www.fukumatuya.com" 
                                    class="private__wrapper__image__wrapper__link"
                                >
                                    <transition name="fade">
                                        <span 
                                            v-show="hoverLink" 
                                            class="private__wrapper__image__wrapper__link__text"
                                        >
                                        こちらのページへ飛ぶ
                                        </span>
                                    </transition>
                                </router-link>
                                <img class="private__wrapper__image__wrapper__content" src="../assets/images/privatework.png" alt="福松家のトップページ">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="footer-section">
                <div class="footer">
                    <p @click="scrollTo('about')" class="footer__about">
                        ABOUT
                    </p>
                    <p @click="scrollTo('works')" class="footer__about">
                        WORKS
                    </p>
                    <p @click="scrollTo('work-1')" class="footer__about">
                        WORK1
                    </p>
                    <p @click="scrollTo('work-2')" class="footer__about">
                        WORK2
                    </p>
                    <p @click="scrollTo('private')" class="footer__about">
                        PRIVATE_WORKS
                    </p>
                    <a href="https://github.com/NakamuraHiroki2465" class="footer__link" style="text-decoration:none;color:#707070;">
                        GITHUB
                    </a>
                    <a href="https://qiita.com/NakamuraHiroki2465" class="footer__link" style="text-decoration:none;color:#707070;">
                        QIITA
                    </a>
                </div>
                <div class="footer__copyright">
                    <small>©allrights reseved nakamura hiroki</small>
                </div>
            </footer>
        </main>
    </div>
</template>
<script>
export default {
    name: 'top',
    data:function(){
        return {
            width : window.innnerWidth,
            isOpenedHeaderMenu : false,
            element : 0,
            hoverLink : false,
        }
    },
    methods:{
        toggleMenu:function(){
            this.isOpenedHeaderMenu = !this.isOpenedHeaderMenu
        },
        scrollTo:function(elem){
            this.element = document.getElementById(elem);
            var elem_position = this.element.getBoundingClientRect();
            window.scrollBy({
                top:elem_position.top,
                left:0,
                behavior:'smooth'
            });
            if (this.isOpenedHeaderMenu == true) {
                this.isOpenedHeaderMenu = false;
            }
        },
        mouseOverAction(){
            this.hoverLink = true;
        },
        mouseLeaveAction(){
            this.hoverLink = false;
        }
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
            &__link{
                color:#707070;
                text-decoration:none;
                &:hover{
                    cursor:pointer;
                }
            }
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
                &__link{
                    &:hover{
                        cursor:pointer;
                    }
                    color:#707070;
                    text-decoration:none;
                }
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
            color:black;
            font-style:italic;
            font-size:43px;
            font-weight:lighter;
            position:absolute;
            left:50px;
            bottom:10%;
            @include sp(){
                font-size:25px;
                bottom:15%;
            }
            @include md(){
                font-size:30px;
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
        min-width:300px;
        height:300px;
        overflow:hidden;
        &__img{
            height:300px;
        }
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
.works-section{
    @include subtitle(#ABB6EB,'WORKS');
}
.works{
    &__wrapper{
        @include lg(){
            width:85%;
            margin:auto;
            display:flex;
            justify-content:space-between;
        }
        @include md(){
            width:85%;
            margin:auto;
            display:flex;
            justify-content:space-between;
        }
        @include sp(){
            width:90%;
            margin:0;
        }
        padding:0;
        &__list{
            margin:0 50px;
            list-style:none;
            &:hover{
                cursor:pointer;
            }
            @include sp(){
                margin:0;
            }
            &__content{
                position:relative;
                @include sp(){
                    height:100px;
                    overflow:hidden;
                }
                &__image{
                    width:500px;
                    @include sp(){
                        width:100%;
                        position:absolute;
                        top:50%;
                        transform:translateY(-50%);
                    }
                }
                &__explain{
                    position:absolute;
                    top:50%;
                    left:50%;
                    transform:translate(-50%,-50%);
                    color:#F4F5F7;
                    font-size:20px;
                    z-index:3;
                }
                &::after{
                    content:'';
                    background-color:rgba(0,0,0,0.5);
                    display:block;
                    position:absolute;
                    top:0;
                    left:0;
                    z-index:2;
                    width:100%;
                    height:calc(100% - 7px);
                    @include sp(){
                        height:100%;
                    }
                }
            }
            &__title{
                margin:50px 0 0 0;
                &__content{
                    font-size:20px;
                    font-weight:lighter;
                    text-align:center;
                    @include sp(){
                        font-size:15px;
                    }
                }
            }
        }
    }
}
.work1-section,.work2-section{
    background-color:white;
    width:90%;
    margin:100px auto;
    @include sp(){
        width:100%;
        position:relative;
        left:-10px;
    }
}
.work1-section{
    @include worksubtitle(#ABB6EB,'WORK1');
}
.work2-section{
    @include worksubtitle(#ABB6EB,'WORK2');
}
.border-line{
    display:flex;
    position:relative;
    white-space:nowrap;
    &::after{
        content: '';
        width:100%;
        height:0.5px;
        margin:12px;
        background-color:black;
        @include sp(){
            margin:10px;
        }
    }
}
.work1,.work2{
    padding:50px;
    @include sp(){
        padding:15px;
    }
    &__title{
        &__content{
            font-size:25px;
            @include sp(){
                font-size:15px;
            }
        }
        &__subcontent{
            font-size:20px;
            margin-left:25px;
            @include sp(){
                font-size:13px;
                margin-left:5px;
            }
        }
    }
    &__wrapper{
        margin-left:50px;
        @include sp(){
            margin:0;
        }
        &__framework{
            margin:50px auto;
            @include sp(){
                margin:25px auto;
            }
            &__title{
                &__content{
                    font-size:18px;
                    @include sp(){
                        font-size:13px;
                        margin-left:5px;
                    }
                }
            }
            &__explain{
                &__ul{
                    @include sp(){
                        padding:0;
                        margin-left:10px;
                        font-size:12px;
                    }
                    &__list{

                    }
                }
            }
        }
        &__gengo{
            margin:50px auto;
            @include sp(){
                margin:25px auto;
            }
            &__title{
                &__content{
                    font-size:18px;
                    @include sp(){
                        font-size:13px;
                        margin-left:5px;
                    }
                }
            }
            &__explain{
                &__ul{
                    @include sp(){
                        padding:0;
                        margin-left:10px;
                        font-size:12px;
                    }
                    &__list{

                    }
                }
            }
        }
        &__abstract{
            margin:50px auto;
            @include sp(){
                margin:25px auto;
            }
            &__title{
                &__content{
                    font-size:18px;
                    @include sp(){
                        font-size:13px;
                        margin-left:5px;
                    }
                }
            }
            &__explain{
                &__content{
                    font-size:18px;
                }
                &__ul{
                    @include sp(){
                        padding:0;
                        margin-left:10px;
                        font-size:12px;
                    }
                    &__list{
                        @include sp(){
                            margin:15px 0;
                        }
                    }
                }
            }
        }
        &__phase{
            margin:50px auto;
            @include sp(){
                margin:25px auto;
            }
            &__title{
                &__content{
                    font-size:18px;
                    @include sp(){
                        font-size:13px;
                        margin-left:5px;
                    }
                }
            }
            &__explain{
                &__content{
                    margin-left:40px;
                    @include sp(){
                        font-size:13px;
                        margin-left:15px;
                    }
                }
            }
        }
        &__stumbling{
            margin:50px auto;
            @include sp(){
                margin:25px auto;
            }
            &__title{
                &__content{
                    font-size:18px;
                    @include sp(){
                        font-size:13px;
                        margin-left:5px;
                    }
                }
            }
            &__explain{
                &__ul{
                    padding-left:60px;
                    @include sp(){
                        padding-left:15px;
                    }
                    &__list{
                        position:relative;
                        list-style:none;
                        display:inline-block;
                        margin:15px 0;
                        &__problem{
                            font-size:15px;
                            margin:10px 0;
                            @include sp(){
                                font-size:13px;
                                margin:20px 0;
                            }
                        }
                        &__title{
                            font-size:16px;
                            margin:10px 0;
                            @include sp(){
                                font-size:15px;
                                margin:0;
                            }
                        }
                        &__solve{
                            font-size:12px;
                            margin:10px 0;
                            @include sp(){
                                font-size:12px;
                                margin:10px 0;
                            }
                        }
                    }
                    &__list:nth-child(1){
                        &::before{
                            content:'';
                            background-image:url("../assets/images/1位.png");
                            display:inline-block;
                            width:30px;
                            height:30px;
                            background-size:contain;
                            position:absolute;
                            top:0;
                            left:-50px;
                            transform:translateY(25%);
                        }
                        @include sp(){
                            &::before{
                                content:'';
                                background-image:url("../assets/images/1位.png");
                                display:inline-block;
                                width:20px;
                                height:20px;
                                background-size:contain;
                                position:relative;
                                left:0px;
                            }     
                        }
                    }
                    &__list:nth-child(2){
                        &::before{
                            content:'';
                            background-image:url("../assets/images/2位.png");
                            display:inline-block;
                            width:30px;
                            height:30px;
                            background-size:contain;
                            position:absolute;
                            top:0;
                            left:-50px;
                            transform:translateY(25%);
                        }
                        @include sp(){
                            &::before{
                                content:'';
                                background-image:url("../assets/images/2位.png");
                                display:inline-block;
                                width:20px;
                                height:20px;
                                background-size:contain;
                                position:relative;
                                left:0px;
                            }     
                        }
                    }
                    &__list:nth-child(3){
                        &::before{
                            content:'';
                            background-image:url("../assets/images/3位.png");
                            display:inline-block;
                            width:30px;
                            height:30px;
                            background-size:contain;
                            position:absolute;
                            top:0;
                            left:-50px;
                            transform:translateY(25%);
                        }
                        @include sp(){
                            &::before{
                                content:'';
                                background-image:url("../assets/images/3位.png");
                                display:inline-block;
                                width:20px;
                                height:20px;
                                background-size:contain;
                                position:relative;
                                left:0px;
                            }     
                        }
                    }
                }
            }
        }
    }
}
.private-section{
    width:90%;
    margin:150px auto;
    @include sp(){
        width:100%;
        position:relative;
        left:-10px;
    }
}
.private{
    @include subtitleprivate(#D7A7C7,'PRIVATE WORKS');

    &__title{
        &__content{
            font-size:20px;
        }
    }
    &__wrapper{
        display:flex;
        @include sp(){
            display:block;
        }
        &__content{
            width:600px;
            background-color:white;
            padding:20px;
            margin-left:10px;
            @include sp(){
                width:90%;
                margin:0;
            }
            &__abstract{
                &__title{
                    font-size:20px;
                    margin:5px 0;
                }
                &__content{
                    font-size:13px;
                    margin:5px;
                }
            }
            &__gengo{
                &_title{
                    margin:5px 0;
                }
                &__ul{
                    font-size:13px;
                    margin:5px 0;
                    padding-left:10px;
                    &__list{
                    }
                }
            }
            &__framework{
                &_title{
                    margin:5px 0;
                }
                &__ul{
                    font-size:13px;
                    margin:5px 0;
                    padding-left:10px;
                    &__list{
                        
                    }
                }
            }
            &__tool{
                &_title{
                    margin:5px 0;
                }
                &__ul{
                    font-size:13px;
                    margin:5px 0;
                    padding-left:10px;
                    &__list{
                        
                    }
                }
            }
            &__source{
                margin-top:20px;
                &__title{
                    margin:5px 0;
                }
                &__link{
                    color:#8EB7CF;
                    text-decoration:none;
                }
            }
        }
        &__image{
            margin-left:30px;
            @include sp(){
                margin:30px 0 0 0;
            }
            &__title{
                &__content{
                    font-family:"HG行書体", monospace;
                    font-weight:bold;
                    color:black;
                    font-size:20px;
                    margin:0 0 20px 0;
                    padding:0;
                }
            }
            &__wrapper{
                position:relative;
                &__link{
                    display:block;
                    position:absolute;
                    background-color:rgba(0,0,0,0);
                    top:50%;
                    left:50%;
                    transform:translate(-50%,-50%);
                    width:100%;
                    height:calc(100% - 7px);
                    z-index:2;
                    transition:background-color 0.5s;
                    &:hover{
                        cursor:pointer;
                        background-color:rgba(0,0,0,0.3);
                        transition:background-color 0.5s;
                    }
                    &__text{
                        display:block;
                        position:absolute;
                        top:50%;
                        left:50%;
                        transform:translate(-50%,-50%);
                        text-decoration:none;
                        color:white;
                        font-size:25px;
                        z-index:3;
                        &:hover{
                            cursor:pointer;
                        }
                    }
                }
                &__content{
                    width:500px;
                    @include sp(){
                        width:100%;
                    }
                }
            }
        }
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}

.footer{
    position:relative;
    left:-10px;
    margin:0 auto;
    @include lg(){
        width:800px;
        display:flex;
        justify-content:space-between;
    }
    @include md(){
        width:800px;
        display:flex;
        justify-content:space-between;
    }
    &__about{
        margin:15px 0;
        text-align:center;
        &:hover{
            cursor:pointer;
        }
    }
    &__link{
        margin:15px 0;
        text-align:center;
        display:block;
        &:hover{
            cursor:pointer;
        }
    }
    &__copyright{
        font-size:10px;
        text-align:center;
        margin:10px 0 50px 0;
    }
}
</style>