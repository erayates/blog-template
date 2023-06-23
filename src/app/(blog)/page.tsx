
import CodeCard from "@/components/commons/cards/CodeCard";
import NewsletterCard from "@/components/commons/cards/NewsletterCard";
import ProfileCard from "@/components/commons/cards/ProfileCard";
import SectionHeader from "@/components/page/SectionHeader";
import SectionContent from "@/components/page/SectionContent";

export default function Home() {

  return (
    <>
      <section className="flex justify-between flex-col lg:flex-row">
        <ProfileCard />
        <CodeCard />
      </section>


      <section className="recent-posts mt-12">
        <SectionHeader title="Recent posts" subtitle="Most recently added blog posts" />
        <SectionContent sort='topRated'/>
      </section>

      <section className="top-rated-posts mt-12">
        <SectionHeader title="Top Rated Posts" subtitle="Most liked blog posts" />
        <SectionContent sort="likes"/>
      </section>


      <NewsletterCard />
    </>

  )
}
