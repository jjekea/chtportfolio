# HIS 5093: Cultural Heritage Tourism — Digital Course Portfolio

A static digital portfolio for the proposed graduate course *HIS 5093: Cultural
Heritage Tourism*, showcasing the syllabus, signature assignment, and teaching
statement.

## Structure

```
index.html                  Home page — course overview + links to all three documents
syllabus.html                Full course syllabus (objectives, AI policy, grading, weekly schedule)
signature-assignment.html    The signature assignment (component assignments, assessment plan, AI guidelines)
teaching-statement.html      Placeholder page — swap in the finished teaching statement when ready
css/styles.css                Shared design system (colors, type, layout, components)
js/main.js                    Mobile nav toggle + "expand/collapse all weeks" on the syllabus
assets/favicon.svg            Compass-rose site icon/logo
```

Each page repeats its own header/nav/footer markup (no build tooling), so
editing site-wide nav text means updating it in all four `.html` files. 

This site was designed and constructed using Claude Code.

## Design

Warm, heritage/travel-inspired palette (cream, brown, burnt orange, sage
green, gold) defined as CSS variables at the top of `css/styles.css`. Fonts
are loaded from Google Fonts: **Fraunces** for headings, **Karla** for body
text. Dashed "route divider" lines and a compass motif nod to travel/mapping
without leaning on stock imagery.

## Local preview

```
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.
