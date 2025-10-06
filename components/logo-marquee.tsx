"use client"

export default function LogoMarquee() {
  const logos = [
    { name: "GitHub", src: "https://raw.githubusercontent.com/github/explore/main/topics/github/github.png" },
    { name: "Notion", src: "https://res.cloudinary.com/dkbk3kjc7/image/upload/v1759554330/Notion-logo_nkktky.svg" },
    { name: "Google Drive", src: "https://www.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png" },
    {
      name: "Dropbox",
      src: "https://res.cloudinary.com/dkbk3kjc7/image/upload/v1759554386/Dropbox_logo_2017_nsl5rj.svg",
    },
    {
      name: "Confluence",
      src: "https://res.cloudinary.com/dkbk3kjc7/image/upload/v1759554338/Atlassian_Confluence_2017_logo_egxbek.svg",
    },
    {
      name: "Salesforce",
      src: "https://res.cloudinary.com/dkbk3kjc7/image/upload/v1759554847/Salesforce.com_logo_xlr8sx.svg",
    },
    { name: "HubSpot", src: "https://cdn.worldvectorlogo.com/logos/hubspot.svg" },
    { name: "Microsoft", src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Miro", src: "https://www.svgrepo.com/show/517866/miro.svg" },
    { name: "Jira", src: "https://res.cloudinary.com/dkbk3kjc7/image/upload/v1759554333/Jira_Logo_gnjksq.svg" },
    { name: "Asana", src: "https://res.cloudinary.com/dkbk3kjc7/image/upload/v1759554335/Asana_logo_plkxfx.svg" },
    {
      name: "OneDrive",
      src: "https://res.cloudinary.com/dkbk3kjc7/image/upload/v1759555755/Microsoft_Office_OneDrive__2019_present_dd8yvg.svg",
    },
    { name: "Slack", src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png" },
    { name: "Gmail", src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" },
  ]

  return (
    <section className="py-16 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-lg font-medium text-gray-600 mb-12">Veclor connects with any data source</h2>

        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div className="flex marquee">
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 px-8 shrink-0"
              >
                <img
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                  onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
