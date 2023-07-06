+++
title = "The next generation of my dating apps"
date = 2022-12-03
draft =  true
[taxonomies]
tags = ["coding", "project-dating"]
medium = []
series = []
[extra]
images= []
+++

I'm super happy to be able to say that the next generation of my dating apps are now available in both Goolge Play store and Apple App Store. It's been a long road to getting here so I'll quickly get you up to speed.

## A brief history of Rocketware & dating apps

I created my company Rocketware back in 2011. My company's first product was a white label dating platform called 'Datingnode'. I built it around the LGBTQI+ community and it's been steadily ticking over for the last 13 years. Almost 6 million members have registered over the years and about half of those are currently active on the platform. Over the years Datingnode has provided dating services for some great brands, GT (UK's biggest gay lifestyle magazine), DIVA (UK's largest lesbian lifestyle magazine), Pink Paper (UK LGBTQI+ news portal & newspaper), GayXchange (dating TV channel) as well as my only brands including Only Women and Only Lads that are reasonably well known within the LGBTQI+ community.

Datingnode was initially launched as a white label dating solution for dating websites. It was 2011 and websites were still king. Only a year later everything changed when Tinder launched, the dating industry evolved over night. Over the years there have been various iterations of Datingnode:

- 2011: Datingnode white label platform launches
- 2012: Datingnode apps available in app stores utilising Titanium/Appcelerator to wrap Javascript web apps
- 2016: New API alongside native Android and Native Objective-C iOS apps released
- 2017: New website launches built upon the 2016 API.
- 2018-2020: Developed new Angular Dart PWA (Progressive web app), although this app never saw the light of day!
- 2020-2023: Developed new entirely new dating product which is what I've launched this week.

TODO: Add screenshots here

### The interesting period... 2018 - today

In 2018 I started work creating a new Datingnode client. There was a comprehensive and sophisticted API in place. The client app was written in Angular, and it interfaced with the API by an SDK that was generated from the Datingnode JSON API specification file. To help me on this project I took on a sernior and very experienced developer for 2 years. This would be my first commerical dart project and having someone onboard that has written battle-hardened dart code was reassuring.

We slogged away at it for 2 years and eventually the app came together, it really was a very accomplished web application however I took the very difficult decision to not launch it and throw away the huge investment that my company had made in to it over the last 24 months.

It was one morning sat in my co-working space and I was trying to wrap up those loose-ends and I had planned to launch in only a couple of weeks. I didn't feel good about that and I wasn't sure why. I then had the crazy thought "What if I bin all this and again" -and I didn't mean just the client app, I mean the whole shebang - reinvent Datingnode from the ground up. The moment this idea had entered my head it was over for the Angular client and I knew it. I felt terrible about the wasted money but I felt hugely relieved, I knew that launching another Datingnode client was subscribing me to another 5 years of Datingnode. Datingnode had grown long in the tooth, it's API was huge and complex. It was a monoalithic app (TODO: insert link), it was on physical servers and them breaking would often ruin weekends, or evenings out. Maybe it was a case of the grass is greener but I had already mentally taken the leap, I was invested in the idea of starting again.

## Reimaging my dating product 10 years later

Ignoring the fact I've just wasted 2 years of my work and paying a sernior developer to work alongside me, I was in a pretty privileged position. I had a relatively passive income and a bit of a runway to reimagine and redevelop my dating product. Here are the ideologies I came up with:

- **Developed for the cloud**: I wanted my dev-ops to be mostly someone elses problem. Not only would I utilise cloud technology I would design for it. I would utilise managed services where I could to maximise redundancy and security.
- **Properly Gender inclusion**: For the vast majority of dating sercices available today, gender-identity inclusively is a lie, they let users choose their "identity" but essentially still man down to a binary male or female when it comes to the matching. To support gender-identities properly the service would need to be designed around this concept - not just adapted to it.
- **Mutual likes to chat**: This is one of Tinder's genius innovations. The principle that both parties must be interested in one-another before communication can happen solves many problems with traditional dating services. It also is a great way to stop the service being abused by spammers and bots. This would be baked in to my new dating experience.
- **A modern UI built with Flutter**: I knew straight away that Flutter would be the platform I'd use to build my dating clients. As a Dart developer this was the current hotness and it would allow me to have Android and iOS apps built from a single codebase. It also meant I could deploy Dart services in the cloud and they could all share the same code base & models. Dart is the endgame, and I was living the developer dream - A single technology stack front-end and back-end. In terms of user experience I will go for Tinder's other genius innovation - the gestural swipe system for sifting through potential matches.

### One does not simply launch a new dating app

TODO: insert Boromere meme here

I always thought a Dating platform makes a good analogy to an iceberg or ant-hill: the bit people see (the client app) makes up a mere 10% of the entire project. The other 90% is the customer service tools, the moderation systems, the anti-scam systems, the notification systems etc etc.

The single tech stack and shared code base has been a huge help here. I've written some cloud orchestration tools which allows semi-automated testing and deployment of cloud-endpoints. The new platform has around 50 cloud endpoints - handling everything from registration to AI photo moderation. A CMS and moderation tools have been developed once again in Flutter but this time targeting the web to allow remote workers to easily work on the project. Theres definitely more work to do here but the initial tooling is more than adequate for the launch.

## Where next?

My goals is to transfer the traffic and revenue from the old Datingnode platform on to the new One Scene platform. Hopefully this will happen within 12 months but I'm prepared for it to take longer than my estimate (things usually do!). Once I've established the new platform I'll look at retiring the old platform. I will be popping a large bottle of fizz the day I turn off the old dedicated servers! It's going to be a busy year or two but massively exciting. So cheers everyone, I've waiting a long time to let my new dating apps in to wild and today they're available for you all to download! 🎉

Google Play Store:

Apple App Store:
