---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Bachelor’s degree in Mathematics, Universidad Nacional San Luis Gonzaga, 2008.
* Master’s degree in Mechanical Engineering, Federal University of Pernambuco, 2012.
* PhD degree in Mechanical Engineering, Federal University of Pernambuco, 2016.
  
Skills
======
* Computational fluid dynamics
* Modeling and numerical simulation of multiphase flows in porous media
* Transport of contaminants in aquifers
* Groundwater flow
* Simulation of fluid flows in saturated and non-saturated zones

Fields of interest
-------------------
* Linear and non-linear finite volume methods
* Conservative methods with low, high and high resolution
* Development of algorithms
* Post-processing and visualization of results
* Finite element method


Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams
