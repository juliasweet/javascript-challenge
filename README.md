# javascript-challenge
Automatically-populated table of UFO sightings with multiple filters

This repository contains three folders, each representing a new level of search capabilities. 

Level One allows users to filter only by date. 

Level Two allows users to apply multiple filters at once and resets all filters for each new search. 

Many thanks to Brent Hillen for his help creating the initial table and filter for the Level 1 challenge, as well as affirming my suspicion that level 2 would involve a whole lot of copy and paste. He also helped me implement my tooltip solution, which had been vexing me. (I was trying to use html and CSS and needed to account for Bootstrap.)

Gratitude as well to Youa Thao, who helped me when I ran into trouble with the level two challenge. She reminded me that I needed to use an if to check for multiple filters and advised me to use let instead of var. Ultimately, I chose a different method for filtering my results, but her guidance has reminded me of the importance of anticipating user problems. 

A huge bucket of kudos to the one, the only Nikhil of Stack Overflow. I had a most vexing problem with my filters, and none of the solutions that I had attempted were satisfactory. He offered a solution that was clean and elegant; it also helped me better appreciate the versatility and power of objects in JavaScript. Here is a link to my question and his answer: https://stackoverflow.com/questions/57945103/resetting-filters-before-adding-new-ones 


I also need to offer thanks to two classmates who reminded me of the importance of addressing variations in user input. 
Kate Mikkelson mentioned in a class activity that she had used the toLowerCase method. I thought that the solution would be perfectly applied here, as the table values were all in lowercase. I would not have thought to do it had she not mentioned it. 
Additional thanks to Matt Garcia. He used an alert to handle incorrect date inputs. It had for some reason not occured to me that users might ignore the table and try to filter using invalid values. Matt decided to use an alert. I opted to use a tooltip with additional instructions for the more finicky input boxes. 