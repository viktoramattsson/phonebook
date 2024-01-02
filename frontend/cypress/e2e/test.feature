Feature: Lägga till och ta bort kontakter

Det ska finnas en funktion för att lägga till nya kontakter. Man ska kunna skriva in namn och nummer sedan klicka på skicka.

Scenario: Lägga till kontakt
  GIVEN Jag är på admin-sidan
  When Jag fyller i namn och telefonnummer samt klickar på skicka
  Then får jag bekräftelse på att kontakten har lagts till

  Scenario: Ta bort kontakt
    GIVEN Jag är på admin-sidan
    WHEN Jag fyller i namn på kontakten som ska tas bort och klickar på radera
    THEN får jag bekräftelse på att kontakten är borttagen