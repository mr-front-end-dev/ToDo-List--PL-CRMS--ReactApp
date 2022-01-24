import React from "react";
import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";

export default () => (
  <Container>
      <Header title="O autorze" />
      <Section 
        title="Nikita Rysiev" 
        body={
          <p contentEditable>
            <p>możesz edytować poniższy tekst</p>
            <p>Cześć! Mam na imię Nikita i jestem początkującym Junior Front End Developerem i 👶 Junior Manual Software Testerem z wprowadzeniem do automatyzacji.
            Moim ojczystym językiem jest rosyjski, ale uczę się i ćwiczę więcej języka angielskiego, polskiego i trochę niemieckiego.</p> 
            <p>Teraz studiuję testowanie oprogramowania i kodowanie prostych aplikacji webowych.</p>
            <p>Chcę dobrze umieć kodowanie i dobrze mówić po angielsku, aby być użytecznym na rynku pracy w IT. 
            </p>
          </p>
          } 
        />
  </Container>
);