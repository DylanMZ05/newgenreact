import { useParams } from "react-router-dom";
import { blogs } from "./blogData";
import BlogPost from "./BlogPost";
import BlogSection from "../Home/BlogsSection";
import MarqueeBanner from "../../components/MarqueeBanner";
import FreeQuoteButton from "../../components/FreeQuoteButton";

const BlogPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] px-4">
        <h1 className="text-3xl text-red-600 font-semibold">Blog not found</h1>
        <p className="text-center text-gray-600 mt-2">
          The blog you are looking for does not exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <main className="w-full">
      {/* Contenido del blog */}
      <BlogPost {...blog} />

      {/* Botón de presupuesto gratuito */}
      <div className="my-10 flex justify-center">
        <FreeQuoteButton />
      </div>

      {/* Banner animado */}
      <MarqueeBanner />

      {/* Sección de más blogs */}
      <section aria-label="More blog posts">
        <BlogSection />
      </section>
    </main>
  );
};

export default BlogPage;
