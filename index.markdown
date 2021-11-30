---
title: The Pulse of Night City
layout: home
---
<div class="articles-inner">
{% for post in site.posts %}
    <div class="post-card" style="cursor: pointer;" onclick="window.location='/cyber-punk-blog/{{ post.url }}';">
        <div class="article-title">
            <div class="article-title-small">{{ post.title-small }}</div>
            <div class="article-title-big">{{ post.title-big }}</div>
        </div>
        <div class="article-footer">
            <div>Article</div>
            <div>{{post.date}}</div>
        </div>
    </div>
{% endfor %}
<div>
