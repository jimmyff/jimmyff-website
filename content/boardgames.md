+++
title = "Boardgames & Tabletop gaming"
images = []
template = "page_with_tag.html"
in_search_index = true
[extra]
section_path = "blog/_index.md"
tag = "gamedev-analogue" 
+++

I love both playing and creating games. Designing them uses similar problem solving skills to that of my software engineering background. Creating the game artworks and designing the components provides a great outlet for my creativity.

I created my first game back in the early 2000's and since then I have designed many games spanning various themes and mechanisms. As well as games I have also created an open source tool for game component creation called [Deckorator](/tags/project-game-tools).

---

## Recently played games

Here are my most recently played games (feed powered by [BoardGameGeek](https://boardgamegeek.com/) / [my profile](https://boardgamegeek.com/user/jimmyff)). A long time ago I made a pretty cool game score & fun recording app but these days I use the excellent [BG Stats app](https://www.bgstatsapp.com/).

<style>
.BGGwrapper {
    padding:1em 0;
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    gap: 8px;
}
.BGGitem {
    height: 90px;
    width: 300px;
    display:flex;
    padding:4px;
    gap:16px;
    align-items:center;
    justify-content:start;

    overflow:hidden;
    font-size: 0.9em;
}
.BGGitem a:first-child {
    display:contents;
}
.BGGitem img {
    height:75px;
    width:75px;
    margin: 0 !important;
    float:none !important;
}
.BGGitem .BGGtitle {

    line-height:1.2em;
}

.BGGitem .BGGtitle a:last-child {
   font-size:0.8em;
   color:var(--subtle-text);  
    line-height:1.6em;
    display:block;
    margin-top:0.3em;
}
.BGGitem .BGGtitle a:last-child::before {
  content: '📅 ';

}
.BGGprovided {
    display:none;
}

@media ((min-width: 480px) and (max-width: 750px)) {
    .BGGwrapper {
        gap: 4px;
    }

    .BGGitem {
        width: 40vw;
    }
}
@media (max-width: 480px) {

    .BGGwrapper {
        gap: 0;
        flex-direction:column;
        flex-wrap:nowrap;
    }

    .BGGitem {
        width: 100%;
    }
}

</style>

<script language="javascript" src="https://boardgamegeek.com/jswidget.php?username=jimmyff&numitems=12&text=title&images=small-fixed&show=recentplays&imagesonly=1&imagepos=left&inline=1&showplaydate=1&domains%5B%5D=boardgame"></script>

---

## My game design

I've made a number of games now, each one has something I felt would be interesting to explore. I also love the creative aspect of designing games. I've not published any of my games yet as I've not felt strongly enough about them ...but that might change with my recent projects!
