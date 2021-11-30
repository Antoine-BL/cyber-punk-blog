---
title: The Pulse of Night City
layout: home
---

<div class="articles-inner">
{% for post in site.posts %}
    <div class="post-card" style="cursor: pointer;" onclick="window.location='/{{ post.url | relative_url }}';">
        <div class="article-title">
            <div class="article-title-small">{{ post.title-small }}</div>
            <div class="article-title-big">{{ post.title-big }}</div>
        </div>
        <div class="article-footer">
            <div>Article</div>
            <div>{{post.date | date: "%e %B %Y"}}</div>
            <div class="tag">#{{post.type}}</div>
        </div>
    </div>
{% endfor %}
<div>
