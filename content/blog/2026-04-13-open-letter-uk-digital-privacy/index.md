+++
title = "An open letter to the UK Government on digital privacy"
date = 2026-04-13
draft = true
[taxonomies]
tags = ["privacy", "politics"]
+++

> Privacy isn't about having something to hide. It's about having the right to choose what you share, with whom, and when.

<!-- more -->

Dear Prime Minister,

I'm a software engineer. I joined the Labour party over twenty years ago, in my teens. I'm writing to tell you that you and your government are dismantling the digital privacy of every citizen in the United Kingdom - and that, as things stand, you and the Labour party no longer have my support.

The country has rejected national ID cards twice in a generation. Once under Tony Blair. Once under you, just months ago. The message could not be clearer. And yet here you are, building something far more invasive than the scheme we already rejected - twice. I don't know whether your government fully understands what these proposals mean for the privacy of every person in this country. This letter is my attempt to highlight these issues to you, before it's too late.

## This is already happening

This isn't a hypothetical future. It is happening now, in Britain, today - and it is escalating fast.

In July 2025, the Metropolitan Police installed the UK's first *permanent* live facial recognition cameras in Croydon. The Home Office bought ten new mobile facial recognition vehicles. And under your Crime and Policing Bill, police are about to gain access to the DVLA's database of more than 50 million driving licence photos for biometric scanning - a proposal even the previous Conservative government was forced to abandon under public pressure [^crime-policing-bill]. The House of Lords voted down an amendment to block it in March 2026 [^lords-dvla]. Big Brother Watch found that 89% of police facial recognition alerts in 2023 wrongly identified members of the public as people of interest [^bbw-89]. In *Bridges v South Wales Police* (2020), the Court of Appeal ruled their use of automated facial recognition unlawful [^cnbc-bridges]. None of this has slowed the deployment down.

As a software engineer, I see this every day. Software is never perfect and bugs do exist. Security vulnerabilities get overlooked. Supply-chain attacks are happening with increasing frequency. Servers get compromised. Building a mass surveillance apparatus on top of all of this - centralising the most sensitive data of every citizen in the country - is a disaster waiting to happen.

We have already seen what happens when we trust software we shouldn't. Between 1999 and 2015, over 900 British subpostmasters were wrongfully convicted of theft and fraud based on bugs in the Fujitsu Horizon system. At least 13 people took their own lives [^computerweekly-horizon]. The Post Office told subpostmasters they were "the only ones" experiencing problems. The assumption that the computer cannot be wrong meant every discrepancy was blamed on the person, not the software [^economicsobservatory-horizon]. The same logic - trust the algorithm, don't question the system - underpins every automated surveillance tool being deployed today. Horizon took twenty years to expose. AI systems are even more opaque.

And the data feeding all of this - every algorithm, every prediction, every automated decision - is already in the wild. Admiral, one of Britain's largest car insurers, tried to analyse Facebook posts to set premiums [^bbc-admiral]. The global data broker industry is worth around $294 billion [^databroker-market]; California's data broker registry alone found 33 brokers selling data to North Korea, China, Russia and Iran [^epic-brokers]. In November 2025, the *Databroker Files* investigation found mobile location data from hundreds of devices at the European Commission, the European Parliament and NATO HQ - all commercially available for purchase [^databroker-files]. Britain's MPs, civil servants and military personnel use the same phones, the same apps, the same brokers.

"Anonymous" data isn't anonymous. A Catholic priest in the United States was identified and outed after a religious group bought his location history from a Grindr-linked data broker [^nbc-grindr]. The same techniques work on anyone. They are being applied to everyone.

These are the rails your data already runs on. Now imagine what a government does with that infrastructure - and what criminals do when the data inevitably leaks.

## The trajectory

In February 2025, the UK government issued a secret Technical Capability Notice ordering Apple to remove Advanced Data Protection - end-to-end encryption - for every UK citizen [^privacyguides-adp]. Not suspects. Everyone.

