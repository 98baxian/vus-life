# VUS.LIFE: Your Super-Fast Assistant for Variant Classification! 🧬✨

Ever feel like you're drowning in a sea of VUS (Variants of Uncertain Significance)? Wish you had a magic wand to sort them out? Well, we've got the next best thing!

**VUS.LIFE** is here to take the heavy lifting out of variant analysis. Think of it as your personal genomics wizard. Just give it the standard variant annotations, and with a single click, it zips through mountains of data to predict whether a variant is pathogenic or benign. No more manual sifting, no more headaches!

We've put VUS.LIFE to the test on well-studied genes like _BRCA1_, _BRCA2_, and _FBN1_, and it's already acing the exam with **over 96% accuracy**. It's fast, reliable, and ready to help you make sense of your data in record time.

Ready to see the magic in action?

👉 **[Check out the detailed performance results here!](Results/README.md)**

### 🔬 In Development: VUS Reanalysis Pipeline

We're also building a pipeline that reopens historical genetic reports and re-scores their reported VUS against today's evidence: the ACMG/AMP criteria, applied to public databases and literature. Each result is a candidate for a clinical geneticist to review, not a diagnosis. It's under active development.

For a first look, check out the slides from the MCW Postdoc Research Symposium 2026: 👉 **[vuslife-pre-symposium-2026.vercel.app](https://vuslife-pre-symposium-2026.vercel.app)**

---

### 🤖 AI Interpretation (API)

The **AI interpretation** feature provides a **skeptical second-opinion** on VUS_LIFE’s embedding-based predictions. It compares the target variant (unknown significance) against its neighbor variants (known pathogenicity) and performs a **discordance check**: it evaluates whether the target truly shares the same pathogenic mechanism as the neighbors by checking functional impact and amino acid changes, concordance of computational scores (e.g. AlphaMissense, EVE, SpliceAI), and physicochemical properties of the substitutions. Embedding models can cluster variants by gene, exon, or location rather than by real biological mechanism, so this step helps flag cases where the embedding prediction may be misleading and supports more reliable variant interpretation.

---

🚀 Want to Try It Yourself?
Excited to take VUS.LIFE for a spin? A user-friendly desktop app is coming soon! You can try a beta version via: 👉 **[vus-life-beta](http://vus.life/)**.

📖 **[Read the Web App User Guide](WEB_APP_GUIDE.md)** for detailed instructions on how to use the beta version.

To be the first to know when the desktop app drops, click the "Watch" button at the top of this page. You'll get a notification the moment it's released!

---

### 📜 Citation & Published Paper

For details on the methodology and experimental validation, please read and cite our published article in *Scientific Reports*:

> **Semantic embedding of variant effect annotations enables rapid and accurate pathogenicity prediction with VUS. Life**  
> Jiawei Wu, Marissa Stutzman, Michael Muriello, Joy Lincoln, Donald G. Basel, and Xiaowu Gai  
> *Scientific Reports* (2026).  
> **Article URL:** [https://www.nature.com/articles/s41598-026-54844-y](https://www.nature.com/articles/s41598-026-54844-y)

```bibtex
@article{wu2026semantic,
  title={Semantic embedding of variant effect annotations enables rapid and accurate pathogenicity prediction with VUS. Life},
  author={Wu, Jiawei and Stutzman, Marissa and Muriello, Michael and Lincoln, Joy and Basel, Donald G and Gai, Xiaowu},
  journal={Scientific Reports},
  year={2026},
  publisher={Nature Publishing Group UK London}
}
```

Earlier preprint: [Research Square](https://www.researchsquare.com/article/rs-8605164/v1).

### 📜 Patent

U.S. Provisional Patent Application No. 63/821,249, filed June 10, 2025.

### 🙏 Acknowledgments

We gratefully acknowledge the following open-source projects, tools, and repositories for their inspiration and contributions to AI-driven genomics and agent ecosystems:

- [alphagenome-mcp](https://github.com/taehojo/alphagenome-mcp) — Model Context Protocol (MCP) server for AlphaGenome genomic variant interpretation.
- [science-skills](https://github.com/google-deepmind/science-skills?ref=explainx) — Google DeepMind repository of specialized skills for scientific research.
- [ClawBio](https://github.com/ClawBio/ClawBio) — Bioinformatics-native AI agent skill library.
- [OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) — Curated open-source biomedical and clinical AI agent skill library.
- [scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) — Curated scientific agent skills and database integrations for AI research assistants.

