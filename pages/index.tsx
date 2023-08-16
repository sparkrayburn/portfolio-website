import type { GetStaticProps } from 'next';
import Head from 'next/head';
// import type { GetServerSideProps} from 'next';
import { Inter } from 'next/font/google'
import Header from "../components/Header";
import Hero from "../components/Hero"
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';

import ContactMe from '@/components/ContactMe';
import Link from 'next/link';
import { PageInfo, Experience, Skill, Social } from '@/typings';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchExperience } from '@/utils/fetchExperiences';
import { fetchSkills } from '@/utils/fetchSkils';
import { fetchSocials } from '@/utils/fetchSocials';
import { urlFor } from '@/sanity';


type Props = {
  pageInfo : PageInfo;
  experiences: Experience[];
  skills: Skill[];
  socials: Social[];
}





const Home = ({pageInfo, experiences, skills, socials}: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
    z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head >
        <title> {pageInfo?.name} - Portfolio</title>
      </Head>
      
    <Header socials= {socials}  />
   
    <section id='hero' className='snap-start'>
    <Hero pageInfo = {pageInfo}  />
    </section>
    {/* about  */}
    <section id='about' className='snap-center'>
      <About pageInfo = {pageInfo} />
    </section>
    {/* experience */}
    <section id='projects' className='snap-center'>
      <WorkExperience experiences = {experiences}  />
    </section>
{/* skills */}
<section id="skills" className='snap-start'>
  <Skills skills = {skills}  />
</section>
{/* projects */}

<section id='experience' className='snap-start'>
 {/* <Projects  />  */}

</section>

{/* contact no */}

<section id='contact' className='snap-start'>
  <ContactMe  />
</section>

<Link href='#hero'>
<footer className='sticky bottom-5 w-full cursor-pointer'>
  <div className='flex items-center justify-center'>
    <img className='h-10 w-10 rounded-full grayscale hover:grayscale-0 cursor-pointer' src= "./resume.png" />
  </div>
</footer>
</Link>
    </div>
    
  )
}  


export default Home;

export const getStaticProps : GetStaticProps<Props> = async () =>{
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      socials
    } ,
    

    revalidate: 10,
  }
}















