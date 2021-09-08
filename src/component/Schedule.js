import React from "react";
import styled from "styled-components";

import Drawer from "./Drawer";

const Container = styled.section`
  background-image: linear-gradient(to bottom, darkblue, black);
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

const ScheduleItem = styled.article`
  width: 100%;
  line-height: 1.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const Time = styled.span`
  font-size: 1.5rem;
`;

const Activity = styled.span``;

const Speaker = styled.span`
  font-weight: lighter;
  font-style: italic;
  margin-bottom: 0.3rem;
`;

function Schedule() {
  return (
    <Container>
      <Heading>Schedule</Heading>
      <ScheduleItem>
        <Time>1:00pm-2:00pm</Time>
        <Activity>Opening Welcome</Activity>
        <Speaker>Rev. Elisha Satvinder</Speaker>
      </ScheduleItem>
      <ScheduleItem>
        <Activity>Keynote Speaker</Activity>
        <Speaker>Dr. J.J. Rasimas</Speaker>
        <Drawer color="white">
          Suicide prevention is everyone’s business. Stop the silence and
          stigma: Start the conversation. The stigma and myths have to be
          exposed, examined in order to enter into honest collaborations of
          suicide prevention. Open conversations start with those of us who have
          committed our lives to the care and service of our communities. We
          have to face our stigmas, prejudices and myths. This is especially
          important in the light of consultation requests to evaluate the
          patient suspected to be at risk of suicide. This is the single most
          frequent reason for psychiatric consultation and is often a source of
          anxiety for psychiatry medicine trainees. The evaluation, management
          and documentation of the suicidal patient require sophisticated
          clinical skills and have relevance for virtually everyone involved in
          delivering and administering care for the patient with co-morbid
          medical and psychiatric illness.
        </Drawer>
      </ScheduleItem>
      <ScheduleItem>
        <Time>2:00pm-5:00pm</Time>
        <Activity>Panel Speakers</Activity>
        <Speaker>Ms Petrina Shee</Speaker>
        <Drawer color="White">
          Suicide is the silent stalker of the lives of children and
          adolescents. Teachers are essential in breaking the silence, stigma
          and discrimination against those who struggle with suicidal and
          self-harming thoughts. Strategies for improving suicide prevention
          efforts include in-school trainings on mental health resources and
          procedures, regular updates on these trainings, and greater visibility
          of mental health staff and collaboration between departments within
          the school setting.
        </Drawer>
        <Speaker>Datuk Dr. Raj Abdul Karim</Speaker>
        <Drawer color="White">
          While suicide is a silent pandemic, child and adolescent suicides are
          the hidden pandemic. Breaking the silence and stigma of suicide begins
          with giving voice to the voiceless population of our world. Preventing
          homicides, suicides and non-fatal violence requires comprehensive
          multisectoral approaches that cover not only health and mental health
          services, but also go beyond the health sector and deal with the
          underlying causes, such as gender and socioeconomic inequalities,
          social norms that allow violence, access to highly hazardous
          pesticides, and irresponsible reporting by the media.
        </Drawer>
      </ScheduleItem>
      <ScheduleItem>
        <Time>5:00pm-5:45pm</Time>
        <Activity>Panel Discussion</Activity>
      </ScheduleItem>
      <ScheduleItem>
        <Time>5:45pm-6:30pm</Time>
        <Activity>Q & A</Activity>
      </ScheduleItem>
      <ScheduleItem>
        <Time>6:30pm-7:00pm</Time>
        <Activity>Closing Keynote Speaker</Activity>
        <Speaker>Dr. Valerie Jaques</Speaker>
      </ScheduleItem>
    </Container>
  );
}

export default Schedule;