This was the first time a Western democracy successfully forced a tech company to degrade encryption for its entire population. Apple pulled the feature rather than build a backdoor, and filed a legal challenge [^register-apple]. The government dropped the demand in August after US pressure, then tried again months later.

Something similar has just played out in the United States. When the Pentagon tried to strip out the safeguards Anthropic had built into Claude - guardrails preventing its use for mass surveillance of Americans - Anthropic refused, stating that "mass domestic surveillance of Americans constitutes a violation of fundamental rights." The Trump administration retaliated: the Defense Secretary declared Anthropic a national security supply chain risk (the first US company ever so designated), and Trump ordered every federal agency to stop using its tools. Anthropic sued. A federal judge blocked the move in March 2026, calling the Pentagon's actions "an attempt to cripple Anthropic" [^anthropic-pentagon]. Anthropic had every commercial reason to comply. They refused.

This wasn't an anomaly. This is the trajectory.

We are at a tipping point. The technologies now being deployed - bulk biometric surveillance, on-device scanning, AI inference over private communications, mass identity verification - have never existed at this scale in any society, ever. There is no precedent to fall back on, no historical pattern that ends well. Anthropic have shown that there is a choice. With the legislation your government is pursuing, you have crossed a line. I am asking you to step back, reconsider, and start listening to the cryptographers, security researchers and privacy experts your government has so far ignored.

The thing about giving up privacy is that you don't get it back. Not from the government you trust today, not from the next government, not from the criminals or foreign agencies who will inevitably end up with the same data. Privacy is a one-way tug of war: every bit we give up, we never get back.

## What your government is building

**The Investigatory Powers Act** is the foundation. ISPs are required to store a record of every website visited by every UK citizen for twelve months. Intelligence agencies can collect financial, communication, travel and health data in bulk - without suspecting anyone of criminal wrongdoing. This data is accessible to all police divisions, the NCA, HMRC, the Home Office, DWP, Ministry of Defence, FCA, Serious Fraud Office and local authorities [^liberty-ipa]. The human rights group Article 19 summed it up:

> One of the most draconian surveillance legislation of any democracy, offering a template for authoritarian regimes and seriously undermining the rights of its citizens to privacy and freedom of expression. [^article19-ipa]

The ECHR Grand Chamber found UK bulk surveillance breached human rights in May 2021 [^liberty-legal-challenge]. The Act also enabled the secret notice that forced Apple to remove encryption for UK users - no public consultation, no judicial oversight of the notice itself.

The UK is also a member of the Five Eyes intelligence alliance. Snowden described it as "a supra-national intelligence organisation that does not answer to the known laws of its own countries" [^pi-fiveeyes]. Surveillance infrastructure built by this government isn't just inherited by the next - it is shared, automatically, with four other countries' intelligence agencies under arrangements with no democratic oversight at all.

---

**The Online Safety Act** goes further. Section 122 grants Ofcom the power to mandate scanning of encrypted messages [^bbc-osa-encrypt]. The government acknowledged no viable technology exists yet, but kept the power in the Act for future use.

Client-side scanning is one of the most dangerous proposals in computing right now. Once your phone is scanning everything you type before it leaves the device, the privacy guarantee of end-to-end encryption is broken - the surveillance has just moved one step upstream, into the device itself. The cryptography community is unanimous on this: there is no safe way to build it [^bugs-pockets]. Apple proposed CSAM scanning in 2021 and abandoned it in 2022. Their own engineer admitted:

> Would inject the potential for a slippery slope of unintended consequences. Scanning for one type of content opens the door for bulk surveillance. [^9to5mac-csam]

If Apple - the company best positioned to implement this - concluded it was too dangerous, the government's claim that safe "accredited technology" can exist rings hollow.

The Home Office should be working with the best cryptographers in the world to design any of this. Instead, they appear to be sidelining the security and privacy community entirely, to push an agenda decided without them.

Seven encrypted messaging services - Signal, WhatsApp, Element, Session, Threema, Viber and Wire - signed a joint open letter [^whatsapp-open-letter]:

