-- Check if table 'sommen' exists and create if it does not
CREATE TABLE IF NOT EXISTS `sommen` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `inleiding` TEXT NOT NULL,
    `vraag` TEXT NOT NULL,
    `voor_achter` TINYINT NOT NULL,
    `eenheid` VARCHAR(10) NOT NULL,
    `categorie` TINYINT NOT NULL,
    `moeilijkheidsgraad` TINYINT NOT NULL,
    `antwoord` VARCHAR(255) NOT NULL,
    `afbeelding` VARCHAR(255)
);

-- Modify 'eenheid' column to VARCHAR(10)
ALTER TABLE `sommen` MODIFY `eenheid` VARCHAR(10);

-- Insert records into 'sommen'
INSERT INTO `sommen` 
(`inleiding`, `vraag`, `voor_achter`, `eenheid`, `categorie`, `moeilijkheidsgraad`, `antwoord`, `afbeelding`) VALUES
('In 2021 heeft NikeDas 16% meer omzet gedraaid dan in 2020; in 2020 bedroeg de omzet € 3,5 miljoen.',
 'Wat is de omzet van NikeDas in 2021?', 0, '€', 0, 0, '4060000', ''),
('Een beer kost zonder korting € 8,55.', 
 'Wat kost de beer met 12% korting?', 0, '€', 0, 0, '7,52', ''),
('Een Tesla kost € 72.562 maar daar komt de BTW van 21% nog overheen.', 
 'Hoeveel moet je betalen voor zo’n Tesla? Rond af op hele euro’s.', 0, '€', 0, 0, '87800', ''),
('MediaBlue heeft een aanbieding: voor een laptop van € 765,99 (incl. BTW) krijg je de BTW van 21% terug.', 
 'Hoeveel kost de laptop je?', 0, '€', 0, 0, '633,05', ''),
('Bij CoolMarkt geldt deze week de aanbieding: 5 WiFi-repeaters halen, 4 betalen. 1 WiFi-repeater kost € 22,64.', 
 'Hoeveel % korting krijg je dan eigenlijk?', 1, '%', 0, 0, '20', ''),
('Beppe Osinga is sinds dat ze 56 jaar werd, 0,7 mm per jaar gekrompen en ze is nu 84 jaar. Op haar 56ste was ze 1 meter en 89 cm.', 
 'Met hoeveel % is ze gekrompen de afgelopen jaren sinds haar 56ste? Rond af op 2 decimalen.', 1, '%', 0, 0, '1,04', ''),
('In 2020 was de melkopbrengst per dag van koe Idske_313 zo’n 24,7 liter; Idske_313 droogt langzaam op, ze geeft nu nog 23,1 liter per dag.', 
 'Met hoeveel procent is de dagelijkse melkopbrengst gedaald? Rond af op 1 decimaal.', 1, '%', 0, 0, '6,5', ''),
('De transferwaarde van de bekende voetballer Mionel Lessi nam in 2019 toe met 75% tot een bedrag van 135 miljoen euro.', 
 'Wat was zijn transferwaarde voor die tijd? Rond af op duizendtallen.', 0, '€', 0, 0, '77143000', ''),
('Danny heeft een eigen kroeg en verkoopt een pintje voor € 1,90. Op een avond verkoopt Danny 140 pintjes. Danny behaalt die avond met de verkoop van alle producten in totaal een winst van 350 euro.', 
 'Hoeveel procent van zijn winst behaalde Danny met de verkoop van pintjes? Rond af op 1 decimaal.', 1, '%', 0, 1, '6,8', 'pintje.jpg'),
('Zie afbeelding.', 
 'Hoeveel procent van de totale Nederlandse bijstandsuitkeringen werd uitgekeerd in Amsterdam en Rotterdam samen? Rond je antwoord af op 1 decimaal.', 
 1, '%', 0, 0, '20,4', 'bijstandsuitkeringen.jpg'),
('Hassan koopt deze week Minecraft en Halo 5. Voor Minecraft betaalt hij €42 en voor Halo 5 betaalt hij €31.', 
 'Hoeveel had Hassan in totaal moeten betalen exclusief korting?', 0, '€', 0, 0, '130', 'games.jpg');
