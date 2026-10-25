/* =====================================================================
   CONTEÚDO DO SITE
   Este é o ÚNICO arquivo que você precisa editar.
   O visual fica em index.html e não precisa ser tocado.

   Como editar
   - APAGAR um item: apague o bloco inteiro entre { e }, com a vírgula
     que vem depois dele.
   - ADICIONAR um item: copie um bloco, cole logo abaixo e troque os textos.
   - Textos ficam sempre entre aspas "assim".
   - Equações usam LaTeX entre aspas, com \\ (duas barras) no lugar de
     cada barra invertida, por exemplo "\\nabla \\cdot \\vec{v}".
   - Lista vazia, como news: [], faz a seção sumir do site e do menu.
   - Itens com "[" e "]" são campos para você completar.
   - Imagens novas vão na pasta images/.
   ===================================================================== */

const SITE = {

  // ---------- Identidade ----------
  group: "Computational Porous Media Group",
  shortName: "Porous Media Group",
  institution: "Federal University of Pernambuco · Centro Acadêmico do Agreste",
  city: "Caruaru, Pernambuco, Brazil",
  email: "fernando.raul@ufpe.br",

  // Missão em uma frase, como nos sites dos grandes grupos.
  mission: "We build robust numerical methods to simulate how fluids and contaminants move through the subsurface.",
  tagline:
    "Finite volume schemes for heterogeneous and anisotropic porous media, from convergence proofs to simulators used on real aquifers and reservoirs.",

  // ---------- Sobre ----------
  about: [
    "The group develops computational algorithms and advanced numerical methods for flow and transport in porous media. Our tools simulate saturated and unsaturated aquifers, groundwater contamination, oil reservoirs, heat transfer and waste disposal.",
    "We care equally about the mathematics and the computation. A new scheme is analysed for stability and convergence, implemented in our open simulator, and tested on benchmark and field problems.",
  ],
  highlights: [
    { value: "MPFA", label: "multipoint flux approximations" },
    { value: "NL-TPFA", label: "nonlinear monotone schemes" },
    { value: "2D · 3D", label: "unstructured and polygonal meshes" },
    { value: "High order", label: "MUSCL and flux reconstruction" },
  ],

  // ---------- Aplicações (segundo os módulos do FlowSim) ----------
  // module: a classe do FlowSim; phasekey: o valor no Start.dat.
  // Itens com image aparecem grandes, com a figura ao lado.
  // Itens sem image aparecem como cartões compactos abaixo.
  research: [
    {
      title: "Contaminant transport",
      module: "SimContaminante",
      phasekey: 3,
      text: "How contaminants spread through water and soil. Simulation predicts plume dispersion, tests remediation strategies and supports environmental regulation. Pressure is solved with a multipoint or nonlinear scheme, and the concentration with high-resolution transport.",
      equation:
        "\\phi \\frac{\\partial c}{\\partial t} + \\nabla\\cdot(c\\,\\vec{v}) - \\nabla\\cdot(\\mathbf{D}\\nabla c) = F, \\qquad \\vec{v} = -K\\nabla p",
      tags: ["Advection–dispersion", "MUSCL + MLP / Van Albada", "Heterogeneous permeability fields"],
      image: "images/contaminant.jpg",
      caption: "One-dimensional contaminant transport. NL-TPFA coupled to MUSCL-type schemes with different limiters.",
      reference: "Contreras et al. (2023)",
    },
    {
      title: "Groundwater flow",
      module: "SimGroundwater",
      phasekey: 4,
      text: "Hydraulic head in confined and unconfined aquifers, steady or transient, with pumping and injection wells. Used for water resource management and for the first numerical models of aquifers in the Pernambuco Agreste.",
      equation:
        "S_s \\frac{\\partial h}{\\partial t} = -\\nabla\\cdot\\vec{v} + f, \\qquad \\vec{v} = -K\\nabla h",
      tags: ["Steady and transient", "Pumping and injection wells", "Compared against MODFLOW 6"],
      image: "images/groundwater.jpg",
      caption: "Hydraulic head on a non-structured triangular mesh. MPFA-H against the analytical solution.",
      reference: "Contreras (2024)",
    },
    {
      title: "Two-phase oil–water flow",
      module: "SimBifasica",
      phasekey: 2,
      text: "Immiscible oil–water displacement in heterogeneous and anisotropic reservoirs, including gravity. Pressure is implicit and saturation is advanced with high-order MUSCL schemes and Riemann solvers.",
      equation:
        "\\begin{gathered}\\phi\\frac{\\partial S_w}{\\partial t} + \\nabla\\cdot\\big(f_w(S_w)\\,\\vec{v} + \\vec{G}(S_w)\\big) = q_w \\\\ \\nabla\\cdot\\vec{v} = q, \\qquad \\vec{v} = -\\lambda_t K\\nabla p\\end{gathered}",
      tags: ["IMPES and implicit transport", "Gravity segregation", "SPE 10 benchmark", "Roe and Lax–Friedrichs fluxes"],
      image: "images/reservoir.jpg",
      caption: "Water saturation in the SPE 10 permeability field with FOU, HOMFV and M-HOMFV coupled to NL-TPFA.",
      reference: "Contreras (2021)",
    },
    {
      title: "Unsaturated flow",
      module: "SimRichards",
      phasekey: 6,
      text: "Infiltration and drainage in the vadose zone, a degenerate and strongly nonlinear problem solved with Picard iterations at each time step.",
      equation:
        "\\frac{\\partial \\theta(h)}{\\partial t} = \\nabla\\cdot\\big(K(h)\\,\\nabla(h+z)\\big)",
      tags: ["Van Genuchten", "Brooks–Corey", "Gardner", "Picard iterations"],
    },
    {
      title: "Coupled head and contaminant",
      module: "SimContamGroundwater",
      phasekey: 5,
      text: "Hydraulic head and solute concentration solved together in aquifers, with the IMHEC scheme, for contamination scenarios driven by wells and recharge.",
      equation:
        "S_s \\frac{\\partial h}{\\partial t} = -\\nabla\\cdot\\vec{v} + f, \\qquad \\phi\\frac{\\partial c}{\\partial t} + \\nabla\\cdot(c\\,\\vec{v} - \\mathbf{D}\\nabla c) = F",
      tags: ["IMHEC", "Monte Carlo reliability analysis"],
    },
    {
      title: "Single-phase diffusion",
      module: "SimMonofasica",
      phasekey: 1,
      text: "Steady pressure in strongly heterogeneous and anisotropic media. The testbed where every new discretisation is verified for accuracy, monotonicity and convergence.",
      equation:
        "-\\nabla\\cdot(K\\nabla p) = q",
      tags: ["Full permeability tensors", "Discrete maximum principle", "Manufactured solutions"],
    },
    {
      title: "Pure transport",
      module: "SimHiperbolica",
      phasekey: 0,
      text: "Hyperbolic conservation laws on a given velocity field, used to design and compare limiters and high-order reconstructions on unstructured meshes.",
      equation:
        "\\frac{\\partial u}{\\partial t} + \\nabla\\cdot \\vec{F}(u) = 0",
      tags: ["MUSCL", "MLP, Van Albada, Superbee, Minmod"],
    },
  ],

  // ---------- Métodos (temas teóricos, sem figura) ----------
  methods: [
    { title: "Multipoint flux approximations", text: "MPFA-D, MPFA-H and MPFA-QL schemes for full permeability tensors on general unstructured meshes." },
    { title: "Nonlinear monotone schemes", text: "NL-TPFA and nonlinear repair techniques that keep discrete maximum principles in strongly anisotropic media." },
    { title: "High-order transport", text: "MUSCL-type reconstructions, slope limiters, flux reconstruction and Riemann solvers for advection-dominated flow." },
    { title: "Unsaturated flow", text: "Discretisations of the Richards equation for the degenerate, strongly nonlinear vadose zone." },
    { title: "Convergence analysis", text: "Proofs in the Gradient Discretisation Method framework, with coercivity, consistency and compactness." },
    { title: "Uncertainty and new hardware", text: "Monte Carlo reliability analysis of contaminant transport, and quantum linear solvers such as HHL and VQLS." },
  ],

  // ---------- Software ----------
  software: [
    {
      name: "FlowSim",
      language: "MATLAB · v2.0 vectorized",
      summary: "Object-oriented finite volume simulator for flow and transport in porous media on unstructured triangular and quadrilateral meshes. Fourteen years of development, now with vectorised assembly and about 500 automated tests.",
      capabilities: [
        "Seven physics modules: single-phase, two-phase, contaminant, groundwater, coupled head–contaminant, Richards and pure transport",
        "Pressure schemes TPFA, MPFA-D, MPFA-H, MPFA-QL and NLFV-PP",
        "High-order MUSCL transport with MLP, Van Albada, Superbee and Minmod limiters",
        "IMPES, IMPEC and IMHEC time stepping, Picard iterations for Richards",
        "Wells, gravity and benchmark data such as SPE 10",
        "One configuration file (Start.dat) selects mesh, case, method and physics",
      ],
      link: "https://github.com/Feraul/FlowSim",
      // Como citar o software. Deixe "" se ainda não houver.
      cite: "",
    },
  ],

  // ---------- Publicações ----------
  // type: "journal", "conference" ou "thesis"
  // featured: true coloca o artigo em destaque no topo.
  // link: o DOI, ex. "https://doi.org/10.1016/...". Deixe "" se não tiver.
  publications: [
    {
      year: "2024",
      title: "A nonlinear repair technique for the MPFA-D scheme in single-phase flow problems and heterogeneous and anisotropic media",
      authors: "",
      venue: "Journal of Computational Physics",
      type: "journal",
      featured: true,
      link: "",
    },
    {
      year: "2023",
      title: "A high-resolution multidimensional finite volume scheme coupled to a nonlinear two-point flux approximation method for the numerical simulation of groundwater contaminant transport using unstructured 2D meshes",
      authors: "",
      venue: "Advances in Water Resources",
      type: "journal",
      featured: true,
      link: "",
    },
    {
      // ATENÇÃO: no site antigo este item repetia o título do artigo de 2020.
      year: "2023",
      title: "[Confirmar título do artigo na Computers & Mathematics with Applications]",
      authors: "",
      venue: "Computers & Mathematics with Applications",
      type: "journal",
      featured: false,
      link: "",
    },
    {
      year: "2022",
      title: "A very high-order flux reconstruction approach coupled to the MPFA-QL finite volume method for the numerical simulation of oil-water flows in 2D petroleum reservoirs",
      authors: "",
      venue: "Applied Mathematical Modelling",
      type: "journal",
      featured: true,
      link: "",
    },
    {
      year: "2021",
      title: "A linearity-preserving finite volume scheme with a diamond stencil for the simulation of anisotropic and highly heterogeneous diffusion problems using tetrahedral meshes",
      authors: "",
      venue: "Computers & Structures",
      type: "journal",
      featured: false,
      link: "",
    },
    {
      year: "2020",
      title: "A non-linear finite volume method coupled with a modified higher order MUSCL-type method for the numerical simulation of two-phase flows in non-homogeneous and non-isotropic oil reservoirs",
      authors: "",
      venue: "International Journal for Numerical Methods in Fluids",
      type: "journal",
      featured: false,
      link: "",
    },
  ],

  // ---------- Notícias ----------
  // date no formato "AAAA-MM-DD". As mais recentes aparecem primeiro.
  news: [
    {
      date: "2026-10-24",
      title: "New group website",
      text: "Our website has a new home. All research, software and publications are now in one place.",
      link: "",
    },
    {
      date: "[2026-MM-DD]",
      title: "[Paper accepted, talk, defence or new member]",
      text: "[One or two sentences about the news.]",
      link: "",
    },
  ],

  // ---------- Equipe ----------
  // group: "lead", "researcher", "phd", "msc", "undergrad" ou "alumni"
  // photo é opcional ("images/nome.jpg"). Sem foto, aparecem as iniciais.
  people: [
    {
      name: "Fernando R. L. Contreras",
      role: "Group leader · Professor",
      topic: "Finite volume methods for porous media",
      group: "lead",
      photo: "",
      link: "https://www.researchgate.net/profile/Fernando-R-L-Contreras",
    },
    {
      name: "[Student name]",
      role: "PhD student",
      topic: "[Research topic]",
      group: "phd",
      photo: "",
      link: "",
    },
    {
      name: "[Student name]",
      role: "MSc student",
      topic: "[Research topic]",
      group: "msc",
      photo: "",
      link: "",
    },
  ],

  // ---------- Ensino ----------
  teaching: [
    {
      course: "Linear Algebra II",
      where: "UFPE · Centro Acadêmico do Agreste",
      text: "Course projects use computational notebooks set in porous media simulation, so students meet linear algebra through real problems.",
      link: "",
    },
  ],

  // ---------- Vagas e bolsas ----------
  // status: "open" ou "closed"
  opportunities: [
    {
      title: "[Undergraduate research scholarship]",
      text: "[Topic and the profile you are looking for.]",
      status: "open",
      link: "",
    },
  ],

  // ---------- Colaborações e financiamento ----------
  // Instituições parceiras e agências. Deixe a lista vazia para esconder.
  partners: [
    { name: "UFPE", url: "https://www.ufpe.br" },
    { name: "[Partner university]", url: "" },
    { name: "[Funding agency]", url: "" },
  ],

  // ---------- Perfis acadêmicos ----------
  links: [
    { name: "Google Scholar", url: "https://scholar.google.com.br/citations?hl=pt-BR&user=h4_TmtIAAAAJ" },
    { name: "ORCID",          url: "https://orcid.org/0000-0001-6195-0788" },
    { name: "ResearchGate",   url: "https://www.researchgate.net/profile/Fernando-R-L-Contreras" },
    { name: "GitHub",         url: "https://github.com/Feraul" },
    { name: "Lattes",         url: "" },
  ],
};
