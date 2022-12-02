# ThreeCraft
A Three.JS Module To Allow Importing Of Minecraft Models (Custom Too) Using Their JSON File

# How To Use
```js
const RotationFix = 0.01 //Already Imported From Module
large_cogwheel = {
    elements: [
      {
        name: 'Axis',
        from: [6, 0, 6],
        to: [10, 16, 10],
        faces: {...},
      },
      ...
    ]
};
//This Example Model Will Not Work - Large Cogwheel From The Create Mod

let cog = CreateBlock(large_cogwheel)
//lcog.rotation.set(0, 1 - RotationFix, 0)
//Returns a Three.JS Group Object
scene.add(cog)
```
