import { Link } from "react-router-dom";
import BlockSection from "../../components/BlockSection";
import MarqueeBanner from "../../components/MarqueeBanner";
import useScrollToTop from "../../hooks/scrollToTop";

const formatTextWithStyles = (text: string) => {
  return text.split(/(\*\*\*\*.*?\*\*\*\*|\*\*\*.*?\*\*\*|\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith("****") && part.endsWith("****")) {
      return (
        <strong key={index} className="text-black text-3xl mt-4 block">
          {part.slice(4, -4)}
        </strong>
      );
    } else if (part.startsWith("***") && part.endsWith("***")) {
      return (
        <strong key={index} className="text-black text-xl mt-3">
          {part.slice(3, -3)}
        </strong>
      );
    } else if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index} className="text-black/90">{part.slice(2, -2)}</strong>;
    } else {
      return part;
    }
  });
};

interface BlogPostProps {
  title: string;
  subtitle: string;
  content: (
    | { text: string }
    | { image: string }
    | { link: { to: string; label: string } }
    | { inlineText: ({ text?: string; link?: { to: string; label: string } })[] }
  )[];
  imageUrl: string;
  date: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, subtitle, content, imageUrl, date }) => {
  const scrollToTop = useScrollToTop();

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown Date";

  const baseUrl = import.meta.env.BASE_URL || "/";
  const defaultImage = "/assets/images/default-placeholder.webp";
  const resolvedImageUrl = imageUrl
    ? `${baseUrl}${imageUrl}`
    : `${baseUrl}${defaultImage}`;

  return (
    <>
      <BlockSection />

      <section>
        <img
          src={resolvedImageUrl}
          alt={title}
          loading="lazy"
          className="w-full h-[45vh] object-cover mx-0 px-0"
          onError={(e) => (e.currentTarget.src = `${baseUrl}${defaultImage}`)}
        />

        <MarqueeBanner />

        <article className="max-w-3xl mx-auto p-6">
          <header>
            <h1 className="text-3xl font-semibold mb-4">{title}</h1>
            <h2 className="text-xl text-black/80 mb-3">{subtitle}</h2>
            <div className="w-full h-[3px] bg-[#0d4754] mx-auto rounded-full"></div>
          </header>

          {content.map((item, index) => {
            if ("text" in item) {
              return (
                <p key={index} className="text-gray-700 mt-4 whitespace-pre-line">
                  {formatTextWithStyles(item.text)}
                </p>
              );
            } else if ("image" in item) {
              return (
                <img
                  key={index}
                  src={`${baseUrl}${item.image}`}
                  alt={`Blog image ${index + 1}`}
                  loading="lazy"
                  className="w-full object-cover aspect-[2/1] rounded-lg mt-4"
                  onError={(e) => (e.currentTarget.src = `${baseUrl}${defaultImage}`)}
                />
              );
            } else if ("link" in item) {
              const { to, label } = item.link;
              return (
                <p key={index} className="mt-4">
                  <Link
                    to={to}
                    onClick={scrollToTop}
                    className={`text-blue-600 font-bold hover:text-blue-900 ${
                      label.startsWith("****")
                        ? "text-3xl block text-black"
                        : label.startsWith("***")
                        ? "text-xl block text-black"
                        : label.startsWith("**")
                        ? "font-semibold text-black/90"
                        : ""
                    }`}
                  >
                    {label.replace(/\*/g, "")}
                  </Link>
                </p>
              );
            } else if ("inlineText" in item) {
              return (
                <p key={index} className="text-gray-700 mt-4">
                  {item.inlineText.map((part, i) => {
                    if (part.text) {
                      return <span key={i}>{formatTextWithStyles(part.text)}</span>;
                    } else if (part.link) {
                      const { to, label } = part.link;
                      return (
                        <Link
                          key={i}
                          to={to}
                          onClick={scrollToTop}
                          className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                        >
                          {label}
                        </Link>
                      );
                    }
                    return null;
                  })}
                </p>
              );
            }

            return null;
          })}

          <p className="text-black text-md mt-5 font-semibold">{formattedDate}</p>
        </article>
      </section>
    </>
  );
};

export default BlogPost;
