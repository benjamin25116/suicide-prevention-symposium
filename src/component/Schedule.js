import React from "react";
import styled from "styled-components";

import ScheduleItem from "./ScheduleItem";
import Heading from "./Heading";

const data = [
  {
    time: "1:00pm-2:00pm",
    activity: "Opening Address",
    speaker: "Rev. Elisha Satvinder",
    id: 0,
    lastItem: true,
  },
  {
    activity: "Moderator",
    speaker: "Prof. Dr. Azlinda Azman",
    writeup: "",
    id: 1,
    lastItem: true,
  },
  {
    activity: "Opening Keynote Speaker",
    speaker: "Dr. J.J. Rasimas",
    writeup:
      "Suicide prevention is everyone’s business. Stop the silence and stigma: start the conversations. The stigma and myths have to be exposed, and examined in order to enter into honest collaborations of on issues regarding suicide prevention. Open conversations start with those of us who have committed our lives to the care and service of our communities. We have to face our stigmas, prejudices and myths. This is especially important in the light of consultation requests to evaluate the patient suspected to be at risk of suicide. This is the single most frequent reason for psychiatric consultation and is often a source of anxiety for psychiatry medicine trainees. The evaluation, management and documentation of the suicidal patient require sophisticated clinical skills and have relevance for virtually everyone involved in delivering and administering care for the patient with co-morbid medical and psychiatric illnesses.",
    id: 2,
    lastItem: true,
  },
  {
    time: "2:00pm-5:00pm",
    activity: "Panel Speakers",
    speaker: "Datuk Dr. Raj Abdul Karim",
    writeup:
      "While suicide is a silent pandemic, child and adolescent suicides are the hidden pandemic. Breaking the silence and stigma of suicide begins with giving voice to the voiceless population of our world. Preventing homicides, suicides and non-fatal violence requires comprehensive multisectoral approaches that cover not only health and mental health services, but also go beyond the health sector and deal with the underlying causes, such as gender and socioeconomic inequalities, social norms that allow violence, access to highly hazardous pesticides, and irresponsible reporting by the media.",
    id: 3,
    lastItem: false,
  },
  {
    speaker: "Ms. Petrina Satvinder",
    writeup:
      "Suicide is the silent stalker of the lives of children and adolescents. Teachers are essential in breaking the silence, stigma and discrimination against those who struggle with suicidal and self-harming thoughts. Strategies for improving suicide prevention efforts include in-school trainings on mental health resources and procedures, regular updates on these trainings, and greater visibility of mental health staff and collaboration between departments within the school setting.",
    id: 4,
    lastItem: false,
  },
  {
    speaker: "Dato’ Dr. Abd. Halim Mohd. Hussin",
    writeup:
      "There are many ways of committing suicide. Addiction-related suicide is one such method. Underlying mental health issues often result in self-medicating in order to forget or numb, or more seriously, they harbor a wish to die to the pain associated with these mental health issues. Research proves that there is a strong relationship between substance abuse and suicide. The focus needs to be not just on the evidence for a link between addiction use/abuse and suicidal behavior, but also on possible clinical or biological factors that may mediate this link, and the implications of this evidence for suicide prevention.",
    id: 5,
    lastItem: false,
  },
  {
    speaker: "Ms. Larissa Ann Louis",
    writeup:
      "The dilemma of suicide as it impacts and is impacted by legal institutions and among those committed to upholding justice is largely unknown among other stakeholders in this area. This talk will be an exploration of the roles and responsibilities of those practicing law. Strategies for including legal representatives in a more integrated way with suicide prevention efforts will be discussed.",
    id: 6,
    lastItem: false,
  },
  {
    speaker: "Dr. Robert Guibord",
    writeup:
      'Conversations on suicide rarely ever take into consideration philosophical perspectives on the topic. But every dialogue on suicide, and suicide prevention, bears the weight of fundamental questions about the meaning of life. Albert Camus the 19th century philosopher, originally from the geopolitically fractured French colony in northern Africa, Algeria, challenges human beings to think honestly about suicide. In his essay on suicide, The Myth of Sisyphus," he begins, "There is but one truly serious philosophical problem and that is suicide... ". Hence we are confronted with reconceptualizing and reframing some basic assumptions in our thinking about suicide.',
    id: 7,
    lastItem: false,
  },
  {
    speaker: "Prof. Madya Dr. Mohd. Suhaimi Mohamad",
    writeup:
      "Social work and psychology programs within academic institutions are uniquely positioned to study, train, teach, collaborate and join other organizations in offering aid in suicide prevention. Strategies for addressing current gaps in teaching and training in suicide prevention will be examined.",
    id: 8,
    lastItem: true,
  },
  {
    time: "5:00pm-6:30pm",
    activity: "Panel Discussion",
    id: 9,
    lastItem: false,
  },
  {
    activity: "Q & A",
    id: 10,
    lastItem: true,
  },
  {
    time: "6:30pm-7:00pm",
    activity: "Closing Keynote Speaker",
    speaker: "Dr. Valerie Jaques",
    writeup:
      "We are increasingly aware of an urgent need to collaborate with other child and adolescent health care professionals, welfare agencies, educators and parents in the identification and management of the children, adolescents and adults at risk for suicide. Honest feedback on obstacles in the collaborations between all stakeholders.",
    id: 11,
    lastItem: true,
  },
  {
    activity: "Closing Address",
    speaker: "Dr. Mahinder Kaur",
    id: 12,
    lastItem: true,
  },
];

