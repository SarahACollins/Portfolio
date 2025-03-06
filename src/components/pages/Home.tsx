import { ExperienceCard } from '../cards/ExperienceCard';
import { ProjectCard } from '../cards/ProjectCard';
import { ProfileCard } from '../cards/ProfileCard';
import { Section } from '../layout/Section';
import { ExternalLongLink } from '../ui/ExternalLongLink';

import './PageStyling.css'


export function Home() {
    const profileCard = (
        <ProfileCard
            name={"SARAH COLLINS"}
            title={"Software Engineer"}
        />
    )

    const experienceSection = (
        <Section
            sectionTitle={"EXPERIENCE"}
            sectionContent={
                <ExperienceCard
                    title={"Epic Systems"}
                    label={"Software Developer"}
                    detail={"I develop healthcare software for MyChart, a healthcare portal for over 190 million patients around the world."}
                    date={"March 2022 - Current"}
                    onClick={() => window.open("https://www.mychart.org/", "_blank")}
                />
            }
            className={"exp-section-container"}
        />
    )

    const resumeURL = `${process.env.PUBLIC_URL}/Resume_Sarah_Collins.pdf`;
    const lunarLangPosterURL = `${process.env.PUBLIC_URL}/Lunar_Languages_Poster.pdf`;
    const projectSectionAll = (
        <div>
            <ProjectCard
                    title={"React Migration & Mobile Optimization"}
                    date={"JULY 2024 - CURRENT"}
                    label={"Lead Developer"}
                    detail={"Lead a team of 3 developers on a multi-phase project to redesign one of the most commonly used pages in MyChart"}
                    badges={["React", "Swift", "Kotlin", "C#"]}
                />
            <ProjectCard
                    title={"Visit Filtering Configuration"}
                    date={"OCTOBER 2023 - FEBRUARY 2024"}
                    label={"Solo Developer"}
                    detail={"Designed and built a system to simplify customer configuration and improve performance"}
                    badges={["Database"]}
                />
            <ProjectCard
                    title={"Language Learning Mobile App"}
                    date={"FALL 2020 - SPRING 2021"}
                    label={"Project Manager & Team Member"}
                    detail={"Co-lead a team of 6 members to create an augmented reality mobile app to help students learn Chinese"}
                    badges={["C#", "Unity Game Engine"]}
                    onClick={() => window.open(lunarLangPosterURL, "_blank")}
                />
            <ProjectCard
                    title={"Undergraduate Research"}
                    date={"SPRING 2021"}
                    label={"Co-Developer"}
                    detail={"Developed a multiplayer interactive game system for audience members at the campus planetarium"}
                    badges={["AWS"]}
                />
            <ExternalLongLink title="View Full Resume" url={resumeURL} target={"_blank"} />
        </div>
    )

    const projectSection = (
        <Section
            sectionTitle={"PROJECTS"}
            sectionContent={
                projectSectionAll
            }
            className={"prj-section-container"}
        />
    )

    const educationSection = (
        <Section
            sectionTitle={"EDUCATION"}
            sectionContent={
                <ExperienceCard
                    title={"Embry-Riddle Aeronautical University"}
                    label={"B.S. Software Engineering"}
                    date={"August 2017 - May 2021"}
                    onClick={() => window.open("https://prescott.erau.edu/", "_blank")}
                />
            }
            className={"exp-section-container"}
        />
    )

	return (
		<div className='page'>
            <div className='content'>
                <div>{profileCard}</div>
                <div>
                    {experienceSection}
                    {projectSection}
                    {educationSection}
                </div>
            </div>
		</div>
	);
}