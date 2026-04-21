import Link from 'next/link';
import Image from 'next/image';

interface ArticleSection {
  title: string;
  content: string;
}

interface BlogArticleProps {
  title: string;
  introduction: string;
  sections: ArticleSection[];
  previousArticleLink?: string;
  nextArticleLink?: string;
  otherArticles?: Array<{
    image: string;
    title: string;
    href: string;
  }>;
}

export default function BlogArticle({
  title,
  introduction,
  sections,
  previousArticleLink,
  nextArticleLink,
  otherArticles = []
}: BlogArticleProps) {
  return (
    <div className="min-h-screen bg-white">
      <main className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Left: Article content */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl md:text-4xl font-outfit font-bold text-[#08425D] mb-8 leading-tight">
                {title}
              </h1>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
                {introduction}
              </p>

              {/* Article Sections */}
              {sections.map((section, index) => (
                <div key={index}>
                  <div className="border-l-4 border-[#14A4E9] pl-4 mb-6">
                    <h2 className="text-2xl md:text-3xl font-outfit font-bold text-[#08425D]">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
                    {section.content}
                  </p>
                </div>
              ))}

              {/* Navigation buttons */}
              <div className="flex gap-4">
                {previousArticleLink && (
                  <Link
                    href={previousArticleLink}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg border border-[#E9E9E9] text-[#878787] text-base font-medium bg-[#E9E9E9]"
                  >
                    Previous Article
                  </Link>
                )}
                {nextArticleLink && (
                  <Link
                    href={nextArticleLink}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#08425D] text-white text-base font-medium"
                  >
                    Next Article
                  </Link>
                )}
              </div>
            </div>

            {/* Right: Other Articles */}
            {otherArticles.length > 0 && (
              <div className="w-[400px] ml-20">
                <div className="bg-[#EEF6FB] rounded-2xl p-8">
                  <h3 className="text-xl md:text-2xl font-outfit font-bold text-[#08425D] mb-3">Other Articles</h3>
                  <div className="w-75 h-0.5 bg-[#00AEEF] mb-6" />
                  <div className="flex flex-col gap-6">
                    {otherArticles.map((article, i) => (
                      <Link key={i} href={article.href} className="flex gap-4 group">
                        <div className="relative w-24 h-16 shrink-0 rounded-lg overflow-hidden">
                          <Image src={article.image} alt={article.title} fill className="object-cover" />
                        </div>
                        <p className="text-[#08425D] text-base leading-snug group-hover:text-[#00AEEF] transition-colors">
                          {article.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}
