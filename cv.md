1. **Tatsiana Zatonets**
1. Contacts:
    * phone: **+375-29-680-66-72**
    * e-mail: **koshka.tan@gmail.com**
    * telegram: **@tatsiana_zatonets**
1. About
1. Skills
1. Code examples
    *SQL with Pokemon: Damage Multipliers*
    ```
SELECT 
  p.pokemon_name, 
  p.str*m.multiplier AS modifiedStrength,
  m.element
  FROM pokemon AS p, multipliers AS m
  WHERE p.element_id=m.id AND p.str*m.multiplier > 40
  ORDER BY modifiedStrength DESC;
  ```
1. Work experience
1. Education
1. English level A2