---
title: The Pulse of Night City
layout: home
---

<div class="articles-inner">
{% for post in site.posts %}
    <div class="post-card text-glitch text-glitch-mouseover" style="cursor: pointer;" onclick="window.location='{{ post.url | relative_url }}';">
        <div class="article-title">
            <div class="article-title-small glitch-target">{{ post.title-small }}</div>
            <div class="article-title-big glitch-target">{{ post.title-big }}</div>
        </div>
        <div class="article-footer">
            <div class="glitch-target">Article</div>
            <div class="glitch-target">{{post.date | date: "%e %B %Y"}}</div>
            <div class="tag glitch-target">#{{post.type}}</div>
        </div>
    </div>
{% endfor %}
<div>
