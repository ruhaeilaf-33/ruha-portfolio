import "./Certifications.css";

const certifications = [
  {
    organization: "NPTEL",
    title: "Artificial Intelligence in Human Resource Management",
    description:
      "Explored AI applications in modern human resource management, workplace automation, and intelligent decision-making.",
    file: "/Certifications/aihrm.pdf",
  },
  {
    organization: "NPTEL",
    title: "Introduction to Industry 4.0 & IIoT",
    description:
      "Learned Industry 4.0 concepts, Industrial IoT, smart manufacturing, automation, and connected systems.",
    file: "/Certifications/iiot.pdf",
  },
  {
    organization: "AWS",
    title: "Getting Started with DevOps",
    description:
      "Learned DevOps fundamentals, CI/CD practices, cloud deployment workflows, and software delivery automation.",
    file: "/Certifications/aws.pdf",
  },
  {
    organization: "Google Cloud",
    title: "Google Cloud Study Jam",
    description:
      "Explored Google Cloud services, cloud infrastructure, virtualization, and modern cloud computing concepts.",
    file: "/Certifications/gcloud.pdf",
  },
  {
    organization: "Google Cloud",
    title: "Introduction to SQL for BigQuery & Cloud SQL",
    description:
      "Developed practical SQL skills using BigQuery and Cloud SQL for querying, managing, and analyzing cloud-hosted data.",
    file: "/Certifications/sql.pdf",
  },
];

function Certifications() {
  return (
    <section className="certifications" id="certifications">

      <div className="certifications-header">

        <p className="section-subtitle">
          CERTIFICATIONS
        </p>

        <h2 className="section-title">
          Continuous <span>Learning.</span>
        </h2>

        <p className="section-description">
          Industry-recognized certifications demonstrating
          continuous learning in Artificial Intelligence,
          Cloud Computing and Modern Software Development.
        </p>

      </div>

      <div className="certifications-list">

        {certifications.map((cert, index) => (

          <a
            key={index}
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-card"
          >

            <div>

              <h4>{cert.organization}</h4>

              <h3>{cert.title}</h3>

              <p>{cert.description}</p>

            </div>

            <span>
              View →
            </span>

          </a>

        ))}

      </div>

    </section>
  );
}

export default Certifications;