(function(_){function t(t){for(var a,r,l=t[0],n=t[1],o=t[2],c=0,A=[];c<l.length;c++)r=l[c],Object.prototype.hasOwnProperty.call(e,r)&&e[r]&&A.push(e[r][0]),e[r]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(_[a]=n[a]);p&&p(t);while(A.length)A.shift()();return i.push.apply(i,o||[]),s()}function s(){for(var _,t=0;t<i.length;t++){for(var s=i[t],a=!0,l=1;l<s.length;l++){var n=s[l];0!==e[n]&&(a=!1)}a&&(i.splice(t--,1),_=r(r.s=s[0]))}return _}var a={},e={app:0},i=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return _[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=_,r.c=a,r.d=function(_,t,s){r.o(_,t)||Object.defineProperty(_,t,{enumerable:!0,get:s})},r.r=function(_){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})},r.t=function(_,t){if(1&t&&(_=r(_)),8&t)return _;if(4&t&&"object"===typeof _&&_&&_.__esModule)return _;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:_}),2&t&&"string"!=typeof _)for(var a in _)r.d(s,a,function(t){return _[t]}.bind(null,a));return s},r.n=function(_){var t=_&&_.__esModule?function(){return _["default"]}:function(){return _};return r.d(t,"a",t),t},r.o=function(_,t){return Object.prototype.hasOwnProperty.call(_,t)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var p=n;i.push([0,"chunk-vendors"]),s()})({0:function(_,t,s){_.exports=s("56d7")},"034f":function(_,t,s){"use strict";s("85ec")},1776:function(_,t,s){_.exports=s.p+"img/nakamura_portfolio.57a32810.png"},"39a6":function(_,t,s){_.exports=s.p+"img/works_1.201df4fd.png"},"3d39":function(_,t,s){},"4c32":function(_,t,s){_.exports=s.p+"img/about.6fcfb0fa.png"},"56d7":function(_,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a,e,i=s("2b0e"),r=s("8c4f"),l=s("342d"),n=s.n(l),o=function(){var _=this,t=_.$createElement,s=_._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},p=[],c={name:"App",head:{title:{inner:"ポートフォリオ",separator:"|",complement:"中村拡幹"}},meta:[{name:"description",content:"中村拡幹のポートフォリオ"},{name:"viewport",content:"width=device-width,initial-scale=1.0,user-scalable=no"},{charset:"utf-8"},{property:"og:type",content:"website"}],script:[{type:"text/javascript",src:"https://code.jquery.com/jquery-3.5.1.js",integrity:"sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=",crossorigin:"anonymous",async:!0}]},A=c,C=(s("034f"),s("2877")),g=Object(C["a"])(A,o,p,!1,null,null,null),w=g.exports,u=function(){var _=this,t=_.$createElement,a=_._self._c||t;return a("div",[a("header",[_.isSp?_._e():a("div",{staticClass:"pc__layout"},[a("ul",{staticClass:"header__menu"},[a("li",{staticClass:"header__menu__list"},[a("a",{staticClass:"header__menu__list__link",on:{click:function(t){return _.scrollTo("about")}}},[_._v("ABOUT")])]),a("li",{staticClass:"header__menu__list"},[a("a",{staticClass:"header__menu__list__link",on:{click:function(t){return _.scrollTo("works")}}},[_._v("WORKS")])]),a("li",{staticClass:"header__menu__list"},[a("a",{staticClass:"header__menu__list__link",on:{click:function(t){return _.scrollTo("private")}}},[_._v("PRIVATE WORKS")])]),_._m(0)])]),_.isSp?a("div",{staticClass:"sp__layout"},[a("div",{staticClass:"sp__layout__accordion",on:{click:function(t){return _.toggleMenu()}}},[a("span",{class:{open:!_.isOpenedHeaderMenu,close:_.isOpenedHeaderMenu}}),a("span",{class:{open:!_.isOpenedHeaderMenu,close:_.isOpenedHeaderMenu}}),a("span",{class:{open:!_.isOpenedHeaderMenu,close:_.isOpenedHeaderMenu}})]),a("transition",{attrs:{name:"show"}},[_.isOpenedHeaderMenu?a("div",{staticClass:"sp__layout__wrapper"},[a("ul",{staticClass:"sp__layout__wrapper__menu"},[a("li",{staticClass:"sp__layout__wrapper__menu__list"},[a("a",{staticClass:"sp__layout__wrapper__menu__list__link",on:{click:function(t){return _.scrollTo("about")}}},[_._v("ABOUT")])]),a("li",{staticClass:"sp__layout__wrapper__menu__list"},[a("a",{staticClass:"sp__layout__wrapper__menu__list__link",on:{click:function(t){return _.scrollTo("works")}}},[_._v("WORKS")])]),a("li",{staticClass:"sp__layout__wrapper__menu__list"},[a("a",{staticClass:"sp__layout__wrapper__menu__list__link",on:{click:function(t){return _.scrollTo("private")}}},[_._v("PRIVATE WORKS")])]),a("li",{staticClass:"sp__layout__wrapper__menu__list"},[a("a",{staticClass:"sp__layout__wrapper__menu__list__link",attrs:{href:"https://github.com/NakamuraHiroki2465/FukumatuyaVue"}},[_._v("GITHUB")])])]),a("div",{staticClass:"sp__layout__wrapper__copyright"},[a("small",[_._v("©allrights reseved nakamura hiroki")])])]):_._e()])],1):_._e()]),a("main",[a("section",{staticClass:"section portfolio",style:this.width,attrs:{role:"ポートフォリオ題名"}},[_._m(1)]),_._m(2),_._m(3),a("section",{staticClass:"section works-section",attrs:{id:"works"}},[a("div",{staticClass:"works"},[a("ul",{staticClass:"works__wrapper"},[a("li",{staticClass:"works__wrapper__list"},[_.isSp?a("div",{staticClass:"works__wrapper__list__title"},[a("h2",{staticClass:"works__wrapper__list__title__content"},[_._v("1. 通信系企業のERPシステム開発")])]):_._e(),_._m(4),_.isSp?_._e():a("div",{staticClass:"works__wrapper__list__title"},[a("h2",{staticClass:"works__wrapper__list__title__content"},[_._v("1. 通信系企業のERPシステム開発")])])]),a("li",{staticClass:"works__wrapper__list"},[_.isSp?a("div",{staticClass:"works__wrapper__list__title"},[a("h2",{staticClass:"works__wrapper__list__title__content"},[_._v("2. 不動産投資関係のWEBアプリ開発")])]):_._e(),a("div",{staticClass:"works__wrapper__list__content"},[a("img",{staticClass:"works__wrapper__list__content__image",attrs:{src:s("67ad"),alt:"2019年9月~2020年2月"}}),a("span",{staticClass:"works__wrapper__list__content__explain"},[_._v("2019年9月 ～ "),_.isSp?a("br"):_._e(),_._v("2020年2月")])]),_.isSp?_._e():a("div",{staticClass:"works__wrapper__list__title"},[a("h2",{staticClass:"works__wrapper__list__title__content"},[_._v("2. 不動産投資関係のWEBアプリ開発")])])])])])]),_._m(5),_._m(6),a("section",{staticClass:"section private-section",attrs:{id:"private"}},[a("div",{staticClass:"private"},[_._m(7),a("div",{staticClass:"private__wrapper"},[_._m(8),a("div",{staticClass:"private__wrapper__image"},[_._m(9),a("div",{staticClass:"private__wrapper__image__wrapper",on:{mouseover:_.mouseOverAction,mouseleave:_.mouseLeaveAction}},[a("router-link",{staticClass:"private__wrapper__image__wrapper__link",attrs:{tag:"div",to:"https://www.fukumatuya.com"}},[a("transition",{attrs:{name:"fade"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:_.hoverLink,expression:"hoverLink"}],staticClass:"private__wrapper__image__wrapper__link__text"},[_._v(" こちらのページへ飛ぶ ")])])],1),a("img",{staticClass:"private__wrapper__image__wrapper__content",attrs:{src:s("b261"),alt:"福松家のトップページ"}})],1)])])])]),a("footer",{staticClass:"footer-section"},[a("div",{staticClass:"footer"},[a("p",{staticClass:"footer__about",on:{click:function(t){return _.scrollTo("about")}}},[_._v(" ABOUT ")]),a("p",{staticClass:"footer__about",on:{click:function(t){return _.scrollTo("works")}}},[_._v(" WORKS ")]),a("p",{staticClass:"footer__about",on:{click:function(t){return _.scrollTo("work-1")}}},[_._v(" WORK1 ")]),a("p",{staticClass:"footer__about",on:{click:function(t){return _.scrollTo("work-2")}}},[_._v(" WORK2 ")]),a("p",{staticClass:"footer__about",on:{click:function(t){return _.scrollTo("private")}}},[_._v(" PRIVATE_WORKS ")]),a("a",{staticClass:"footer__link",staticStyle:{"text-decoration":"none",color:"#707070"},attrs:{href:"https://github.com/NakamuraHiroki2465"}},[_._v(" GITHUB ")]),a("a",{staticClass:"footer__link",staticStyle:{"text-decoration":"none",color:"#707070"},attrs:{href:"https://qiita.com/NakamuraHiroki2465"}},[_._v(" QIITA ")])]),_._m(10)])])])},v=[function(){var _=this,t=_.$createElement,s=_._self._c||t;return s("li",{staticClass:"header__menu__list"},[s("a",{staticClass:"header__menu__list__link",attrs:{href:"https://github.com/NakamuraHiroki2465/FukumatuyaVue"}},[_._v("GITHUB")])])},function(){var _=this,t=_.$createElement,a=_._self._c||t;return a("div",{staticClass:"portfolio relative"},[a("img",{staticClass:"portfolio__image",attrs:{src:s("1776"),alt:"中村拡幹のポートフォリオ写真"}}),a("h1",{staticClass:"portfolio__title"},[_._v("NAKAMURA HIROKI"),a("br"),_._v("PORTFOLIO")])])},function(){var _=this,t=_.$createElement,a=_._self._c||t;return a("section",{staticClass:"section about-section",attrs:{id:"about",role:"自己紹介"}},[a("div",{staticClass:"about"},[a("div",{staticClass:"about__content"},[a("div",{staticClass:"about__content__name"},[a("p",{staticClass:"about__content__name__kana"},[_._v("なかむら ひろき")]),a("p",{staticClass:"about__content__name__kanji"},[_._v("中村 拡幹")])]),a("div",{staticClass:"about__content__explain"},[a("p",{staticClass:"about__content__explain__p"},[_._v("1995年生まれ。システムエンジニア7ヶ月ほど")]),a("p",{staticClass:"about__content__explain__p"},[_._v("大学4年の春に家業のホームページを作るためプログラミングを始めたことがきっかけでエンジニアの世界に入る")]),a("p",{staticClass:"about__content__explain__p"},[_._v("大学4年の秋から始めたフロントエンド開発のインターンでVue.jsを使用し、実務の難しさに触れる")]),a("p",{staticClass:"about__content__explain__p"},[_._v("入社後は通信系のERPシステム開発の基本設計から実装、テスト、リリースまでを経験")]),a("p",{staticClass:"about__content__explain__p"},[_._v("特技は筋トレとタイピング、趣味はテニスとサイクリング")]),a("p",{staticClass:"about__content__explain__p"},[_._v("好きな言葉は”冗談じゃない。いますぐトレーニングだ”")])])]),a("div",{staticClass:"about__image"},[a("img",{staticClass:"about__image__img",attrs:{src:s("4c32"),alt:"自己紹介"}})])])])},function(){var _=this,t=_.$createElement,a=_._self._c||t;return a("section",{staticClass:"section gengo-section"},[a("div",{staticClass:"gengo"},[a("div",{staticClass:"gengo__title"},[a("p",{staticClass:"gengo__title__content"},[_._v("使用言語")])]),a("div",{staticClass:"gengo__box"},[a("div",{staticClass:"gengo__box__wrapper"},[a("div",{staticClass:"gengo__box__wrapper__title"},[a("p",{staticClass:"gengo__box__wrapper__title__content"},[_._v("Java")])]),a("div",{staticClass:"gengo__box__wrapper__content"},[a("img",{staticClass:"gengo__box__wrapper__content__image",attrs:{src:s("88d8"),alt:"Javaの使用経験"}}),a("p",{staticClass:"gengo__box__wrapper__content__experience"},[_._v("使用経験 : 9ヶ月")]),a("p",{staticClass:"gengo__box__wrapper__content__framework"},[_._v("使用フレームワーク : Spring MVC")]),a("p",{staticClass:"gengo__box__wrapper__content__explain"},[_._v("9か月以上の経験あり。現職通信系企業のERPシステム開発の現場で使用")])])])]),a("div",{staticClass:"gengo__box"},[a("div",{staticClass:"gengo__box__wrapper"},[a("div",{staticClass:"gengo__box__wrapper__title"},[a("p",{staticClass:"gengo__box__wrapper__title__content"},[_._v("Javascript")])]),a("div",{staticClass:"gengo__box__wrapper__content"},[a("img",{staticClass:"gengo__box__wrapper__content__image",attrs:{src:s("d1c3"),alt:"Javascriptの使用経験"}}),a("p",{staticClass:"gengo__box__wrapper__content__experience"},[_._v("使用経験 : 1年")]),a("p",{staticClass:"gengo__box__wrapper__content__framework"},[_._v("使用フレームワーク : Vue.js")]),a("p",{staticClass:"gengo__box__wrapper__content__explain"},[_._v("1年以上の経験あり。WEB開発のインターンと通信系企業のERPシステム開発で使用")])])])]),a("div",{staticClass:"gengo__box"},[a("div",{staticClass:"gengo__box__wrapper"},[a("div",{staticClass:"gengo__box__wrapper__title"},[a("p",{staticClass:"gengo__box__wrapper__title__content"},[_._v("HTML&CSS")])]),a("div",{staticClass:"gengo__box__wrapper__content"},[a("img",{staticClass:"gengo__box__wrapper__content__image",attrs:{src:s("e876"),alt:"HTML及びCSSの使用経験"}}),a("p",{staticClass:"gengo__box__wrapper__content__experience"},[_._v("使用経験 : 1.5年")]),a("p",{staticClass:"gengo__box__wrapper__content__framework"},[_._v("使用フレームワーク : bulma,SCSS")]),a("p",{staticClass:"gengo__box__wrapper__content__explain"},[_._v("家業のホームページ作成時に使用し、フレックスボックスやbulmaなどのフレームワークを利用したレスポンシブなページを作成可能。"),a("br"),_._v("アコーディオンボタンなどの作成経験もあり")])])])])])])},function(){var _=this,t=_.$createElement,a=_._self._c||t;return a("div",{staticClass:"works__wrapper__list__content"},[a("img",{staticClass:"works__wrapper__list__content__image",attrs:{src:s("39a6"),alt:"2020年6月~"}}),a("span",{staticClass:"works__wrapper__list__content__explain"},[_._v("2020年6月 ～")])])},function(){var _=this,t=_.$createElement,s=_._self._c||t;return s("section",{staticClass:"section work1-section",attrs:{id:"work-1"}},[s("div",{staticClass:"work1"},[s("div",{staticClass:"work1__title"},[s("p",{staticClass:"work1__title__content"},[_._v("1.通信系企業のERPシステム開発")]),s("p",{staticClass:"work1__title__subcontent"},[_._v("期間 : 2020年6月～現在まで")])]),s("div",{staticClass:"work1__wrapper"},[s("div",{staticClass:"work1__wrapper__framework"},[s("div",{staticClass:"work1__wrapper__framework__title"},[s("p",{staticClass:"work1__wrapper__framework__title__content border-line"},[_._v("使用フレームワーク")])]),s("div",{staticClass:"work1__wrapper__framework__explain"},[s("ul",{staticClass:"work1__wrapper__framework__explain__ul"},[s("li",{staticClass:"work1__wrapper__framework__explain__ul__list list-point"},[_._v(" Spring MVC ")]),s("li",{staticClass:"work1__wrapper__framework__explain__ul__list list-point"},[_._v(" Handlebars(Javascriptのテンプレートエンジン) ")]),s("li",{staticClass:"work1__wrapper__framework__explain__ul__list list-point"},[_._v(" Backbone.js(クライアントサイドMVC) ")])])])]),s("div",{staticClass:"work1__wrapper__gengo"},[s("div",{staticClass:"work1__wrapper__gengo__title"},[s("p",{staticClass:"work1__wrapper__gengo__title__content border-line"},[_._v("使用言語")])]),s("div",{staticClass:"work1__wrapper__gengo__explain"},[s("ul",{staticClass:"work1__wrapper__gengo__explain__ul"},[s("li",{staticClass:"work1__wrapper__gengo__explain__ul__list list-point"},[_._v(" Java ")]),s("li",{staticClass:"work1__wrapper__gengo__explain__ul__list list-point"},[_._v(" Javascript ")]),s("li",{staticClass:"work1__wrapper__gengo__explain__ul__list list-point"},[_._v(" HTML&CSS ")])])])]),s("div",{staticClass:"work1__wrapper__abstract"},[s("div",{staticClass:"work1__wrapper__abstract__title"},[s("p",{staticClass:"work1__wrapper__abstract__title__content border-line"},[_._v(" 概要 ")])]),s("div",{staticClass:"work1__wrapper__abstract__explain"},[s("p",{staticClass:"work1__wrapper__abstract__explain__content"},[_._v("画面側の実装")]),s("ul",{staticClass:"work1__wrapper__abstract__explain__ul"},[s("li",{staticClass:"work1__wrapper__abstract__explain__ul__list list-point"},[_._v(" 画面の入力項目の項目追加（チェックボックス,テキストボックス,ファイル添付） ")]),s("li",{staticClass:"work1__wrapper__abstract__explain__ul__list list-point"},[_._v(" ファイル添付時の拡張子バリデーション追加 ")]),s("li",{staticClass:"work1__wrapper__abstract__explain__ul__list list-point"},[_._v(" チェックボックス変更時の表示項目制御,バリデーション制御 ")]),s("li",{staticClass:"work1__wrapper__abstract__explain__ul__list list-point"},[_._v(" javaライブラリーのpdf-boxを利用したPDFファイルの操作検証 ")])]),s("p",{staticClass:"work1__wrapper__abstract__explain__content"},[_._v("バッチ処理の実装")]),s("ul",{staticClass:"work1__wrapper__abstract__explain__ul"},[s("li",{staticClass:"work1__wrapper__abstract__explain__ul__list list-point"},[_._v(" Batch処理におけるDBの結合を含む抽出処理 ")]),s("li",{staticClass:"work1__wrapper__abstract__explain__ul__list list-point"},[_._v(" Batch処理におけるDBの更新トランザクション処理の実装 ")]),s("li",{staticClass:"work1__wrapper__abstract__explain__ul__list list-point"},[_._v(" Batch処理における更新件数などのログ出力の実装 ")])])])]),s("div",{staticClass:"work1__wrapper__phase"},[s("div",{staticClass:"work1__wrapper__phase__title"},[s("p",{staticClass:"work1__wrapper__phase__title__content border-line"},[_._v(" 携わったフェーズ ")])]),s("div",{staticClass:"work1__wrapper__phase__explain"},[s("p",{staticClass:"work1__wrapper__phase__explain__content"},[_._v(" 基本設計,実装設計,実装,単体テスト設計,単体テスト,結合テスト,障害対応,リリース ")])])]),s("div",{staticClass:"work1__wrapper__stumbling"},[s("div",{staticClass:"work1__wrapper__stumbling__title"},[s("p",{staticClass:"work1__wrapper__stumbling__title__content border-line"},[_._v(" つまづきポイント ")])]),s("div",{staticClass:"work1__wrapper__stumbling__explain"},[s("ul",{staticClass:"work1__wrapper__stumbling__explain__ul"},[s("li",{staticClass:"work1__wrapper__stumbling__explain__ul__list"},[s("p",{staticClass:"work1__wrapper__stumbling__explain__ul__list__problem"},[_._v(" リリース後の本番障害で、PDF-BOXを利用した印影画像添付の処理でファイルの向きと画像が横向きで横伸びするエラーがおきた ")]),s("p",{staticClass:"work1__wrapper__stumbling__explain__ul__list__title"},[_._v(" 【解決方法】 ")]),s("p",{staticClass:"work1__wrapper__stumbling__explain__ul__list__solve"},[_._v(" PDF-BOXの公式ドキュメントを参照しながら、EclipseでPDFファイルの全ての変換処理にブレークポイントを組み込み、処理の流れで生成されたPDFファイルを出力しながら原因を解決 ")])]),s("li",{staticClass:"work1__wrapper__stumbling__explain__ul__list"},[s("p",{staticClass:"work1__wrapper__stumbling__explain__ul__list__problem"},[_._v(" ドロップダウンリストの入力項目の内容でバリデーションの表示制御を行う実装時に、リストの値の取得前に値をもとに表示制御が行われてしまう ")]),s("p",{staticClass:"work1__wrapper__stumbling__explain__ul__list__title"},[_._v(" 【解決方法】 ")]),s("p",{staticClass:"work1__wrapper__stumbling__explain__ul__list__solve"},[_._v(" 非同期処理で値の取得を行っていたため、非同期処理の流れに沿って表示制御の実装を行うことで解決 ")])]),s("li",{staticClass:"work1__wrapper__stumbling__explain__ul__list"},[s("p",{staticClass:"work1__wrapper__stumbling__explain__ul__list__problem"},[_._v(" 入力画面の小項目の項目追加ボタン押下時に一度に複数の項目が生成されてしまう ")]),s("p",{staticClass:"work1__wrapper__stumbling__explain__ul__list__title"},[_._v(" 【解決方法】 ")]),s("p",{staticClass:"work1__wrapper__stumbling__explain__ul__list__solve"},[_._v(" 小項目とは別の項目の値を変化させたときにも小項目のインスタンスがnewされており、複数回インスタンスをnewすることでメモリ上にインスタンスが残っていたことが原因。"),s("br"),_._v("別の項目の値を変化させたときの小項目のnew インスタンスを初期化とほぼ同じ処理で置き換えることで複数回インスタンスが生成されることを抑制し、解決 ")])])])])])])])])},function(){var _=this,t=_.$createElement,s=_._self._c||t;return s("section",{staticClass:"section work2-section",attrs:{id:"work-2"}},[s("div",{staticClass:"work2"},[s("div",{staticClass:"work2__title"},[s("p",{staticClass:"work2__title__content"},[_._v("2.不動産投資関係のWEBアプリ開発")]),s("p",{staticClass:"work2__title__subcontent"},[_._v("期間 : 2019年9月～2020年2月")])]),s("div",{staticClass:"work2__wrapper"},[s("div",{staticClass:"work2__wrapper__framework"},[s("div",{staticClass:"work2__wrapper__framework__title"},[s("p",{staticClass:"work2__wrapper__framework__title__content border-line"},[_._v("使用フレームワーク")])]),s("div",{staticClass:"work2__wrapper__framework__explain"},[s("ul",{staticClass:"work2__wrapper__framework__explain__ul"},[s("li",{staticClass:"work2__wrapper__framework__explain__ul__list list-point"},[_._v(" Vue.js ")])])])]),s("div",{staticClass:"work2__wrapper__gengo"},[s("div",{staticClass:"work2__wrapper__gengo__title"},[s("p",{staticClass:"work2__wrapper__gengo__title__content border-line"},[_._v("使用言語")])]),s("div",{staticClass:"work2__wrapper__gengo__explain"},[s("ul",{staticClass:"work2__wrapper__gengo__explain__ul"},[s("li",{staticClass:"work2__wrapper__gengo__explain__ul__list list-point"},[_._v(" Javascript ")]),s("li",{staticClass:"work2__wrapper__gengo__explain__ul__list list-point"},[_._v(" HTML&CSS ")])])])]),s("div",{staticClass:"work2__wrapper__abstract"},[s("div",{staticClass:"work2__wrapper__abstract__title"},[s("p",{staticClass:"work2__wrapper__abstract__title__content border-line"},[_._v(" 概要 ")])]),s("div",{staticClass:"work2__wrapper__abstract__explain"},[s("ul",{staticClass:"work2__wrapper__abstract__explain__ul"},[s("li",{staticClass:"work2__wrapper__abstract__explain__ul__list list-point"},[_._v(" 画面項目の表示制御 ")]),s("li",{staticClass:"work2__wrapper__abstract__explain__ul__list list-point"},[_._v(" 画面項目のレイアウト作成 ")]),s("li",{staticClass:"work2__wrapper__abstract__explain__ul__list list-point"},[_._v(" DBからレコード取得 ")]),s("li",{staticClass:"work2__wrapper__abstract__explain__ul__list list-point"},[_._v(" 非同期処理での並列処理によるレコード取得 ")])])])]),s("div",{staticClass:"work2__wrapper__phase"},[s("div",{staticClass:"work2__wrapper__phase__title"},[s("p",{staticClass:"work2__wrapper__phase__title__content border-line"},[_._v(" 携わったフェーズ ")])]),s("div",{staticClass:"work2__wrapper__phase__explain"},[s("p",{staticClass:"work2__wrapper__phase__explain__content"},[_._v(" 実装 ")])])]),s("div",{staticClass:"work2__wrapper__stumbling"},[s("div",{staticClass:"work2__wrapper__stumbling__title"},[s("p",{staticClass:"work2__wrapper__stumbling__title__content border-line"},[_._v(" つまづきポイント ")])]),s("div",{staticClass:"work2__wrapper__stumbling__explain"},[s("ul",{staticClass:"work2__wrapper__stumbling__explain__ul"},[s("li",{staticClass:"work2__wrapper__stumbling__explain__ul__list"},[s("p",{staticClass:"work2__wrapper__stumbling__explain__ul__list__problem"},[_._v(" 数千のレコードの特定のカラムの値に応じて、別テーブルから値を取得する処理を実装する際、レコード毎にfor文でまわしていたことで全てのレコードの取得までに時間がかかりすぎて、タイムアウトになってしまう ")]),s("p",{staticClass:"work2__wrapper__stumbling__explain__ul__list__title"},[_._v(" 【解決方法】 ")]),s("p",{staticClass:"work2__wrapper__stumbling__explain__ul__list__solve"},[_._v(" for文での取得は直列処理であったため処理速度が遅くなっていたことから、Promiseを利用している他ソースやMDN Web Docsなどを参照し、Promise構文をもちいて並列に値を取得することで解決 ")])]),s("li",{staticClass:"work2__wrapper__stumbling__explain__ul__list"},[s("p",{staticClass:"work2__wrapper__stumbling__explain__ul__list__problem"},[_._v(" Vue.jsの学習経験が一切なかったため、開発参画時に何をどう修正したらよいか手付かず状態だった ")]),s("p",{staticClass:"work2__wrapper__stumbling__explain__ul__list__title"},[_._v(" 【解決方法】 ")]),s("p",{staticClass:"work2__wrapper__stumbling__explain__ul__list__solve"},[_._v(" UdemyのVue.jsの講座を一周し、Vue.jsの本を図書館で借りて辞書として活用しながら実装を行った。また、アウトプットを増やすため、父の経営するお店のホームページをVue.jsを用いて制作した ")])]),s("li",{staticClass:"work2__wrapper__stumbling__explain__ul__list"},[s("p",{staticClass:"work2__wrapper__stumbling__explain__ul__list__problem"},[_._v(" スマートフォンページの表示時とPC画面での表示時でレイアウト崩れが起きる ")]),s("p",{staticClass:"work2__wrapper__stumbling__explain__ul__list__title"},[_._v(" 【解決方法】 ")]),s("p",{staticClass:"work2__wrapper__stumbling__explain__ul__list__solve"},[_._v(" bulmaを利用したフレキシブルなレイアウトやflexboxなどを利用した柔軟なレイアウトの作成方法を学んだ"),s("br"),_._v("別の項目の値を変化させたときの小項目のnew インスタンスを初期化とほぼ同じ処理で置き換えることで複数回インスタンスが生成されることを抑制し、解決 ")])])])])])])])])},function(){var _=this,t=_.$createElement,s=_._self._c||t;return s("div",{staticClass:"private__title"},[s("p",{staticClass:"private__title__content"},[_._v("個人制作物")])])},function(){var _=this,t=_.$createElement,s=_._self._c||t;return s("div",{staticClass:"private__wrapper__content"},[s("div",{staticClass:"private__wrapper__content__abstract"},[s("p",{staticClass:"private__wrapper__content__abstract__title"},[_._v(" 概要 ")]),s("p",{staticClass:"private__wrapper__content__abstract__content"},[_._v(" Vue.jsを使用し、両親の経営する割烹料理のホームページを作成"),s("br"),_._v("Vue-routerを使用してルーティングを行い、"),s("br"),_._v("CSSフレームワークとしてbulma、"),s("br"),_._v("JavascriptのフレームワークとしてjQueryなどを使用 ")])]),s("div",{staticClass:"private__wrapper__content__gengo"},[s("p",{staticClass:"private__wrapper__content__gengo__title"},[_._v(" 使用言語 ")]),s("ul",{staticClass:"private__wrapper__content__gengo__ul"},[s("li",{staticClass:"private__wrapper__content__gengo__ul_list list-point"},[_._v(" Javascript ")]),s("li",{staticClass:"private__wrapper__content__gengo__ul_list list-point"},[_._v(" HTML&CSS ")])])]),s("div",{staticClass:"private__wrapper__content__framework"},[s("p",{staticClass:"private__wrapper__content__framework__title"},[_._v(" 使用フレームワーク ")]),s("ul",{staticClass:"private__wrapper__content__framework__ul"},[s("li",{staticClass:"private__wrapper__content__framework__ul__list list-point"},[_._v(" Vue.js ")]),s("li",{staticClass:"private__wrapper__content__framework__ul__list list-point"},[_._v(" Git ")])])]),s("div",{staticClass:"private__wrapper__content__tool"},[s("p",{staticClass:"private__wrapper__content__tool__title"},[_._v(" 使用ツール ")]),s("ul",{staticClass:"private__wrapper__content__tool__ul"},[s("li",{staticClass:"private__wrapper__content__tool__ul__list list-point"},[_._v(" GitHub ")]),s("li",{staticClass:"private__wrapper__content__tool__ul__list list-point"},[_._v(" npm ")])])]),s("div",{staticClass:"private__wrapper__content__source"},[s("p",{staticClass:"private__wrapper__content__source__title"},[_._v(" ソースコード ")]),s("a",{staticClass:"private__wrapper__content__source__link",attrs:{href:"https://github.com/NakamuraHiroki2465/FukumatuyaVue"}},[_._v(" こちらから ")])]),s("div",{staticClass:"private__wrapper__content__source"},[s("p",{staticClass:"private__wrapper__content__source__title"},[_._v(" サイトへ飛ぶ ")]),s("a",{staticClass:"private__wrapper__content__source__link",attrs:{href:"https://www.fukumatuya.com"}},[_._v(" こちらから ")])])])},function(){var _=this,t=_.$createElement,s=_._self._c||t;return s("div",{staticClass:"private__wrapper__image__title"},[s("p",{staticClass:"private__wrapper__image__title__content"},[_._v("福松家")])])},function(){var _=this,t=_.$createElement,s=_._self._c||t;return s("div",{staticClass:"footer__copyright"},[s("small",[_._v("©allrights reseved nakamura hiroki")])])}],d={data:function(){return{width:window.innnerWidth,isOpenedHeaderMenu:!1,element:0,hoverLink:!1}},methods:{toggleMenu:function(){this.isOpenedHeaderMenu=!this.isOpenedHeaderMenu},scrollTo:function(_){this.element=document.getElementById(_);var t=this.element.getBoundingClientRect();console.log(t.top),window.scrollBy({top:t.top,left:0,behavior:"smooth"}),1==this.isOpenedHeaderMenu&&(this.isOpenedHeaderMenu=!1)},mouseOverAction:function(){this.hoverLink=!0},mouseLeaveAction:function(){this.hoverLink=!1}}},m=d,k=(s("f8bd"),Object(C["a"])(m,u,v,!1,null,"28919d6c",null)),E=k.exports,b=[{path:"/",name:"top",component:E}],B=(s("ac1f"),s("466d"),{data:function(){return{isSp:!1,width:window.innerWidth,loading:!0}},mounted:function(){this.width=window.innerWidth,this.loading=!1,this.width<769||navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)?this.isSp=!0:this.isSp=!1,window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(){return this.width=window.innerWidth,this.width<769||navigator.userAgent.match(/iPhone|Android.+Mobile/)?this.isSp=!0:this.isSp=!1}}}),Q=B,f=Object(C["a"])(Q,a,e,!1,null,null,null),I=f.exports;s("3d39");i["a"].config.productionTip=!1,i["a"].mixin(I),i["a"].use(r["a"]),i["a"].use(n.a);var h=new r["a"]({mode:"history",routes:b});new i["a"]({router:h,render:function(_){return _(w)}}).$mount("#app")},"67ad":function(_,t,s){_.exports=s.p+"img/works_2.dc18a4d8.png"},"85ec":function(_,t,s){},"88d8":function(_,t){_.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABG4AAAAeCAYAAAB9oFi4AAAABHNCSVQICAgIfAhkiAAABOlJREFUeF7t3T1rFVkYwPHzqDFqshuNr1fZFU1Q3EYUFfHjCAsqaGEh2wjb6QfYZgu/gKVgbW1hY2lhYSNrEtAIvuEbAyKbiN653jsvZ+aXNjNnzvk9p/oXSdx58Hg5+SFAgAABAgQIECBAoNUC8zPTb08c2r2ybfPUh1Zv1OYIECDQTYEHKaXrEfG07uOFcFM3ue8RIECAAAECBAgQ+DmBrZs3fji7OHg2u2Xq/c+t4C0CBAgQGEOgiDYXIuLJGGuM/KpwMzKZFwgQIECAAAECBAg0JzC9KT6eO3LgP/GmuRn4MgECvRZYSSmdrzPeCDe9vm8OT4AAAQIECBAgkKOAeJPj1OyZAIEOCdQab4SbDt0cRyFAgAABAgQIEOiPgHjTn1k7KQECrRSoLd4IN62cv00RIECAAAECBAgQGC5QxJszC4Ol7TPT74Y/7QkCBAgQmLBAEW8uRcSjCa+7ZjnhpkpdaxMgQIAAAQIECBCoWGBqY3w8uyjeVMxseQIECHxPYDWl9GeV8Ua4cfkIECBAgAABAgQIZC4g3mQ+QNsnQCB3gUrjjXCT+/WwfwIECBAgQIAAAQIpJfHGNSBAgECjApXFG+Gm0bn6OAECBAgQIECAAIHJCRTx5vTCvqWds1v8zZvJsVqJAAECZQWKeHM5Ih6WfaHMc8JNGSXPECBAgAABAgQIEMhEYNOG9OnM4uCZeJPJwGyTAIGuCbxKKV2cZLwRbrp2RZyHAAECBAgQIECg9wLiTe+vAAACBJoVmGi8EW6aHaavEyBAgAABAgQIEKhEQLyphNWiBAgQKCswsXgj3JQl9xwBAgQIECBAgACBzASKeHPy8J7lvb/OvMls67ZLgACBLggU8eZqRNwf5zDCzTh63iVAgAABAgQIECDQcoENkdKphT1L4k3LB2V7BAh0VaD4Y/FXxok3wk1Xr4ZzESBAgAABAgQIEPgiIN64CgQIEGhUYKx4I9w0OjsfJ0CAAAECBAgQIFCPQBFvThzcvbx/fvZ1PV/0FQIECBD4n0ARb/6KiHujqgg3o4p5ngABAgQIECBAgECmAhEpnRRvMp2ebRMg0AGB9ymla6PGG+GmA5N3BAIECBAgQIAAAQJlBcSbslKeI0CAQCUCI8cb4aaSOViUAAECBAgQIECAQHsFxJv2zsbOCBDohcBI8Ua46cWdcEgCBAgQIECAAAECawWKeHP8910rv+38pfh3tX4IECBAoF6BIt78HRF3h31WuBkm5PcECBAgQIAAAQIEOioQKaXjB8Wbjo7XsQgQaL/Ap5TS9WHxRrhp/yDtkAABAgQIECBAgEBlAuJNZbQWJkCAQBmBofFGuCnD6BkCBAgQIECAAAECHRYQbzo8XEcjQCAHgR/GG+EmhxHaIwECBAgQIECAAIGKBYp4c+zA/POFvXMvK/6U5QkQIEDgW4Ei3tyMiNvrfyXcuC4ECBAgQIAAAQIECHwV+EO8cRsIECDQpMCN9fFGuGlyHL5NgAABAgQIECBAoIUC4k0Lh2JLBAj0SWBNvBFu+jR6ZyVAgAABAgQIECBQUkC8KQnlMQIECFQj8DXeCDfVAFuVAAECBAgQIECAQPYCRwbbXxwd7FjN/iAOQIAAgTwF/omIW8JNnsOzawIECBAgQIAAAQK1CCzum1s9tn/+RS0f8xECBAgQWC/w72cl9PiEt9PLEgAAAABJRU5ErkJggg=="},"9fc7":function(_,t,s){},b261:function(_,t,s){_.exports=s.p+"img/privatework.424fff58.png"},d1c3:function(_,t){_.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABG4AAAAeCAYAAAB9oFi4AAAABHNCSVQICAgIfAhkiAAABMFJREFUeF7t2LtqVlkUwPG1cpnEGK/RJKh4RUHxgvdOsNFCGwvBSmHqmTewsfARfIJ5gemmmcrG2tZKSysbG0FQDoKimIQv5zuXfc7P1nxnr/1bu/rnf6/ffgn/CBAgQIAAAQIECBAgQGDUAvuXF+PCkZXY8cfcqB1cnsAGAi8j4nFmvmtbKIWbtsmdR4AAAQIECBAgQIAAgX4KLC3MxdXja7FzQbzp54ZM1bFAFW3uZOabNucQbtrUdhYBAgQIECBAgAABAgR6LrAwPxs3Tq6LNz3fk/E6E3gfEbfajDfCTWe7djABAgQIECBAgAABAgT6KSDe9HMvpuqNQKvxRrjpzd4NQoAAAQIECBAgQIAAgf4IiDf92YVJeinQWrwRbnq5f0MRIECAAAECBAgQIECge4Eq3lw/sRbLi/PdD2MCAv0TqOLN3cx83eRowk2Tur5NgAABAgQIECBAgACBwgXmZ2fi5ql18abwPRq/MYEPEXG7yXgj3DS2Ox8mQIAAAQIECBAgQIDAMATEm2Hs0S0aE2g03gg3je3NhwkQIECAAAECBAgQIDAcAfFmOLt0k0YEGos3wk0j+/JRAgQIECBAgAABAgQIDE+gijdXT6zG3qWF4V3OjQjUF6jizb3MfFX/Uz++INxMU9O3CBAgQIAAAQIECBAgMHCBudmZuCbeDHzLrldD4GNE3JlmvBFuamzDTwkQIECAAAECBAgQIDBGAfFmjFt35wkEphpvhJsJ5P0pAQIECBAgQIAAAQIECHwTEG+8BAKbCkwt3gg3XhoBAgQIECBAgAABAgQIbEugijeXjx2MleXFbf3ejwgMXKCKNw8y8/869xRu6uj5LQECBAgQIECAAAECBEYuMDuTceX4qngz8nfg+hsKfIqI+3XijXDjdREgQIAAAQIECBAgQIBALQHxphafHw9foFa8EW6G/0DckAABAgQIECBAgAABAo0LVPHm4tEDsbZ7qfGzHECgQIEq3jzKzH8nnV24mVTM3xMgQIAAAQIECBAgQIDAbwVmMuLSsYPijfdB4PcCnyPi4aTxRrjxnAgQIECAAAECBAgQIEBgagLizdQofWiYAhPHG+FmmA/BrQgQIECAAAECBAgQINCZgHjTGb2DyxCYKN4IN2Us1ZQECBAgQIAAAQIECBAoSqCKN+ePHIhD+3YWNbdhCbQkUMWbPzPzn63OE262EvL/BAgQIECAAAECBAgQILAtgcyIC+LNtuz8aBQCXyLiyVbxRrgZxVtwSQIECBAgQIAAAQIECHQjIN504+7UYgS2jDfCTTG7NCgBAgQIECBAgAABAgTKFBBvytybqVsT2DTeCDet7cFBBAgQIECAAAECBAgQGK9AFW/OHtofR1d2jRfBzQlsLFDFm78z88WvfyLceDYECBAgQIAAAQIECBAg0JrAucPiTWvYDipR4K9f441wU+IazUyAAAECBAgQIECAAIGCBcSbgpdn9DYEfoo3wk0b5M4gQIAAAQIECBAgQIAAgZ8ExBsPgsCmAt/jjXDjpRAgQIAAAQIECBAgQIBAJwJn1vfFydXdnZztUAIFCDzNzOfCTQGbMiIBAgQIECBAgAABAgSGKnB6fW+cWt0z1Ou5F4G6As++AoyerpxUOBPZAAAAAElFTkSuQmCC"},e876:function(_,t){_.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABG4AAAAeCAYAAAB9oFi4AAAABHNCSVQICAgIfAhkiAAABINJREFUeF7t271OFFEYgOHvLIsgKPIPQSSA0UQjGsWfzsQGC20sTKw0sdY7sLHwErwCb8DOxsrGWksrLa1sbExMMJPYiNGdnZkddmce2j3nzJlnzjRvmPTm4+f98EeAAAECBAgQIECAAAECBAgQKCgwPz0ZO+sLcfRIt+AKQz/tXUQ8TCl9qXunSbipm9z1CBAgQIAAAQIECBAgQIBA8wSmjnRjd3MlpicaG2+yaLOXUvpU59MTburUdi0CBAgQIECAAAECBAgQINBggYnuWFzfXm1yvPkaETfrjDfCTYNfGLdGgAABAgQIECBAgAABAgTqFhBvqhUXbqr1tBoBAgQIECBAgAABAgQIEGi9gHhT3REQbqqztBIBAgQIECBAgAABAgQIECDwWyCLN9e2VuLY5HhTTbLPpm6nlD4M8gaFm0HqWpsAAQIECBAgQIAAAQIECLRYYHysEze2V5scb75FxK1BxhvhpsUvkFsnQIAAAQIECBAgQIAAAQKDFhBvygkLN+X8zCZAgAABAgQIECBAgAABAgR6CIg3xY+IcFPczkwCBAgQIECAAAECBAgQIEAgp0AWb3Y3l2N2aiLnjJEbln02dSel9L7KnQs3VWpaiwABAgQIECBAgAABAgQIEPinQLfTiatbjY433yNir8p4I9x4oQgQIECAAAECBAgQIECAAIHaBMSb/qiFm/68jCZAgAABAgQIECBAgAABAgRKCog3+QGFm/xWRhIgQIAAAQIECBAgQIAAAQIVCWTx5vLmUixMT1a04tAtk302dS+l9LbMzoSbMnrmEiBAgAABAgQIECBAgAABAoUFxjoprmwuNzne/IiIu2XijXBT+HiZSIAAAQIECBAgQIAAAQIECJQVEG/+LyjclD1h5hMgQIAAAQIECBAgQIAAAQKlBLJ4c/HUYqzMTJVaZ4gnZ/958yCl9LrfPQo3/YoZT4AAAQIECBAgQIAAAQIECFQu0EkRlzaWmhxvfkbE/X7jjXBT+VGzIAECBAgQIECAAAECBAgQIFBEQLz5W024KXKSzCFAgAABAgQIECBAgAABAgQGIiDe/Mkq3AzkmFmUAAECBAgQIECAAAECBAgQKCqQxZsLJxdjbW666BLDPi/7bOpxSulVr40KN72E/E6AAAECBAgQIECAAAECBAjULpAiYme90fFmPyIe9Yo3wk3tR88FCRAgQIAAAQIECBAgQIAAgTwC4k2EcJPnpBhDgAABAgQIECBAgAABAgQIHIpA2+ONcHMox85FCRAgQIAAAQIECBAgQIAAgbwCWbw5tzYfGwvH804ZtXHZZ1NPU0ovD25cuBm1R2m/BAgQIECAAAECBAgQIECgpQLnmx1vsqf65GC8EW5aetjdNgECBAgQIECAAAECBAgQGEWBtsUb4WYUT6k9EyBAgAABAgQIECBAgACBFgu0Kd4INy0+6G6dAAECBAgQIECAAAECBAiMqsDZ1bnYXpoZ1e3n2fezlNIL4SYPlTEECBAgQIAAAQIECBAgQIDA0AmcWZmN08snhm5fFW7o+S8y166c29mWIwAAAABJRU5ErkJggg=="},f8bd:function(_,t,s){"use strict";s("9fc7")}});
//# sourceMappingURL=app.56e1deba.js.map