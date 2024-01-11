Feature: logga in på telefonboken

Det ska finnas en funktion som gör att endast inloggade användare har tillgång till telefonboken

Scenario: Lägga till kontakt
  Given Jag är på startsidan
  When Jag fyller i användarnamn och lösenord och klickar på login
  Then kommer jag till startsidan och kan klicka på phonebook
