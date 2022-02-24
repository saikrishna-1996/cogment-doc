"use strict";(self.webpackChunkcogment_doc=self.webpackChunkcogment_doc||[]).push([[517],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3054:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={},s="Step 4: Add a second actor implementation based on a heuristic",p={unversionedId:"cogment/tutorial/heuristic-player",id:"cogment/tutorial/heuristic-player",title:"Step 4: Add a second actor implementation based on a heuristic",description:"This part of the tutorial follows step 3, make sure you've gone through it before starting this one. Alternatively the completed step 3 can be retrieved from the tutorial's repository.",source:"@site/docs/cogment/tutorial/4-heuristic-player.md",sourceDirName:"cogment/tutorial",slug:"/cogment/tutorial/heuristic-player",permalink:"/docs/cogment/tutorial/heuristic-player",tags:[],version:"current",lastUpdatedAt:1645720139,formattedLastUpdatedAt:"2/24/2022",sidebarPosition:4,frontMatter:{},sidebar:"docSidebar",previous:{title:"Step 3: Rewards",permalink:"/docs/cogment/tutorial/rewards"},next:{title:"Step 5: Add a human player in the loop",permalink:"/docs/cogment/tutorial/human-player"}},c=[{value:"Creating a second actor implementation",id:"creating-a-second-actor-implementation",children:[],level:2},{value:"Implementing a simple heuristic&#39;s agent",id:"implementing-a-simple-heuristics-agent",children:[],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"step-4-add-a-second-actor-implementation-based-on-a-heuristic"},"Step 4: Add a second actor implementation based on a heuristic"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This part of the tutorial follows ",(0,r.kt)("a",{parentName:"p",href:"/docs/cogment/tutorial/rewards"},"step 3"),", make sure you've gone through it before starting this one. Alternatively the completed step 3 can be retrieved from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cogment/cogment-tutorial-rps"},"tutorial's repository"),".")),(0,r.kt)("p",null,"In this step of the tutorial, we will go over another actor implementation and learn about using the received observations before doing an action."),(0,r.kt)("h2",{id:"creating-a-second-actor-implementation"},"Creating a second actor implementation"),(0,r.kt)("p",null,"Let's start by creating another implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"player")," actor class. Because we expect it to be rather small and not use additional dependencies, this second implementation will ",(0,r.kt)("em",{parentName:"p"},"live")," in the same service as the previous one. We will start by copying the ",(0,r.kt)("inlineCode",{parentName:"p"},"random_agent")," implementation."),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"random_agent/main.py")," copy/paste the ",(0,r.kt)("inlineCode",{parentName:"p"},"random_agent")," function and name it ",(0,r.kt)("inlineCode",{parentName:"p"},"heuristic_agent"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"async def heuristic_agent(actor_session):\n")),(0,r.kt)("p",null,'Then, in the same file, register this "new" implementation in the ',(0,r.kt)("inlineCode",{parentName:"p"},"main")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'context.register_actor(\n  impl=heuristic_agent,\n  impl_name="heuristic_agent",\n  actor_classes=["player"])\n')),(0,r.kt)("p",null,"When the service starts it will now host the two implementations."),(0,r.kt)("p",null,"We can now configure one of the ",(0,r.kt)("inlineCode",{parentName:"p"},"player")," in the default trial, defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"cogment.yaml"),", to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"heuristic_agent")," implementation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"actors:\n    - name: player_1\n      actor_class: player\n      implementation: random_agent\n      endpoint: grpc://random-agent:9000\n    - name: player_2\n      actor_class: player\n      implementation: heuristic_agent\n      endpoint: grpc://random-agent:9000\n")),(0,r.kt)("p",null,"Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"cogment.yaml")," file to include the above addition."),(0,r.kt)("p",null,"You can now ",(0,r.kt)("a",{parentName:"p",href:"/docs/cogment/tutorial/bootstrap-and-data-structures#building-and-running-the-app"},"build and run")," the application to check that it still works. Nothing should have changed except one of the player uses the code from the new implementation."),(0,r.kt)("h2",{id:"implementing-a-simple-heuristics-agent"},"Implementing a simple heuristic's agent"),(0,r.kt)("p",null,"While the ",(0,r.kt)("inlineCode",{parentName:"p"},"random_player")," ignored the state of the game, picking its move at random, our new implementation will consider the received ",(0,r.kt)("strong",{parentName:"p"},"observations")," to pick its move."),(0,r.kt)("p",null,"We will implement a subset of the strategies described in ",(0,r.kt)("a",{parentName:"p",href:"https://towardsai.net/p/artificial-intelligence/towards-an-ai-for-rock-paper-scissors-3fb05780271f"},"this")," article:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If I won the last round, do the same thing,"),(0,r.kt)("li",{parentName:"ul"},"If my opponent won the last round, play the move that would have won against his,"),(0,r.kt)("li",{parentName:"ul"},"If the last round was a draw, play a random move.")),(0,r.kt)("p",null,"We will start by redefining in ",(0,r.kt)("inlineCode",{parentName:"p"},"random_agent/main.py")," the same ",(0,r.kt)("inlineCode",{parentName:"p"},"DEFEATS")," we used by the environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"DEFEATS = {\n  ROCK: PAPER,\n  SCISSORS: ROCK,\n  PAPER: SCISSORS\n}\n")),(0,r.kt)("p",null,"Then, in the event loop, we look at the received observation before taking an action based on this simple strategy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"observation = event.observation\nprint(f\"'{actor_session.name}' received an observation: '{observation}'\")\nif event.type == cogment.EventType.ACTIVE:\n    if observation.snapshot.me.won_last:\n        # I won the last round, let's play the same thing\n        actor_session.do_action(PlayerAction(move=observation.snapshot.me.last_move))\n    elif observation.snapshot.them.won_last:\n        # I lost the last round, let's play what would have won\n        actor_session.do_action(PlayerAction(move=DEFEATS[observation.snapshot.them.last_move]))\n    else:\n        # last round was a draw, let's play randomly\n        actor_session.do_action(PlayerAction(move=random.choice(MOVES)))\n")),(0,r.kt)("p",null,"Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"random_player/main.py")," file accordingly."),(0,r.kt)("p",null,"You can now ",(0,r.kt)("a",{parentName:"p",href:"/docs/cogment/tutorial/bootstrap-and-data-structures#building-and-running-the-app"},"build and run")," the application to check that it works. Don't expect the heuristic player to beat the random player, the nature of the game actually rewards pure randomness in the playing. You can however implement various strategies and see how they fare against each other."),(0,r.kt)("p",null,"This concludes the step 4 of the tutorial: you've learned about adding and using different implementations of an actor class and how to access and use the received observations."),(0,r.kt)("p",null,"Let\u2019s move on to adding a human player in the mix with ",(0,r.kt)("a",{parentName:"p",href:"/docs/cogment/tutorial/human-player"},"step 5"),"."))}u.isMDXComponent=!0}}]);