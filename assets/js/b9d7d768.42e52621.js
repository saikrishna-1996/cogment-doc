"use strict";(self.webpackChunkcogment_doc=self.webpackChunkcogment_doc||[]).push([[206],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7672:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={},s="Step 5: Add a human player in the loop",p={unversionedId:"cogment/tutorial/human-player",id:"cogment/tutorial/human-player",title:"Step 5: Add a human player in the loop",description:"This part of the tutorial follows step 4, make sure you've gone through it before starting this one. Alternatively the completed step 4 can be retrieved from the tutorial's repository.",source:"@site/docs/cogment/tutorial/5-human-player.md",sourceDirName:"cogment/tutorial",slug:"/cogment/tutorial/human-player",permalink:"/docs/cogment/tutorial/human-player",tags:[],version:"current",lastUpdatedAt:1645720139,formattedLastUpdatedAt:"2/24/2022",sidebarPosition:5,frontMatter:{},sidebar:"docSidebar",previous:{title:"Step 4: Add a second actor implementation based on a heuristic",permalink:"/docs/cogment/tutorial/heuristic-player"},next:{title:"Step 6: Add a web client for the human player",permalink:"/docs/cogment/tutorial/web-client"}},c=[{value:"The client",id:"the-client",children:[],level:2},{value:"Environment controlled trial",id:"environment-controlled-trial",children:[],level:2},{value:"Client actor implementation",id:"client-actor-implementation",children:[],level:2},{value:"Interactive prompt to let Humans play RPS",id:"interactive-prompt-to-let-humans-play-rps",children:[],level:2}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"step-5-add-a-human-player-in-the-loop"},"Step 5: Add a human player in the loop"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This part of the tutorial follows ",(0,r.kt)("a",{parentName:"p",href:"/docs/cogment/tutorial/heuristic-player"},"step 4"),", make sure you've gone through it before starting this one. Alternatively the completed step 4 can be retrieved from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cogment/cogment-tutorial-rps"},"tutorial's repository"),".")),(0,r.kt)("p",null,"In this step of the tutorial, we will go over another actor implementation, this time client-side, to enable Humans to play RPS. We will also learn how to let the environment control the termination of the trial."),(0,r.kt)("h2",{id:"the-client"},"The client"),(0,r.kt)("p",null,"In the previous steps, we triggered the trials by running ",(0,r.kt)("inlineCode",{parentName:"p"},"cogment run client"),". The more curious among you will have understood that this launches a client of the Cogment app, implemented in ",(0,r.kt)("inlineCode",{parentName:"p"},"client/main.py"),". In this step, we will make changes to this file, this is therefore a good time to take a look at it."),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"client/main.py")," and take a look at the generated content."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," starts similarly to the others by creating and configuring the main entry point to the SDK, ",(0,r.kt)("inlineCode",{parentName:"p"},"Context"),". Then a ",(0,r.kt)("inlineCode",{parentName:"p"},"trial_controller")," function is created: it enables retrieving the unique id for a trial and controls its lifetime (ending it by default after 10 seconds). Finally, a trial is started on the running ",(0,r.kt)("inlineCode",{parentName:"p"},"orchestrator"),", using ",(0,r.kt)("inlineCode",{parentName:"p"},"trial_controller")," and a default trial configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'async def trial_controller(control_session):\n  print(f"Trial \'{control_session.get_trial_id()}\' starts")\n  await asyncio.sleep(10)\n  print(f"Trial \'{control_session.get_trial_id()}\' terminating")\n  await control_session.terminate_trial()\n\nawait context.start_trial(endpoint="orchestrator:9000", impl=trial_controller, trial_config=TrialConfig())\n')),(0,r.kt)("h2",{id:"environment-controlled-trial"},"Environment controlled trial"),(0,r.kt)("p",null,"While 10 seconds was plenty of time to get a decent number of AI vs AI games played, a Human player won't be as fast: we need to change how we control the duration and number of played games. To do that, we will switch from controlling the trial lifetime from the client's trial controller, to controlling it from the environment."),(0,r.kt)("p",null,"Instead of a duration, our trial will last for a given number of games. That way AI vs AI trials will be configurable to last hundreds of games while trials involving Humans can be much shorter."),(0,r.kt)("p",null,"Let's introduce a new property of the environment configuration, ",(0,r.kt)("inlineCode",{parentName:"p"},"target_games_count"),", in ",(0,r.kt)("inlineCode",{parentName:"p"},"data.proto"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"message EnvConfig {\n  int32 target_game_score = 1;\n  int32 target_games_count = 2;\n}\n")),(0,r.kt)("p",null,"We can then set its value for the default trial in ",(0,r.kt)("inlineCode",{parentName:"p"},"cogment.yaml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"trial_params:\n    environment:\n        endpoint: grpc://environment:9000\n        config:\n            target_game_score: 2\n            target_games_count: 5\n")),(0,r.kt)("p",null,"Environment implementations can trigger the end of a trial by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," function on the session instance. In our existing implementation, we will first prepare the observations instead of producing them right away."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"observations = [\n    (p1.actor_name, Observation(me=p1_state, them=p2_state)),\n    (p2.actor_name, Observation(me=p2_state, them=p1_state)),\n]\n")),(0,r.kt)("p",null,"And then, at the end of the event loop, either end the trial if the target games count is reached or produce the observations as before."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'if state["games_count"]>=environment_session.config.target_games_count:\n    environment_session.end(observations=observations)\nelse:\n    environment_session.produce_observations(observations=observations)\n')),(0,r.kt)("p",null,"Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"environment/main.py")," file to include the above additions."),(0,r.kt)("p",null,"You can now ",(0,r.kt)("a",{parentName:"p",href:"/docs/cogment/tutorial/bootstrap-and-data-structures#building-and-running-the-app"},"build and run")," the application. It should be much faster than before as the AIs only play 5 games."),(0,r.kt)("h2",{id:"client-actor-implementation"},"Client actor implementation"),(0,r.kt)("p",null,"We are now ready to involve a human player in our trials. To do that we will add a specific actor implementation in the client. While the previous ",(0,r.kt)("strong",{parentName:"p"},"service actor")," implementations are exposing endpoints Cogment's orchestrator connects to in order to run a trial, this ",(0,r.kt)("strong",{parentName:"p"},"client actor")," implementation connects to the orchestrator to join a trial. It changes a lot under the hood and enables interesting network topology because only the client needs to know how to reach the orchestrator, not the other way around. However, as you'll see, in terms of implementation it is very similar."),(0,r.kt)("p",null,"This actor implementation will be located in the client code in ",(0,r.kt)("inlineCode",{parentName:"p"},"client/main.py")),(0,r.kt)("p",null,"We first need to import the data structures needed to send actions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from data_pb2 import PlayerAction, ROCK, PAPER, SCISSORS\n\nMOVES = [ROCK, PAPER, SCISSORS]\nMOVES_STR = ["\ud83d\udc4a rock", "\u270b paper", "\u270c\ufe0f scissors"]\nMOVES_PROMPT = \', \'.join([ f"{name} ({idx})" for idx, name in enumerate(MOVES_STR)])\n')),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," function we then implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"human_player")," actor implementation, only playing ",(0,r.kt)("inlineCode",{parentName:"p"},"PAPER")," for the moment, register the implementation and join the trial once it is initialized."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'context = cogment.Context(cog_settings=cog_settings, user_id="rps")\n\nasync def human_player(actor_session):\n    round_index = 0\n\n    actor_session.start()\n\n    async for event in actor_session.event_loop():\n        if event.observation:\n            observation = event.observation\n\n            if event.type == cogment.EventType.ACTIVE:\n                print(f"\\n-- Round #{round_index + 1} --\\n")\n\n                next_action = PlayerAction(move=PAPER)\n                actor_session.do_action(next_action)\n\n                round_index += 1\n\ncontext.register_actor(\n    impl=human_player,\n    impl_name="human",\n    actor_classes=["player"])\n\n# Create a controller\ncontroller = context.get_controller(endpoint=cogment.Endpoint("orchestrator:9000"))\n\n# Start a new trial\ntrial_id = await controller.start_trial(trial_config=TrialConfig())\nprint(f"Trial \'{trial_id}\' starting")\n\n# Let the human actor join the trial\nawait context.join_trial(trial_id=trial_id, endpoint=cogment.Endpoint("orchestrator:9000"), impl_name="human")\nprint(f"Human actor joining trial \'{trial_id}\'")\n\n# Wait for the trial to end by itself\nasync for trial_info in controller.watch_trials(trial_state_filters=[cogment.TrialState.ENDED]):\n    if trial_info.trial_id == trial_id:\n        break\n\nprint(f"Trial \'{trial_id}\' ended")\n')),(0,r.kt)("p",null,"Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"client/main.py")," file with these updates."),(0,r.kt)("p",null,"We then need to modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"cogment.yaml")," to let the orchestrator know that ",(0,r.kt)("inlineCode",{parentName:"p"},"player_1")," now uses a client-side implementation. To do so we use a ",(0,r.kt)("em",{parentName:"p"},"special")," endpoint, ",(0,r.kt)("inlineCode",{parentName:"p"},'"cogment://client"'),", and we don't need to specify an implementation name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"actors:\n    - name: player_1\n      actor_class: player\n      endpoint: cogment://client\n      # implementation: random_agent\n      # endpoint: grpc://random-agent:9000\n")),(0,r.kt)("p",null,"You can now ",(0,r.kt)("a",{parentName:"p",href:"/docs/cogment/tutorial/bootstrap-and-data-structures#building-and-running-the-app"},"build and run")," the application. Everything should work but player 1 shouldn't fare too well as it only ever plays ",(0,r.kt)("inlineCode",{parentName:"p"},"PAPER"),"."),(0,r.kt)("h2",{id:"interactive-prompt-to-let-humans-play-rps"},"Interactive prompt to let Humans play RPS"),(0,r.kt)("p",null,"Let's add a text user interface to our client in order to finally challenge AIs to a game of RPS."),(0,r.kt)("p",null,"First we'll want to display what was played in the previous round. We will implement a dedicated function ",(0,r.kt)("inlineCode",{parentName:"p"},"print_observation"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def print_observation(round_index, observation):\n    print(f"\ud83e\uddd1 played {MOVES_STR[observation.snapshot.me.last_move]}")\n    print(f"\ud83e\udd16 played {MOVES_STR[observation.snapshot.them.last_move]}")\n    if observation.snapshot.me.won_last:\n        print(f" -> \ud83e\uddd1 wins round #{round_index + 1}")\n    elif observation.snapshot.them.won_last:\n        print(f" -> \ud83e\udd16 wins the round #{round_index + 1}")\n    else:\n        print(f" -> round #{round_index + 1} is a draw")\n')),(0,r.kt)("p",null,"It needs to be called whenever the actor receives an observation, except for the first time, before the first round is played. Add the following just after the observation is retrieved in the event loop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"if round_index > 0:\n  # The only time the observation is not relevant is on the first round of the first game\n  print_observation(round_index, observation)\n")),(0,r.kt)("p",null,"Last but not least, instead of always picking ",(0,r.kt)("inlineCode",{parentName:"p"},"PAPER")," we will read from the keyboard input what the player wishes to play. Using python's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3.7/library/functions.html#input"},(0,r.kt)("inlineCode",{parentName:"a"},"input"))," function we can print a prompt and read whatever the user enters before pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"<ENTER>"),"."),(0,r.kt)("p",null,"Note that the following implementation expects a number between 1 and 3 and doesn't handle well any other input."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"move = MOVES[int(input(MOVES_PROMPT))]\nnext_action = PlayerAction(move=move)\n")),(0,r.kt)("p",null,"Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"client/main.py")," file to include the above additions."),(0,r.kt)("p",null,"You can now ",(0,r.kt)("a",{parentName:"p",href:"/docs/cogment/tutorial/bootstrap-and-data-structures#building-and-running-the-app"},"build and run")," the application. You'll be presented with a prompt for choosing your moves and comparing your skills to the simple heuristic AI we implemented earlier."),(0,r.kt)("p",null,"This concludes the step 5 of the tutorial: you implemented your first client actor and put your first human in the loop! This is also the final step for the basics tutorial."),(0,r.kt)("p",null,"You can continue by implementing a web client to replace the command line interface we just developed in ",(0,r.kt)("a",{parentName:"p",href:"/docs/cogment/tutorial/web-client"},"step 6"),". You can also learn how to train an actor implementation using Reinforcement Learning in ",(0,r.kt)("a",{parentName:"p",href:"/docs/cogment/tutorial/dqn-player"},"step 7"),"."))}d.isMDXComponent=!0}}]);