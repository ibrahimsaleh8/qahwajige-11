import { APP_URL, CurrentProjectId } from "@/lib/ProjectId";
import Image from "next/image";
import Link from "next/link";

type Article = {
  id: string;
  title: string;
  coverImage: string | null;
  createdAt: string;
  updatedAt: string;
  content: string | null;
};

type GetArticlesResponse = {
  success: boolean;
  data: {
    articles: Article[];
    count: number;
  };
};

export default async function ArticlesPage() {
  const res = await fetch(
    `${APP_URL}/api/project/${CurrentProjectId}/articles`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data: GetArticlesResponse = await res.json();
  const articles = data.data.articles;
  return (
    <section id="articles" className="container mx-auto px-4 py-12 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-[#332822]">
          المقالات
        </h1>
        <p className="text-sm md:text-base text-[#8B7D72]">
          أحدث المقالات والنصائح من فريقنا.
        </p>
      </div>

      {articles.length === 0 ? (
        <p className="text-center text-sm text-slate-500">
          لا توجد مقالات متاحة حالياً.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              href={`/articles/${article.title.split(" ").join("-")}`}
              key={article.id}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200">
              {article.coverImage && (
                <div className="relative w-full h-70">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              )}

              <div className="p-4 flex flex-col flex-1 space-y-3">
                <h2 className="text-lg font-semibold text-[#332822] line-clamp-2">
                  {article.title}
                </h2>

                {article.content && (
                  <p className="text-sm text-[#8B7D72] line-clamp-3">
                    {article.content.replace(/<[^>]+>/g, "")}
                  </p>
                )}

                <div className="mt-auto pt-2 flex items-center justify-between text-xs text-slate-500">
                  <span>
                    {new Date(article.createdAt).toLocaleDateString("ar-SA", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
