"use strict";(self.webpackChunkcogment_doc=self.webpackChunkcogment_doc||[]).push([[870],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,h=d["".concat(p,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1957:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return m},default:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={},p="Step 2: Implement a first actor and environment",l={unversionedId:"cogment/tutorial/random-player",id:"cogment/tutorial/random-player",title:"Step 2: Implement a first actor and environment",description:"This part of the tutorial follows step 1, make sure you've gone through it before starting this one. Alternatively, the completed step 1 can be retrieved from the tutorial's repository.",source:"@site/docs/cogment/tutorial/2-random-player.md",sourceDirName:"cogment/tutorial",slug:"/cogment/tutorial/random-player",permalink:"/docs/cogment/tutorial/random-player",tags:[],version:"current",lastUpdatedAt:1645720139,formattedLastUpdatedAt:"2/24/2022",sidebarPosition:2,frontMatter:{},sidebar:"docSidebar",previous:{title:"Step 1: Create a new Trial",permalink:"/docs/cogment/tutorial/bootstrap-and-data-structures"},next:{title:"Step 3: Rewards",permalink:"/docs/cogment/tutorial/rewards"}},m=[{value:"Random player agent",id:"random-player-agent",children:[],level:2},{value:"Implementing the rules of the game",id:"implementing-the-rules-of-the-game",children:[],level:2}],c={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"step-2-implement-a-first-actor-and-environment"},"Step 2: Implement a first actor and environment"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This part of the tutorial follows ",(0,r.kt)("a",{parentName:"p",href:"/docs/cogment/tutorial/bootstrap-and-data-structures"},"step 1"),", make sure you've gone through it before starting this one. Alternatively, the completed step 1 can be retrieved from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cogment/cogment-tutorial-rps"},"tutorial's repository"),".")),(0,r.kt)("p",null,"In this step of the tutorial, we will implement the (very simple) decison logic for the random player as well as the base mechanics for RPS, i.e. the rules of the game, in the environment services."),(0,r.kt)("h2",{id:"random-player-agent"},"Random player agent"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"rps")," directory, the ",(0,r.kt)("inlineCode",{parentName:"p"},"random_agent")," directory contains the python implementation for the eponymous service. You'll find two files here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"requirements.txt")," is a ",(0,r.kt)("a",{parentName:"li",href:"https://pip.pypa.io/en/stable/reference/pip_install/?highlight=requirements#requirements-file-format"},"pip requirement file")," defining the dependencies of the service. For the moment it only lists ",(0,r.kt)("a",{parentName:"li",href:"https://pypi.org/project/cogment/"},(0,r.kt)("inlineCode",{parentName:"a"},"cogment")),", Cogment's python SDK."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"main.py")," contains the implementation of the service.")),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"main.py")," and take a look at the generated content."),(0,r.kt)("p",null,"At the bottom you'll find the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," function, it initializes Cogment's context, registers the ",(0,r.kt)("inlineCode",{parentName:"p"},"random_agent")," actor's implementation, then starts the service itsef on tcp port 9000 and awaits its termination."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Cogment's python sdk leverages Python's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio-task.html"},"asynchronous features"),", you'll need a basic understanding of them.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'async def main():\n  print("Random-Agent actor service up and running.")\n\n  context = cogment.Context(cog_settings=cog_settings, user_id="rps")\n  context.register_actor(\n      impl=random_agent,\n      impl_name="random_agent",\n      actor_classes=["player",])\n\n  await context.serve_all_registered(cogment.ServedEndpoint(port=9000))\n')),(0,r.kt)("p",null,"At the beginning of the file, the function ",(0,r.kt)("inlineCode",{parentName:"p"},"random_agent")," is the actor's implementation. This function is called once per actor and per trial and handles the full lifetime of the actor."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The actor's ",(0,r.kt)("strong",{parentName:"li"},"initialization"),", before the ",(0,r.kt)("inlineCode",{parentName:"li"},"async for"),". This is where, for example, actor's internal data can be defined before calling ",(0,r.kt)("inlineCode",{parentName:"li"},"actor_session.start()")," to notify that it is ready,"),(0,r.kt)("li",{parentName:"ul"},"Its ",(0,r.kt)("strong",{parentName:"li"},"event loop"),", the content of the ",(0,r.kt)("inlineCode",{parentName:"li"},"async for"),". This is where resides the implementation of the actor's response to various events,"),(0,r.kt)("li",{parentName:"ul"},"Its ",(0,r.kt)("strong",{parentName:"li"},"termination"),", after the ",(0,r.kt)("inlineCode",{parentName:"li"},"async for"),".")),(0,r.kt)("p",null,"The generated implementation is very simple:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"it handles the three main kind of events: ",(0,r.kt)("strong",{parentName:"li"},"observations"),", ",(0,r.kt)("strong",{parentName:"li"},"rewards")," and ",(0,r.kt)("strong",{parentName:"li"},"messages"),","),(0,r.kt)("li",{parentName:"ul"},"it does a default ",(0,r.kt)("strong",{parentName:"li"},"action")," whenever required, i.e. in response to an observation.")),(0,r.kt)("p",null,"We will further learn about how to use rewards in ",(0,r.kt)("a",{parentName:"p",href:"/docs/cogment/tutorial/rewards"},"step 3")," and observations in ",(0,r.kt)("a",{parentName:"p",href:"/docs/cogment/tutorial/heuristic-player"},"step 4"),". Messages are out of the scope for this ",(0,r.kt)("em",{parentName:"p"},"basics")," tutorial."),(0,r.kt)("p",null,"Please note the import and usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"PlayerAction")," which is the data structure from ",(0,r.kt)("inlineCode",{parentName:"p"},"data.proto")," defining the actor's action space."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"async def random_agent(actor_session):\n    actor_session.start()\n\n    async for event in actor_session.event_loop():\n        if event.observation:\n            observation = event.observation\n            print(f\"'{actor_session.name}' received an observation: '{observation}'\")\n            if event.type == cogment.EventType.ACTIVE:\n                action = PlayerAction()\n                actor_session.do_action(action)\n        for reward in event.rewards:\n            print(f\"'{actor_session.name}' received a reward for tick #{reward.tick_id}: {reward.value}\")\n        for message in event.messages:\n            print(f\"'{actor_session.name}' received a message from '{message.sender_name}': - '{message.payload}'\")\n")),(0,r.kt)("p",null,"Our goal is to implement an actor playing at random. We first need to import the different ",(0,r.kt)("inlineCode",{parentName:"p"},"Move"),", as defined in our data structures. We also need to import ",(0,r.kt)("inlineCode",{parentName:"p"},"random"),", the python package generating random numbers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from data_pb2 import ROCK, PAPER, SCISSORS\n\nimport random\n\nMOVES = [ROCK, PAPER, SCISSORS]\nMOVES_STR = ["\ud83d\udc4a rock", "\u270b paper", "\u270c\ufe0f scissors"]\n')),(0,r.kt)("p",null,"Once this is available we can simply update the ",(0,r.kt)("em",{parentName:"p"},"taking decision")," part of the actor's implementation to compute a random move whenever it is needed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"if event.observation:\n    observation = event.observation\n    print(f\"'{actor_session.name}' received an observation: '{observation}'\")\n    if event.type == cogment.EventType.ACTIVE:\n        action = PlayerAction(move=random.choice(MOVES))\n        actor_session.do_action(action)\n")),(0,r.kt)("p",null,"Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"random_agent/main.py")," file to include the above additions."),(0,r.kt)("h2",{id:"implementing-the-rules-of-the-game"},"Implementing the rules of the game"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"rps")," directory, the ",(0,r.kt)("inlineCode",{parentName:"p"},"environment")," directory contains the python implementation for the eponymous service. Similarly to the actor's service, you will find two files here, ",(0,r.kt)("inlineCode",{parentName:"p"},"requirements.txt")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"main.py"),"."),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"main.py")," and take a look at the generated content."),(0,r.kt)("p",null,"The code is very similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"random_agent"),"'s. In the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," function, instead of using ",(0,r.kt)("inlineCode",{parentName:"p"},"register_actor"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"register_environment")," is used. The implementation function, called ",(0,r.kt)("inlineCode",{parentName:"p"},"environment")," here, is structured similarly to the actor's one but handles two kinds of events: ",(0,r.kt)("strong",{parentName:"p"},"actions")," (and the last actions of a trial ",(0,r.kt)("strong",{parentName:"p"},"final_actions"),") and ",(0,r.kt)("strong",{parentName:"p"},"message"),". Environments don't perform actions, they produce observations that are sent to the actors participating in the trial."),(0,r.kt)("p",null,"Please note the import and usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"Observation")," which is the datastructure defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"data.proto")," defining the actors observation space."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'async def environment(environment_session):\n    print("environment starting")\n    # Create the initial observaton\n    observation = Observation()\n\n    # Start the trial and send that observation to all actors\n    environment_session.start([("*", observation)])\n\n    async for event in environment_session.event_loop():\n        if event.actions:\n            actions = event.actions\n            print(f"environment received the actions")\n            for actor, recv_action in zip(environment_session.get_active_actors(), actions):\n                print(f" actor \'{actor.actor_name}\' did action \'{recv_action.action}\'")\n            observation = Observation()\n            if event.type == cogment.EventType.ACTIVE:\n                # The trial is active\n                environment_session.produce_observations([("*", observation)])\n            else:\n                # The trial termination has been requested\n                environment_session.end([("*", observation)])\n        for message in event.messages:\n            print(f"environment received a message from \'{message.sender_name}\': - \'{message.payload}\'")\n\n    print("environment end")\n')),(0,r.kt)("p",null,"Our goal, in this section, is to implement how the environment computes the observations from the actions done by the actors at a given timestep."),(0,r.kt)("p",null,"We first import the needed datastructure and define a dictionary mapping each move to the move that defeats it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from data_pb2 import PlayerState, ROCK, PAPER, SCISSORS\n\nDEFEATS = {\n  ROCK: PAPER,\n  SCISSORS: ROCK,\n  PAPER: SCISSORS\n}\n")),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"initialization")," phase of the environment implementation, i.e. before the ",(0,r.kt)("inlineCode",{parentName:"p"},"async for"),", we create a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," data structure that is keeping around the number of rounds played and won by each of the two players."),(0,r.kt)("p",null,"We then compute the initial observation for each of the two players. One instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"PlayerState")," per player is created, each is used as the ",(0,r.kt)("inlineCode",{parentName:"p"},"me")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"them")," state of each player's observation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'state = {\n    "rounds_count": 0,\n    "p1": {\n        "won_rounds_count": 0\n    },\n    "p2": {\n        "won_rounds_count": 0\n    },\n}\nprint("environment starting")\n[p1, p2] = environment_session.get_active_actors()\np1_state = PlayerState(won_last=False, last_move=None)\np2_state = PlayerState(won_last=False, last_move=None)\nenvironment_session.start([\n    (p1.actor_name, Observation(me=p1_state, them=p2_state)),\n    (p2.actor_name, Observation(me=p2_state, them=p1_state)),\n])\n')),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"event loop")," we implement how the environment produces observations based on the actor's actions."),(0,r.kt)("p",null,"We start by retrieving each player's action and computing who won the round. Then, we update the internal ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),". Finally, we produce up-to-date observations for the players."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'if event.actions:\n    [p1_action, p2_action] = [recv_action.action for recv_action in event.actions]\n    print(f"{p1.actor_name} played {MOVES_STR[p1_action.move]}")\n    print(f"{p2.actor_name} played {MOVES_STR[p2_action.move]}")\n\n    # Compute who wins, if the two players had the same move, nobody wins\n    p1_state = PlayerState(\n        won_last=p1_action.move == DEFEATS[p2_action.move],\n        last_move=p1_action.move\n    )\n    p2_state = PlayerState(\n        won_last=p2_action.move == DEFEATS[p1_action.move],\n        last_move=p2_action.move\n    )\n    state["rounds_count"] += 1\n    if p1_state.won_last:\n        state["p1"]["won_rounds_count"] += 1\n        print(f"{p1.actor_name} wins!")\n    elif p2_state.won_last:\n        state["p2"]["won_rounds_count"] += 1\n        print(f"{p2.actor_name} wins!")\n    else:\n        print(f"draw.")\n\n    # Generate and send observations\n    observations = [\n        (p1.actor_name, Observation(me=p1_state, them=p2_state)),\n        (p2.actor_name, Observation(me=p2_state, them=p1_state)),\n    ]\n    if event.type == cogment.EventType.ACTIVE:\n        # The trial is active\n        environment_session.produce_observations(observations)\n    else:\n        # The trial termination has been requested\n        environment_session.end(observations)\n')),(0,r.kt)("p",null,"Finally, in the ",(0,r.kt)("strong",{parentName:"p"},"termination")," phase, we print some stats about the trial itself."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(\"environment end\")\nprint(f\"\\t * {state['rounds_count']} rounds played\")\nprint(f\"\\t * {p1.actor_name} won {state['p1']['won_rounds_count']} rounds\")\nprint(f\"\\t * {p1.actor_name} won {state['p2']['won_rounds_count']} rounds\")\nprint(f\"\\t * {state['rounds_count'] - state['p1']['won_rounds_count'] - state['p2']['won_rounds_count']} draws\")\n")),(0,r.kt)("p",null,"Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"environment/main.py")," file to include the above additions. Please note that this code makes assumptions on the number of actors and their classes. Production code should handle non-standard cases in a better way."),(0,r.kt)("p",null,"You can now ",(0,r.kt)("a",{parentName:"p",href:"/docs/cogment/tutorial/bootstrap-and-data-structures#building-and-running-the-app"},"build and run")," the application. Given the nature of the game and the fully random nature of the plays you should have around 1/3 of player 1 wins, 1/3 of player 2's and 1/3 of draws."),(0,r.kt)("p",null,"This concludes the step 2 of the tutorial: you implemented your first actor and your first environment."),(0,r.kt)("p",null,"Let\u2019s move on to learning more about rewards in ",(0,r.kt)("a",{parentName:"p",href:"/docs/cogment/tutorial/rewards"},"step 3"),"."))}d.isMDXComponent=!0}}]);