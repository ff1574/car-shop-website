/**
 * A JS object that holds the data for the selects. 
 * The select data can be structured in different ways. Here, a JS object is used.
 * 
 * In JavaScript, an object is a standalone entity, with properties. A property 
 * of an object can be explained as a variable that is attached to the object.
 * A property may be an identifier, OR a Number OR a String.
 */
export const carData = {//JS Object which properties are strings
    model3: {
        modelName: 'BMW 3-Series',
        modelColors: [
          {
            value: 'silver',
            name: 'Glacier Silver'
          },
          {
            value: 'blue',
            name: 'Mediterranean Blue'
          }
        ],
        modelRims: [
          {
            value: 'black',
            name: '(Black) Obsidian Onyx'
          },
          {
            value: 'silver',
            name: '(Silver) Mercury Mist'
          }
        ]
      },
      model8: {
        modelName: 'BMW 3-Series',
        modelColors: [
          {
            value: 'blue',
            name: 'Imperial Blue'
          },
          {
            value: 'green',
            name: 'British Racing Green'
          }
        ],
        modelRims: [
          {
            value: 'silver1',
            name: '(Silver) Silver Serenity'
          },
          {
            value: 'silver2',
            name: '(Silver) Arctic Alloy'
          }
        ]
      }
    };