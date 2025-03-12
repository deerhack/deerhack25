import CardDark from "@/app/components/BenefitsOfParticipating/CardDark";
import CardLight from "@/app/components/BenefitsOfParticipating/CardLight";
import NetworkSVG from "@/app/assets/images/network";
import IdeaSVG from "@/app/assets/images/idea";
import OpportunitiesSVG from "@/app/assets/images/opportunities";
import PuzzleSVG from "@/app/assets/images/puzzle";
import UpdatedDevelopmentSVG from "@/app/assets/images/Updated_Development";
import UpdatedIdeasSVG from "@/app/assets/images/Updated_ideas";
import UpdatedNetwrokSVG from "@/app/assets/images/Updated_Network";
import UpdatedOpportunitiesSVG from "@/app/assets/images/Updated_Opportunities";
import NewNetworksSVG from "@/app/assets/images/NewNetworks";
import NewOpportunitySVG from "@/app/assets/images/NewOpportunity";
import NewDevelopmentSVG from "@/app/assets/images/NewDevelopment";


export default function BenefitsCards() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-6 mx-10 mt-10">
      <div className="flex flex-col gap-6">
        <CardDark
          title="Build Powerful Network"
          description="DeerHack is the perfect platform to find like-minded people and build your connections."
          pgNo="1."
          svg={<NewNetworksSVG height={100} width={100} opacity={1}/>}
        />
        <CardDark
          title="Career Opportunities"
          description="Showcase talents, gain hands-on experience, and develop crucial skills like problem-solving and teamwork for career success."
           pgNo="3."
          svg={<NewOpportunitySVG className="opacity-[100%]"/>}
        />
      </div>

      <div className="flex flex-col gap-6">
        <CardLight
          title="Support for Your Ideas"
          description="DeerHack is dedicated to fostering ideas that drive global change and provide new solutions."
           pgNo="2."
          svg={<UpdatedIdeasSVG />}
        />
        <CardLight
          title="Interpersonal Development"
          description="Embrace the challenge at DeerHack and watch as your interpersonal skills evolve under pressure, transforming you into a more resilient and effective collaborator."
           pgNo="4."
          svg={<NewDevelopmentSVG height={100} width={100} />}
        />
      </div>
    </div>
  );
}
