import './About.scss';

function About() {
	return (
    <section id="about-content" className="scroll-item p-5">
      <h2 className="section-heading">
        <span className="hover-underline-animation">About me</span>
      </h2>

      <p className="mt-5 mb-4">
        I'm a software engineer with 4+ years of backend and full-stack experience across fintech, SaaS, and e-commerce. I build Ruby on Rails applications and Python-based AI agents, with a focus on production troubleshooting, performance optimization, and reliable developer tools.
      </p>

      <p className="mb-2">
        My recent work includes building Slack-integrated troubleshooting agents at PayPal, designing RAG pipelines with LangGraph and MCP, and reducing LLM token usage by about 50% through conversation-scoped state and targeted data retrieval.
      </p>

      <ul className="mb-4 px-3">
        <li>
          <span className="paragraph-highlights hover-underline-animation d-inline">
            AI-powered troubleshooting agents and observability tools (PayPal)
          </span>
        </li>
        <li>
          <a
            className="paragraph-highlights hover-underline-animation d-inline"
            href="https://github.com/restarone/violet_rails"
            target="_blank"
            rel="noreferrer"
          >
            Violet Rails [Open Source] (Web & Automation Platform)
          </a>
        </li>
        <li>
          <a
            className="paragraph-highlights hover-underline-animation d-inline"
            href="https://www.copper.com/"
            target="_blank"
            rel="noreferrer"
          >
            Customer Relationship Management (Copper CRM)
          </a>
        </li>
        <li>
          <a
            className="paragraph-highlights hover-underline-animation d-inline"
            href="https://trip101.com/"
            target="_blank"
            rel="noreferrer"
          >
            Travel & Tourism Centric Blogging Platform (Trip101)
          </a>
        </li>
        <li>
          <span className="paragraph-highlights hover-underline-animation d-inline">
            E-commerce
          </span>
        </li>
      </ul>

      <p>
        I hold an M.S. in Computer Science from
        {" "}<a
          className="paragraph-highlights hover-underline-animation d-inline"
          href="https://www.lsu.edu/"
          target="_blank"
          rel="noreferrer"
        >
          Louisiana State University
        </a>. I previously worked as a
		{" "}<span className='fw-semibold text-dark'>Research Assistant</span> at
        {" "}<a
          className="paragraph-highlights hover-underline-animation d-inline"
          href="https://www.brbytes.org/"
          target="_blank"
          rel="noreferrer"
        >
          BrBytes Lab
        </a>
        , improving accessibility and teacher-facing tools.
      </p>
    </section>
  );
}

export default About;
