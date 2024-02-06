import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, Section } from '../../../components';

const OverviewView = () => {
  return (
    <View
      title="Overview"
      subtitle={`Design systém "Kirei React UI" by byl založen na konceptu jednoduchosti, elegance a čistoty. Jeho hlavním cílem by bylo poskytnout uživatelům příjemný a intuitivní zážitek při vývoji React aplikací.`}
    >
      <Article>
        <Section title="Elegance a Minimalismus">
          <p>
            Design systém by se zaměřoval na minimalismus a čisté linie, což by zajišťovalo elegantní vzhled
            uživatelského rozhraní.
          </p>
        </Section>
        <Section title="Jasné a Intuitivní Rozhraní">
          <p>
            Kirei React UI by nabízel jednoduché a intuitivní komponenty, které by usnadňovaly vývoj a zlepšovaly
            uživatelskou interakci.
          </p>
        </Section>
        <Section title="Flexibilita a Přizpůsobivost">
          <p>Navrhované komponenty by byly flexibilní a snadno přizpůsobitelné různým potřebám a stylům aplikací.</p>
        </Section>
        <Section title="Responzivita a Přístupnost">
          <p>
            Důraz by byl kladen na responzivní design a zajištění přístupnosti pro uživatele se speciálními potřebami.
          </p>
        </Section>
        <Section title="Konzistence a Reusabilita">
          <p>
            Komponenty by byly navrženy s důrazem na konzistenci a snadnou znovupoužitelnost, což by zjednodušilo vývoj
            a údržbu aplikací.
          </p>
        </Section>
        <Section title="Moderní Technologie">
          <p>
            Použití moderních technologií a nejlepších postupů vývoje React aplikací by bylo klíčové pro efektivní
            fungování a rozvoj Kirei React UI
          </p>
        </Section>
      </Article>
    </View>
  );
};

export default withPlainLayout(OverviewView);
