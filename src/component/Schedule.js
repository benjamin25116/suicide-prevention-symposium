import React from "react";
import styled from "styled-components";

import Profile from "./Profile";

const Container = styled.section`
	background-image: linear-gradient(to bottom, rgb(5, 0, 50), black);
	padding: 2rem;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Heading = styled.h2`
	display: inline-block;
	color: white;
	font-size: 2.5rem;
	font-weight: bold;
	text-transform: capitalize;
	line-height: 3rem;
	margin-bottom: 2rem;
	border-bottom: 4px solid white;
`;

const data = [
	{
		time: "1:00pm-2:00pm",
		activity: "Opening Welcome",
		speaker: "Rev. Elisha Satvinder",
		id: 0
	},
	{
		activity: "Keynote",
		speaker: "Dr. J.J. Rasimas",
		writeup:
			"Suicide prevention is everyone’s business. Stop the silence and stigma: Start the conversation. The stigma and myths have to be exposed, examined in order to enter into honest collaborations of suicide prevention. Open conversations start with those of us who have committed our lives to the care and service of our communities. We have to face our stigmas, prejudices and myths. This is especially important in the light of consultation requests to evaluate the patient suspected to be at risk of suicide. This is the single most frequent reason for psychiatric consultation and is often a source of anxiety for psychiatry medicine trainees. The evaluation, management and documentation of the suicidal patient require sophisticated clinical skills and have relevance for virtually everyone involved in delivering and administering care for the patient with co-morbid medical and psychiatric illness.",
			id: 1
	},
	{
		time: "2:00pm-5:00pm",
		activity: "Panel Speakers",
		speaker: "Ms. Petrina Shee",
		writeup:
			"Suicide is the silent stalker of the lives of children and adolescents. Teachers are essential in breaking the silence, stigma and discrimination against those who struggle with suicidal and self-harming thoughts. Strategies for improving suicide prevention efforts include in-school trainings on mental health resources and procedures, regular updates on these trainings, and greater visibility of mental health staff and collaboration between departments within the school setting.",
			id: 3
	},
	{
		speaker: "Datuk Dr. Raj Abdul Karim",
		writeup:
			"While suicide is a silent pandemic, child and adolescent suicides are the hidden pandemic. Breaking the silence and stigma of suicide begins with giving voice to the voiceless population of our world. Preventing homicides, suicides and non-fatal violence requires comprehensive multisectoral approaches that cover not only health and mental health services, but also go beyond the health sector and deal with the underlying causes, such as gender and socioeconomic inequalities, social norms that allow violence, access to highly hazardous pesticides, and irresponsible reporting by the media.",
			id: 4
	},
	{
		speaker: "UNHCR",
		writeup:
			"There are many faces of suicide among the refugees, the immigrants and the stateless. These include suicide bombers, suicide attacks, suicide ‘honor killings’, ‘violent acts,’ committed suicide, mass suicide, trauma suicide. The UNHCR mandate to provide protection includes the role of gatekeeper for awareness of suicide risks and collaborations in suicide prevention and intervention.",
			id: 5
	},
	{
		speaker: "Dato’ Dr. Abd. Halim Mohd. Hussin",
		writeup:
			"There are many ways of committing suicide. Addiction related suicide is one such method. Underlying mental health issues often result in self-medicating in order to forget or numb, or more seriously, they harbor a wish to die to the pain associated with these mental health issues. Research proves that there is a strong relationship between substance abuse and suicide. The focus needs to be not just on the evidence for a link between addiction use/abuse and suicidal behavior, but also on possible clinical or biological factors that may mediate this link, and the implications of this evidence for suicide prevention.",
			id: 6
	},
	{
		speaker: "Ms. Larissa Ann Louis CLF",
		writeup:
			"There are many ways of committing suicide. Addiction related suicide is one such method. Underlying mental health issues often result in self-medicating in order to forget or numb, or more seriously, they harbor a wish to die to the pain associated with these mental health issues. Research proves that there is a strong relationship between substance abuse and suicide. The focus needs to be not just on the evidence for a link between addiction use/abuse and suicidal behavior, but also on possible clinical or biological factors that may mediate this link, and the implications of this evidence for suicide prevention.",
			id: 7
	},
	{
		speaker: "Dr. Robert Guibord",
		writeup:
			'Conversations on suicide rarely ever take into consideration philosophical perspectives on the topic. But every dialogue on suicide, and suicide prevention, bears the weight of fundamental questions about the meaning of life. Albert Camus the 19th century philosopher, originally from the geopolitically fractured French colony in northern Africa, Algeria, challenges human beings to think honestly about suicide. In his essay on suicide, "The Myth of Sisyphus," he begins, "There is but one truly serious philosophical problem and that is suicide..." Hence we are confronted with reconceptualizing and reframing some basic assumptions in our thinking about  suicide.',
			id: 8
	},
	{
		time: "5:00pm-5:45pm",
		activity: "Panel Discussion",
		id: 9
	},
	{
		time: "5:45pm-6:30pm",
		activity: "Q & A",
		id: 10
	},
	{
		time: "6:30pm-7:00pm",
		activity: "Closing Keynote",
		speaker: "Dr. Valerie Jaques",
		writeup:
			"We are increasingly aware of an urgent need to collaborate with other child and adolescent health care professionals, welfare agencies, educators and parents in the identification and management of the children, adolescents and adults at risk for suicide. Honest feedback on obstacles in the collaborations between all stakeholders.",
			id: 11
	},
];

function Schedule() {
	let content = data.map((item) => {
		return (
			<Profile
				firstLine={item.time}
				secondLine={item.activity}
				thirdLine={item.speaker}
				drawer={item.writeup}
				key={item.id}
				reverse
			/>
		);
	});
	return (
		<Container>
			<Heading>Schedule</Heading>
			{content}
		</Container>
	);
}

export default Schedule;
