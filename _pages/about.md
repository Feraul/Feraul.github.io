---
permalink: /
title: "Bio"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<p style="text-align: justify;">
The group focuses on the development of computational algorithms and advanced numerical methods for modeling and simulation of fluid dynamics in porous media in general. These computational tools can be used for the simulation and modeling of saturated and unsaturated aquifers, contaminant transport and groundwater, oil reservoir simulation, heat transference and waste depositional . In addition, these tools can be used for the simulation and modeling of oil reservoir. These simulations provide detailed information about the behavior of aquifers and reservoirs that help hydrologists and researchers make the best management decisions.
</p>


Contaminant transport simulation 
------
<p style="text-align: justify;">
The simulation of contaminant transport is an important area of study to understand how contaminants move through environmental systems such as water and soil. These simulations are used to predict the dispersion of contaminants, evaluate the effectiveness of remediation strategies and ensure compliance with environmental regulations.

In this case, the advection-dispersion equation is able to model the spatial and temporal evolution of chemical or biological contaminants in a fluid and can be represented by the concentration field, $c(x,y,t)$, as follows:
</p>
$$
\displaylines{
	\begin{equation}
		\phi \frac{\partial c}{\partial t}+ \nabla\cdot(c\vec{v})+\nabla\cdot(-\textbf{D}\nabla c)=F, \quad \vec{v}=-K\nabla p
	\end{equation}
 }
$$

In figure below, we see the contaminant transporte in one dimensional problem, considering that the porous media is isotropic and homogeneous. 

Example: Contreras et al., (2023)
![Editing a markdown file for a talk](/images/image2.png)


Groundwater simulation 
------

$$
\displaylines{
	\begin{equation}
	\mu_{e}\frac{\partial h}{\partial t} = -\nabla \cdot(\vec{v})-f,\quad \vec{v}=-K\nabla h
	\end{equation}
}
$$

In figure below, 
Example: Contreras, (2024)
![Editing a markdown file for a talk](/images/figurax1.png)

Oil resevoir simulation 
------
$$
\displaylines{
\begin{equation} 
\frac{\partial(\phi\rho_{i}S_{i})}{\partial t}=-\nabla\cdot(\rho_{i}\vec{v}_{i})+q_{i}\quad\text{and}\quad \sum_{i=\text{o},\text{w}}S_{i}=1
\end{equation}
}
$$