> An unprecedented threat to the privacy, safety and security of every UK citizen.

Both Signal and WhatsApp would leave the UK rather than comply. The European Court of Human Rights has already ruled, in *Podchasov v. Russia* (2024), that requiring platforms to weaken encryption violates Article 8 - the right to privacy [^echr-podchasov]. The EU's near-identical Chat Control proposal failed when Germany voted against and EU legal advisors concluded it breached EU law [^chatcontrol-failed]. The UK is now an outlier among democratic nations in retaining this power - a point the US Computer & Communications Industry Association made formally to the US Trade Representative, identifying Section 122 as a foreign trade barrier [^ccia-ustr].

Jonathan Hall KC, the government's own Independent Reviewer of State Threats Legislation, has warned that developers of apps like Signal could fall within the National Security Act's definition of "hostile activity", because their technology makes surveillance harder [^techradar-hostile]. The same government relies on identical encryption technology for MI6 operations.

More than half a million people have signed a parliamentary petition to repeal the Act [^petition-repeal]. Your government has refused.

---

**The Children's Wellbeing & Schools Bill** is the most cynical of the lot. Child safety is a cause every reasonable person supports - and that is precisely why it has been chosen as the vehicle. Behind a Bill ostensibly about protecting children sits the most aggressive expansion of surveillance powers over *everyone* in this entire programme: it reshapes what every adult in the UK can do online, what software they're allowed to run, and who gets to know who they are [^org-restrict].

**Device-level scanning.** A mandate for "tamper-proof system software" on every smartphone and tablet sold in the UK, scanning for child abuse material [^surveillance-tamper]. Over 500 cryptographers and security researchers across 34 countries condemned the EU's equivalent proposal as "technically infeasible" and a "danger to democracy"; the scientists warned that scanning at scale would trigger a "tsunami of false reports", placing innocent citizens under automatic suspicion [^breyer-scientists]. The mandate would also, in effect, ban open-source mobile operating systems like GrapheneOS and LineageOS - the most secure, privacy-respecting phone options available to British citizens.

**A VPN ban for under-18s** (Lords voted 207-159) [^ispreview-vpn]. Countries that ban or restrict VPNs: North Korea, Belarus, Turkmenistan, Iraq, China, Russia, Iran, Myanmar, Turkey. The UK would be the first Western democracy on that list [^freedomhouse-vpn]. The amendment doesn't even clearly define what a "virtual private network" is [^decoded-vpn]. Many modern browsers and services already function as VPNs — Apple's iCloud Private Relay, Cloudflare WARP, and encrypted DNS are built into the devices and browsers millions of people use every day. A ban broad enough to capture these would break basic web functionality for everyone. VPNs are a cornerstone privacy tool, and framing them as merely a way to dodge age checks is shallow and misleading [^eff-vpnban]. The basic principle of good security is that you hand over only the information a service actually needs — and opening a random app shouldn't reveal your ISP, your mobile network, or a rough map of where you live. A VPN is how you draw that line.

**A social media ban for under-16s** (Lords voted 261-150) [^commons-social]. A study of 355,000+ young people found technology's association with wellbeing was negative but small, "too small to warrant policy change", explaining at most 0.4% of the variation in wellbeing [^orben-przybylski]. Australia's version took effect in December 2025; within three months, 70% of under-16s who had accounts on Instagram, Snapchat or TikTok had maintained access [^guardian-aus].

**Age verification.** Here is the bit I find genuinely frightening, and the bit nobody seems willing to talk about: age-restricting the internet means *every adult* has to identify themselves to use it. Universal identity disclosure, just to read the news or talk to your friends. Imagine scanning your government ID everywhere you go - every shop, every conversation, every journey. That's what this is, but digital.

Centralised identity stores are massive breach targets, and the track record is already dismal. AU10TIX, an age verification vendor used by TikTok, Uber and X, left admin credentials exposed for over a year, leaking millions of facial images, driver's licences and ID numbers [^eff-au10tix]. Discord lost 70,000+ government-issued IDs in a single hack, with the attackers attempting to extort a financial ransom [^nbc-discord]. Over 400 security and privacy scientists have signed an open letter warning against deployment [^adguard-letter].

There are well-understood technical solutions to all of this. Zero-knowledge proofs [^zkp] let a service verify that a user is over 18 without ever learning who the user is, where they live, or anything else about them. Nothing to leak, nothing to steal, nothing to subpoena. The mathematics has been settled for decades, and Apple already ships this kind of thing in production. The Home Office hasn't considered it, because the Home Office isn't talking to anyone who builds this stuff for a living.

---

**GDPR is being gutted.** Our strongest privacy framework is being dismantled from within. In Europe, the "Digital Omnibus" package has been called "the biggest rollback of digital fundamental rights in EU history" by 127 civil society organisations [^noyb-open-letter]. The effect is to shift power further toward the tech companies that profit from harvesting our data, and to reduce what we can hold them accountable for. The UK is going further still. The Data (Use and Access) Act 2025 relaxed cookie consent, loosened automated decision-making rules, and - remarkably - removed your *right* to complain to the data protection regulator. You "may" complain now [^uk-dua-act]. And tucked into the Children's Bill, Amendment 38B grants the Secretary of State power to modify *any provision* in UK data protection law by ministerial order [^org-38b].

## The approach is wrong

None of this comes from people who understand the technology. The government is not listening to security professionals, cryptographers, or the global expert consensus.

500+ scientists say device scanning is technically infeasible [^breyer-scientists]. The cryptography community is unanimous that no safe encryption backdoor exists [^bugs-pockets]. 400+ researchers say age verification must not be deployed at scale [^adguard-letter]. Apple tried client-side scanning and abandoned it as too dangerous. The EU tried Chat Control and it failed. The European Court of Human Rights has already ruled that breaking encryption violates the right to privacy. There are working alternatives - zero-knowledge age proofs, on-device safety classifiers that don't phone home, end-to-end encrypted abuse reporting tools - that the government isn't even discussing.

Your response? Press on regardless.

I genuinely don't know whether your government understands what it's building. Either the Home Office doesn't grasp that banning VPNs, mandating device scanning and requiring universal identity checks demolishes privacy for everyone - in which case, nobody competent was consulted. Or it does understand, and this is deliberate. *I'm not sure which is worse.* Either way, the infrastructure is the same, and the next government inherits all of it.

Regulate what platforms *do* - addictive design, algorithmic amplification, deceptive practices, data harvesting - and hold them accountable as custodians of the sensitive data they collect. Rather than surveilling everyone to control who can *access* the internet, make companies responsible for how they handle the data of those who already use it. Hold platforms accountable for the systems they build, not citizens for the tools they use to defend themselves.

The UK should be going in the opposite direction. Every conversation, every file, every connection - encrypted by default, all of the time. Not because we have something to hide, but because bugs in software are inevitable, servers get compromised, and the next person to abuse this infrastructure may not be the one you trust today. Banning encryption doesn't make us safer. It strips the armour off every citizen and hands the keys to whoever happens to have them next - government, criminal, or both.

## Why this matters

As Edward Snowden put it: saying you don't need privacy because you've got nothing to hide is no different from saying you don't need free speech because you've got nothing to say [^mic-snowden].

Privacy isn't only for those of us who feel we have something to hide today. It's for future generations, who will inherit whatever world we leave behind. A society where every action is logged, every search recorded and every conversation scannable on demand is not a free society - and it is not one we should hand on.

It's also for the people who depend on privacy right now, just to stay safe: domestic abuse survivors, LGBTQ+ kids in hostile homes, journalists, whistleblowers, activists, dissidents, the marginalised. Privacy is the floor under all of them.

