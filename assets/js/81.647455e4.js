(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{506:function(e,t,n){"use strict";n.r(t);var a=n(11),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"无服务时代"}},[e._v("无服务时代")]),e._v(" "),n("p",[e._v("进行分布式的目的是由于单台机器的性能无法满足系统的运行需要，尽管后来架构演进过程中，容错能力、技术异构、职责划分等各方面因素都成为架构需要考虑的问题，但其中获得性能的需求在架构中比重依然很大。对软件研发而言，不做去分布式无疑是最简单的，如果单台服务器的性能可以是无限的，那架构演进的结果肯定会与今天有很大的差别，分布式也好，容器化也好，微服务也好，恐怕都不会出现。")]),e._v(" "),n("p",[e._v("绝对意义上的无限性能必然是不存在的，但在云服务已经落地十年的今天，相对意义的无限性能已经成为了现实。2012年，"),n("a",{attrs:{href:"https://www.iron.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("iron.io公司"),n("OutboundLink")],1),e._v("首先提出了“无服务”（Serverless，应该翻译为无服务器更合适）的概念，2014年开始，AWS发布Lambda的商业化无服务应用，在2019年，中国的阿里云、腾讯云等厂商也相应跟进了无服务的产品。")]),e._v(" "),n("p",[e._v("无服务的概念并没有前面各种架构那么复杂，本来无服务也是以“简单”为主要卖点的，它只涉及两块内容：后端设施（Backend）和函数（Function）。后端设施是指数据库、消息队列、日志、存储，等等这一类用于支撑业务逻辑运行，但本身无业务含义的技术组件，这些后端设施都运行在云中，无服务中称其为“后端即服务”（Backend as a Service，BaaS）。函数就是指的业务逻辑代码，这里函数的概念与粒度，都已经很接近于程序编码角度的函数了，其区别是无服务中的函数运行在云端，不必考虑算力问题，不必考虑容量规划（从技术角度可以不考虑，从计费的角度你还是要掂量的），无服务中称其为“函数即服务”（Function as a Service，FaaS）。")]),e._v(" "),n("p",[e._v("无服务的愿景是让开发者只需要纯粹地考虑业务，后端的技术组件是现成的，可以直接取用，不需要考虑如何部署，不需要考虑算力，也不许操心运维。然而，与单体架构、微服务架构不同，无服务现在不是，以后估计也很难成为一种普适性的架构模式，它对一些适合的应用确实能够大幅降低开发和运维环节的成本，譬如多数网站都适合于短链接、无状态的服务，但对于许多信息系统，或者说业务逻辑复杂，依赖服务端状态，响应速度要求较高的应用，无服务架构至少目前是相对不合适的。这是因为无服务要求按使用量（函数运算的时间和内存）计费，因而函数不会常驻服务器，请求到了才会开始运行，这决定了函数不能依赖服务端状态，也决定能函数会有冷启动时间，响应的性能不会太好（百毫秒到秒的级别）。不过，云计算毕竟是大势所趋，今天信息系统建设的概念和观念，在（较长尺度的）明天都是会转变适应云端的。")]),e._v(" "),n("p",[e._v("如果说微服务架构是分布式系统这条路的极致，那无服务架构，也许就是“不分布式”的云端系统这条路的起点。笔者很难预想在架构演进之路上，微服务和无服务之后还会有什么，尽管目光所及之处，只是不远的前方，即使如此，依然可以看到那里有许多值得去完成的工作在等待我们。")]),e._v(" "),n("div",{staticClass:"quote"},[n("p",{staticClass:"title"},[e._v("QUOTE")]),n("p",[e._v("We can only see a short distance ahead, but we can see plenty there that needs to be done.")]),e._v(" "),n("p",[e._v("尽管目光所及之处，只是不远的前方，即使如此，依然可以看到那里有许多值得去完成的工作在等待我们。")]),e._v(" "),n("div",{staticClass:"custom-block right"},[n("p",[e._v("—— Alan Turing，"),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Computing_Machinery_and_Intelligence",target:"_blank",rel:"noopener noreferrer"}},[e._v("Computing Machinery and Intelligence"),n("OutboundLink")],1),e._v("，1950")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);