const Background = styled.div`
  width: 100vw;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  flex-flow: column;

  & span {
    text-align: center;
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 568px) {
    max-width: 568px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1366px) {
    min-width: 1366px;
  }
  @media (min-width: 1600px) {
    min-width: 1600px;
  }
  @media (min-width: 1920px) {
    min-width: 1920px;
  }
`;

function Schedule() {
  let content = data.map((item) => {
    return (
      <ScheduleItem
        key={item.id}
        time={item.time}
        speaker={item.speaker}
        activity={item.activity}
        writeup={item.writeup}
        lastItem={item.lastItem}
      />
    );
  });

  return (
    <Background>
      <Heading>Schedule</Heading>
      <Container>{content}</Container>
      {/* <Wrapper>
          <FirstLine>1:00pm-2:00pm</FirstLine>
          <SecondLine>Opening Address</SecondLine>
          <ThirdLine>Rev. Elisha Satvinder</ThirdLine>
        </Wrapper>
        <Wrapper>
          <SecondLine>Moderator</SecondLine>
          <ThirdLine>Prof. Dr. Azlinda Azman</ThirdLine>
        </Wrapper>
        <Wrapper>
          <SecondLine>Opening Keynote Speaker</SecondLine>
          <ThirdLine>Dr. J.J. Rasimas</ThirdLine>
        </Wrapper>
        <Wrapper>
          <FirstLine>2:00pm-5:00pm</FirstLine>
          <SecondLine>Panel Speakers</SecondLine>
          <ThirdLine>Datuk Dr. Raj Abdul Karim</ThirdLine>
          <ThirdLine>Ms. Petrina Satvinder</ThirdLine>
          <ThirdLine>Dato' Dr. Abd. Halim Mohd. Hussin</ThirdLine>
          <ThirdLine>Ms. Larissa Ann Louis</ThirdLine>
          <ThirdLine>Dr. Robert Guibord</ThirdLine>
          <ThirdLine>Prof. Madya Dr. Mohd. Suhaimi Mohamad</ThirdLine>
        </Wrapper>
        <Wrapper>
          <FirstLine>5:00pm-6:30pm</FirstLine>
          <SecondLine>Panel Discussion</SecondLine>
          <SecondLine>Q & A</SecondLine>
        </Wrapper>
        <Wrapper>
          <FirstLine>6:30pm-7:00pm</FirstLine>
          <SecondLine>Closing Keynote Speaker</SecondLine>
          <ThirdLine>Dr. Valerie Jaques</ThirdLine>
        </Wrapper>
        <Wrapper>
          <SecondLine>Closing Address</SecondLine>
          <ThirdLine>Dr. Mahinder Kaur</ThirdLine>
        </Wrapper> */}
    </Background>
  );
}

export default Schedule;