I notice the chilling effect in myself already. I've moved my phone to GrapheneOS and my email and storage to privacy-focused providers. I think more carefully now about what I search for, what I say, and how exposed my data is at any given moment — which device, which network, which browser. I shouldn't need to. None of us should - and yet the same Children's Bill demanding "tamper-proof" device scanning would, in effect, ban the very operating system I chose in order to protect myself.

## The Labour betrayal

Labour claims to protect the vulnerable, champion equality and defend workers' rights. Surveillance infrastructure harms exactly those groups first.

Labour knows this. It happened to them.

The Shrewsbury Pickets (1972-73): 24 building workers arrested for picketing during a national strike, six of them jailed. Police destroyed the original witness statements. The convictions weren't quashed until 2021, nearly fifty years later [^labourhub-shrewsbury]. The Special Demonstration Squad, established in 1968, infiltrated trade unions under false identities on MI5's instructions [^tribune-spycops]. The Consulting Association, a police-linked employer blacklist, held files on 3,200 construction workers - blacklisted for union membership or for raising health and safety concerns [^canary-spycops].

If mass surveillance had existed in the 1970s at today's scale, the labour movement itself might never have succeeded. Every organiser identified. Every meeting monitored. Every strike broken before it began.

Even if you trust this government, the next one inherits the tools.

Privacy is a one-way tug of war. Every bit we give up, we never get back.

The UK is becoming the most invasive surveillance state in the democratic world — and it is being built by the one party that should know exactly where this leads.

Prime Minister; until this changes, I'm afraid you and the Labour party no longer have my support.

---

