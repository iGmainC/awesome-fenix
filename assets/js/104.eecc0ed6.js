(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{530:function(t,e,r){"use strict";r.r(e);var n=r(11),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"后端工程：springcloud"}},[t._v("后端工程：SpringCloud")]),t._v(" "),r("GitHubWrapper",[r("p",{attrs:{align:"center"}},[r("a",{attrs:{href:"https://icyfenix.cn",target:"_blank"}},[r("img",{attrs:{width:"180",src:"https://raw.githubusercontent.com/fenixsoft/awesome-fenix/master/.vuepress/public/images/logo-color.png",alt:"logo"}})])]),t._v(" "),r("p",{attrs:{align:"center"}},[r("a",{staticStyle:{display:"inline-block"},attrs:{href:"https://icyfenix.cn"}},[r("img",{attrs:{src:"https://raw.githubusercontent.com/fenixsoft/awesome-fenix/master/.vuepress/public/images/Release-v1.svg"}})]),t._v(" "),r("a",{staticStyle:{display:"inline-block"},attrs:{href:"https://travis-ci.com/fenixsoft/microservice_arch_springcloud",target:"_blank"}},[r("img",{attrs:{src:"https://travis-ci.com/fenixsoft/microservice_arch_springcloud.svg?branch=master",alt:"Travis-CI"}})]),t._v(" "),r("a",{attrs:{href:"https://coveralls.io/github/fenixsoft/microservice_arch_springcloud?branch=master"}},[r("img",{staticStyle:{display:"inline-block"},attrs:{src:"https://coveralls.io/repos/github/fenixsoft/microservice_arch_springcloud/badge.svg?branch=master",target:"_blank",alt:"Coverage Status"}})]),t._v(" "),r("a",{staticStyle:{display:"inline-block"},attrs:{href:"https://www.apache.org/licenses/LICENSE-2.0",target:"_blank"}},[r("img",{attrs:{src:"https://raw.githubusercontent.com/fenixsoft/awesome-fenix/master/.vuepress/public/images/License-Apache.svg",alt:"License"}})]),t._v(" "),r("a",{staticStyle:{display:"inline-block"},attrs:{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank"}},[r("img",{attrs:{src:"https://raw.githubusercontent.com/fenixsoft/awesome-fenix/master/.vuepress/public/images/DocLicense-CC-red.svg",alt:"Document License"}})]),t._v(" "),r("a",{staticStyle:{display:"inline-block"},attrs:{href:"https://icyfenix.cn/introduction/about-me.html",target:"_blank"}},[r("img",{attrs:{src:"https://raw.githubusercontent.com/fenixsoft/awesome-fenix/master/.vuepress/public/images/Author-IcyFenix-blue.svg",alt:"About Author"}})])])]),t._v(" "),r("p",[t._v("如果你此时并不曾了解过什么是“The Fenix Project”，建议先阅读"),r("a",{attrs:{href:"https://icyfenix.cn/introduction/about-the-fenix-project.html"}},[t._v("这部分内容")]),t._v("。")]),t._v(" "),r("p",[t._v("至少到目前，基于Spring Cloud的微服务解决方案仍是以Java为运行平台的微服务中，使用者数量最多的一个分支。这个结果即是Java在服务端应用中长久积累的深厚基础的体现，也是Spring在Java应用中统治性的地位的体现。Spring Cloud令现存数量极为庞大的、基于Spring和SpringBoot的单体系统，得以平滑地迁移到微服务架构中，令这些系统的大部分代码都能够无需或少量修改即可保留重用。微服务兴起的早期，Spring Cloud就集成了"),r("a",{attrs:{href:"https://netflix.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netflix OSS"),r("OutboundLink")],1),t._v("（以及Netflix闭源后对应的替代组件）所开发的体系化的微服务套件，基本上算“半透明地”解决了在微服务环境中必然会面临的服务发现、远程调用、负载均衡、集中配置等基础问题。")]),t._v(" "),r("p",[t._v("不过，笔者自己并不太认同Spring Cloud Netflix这种以应用代码去解决基础设施功能问题的“解题思路”，以笔者的观点看来，这既是容器化、原生化的微服务基础设施完全成熟之前必然会出现的应用形态，同时也决定了这是微服务进化过程中必然会被替代的过渡形态。无论笔者的看法如何，基于Spring Cloud Netflix的微服务在当前是主流，直至未来不算短的一段时间内仍会是主流，并且以应用的视角，自顶向下观察基础设施在微服务中面临的需求和挑战，用我们熟悉的Java代码来解释分析问题，也有利于对微服务的整体思想的深入理解，所以将它作为我们了解的第一种微服务架构的实现是十分适合的。")]),t._v(" "),r("h2",{attrs:{id:"需求场景"}},[t._v("需求场景")]),t._v(" "),r("p",[t._v("小书店Fenix's Bookstore生意日益兴隆，客人、货物、营收都在持续增长，业务越发复杂，对信息系统并发与可用方面的要求也越来越高。由于业务属性和质量属性要求的提升，信息系统需要更多的硬件资源去支撑，这是合乎情理的，但是，如果我们把需求场景列的更具体些，便会发现“合理”下面的许多无可奈何之处：")]),t._v(" "),r("ul",[r("li",[t._v("譬如，恰逢双十一购物节，短时间内会有大批的交易事件发生，这时候运维的同学对系统进行扩容以应对流量洪峰。但此时增长的业务量并不是均衡的，只有商品交易的活动剧增，其他的活动，如新商品入库、新用户注册这类并未增加多少，此时，面对“铁板一块”的单体系统，运维在做扩容时，只能把“用不上的”商品管理代码、用户管理代码也一并扩容部署。")]),t._v(" "),r("li",[t._v("譬如，高性能硬件对性能的提升是有帮助，但对稳定性的提升通常无能为力。业务复杂度的增加促使系统的技术复杂度也在持续增长，当系统不可避免地滑向庞大臃肿时，总伴随有各种难以预料的问题出现；要维持一个庞然大物的健康生存，也对设计、开发、运维各方面的人员都提出越来越高的要求。人力终有穷时，迟早会面临“没有一个人能了解系统的所有细节”的情形；系统的复杂程度也总有极限，持续膨胀的代码终会有崩溃的一刻。")]),t._v(" "),r("li",[t._v("譬如，……")])]),t._v(" "),r("p",[t._v("微服务的需求场景还可以列举很多，这里就不多列举了，总之，系统发展到一定程度，我们总能找到充分的理由去重构拆分它。在笔者设定的场景中，准备把"),r("a",{attrs:{href:"https://icyfenix.cn/exploration/projects/monolithic_arch_springboot.html"}},[t._v("单体的Fenix's Bookstore")]),t._v("拆分成为“用户”、“商品”、“交易”三个能够独立运行的子系统，它们将在一系列非功能性额技术模块（认证授权等）和基础设施（配置中心、服务发现等）的支撑下互相协作，以统一的API网关对外提供与原来单体系统在功能上一致的服务，应用视图如下图所示：")]),t._v(" "),r("GitHubWrapper",[r("p",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://raw.githubusercontent.com/fenixsoft/awesome-fenix/master/.vuepress/public/images/springcloud-ms.png"}}),t._v("\n    微服务应用视图\n")])]),t._v(" "),r("h2",{attrs:{id:"运行程序"}},[t._v("运行程序")]),t._v(" "),r("p",[t._v("以下几种途径，可以运行程序，浏览最终的效果：")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("通过Docker容器方式运行："),r("br"),t._v("微服务涉及到多个容器的协作，通过link单独运行容器已经被Docker官方声明为不提倡的方式，所以在工程中提供了专门的配置，以便使用"),r("a",{attrs:{href:"https://icyfenix.cn/appendix/deployment-env-setup/setup-docker.html#安装docker-compose"}},[t._v("docker-compose")]),t._v("来运行：")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载docker-compose配置文件")]),t._v("\n$ "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -O https://raw.githubusercontent.com/fenixsoft/microservice_arch_springcloud/master/docker-compose.yml\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动服务")]),t._v("\n$ docker-compose up\n")])])]),r("p",[t._v("然后在浏览器访问："),r("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080"),r("OutboundLink")],1),t._v("，系统预置了一个用户（user:icyfenix，pw:123456），也可以注册新用户来测试。")])]),t._v(" "),r("li",[r("p",[t._v("通过Git上的源码，以Maven编译、运行："),r("br"),t._v("由于笔者已经在配置文件中设置好了各个微服务的默认的地址和端口号，以便于本地调试。如果要在同一台机运行这些服务，并且每个微服务都只启动一个实例的话，那不加任何配置、参数即可正常以Maven编译、以Jar包形式运行。由于各个微服务需要从配置中心里获取具体的参数信息，因此唯一的要求只是“配置中心”的微服务必须作为第一个启动的服务进程，对其他的启动顺序则没有更多要求了。具体的操作过程如下所示：")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆获取源码")]),t._v("\n$ "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/fenixsoft/microservice_arch_springcloud.git\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入工程根目录")]),t._v("\n$ "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" microservice_arch_springcloud\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编译打包（方式1）")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 采用Maven Wrapper，此方式只需要机器安装有JDK 8或以上版本即可，无需包括Maven在内的其他任何依赖")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆后你可能需要使用chmod给mvnw赋予执行权限，如在Windows下应使用mvnw.cmd package代替以下命令")]),t._v("\n$ ./mvnw package\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编译打包（方式2）")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 直接采用Maven，由于国内访问Apache Maven的分发地址和中央仓库速度感人")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 采用Maven Wrapper有可能长时间无响应，如你机器已安装了Maven，建议使用如下命令")]),t._v("\n$ mvn package\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 工程将编译出七个SpringBoot Jar")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动服务需要运行以下七个微服务组件")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置中心微服务：localhost:8888")]),t._v("\n$ java -jar ./bookstore-microservices-platform-configuration/target/bookstore-microservice-platform-configuration-1.0.0-SNAPSHOT.jar\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务发现微服务：localhost:8761")]),t._v("\n$ java -jar ./bookstore-microservices-platform-registry/target/bookstore-microservices-platform-registry-1.0.0-SNAPSHOT.jar\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务网关微服务：localhost:8080")]),t._v("\n$ java -jar ./bookstore-microservices-platform-gateway/target/bookstore-microservices-platform-gateway-1.0.0-SNAPSHOT.jar\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安全认证微服务：localhost:8301")]),t._v("\n$ java -jar ./bookstore-microservices-domain-security/target/bookstore-microservices-domain-security-1.0.0-SNAPSHOT.jar\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用户信息微服务：localhost:8401")]),t._v("\n$ java -jar ./bookstore-microservices-domain-account/target/bookstore-microservices-domain-account-1.0.0-SNAPSHOT.jar\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 商品仓库微服务：localhost:8501")]),t._v("\n$ java -jar ./bookstore-microservices-domain-warehouse/target/bookstore-microservices-domain-warehouse-1.0.0-SNAPSHOT.jar\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 商品交易微服务：localhost:8601")]),t._v("\n$ java -jar ./bookstore-microservices-domain-payment/target/bookstore-microservices-domain-payment-1.0.0-SNAPSHOT.jar\n")])])]),r("p",[t._v("由于在命令行启动多个服务、通过容器实现各服务隔离、扩展等都较繁琐，笔者提供了一个docker-compose.dev.yml文件，便于开发期调试使用：")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用Maven编译出JAR包后，可使用以下命令直接在本地构建镜像运行")]),t._v("\n$ docker-compose -f docker-compose.dev.yml up\n")])])]),r("p",[t._v("以上两种本地运行的方式可任选其一，服务全部启动后，在浏览器访问："),r("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080"),r("OutboundLink")],1),t._v("，系统预置了一个用户（user:icyfenix，pw:123456），也可以注册新用户来测试"),r("br")])]),t._v(" "),r("li",[r("p",[t._v("通过Git上的源码，在IDE环境中运行：")]),t._v(" "),r("ul",[r("li",[t._v("以IntelliJ IDEA为例，Git克隆本项目后，在File -> Open菜单选择本项目所在的目录，或者pom.xml文件，以Maven方式导入工程。")]),t._v(" "),r("li",[t._v("待Maven自动安装依赖后，即可在IDE或者Maven面板中编译全部子模块的程序。")]),t._v(" "),r("li",[t._v("本工程下面八个模块，其中除bookstore-microservices-library-infrastructure外，其余均是SpringBoot工程，将这七个工程的Application类加入到IDEA的Run Dashboard面板中。")]),t._v(" "),r("li",[t._v("在Run Dashboard中先启动“bookstore-microservices-platform-configuration”微服务，然后可一次性启动其余六个子模块的微服务。")])])]),t._v(" "),r("li",[r("p",[t._v("配置与横向扩展"),r("br"),t._v("工程中预留了一些的环境变量，便于配置和扩展，譬如，对于热点模块，往往需要启动多个微服务扩容，此时需要调整每个服务的端口号。预留的这类环境变量包括：")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改配置中心的主机和端口，默认为localhost:8888")]),t._v("\nCONFIG_HOST\nCONFIG_PORT\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改服务发现的主机和端口，默认为localhost:8761")]),t._v("\nREGISTRY_HOST\nREGISTRY_PORT\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改认证中心的主机和端口，默认为localhost:8301")]),t._v("\nAUTH_HOST\nAUTH_PORT\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改当前微服务的端口号")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 譬如，你打算在一台机器上扩容四个支付微服务以应对促销活动的流量高峰")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可将它们的端口设置为8601（默认）、8602、8603、8604等")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 真实环境中，它们可能是在不同的物理机、容器环境下，这时扩容可无需调整端口")]),t._v("\nPORT\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SpringBoot所采用Profile配置文件，默认为default")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 譬如，服务默认使用HSQLDB的内存模式作为数据库，如需调整为MySQL，可将此环境变量调整为mysql")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 因为笔者默认预置了名为applicaiton-mysql.yml的配置，以及HSQLDB和MySQL的数据库脚本")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果你需要支持其他数据库、修改程序中其他的配置信息，可以在代码中自行加入另外的初始化脚本")]),t._v("\nPROFILES\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Java虚拟机运行参数，默认为空")]),t._v("\nJAVA_OPTS\n")])])])])]),t._v(" "),r("h2",{attrs:{id:"技术组件"}},[t._v("技术组件")]),t._v(" "),r("p",[t._v("Fenix's BookStore采用基于SpringCloud微服务架构，微服务部分主要采用了Netflix OSS组件进行支持，它们包括：")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("配置中心")]),t._v("：默认采用"),r("a",{attrs:{href:"https://spring.io/projects/spring-cloud-config",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Cloud Config"),r("OutboundLink")],1),t._v("，亦可使用"),r("a",{attrs:{href:"https://spring.io/projects/spring-cloud-consul",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Cloud Consul"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://spring.io/projects/spring-cloud-alibaba",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Cloud Alibaba Nacos"),r("OutboundLink")],1),t._v("代替。")]),t._v(" "),r("li",[r("strong",[t._v("服务发现")]),t._v("：默认采用"),r("a",{attrs:{href:"https://github.com/Netflix/eureka",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netflix Eureka"),r("OutboundLink")],1),t._v("，亦可使用"),r("a",{attrs:{href:"https://spring.io/projects/spring-cloud-consul",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Cloud Consul"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://spring.io/projects/spring-cloud-zookeeper",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Cloud Zookeeper"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://github.com/etcd-io/etcd",target:"_blank",rel:"noopener noreferrer"}},[t._v("etcd"),r("OutboundLink")],1),t._v("等代替。")]),t._v(" "),r("li",[r("strong",[t._v("服务网关")]),t._v("：默认采用"),r("a",{attrs:{href:"https://github.com/Netflix/zuul",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netflix Zuul"),r("OutboundLink")],1),t._v("，亦可使用"),r("a",{attrs:{href:"https://spring.io/projects/spring-cloud-gateway",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Cloud Gateway"),r("OutboundLink")],1),t._v("代替。")]),t._v(" "),r("li",[r("strong",[t._v("服务熔断")]),t._v("：默认采用"),r("a",{attrs:{href:"https://github.com/Netflix/Hystrix",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netflix Hystrix"),r("OutboundLink")],1),t._v("，亦可使用"),r("a",{attrs:{href:"https://github.com/alibaba/Sentinel",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sentinel"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://github.com/resilience4j/resilience4j",target:"_blank",rel:"noopener noreferrer"}},[t._v("Resilience4j"),r("OutboundLink")],1),t._v("代替。")]),t._v(" "),r("li",[r("strong",[t._v("进程内负载均衡")]),t._v("：默认采用"),r("a",{attrs:{href:"https://github.com/Netflix/ribbon",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netfilix Ribbon"),r("OutboundLink")],1),t._v("，亦可使用"),r("a",{attrs:{href:"https://spring.io/guides/gs/spring-cloud-loadbalancer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Cloud Loadbalancer"),r("OutboundLink")],1),t._v("代替。")]),t._v(" "),r("li",[r("strong",[t._v("声明式HTTP客户端")]),t._v("：默认采用"),r("a",{attrs:{href:"https://spring.io/projects/spring-cloud-openfeign",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Cloud OpenFeign"),r("OutboundLink")],1),t._v("。这个并没有代替的必要，访问远程服务而已，使用RestTemplete或者更底层的"),r("a",{attrs:{href:"https://square.github.io/okhttp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OkHTTP"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://hc.apache.org/httpcomponents-client-ga/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTPClient"),r("OutboundLink")],1),t._v("也能完成，多写点代码罢了。")])]),t._v(" "),r("p",[t._v("尽管Netflix套件的使用人数很多，但由于Spring Cloud Netflix已进入维护模式，所以笔者均列出了上述组件的代替品。这些组件几乎都是声明式的，这保证了替代它们的成本相当低，只需要更换注解，修改配置，无需改动代码。你在阅读源码时也会发现，三个“platform”开头的服务，基本上没有任何实际代码的存在。")]),t._v(" "),r("p",[t._v("其他与微服务无关的技术组件（REST服务、安全、数据访问，等等），笔者已在"),r("a",{attrs:{href:"https://icyfenix.cn/exploration/projects/monolithic_arch_springboot.html#技术组件"}},[t._v("Fenix's BookStore单体架构")]),t._v("中介绍过，在此不再重复。")]),t._v(" "),r("h2",{attrs:{id:"协议"}},[t._v("协议")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("本文档代码部分采用"),r("a",{attrs:{href:"https://www.apache.org/licenses/LICENSE-2.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache 2.0协议"),r("OutboundLink")],1),t._v("进行许可。遵循许可的前提下，你可以自由地对代码进行修改，再发布，可以将代码用作商业用途。但要求你：")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("署名")]),t._v("：在原有代码和衍生代码中，保留原作者署名及代码来源信息。")]),t._v(" "),r("li",[r("strong",[t._v("保留许可证")]),t._v("：在原有代码和衍生代码中，保留Apache 2.0协议文件。")])])]),t._v(" "),r("li",[r("p",[t._v("本作品文档部分采用"),r("a",{attrs:{href:"http://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("知识共享署名 4.0 国际许可协议"),r("OutboundLink")],1),t._v("进行许可。 遵循许可的前提下，你可以自由地共享，包括在任何媒介上以任何形式复制、发行本作品，亦可以自由地演绎、修改、转换或以本作品为基础进行二次创作。但要求你：")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("署名")]),t._v("：应在使用本文档的全部或部分内容时候，注明原作者及来源信息。")]),t._v(" "),r("li",[r("strong",[t._v("非商业性使用")]),t._v("：不得用于商业出版或其他任何带有商业性质的行为。如需商业使用，请联系作者。")]),t._v(" "),r("li",[r("strong",[t._v("相同方式共享的条件")]),t._v("：在本文档基础上演绎、修改的作品，应当继续以知识共享署名 4.0国际许可协议进行许可。")])])])])],1)}),[],!1,null,null,null);e.default=s.exports}}]);