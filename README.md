# Data Visualisation with Dimple.js and D3.js
Final Project for Udacity Nano Degree

## Summary

The sinking of the RMS Titanic is one of the most infamous shipwrecks in history.  On April 15, 1912, during her maiden voyage, the Titanic sank after colliding with an iceberg, killing 1502 out of 2224 passengers and crew. Only 31,6% of people who survived the sinking. 
The goal of this project is to visualize what sorts of people were likely to survive.



## Design

The original data set is already cleaned. I only grouped age into categories and mapped survivers vs. died people. 

Since my data does not have any values except counts, my first decision is to show the percentage of Survived vs. Perished people by the passenger calss on a 100% stacked plot. 
Small animation is added while loading the chart. 

- x axis shows the survival status
- y axis shows the percentage of the passengers in each status
- The color shows the passenger class

The first design is shown below: 

![image](https://user-images.githubusercontent.com/7613690/38734292-4fcecb90-3f25-11e8-8380-d328698e5f0d.png)

The final design shows:
- x axis - age group;
- y asix - passengers count;
- color - survived vs. perished
- interactive buttons - passenger class

The final design is shown below: 
![titanicdatavizfinal](https://user-images.githubusercontent.com/7613690/39045559-7c099cda-4493-11e8-89e9-d81ffca71c81.PNG)

## Feedback
I asked three colleagues of mine from Business Intelligence department to provide their feedback. 

- Feedback 1:
  Initial data graph does not tell a clear story about what kind of passengers are likely to survive. 
  I can see that more of a third class people perished, but it is difficult to comprehend exact percentages. 
  I am not sure what is the main takeaway from this data. I would like to know more background informatino to be able to understand full picture. 
  
  After the first feedback, I added introductory text, made heading more meaningfull, added counts and labels.
  
- Feedback 2:
  In the data graph I see a number of Titanic disaster survived vs. dead passenger. 
  I would like to know additional characteristic of the voyagers, such as age, place of embarkation, etc. 
  I notice that there are more survivors from first class rather than second and third. 
  I think the graphic looks good. 
  
  After the second feedback, I added age group dimension and made passenger class as interactive buttons. I also change the colors of the graph to visualize perished perople in red and survivors in green. 
  
- Feedback 3: 
  I like the interaction buttons. I see there are passengers of age 20-40 in the first class, 105 in the second class, and almost 200 in the third class. From the graph I can conclude that majority of the passegners were of age group 20-40. Third class passengers had more elderly people, and have more survivors. 

## Resources
- Titanic Data: https://www.kaggle.com/c/titanic
- Dimple.js Wiki: https://github.com/PMSI-AlignAlytics/dimple/wiki
- Dimple.js Examples: http://dimplejs.org/examples_viewer.html?id=bars_vertical_grouped_stacked
- Dimple.js Video Explanation: https://www.youtube.com/watch?v=sEpRzyPRH0s
- D3.js tutorial: https://github.com/d3/d3/wiki/tutorials
- Learn D3 for data visualization: https://www.udemy.com/learn-d3js-for-data-visualization/learn/v4/overview 