[^crime-policing-bill]: [Computer Weekly: Driving licence data could be used for police facial recognition](https://www.computerweekly.com/news/366620582/Driving-licence-data-could-be-used-for-police-facial-recognition)
[^lords-dvla]: [Biometric Update: UK Lords reject bid to block police facial recognition searches of DVLA database](https://www.biometricupdate.com/202603/uk-lords-reject-bid-to-block-police-facial-recognition-searches-of-dvla-database)
[^bbw-89]: [Hansard: Facial Recognition (Police Use) debate, 13 Nov 2024 — citing Big Brother Watch](https://hansard.parliament.uk/commons/2024-11-13/debates/E334DF95-2313-4AAC-AA25-D34F8F7C8DD5/FacialRecognitionPoliceUse)
[^cnbc-bridges]: [CNBC: UK court finds facial recognition used by police was unlawful](https://www.cnbc.com/2020/08/11/swp-facial-recognition-unlawful.html)
[^computerweekly-horizon]: [Computer Weekly: Post Office Horizon scandal explained](https://www.computerweekly.com/feature/Post-Office-Horizon-scandal-explained-everything-you-need-to-know)
[^economicsobservatory-horizon]: [Economics Observatory: Trust and technology - what went wrong with the Post Office?](https://www.economicsobservatory.com/trust-and-technology-what-went-wrong-with-the-post-office)
[^bbc-admiral]: [BBC: Facebook blocks Admiral's car insurance discount plan](https://www.bbc.co.uk/news/business-37847647)
[^databroker-market]: [University of Chicago Law Review: citing Mordor Intelligence estimate of $294.27B for 2025](https://chicagounbound.uchicago.edu/cgi/viewcontent.cgi?article=6434&context=uclrev)
[^epic-brokers]: [EPIC: Data Brokers Selling US Data to Foreign Actors](https://epic.org/the-33-data-brokers-selling-us-data-to-foreign-actors-according-to-california/)
[^databroker-files]: [Netzpolitik.org: Databroker Files - Targeting the EU](https://netzpolitik.org/2025/databroker-files-targeting-the-eu/)
[^nbc-grindr]: [NBC News: Priest outed via Grindr app highlights rampant data tracking](https://www.nbcnews.com/tech/security/priest-outed-grindr-app-highlights-rampant-data-tracking-rcna1493)

[^privacyguides-adp]: [Privacy Guides: The UK Government Forced Apple to Remove Advanced Data Protection](https://www.privacyguides.org/articles/2025/02/28/uk-forced-apple-to-remove-adp/)
[^register-apple]: [The Register: Apple takes UK to court over 'backdoor' order](https://www.theregister.com/2025/03/05/apple_reportedly_ipt_complaint/)
[^anthropic-pentagon]: [The Guardian: Anthropic and Pentagon face off in court over ban on company's AI model](https://www.theguardian.com/us-news/2026/mar/24/anthropic-pentagon-lawsuit)

[^liberty-ipa]: [Liberty: Snoopers' Charter](https://www.libertyhumanrights.org.uk/fundamental/mass-surveillance-snoopers-charter/)
[^article19-ipa]: [The Guardian: Press freedom at all-time low (citing Article 19, 2017)](https://www.theguardian.com/media/2017/nov/30/press-freedom-at-all-time-low-journalist-safety-article-19-v-dem-study)
[^liberty-legal-challenge]: [Amnesty International: Europe's top court rules UK mass surveillance regime violated human rights, 25 May 2021](https://www.amnesty.org/en/latest/press-release/2021/05/uk-surveillance-gchq-ecthr-ruling/)
[^pi-fiveeyes]: [NDR: Snowden Interview Transcript, 26 Jan 2014](https://web.archive.org/web/20140128224438/http://www.ndr.de/ratgeber/netzwelt/snowden277_page-2.html)

[^bbc-osa-encrypt]: [BBC: Signal would 'walk' from UK if Online Safety Bill undermined encryption](https://www.bbc.co.uk/news/technology-64584001)
[^ccia-ustr]: [CCIA: Comments Regarding Foreign Trade Barriers to U.S. Exports for 2026 Reporting (pp. 247-248)](https://downloads.regulations.gov/USTR-2025-0016-0053/attachment_1.pdf)
[^bugs-pockets]: [Abelson, Anderson, Schneier et al.: "Bugs in our Pockets" (Journal of Cybersecurity, 2024)](https://academic.oup.com/cybersecurity/article/10/1/tyad020/7457370)
[^9to5mac-csam]: [9to5Mac: Apple finally admits the CSAM scanning flaw we all pointed out](https://9to5mac.com/2023/09/01/csam-scanning-flaw/)
[^whatsapp-open-letter]: [WhatsApp: An open letter (joint from 7 encrypted messaging services)](https://blog.whatsapp.com/an-open-letter)
[^echr-podchasov]: [Oxford Human Rights Hub: The ECtHR in Podchasov v. Russia - Preserving Encryption](https://ohrh.law.ox.ac.uk/the-ecthr-in-podchasov-v-russia-preserving-encryption-and-denying-backdoors/)
[^chatcontrol-failed]: [Chat Control proposal fails again after massive public opposition](https://andreafortuna.org/2025/11/01/chat-control-proposal-fails-again-after-massive-public-opposition/)
[^techradar-hostile]: [TechRadar: Creating apps like Signal could be 'hostile activity,' claims UK watchdog](https://www.techradar.com/vpn/vpn-privacy-security/creating-apps-like-signal-or-whatsapp-could-be-hostile-activity-claims-uk-watchdog)
[^petition-repeal]: [UK Parliament Petition 722903: Repeal the Online Safety Act (550,000+ signatures)](https://petition.parliament.uk/petitions/722903)

[^org-restrict]: [Open Rights Group: MPs give ministers powers to restrict entire Internet](https://www.openrightsgroup.org/press-releases/mps-give-ministers-powers-to-restrict-entire-internet/)
[^surveillance-tamper]: [State of Surveillance: UK Lords Vote to Ban VPNs for Minors, Mandate Device Surveillance Software](https://stateofsurveillance.org/articles/government/uk-lords-vpn-ban-surveillance-software-2026/)
[^breyer-scientists]: [Patrick Breyer MEP: 500+ Top Scientists Urge Rejection of Chat Control](https://www.patrick-breyer.de/en/danger-to-democracy-500-top-scientists-urge-eu-governments-to-reject-technically-infeasible-chat-control/)
[^ispreview-vpn]: [ISPreview: House of Lords Votes to Ban UK Children from Using Internet VPNs](https://www.ispreview.co.uk/index.php/2026/01/house-of-lords-votes-to-ban-uk-children-from-using-internet-vpns.html)
[^freedomhouse-vpn]: [Freedom House: Authoritarians Expand Restrictions on Virtual Private Networks](https://freedomhouse.org/article/another-door-closes-authoritarians-expand-restrictions-virtual-private-networks)
[^decoded-vpn]: [decoded.legal: VPN age verification - legal and technical analysis](https://decoded.legal/blog/2025/12/a-proposed-legislative-amendment-to-attempt-to-compel-vpn-services-providers-to-prevent-anyone-under-18-in-the-uk-from-using-their-vpns/)
[^eff-vpnban]: [EFF: Lawmakers Want to Ban VPNs - And They Have No Idea What They're Doing](https://www.eff.org/deeplinks/2025/11/lawmakers-want-ban-vpns-and-they-have-no-idea-what-theyre-doing)
[^commons-social]: [House of Commons Library: Proposals to ban social media for children](https://commonslibrary.parliament.uk/research-briefings/cbp-10468/)
[^orben-przybylski]: [Orben & Przybylski: The association between adolescent well-being and digital technology use (Nature Human Behaviour, 2019)](https://www.nature.com/articles/s41562-018-0506-1)
[^guardian-aus]: [The Guardian: Two-thirds of under-16s kept access despite Australia's social media ban, 31 Mar 2026](https://www.theguardian.com/australia-news/2026/mar/31/meta-tiktok-snapchat-google-under-investigation-australia-social-media-ban)
[^eff-au10tix]: [EFF: Hack of Age Verification Company Shows Privacy Danger of Social Media Laws](https://www.eff.org/deeplinks/2024/06/hack-age-verification-company-shows-privacy-danger-social-media-laws)
[^nbc-discord]: [NBC News: 70,000 government ID photos exposed in Discord user hack](https://www.nbcnews.com/tech/tech-news/70000-government-id-photos-exposed-discord-user-hack-rcna236714)
[^adguard-letter]: [AdGuard: 400+ privacy researchers warn against mandatory age verification](https://adguard-vpn.com/en/blog/age-verification-privacy-experts-open-letter.html)
[^zkp]: [Wikipedia: Zero-knowledge proof](https://en.wikipedia.org/wiki/Zero-knowledge_proof)
[^org-38b]: [ORG: Analysis of Amendment 38B - Children's Wellbeing and Schools Bill](https://www.openrightsgroup.org/publications/childrens-wellbeing-and-schools-bill-org-analysis-of-amendment-38-b/)

[^noyb-open-letter]: [noyb: 127 organisations sign open letter on Digital Omnibus](https://noyb.eu/en/open-letter-digital-omnibus-brings-deregulation-not-simplification)
[^uk-dua-act]: [Data Protection Report: UK Data (Use and Access) Act 2025](https://www.dataprotectionreport.com/2025/07/uk-data-protection-reform-what-you-need-to-know-and-do/)

[^mic-snowden]: [Mic: In One Quote, Snowden Destroyed the Biggest Myth About Privacy](https://www.mic.com/articles/119602/in-one-quote-edward-snowden-summed-up-why-our-privacy-is-worth-fighting-for)

[^labourhub-shrewsbury]: [Labour Hub: The 1972 Building Workers' Strike](https://labourhub.org.uk/2022/10/20/the-1972-building-workers-strike/)
[^tribune-spycops]: [Tribune: Police Infiltration of Unions](https://tribunemag.co.uk/2023/02/spycops-scandal-inquiry-undercover-policing-trade-unions-infiltration-blacklisting)
[^canary-spycops]: [Hansard: Blacklisting debate, 23 Jan 2013](https://hansard.parliament.uk/commons/2013-01-23/debates/13012356000001/Blacklisting)
