+++
title = "Launching the next generation of my dating apps"
date = 2022-12-03
draft =  false
[taxonomies]
tags = ["coding", "lang-dart", "flutter"]
medium = []
series = []
project = ["Dating"]
[extra]
images= []
+++

I'm super happy to be able to say that the first app using my next generation dating platform is now available in both [Goolge Play](https://play.google.com/store/apps/details?id=com.onescene.app) store and [Apple App Store](https://apps.apple.com/us/app/one-scene-dating-friends/id6443775589). I've launched one of my brands 'One Scene' using the new platform. This will be a bit of a test before I start moving over the bigger brands.

It's been a long road to getting here so I'll quickly get you up to speed...

---

## A brief history of Rocketware & dating apps

I created my company Rocketware back in 2011. My company's first product was a white label dating platform called 'Datingnode'. I built it around the LGBTQI+ community and it's been steadily ticking over for the last 13 years. Almost 6 million members have registered over the years and about half of those are currently active on the platform. Over the years Datingnode has provided dating services for some great brands, GT (UK's biggest gay lifestyle magazine), DIVA (UK's largest lesbian lifestyle magazine), Pink Paper (UK LGBTQI+ news portal & newspaper), GayXchange (dating TV channel) as well as my only brands including Only Women and Only Lads that are reasonably well known within the LGBTQI+ community.

Datingnode was initially launched as a white label dating solution for dating websites. It was 2011 and websites were still king. Only a year later everything changed when Tinder launched, the dating industry evolved over night. Over the years there have been various iterations of Datingnode:

- 2011: Datingnode white label platform launches
- 2012: Datingnode apps available in app stores utilising Titanium/Appcelerator to wrap Javascript web apps
- 2016: New API alongside native Android and Native Objective-C iOS apps released
- 2017: New website launches built upon the 2016 API.
- 2018-2020: Developed new Angular Dart PWA (Progressive web app), although this app never saw the light of day!
- 2020-2023: Developed new entirely new dating product which is what I've launched this week.

**(TODO: Add screenshots here)**

---

### 🤔 So what happened to the 2018 app?

In 2018 I started creating and new dating app built on the Datingnode API. The app was written in Angular and it interfaced with the API by an SDK that was generated from the Datingnode JSON API specification file. To help me on this project I took on a senior very experienced developer for around 18 months. This would be my first commercial Dart project and having someone on-board that has written battle-hardened dart code was reassuring.

We slogged away at it for almost 2 years, the app came together and when it did I was pretty proud of it -it really was a very accomplished web app. A week or two away from launch I took the very difficult decision to not launch it and throw away the huge investment that my company had made in to it over the last 24 months.

One morning sat in my co-working space and I was trying to wrap up those loose-ends. I didn't feel good about launching the app and I couldn't put my finger on why. I then had a crazy thought -"What start all over again" -and I didn't mean just the client app, I mean the whole shebang... Reinvent Datingnode from the ground up. The moment this idea had entered my head it was over all for the Angular client and Datingnode too. I felt terrible about the wasted money but I felt hugely relieved, I knew that launching another Datingnode app was subscribing me to another 5+ years of Datingnode. Datingnode had grown long in the tooth, it's API was huge and complex. It was the very definition of a [monoalithic app](https://en.wikipedia.org/wiki/Monolithic_application), it ran on physical servers and them breaking would often ruin weekends, evenings even holidays! Maybe it was a case of the grass is greener but I had already mentally taken the leap, I was invested in the idea of starting with a clean slate.

{{ image(src="clean-slate.webp", alt="Clean slate cartoon") }}

_🤣 I keep this in mind whenever I start a new project -to remind myself not to fall in to the trap!_

---

## Reimaging my dating product 10 years later

Ignoring the fact I've just wasted 2 years of work and paid a rockstar developers salary for 18 months, I was in a pretty privileged position. I had a relatively passive income and a bit of a runway to re-imagine my dating product. Here are the ideologies I came up with:

- **Developed for the cloud**: I wanted my dev-ops to be mostly someone elses problem. Not only would I utilise cloud technology I would design for it. I would utilise managed services where I could to maximise redundancy and security. Yes you pay a premium for the fancy technology but I'm a strong believe in do what you you do well, and for me that's making software, not settings up and maintaining the infrastructure.
- **Properly Gender inclusion**: The vast majority of dating services that are available today handle gender-identity inclusion poorly. Even if they let users choose their gender identity it still comes down to binary male or female when it comes to the matching. To support gender-identities properly the service needs to be designed around this concept - not just adapted to it. On my new dating service, gender identities are treated equally not as subsets of male or female.
- **Mutual likes to chat**: Thank you Tinder, this is one of the two great innovations we have Tinder to thank. The principle that both parties must be interested in one-another before communication can happen solves many problems with traditional dating services. It also is a great way to stop the service being abused by spammers and (unsophisticated) bots. This would be baked in to my new dating experience.
- **A modern UI built with Flutter**: I knew straight away that Flutter to build my new app. As a Dart developer this was the current hotness and it would allow me to have Android and iOS apps built from a single codebase. It also meant I could deploy Dart services in the cloud and they could all share the same code base. Dart is the language endgame for me and I'm living the developer dream -a single technology stack (front-end and back-end). In terms of user experience I will incorporate Tinder's other great innovation - the gestural swipe system for sifting through potential matches.

---

{{ image(class="framed", src="boromir.webp", alt="One does not simply launch a new dating app") }}

## The tip of the iceberg

I always thought a Dating platform a bit like an iceberg (or ant-hill), the bit people see (the app) makes up about 10% of the project. The other 90% is the customer service tools, the moderation systems, the anti-scam systems, billing systems, the notification systems, marketing etc etc. As I was starting with a clean-slate and new technology stack I've had to rebuild all the tools again. Using the single tech stack and shared code base has been a huge help here. I've created some cloud orchestration tools that allow semi-automated testing and deployment of my cloud-endpoints. The new platform has around 50 cloud endpoints / micro-services - handling everything from registration to AI photo moderation.

I've created a new management tool and moderation tools using Flutter however this time they're targeting the web giving remote workers easy access using their browser. There's more work to do on this front but the initial tooling is more than adequate for launch.

---

## Launch plan

My long-term goal is to transfer the traffic and revenue from the old Datingnode platform on to the new platform. Hopefully this will happen within 12 months but I'm prepared for it to take longer than my estimate (things usually do!). Once I've established the new platform I'll look at retiring the old platform. I will be popping a large bottle of fizz the day I turn off the old servers! It's going to be a busy year or two but massively exciting. So cheers everyone, I've waiting a long time to let my new dating apps in to wild and today they're available for you all to download! 🎉

Download One Scene on [Android](https://play.google.com/store/apps/details?id=com.onescene.app) or [iPhone](https://apps.apple.com/us/app/one-scene-dating-friends/id6443775589)
