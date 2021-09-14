import React from "react";

const data = [
  "To integrate suicide prevention into the work of all organizations and programs that provide services and support in the community.",
  "To develop resources that will help counter the prejudice, silence, and denial that can prevent individuals from seeking help.",
  "To support the delivery of suicide prevention activities that are culturally competent, safe, and available to individuals who may lack access to health care.",
  "To set future goals for the coordination of suicide prevention activities across multiple sectors and settings.",
];

function Objectives() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default Objectives;
