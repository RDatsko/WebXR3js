# WebXR3js
WebXR3js is a three.js wrapper to make programing XR stuff for the web simple.

Basic features include easy loading of models, images, media, movement, etc.





<br/><br/>
### Basic Example
This is a basic example to show how to load a model into the world using WebXR3js

```html
 <script src="webxr3.js" type="module"></script>
 <script type="module">
 import { App, camera, scene, Model } from './webxr3.js';

/* Assets go here
 * ================================================== */
 const asset = {
	hall: { src: 'hall.glb' },
	person: { src: 'person.glb' }
 };



/* Application goes here
 * ================================================== */
 async function main() {
	const app = new App();
	await app.init();
	app.start();

	const hall = new Model(asset.hall);
	scene.add(hall);

	const hall = new Model(asset.person);
	scene.add(person);
 }

 main().catch((err) => {
    console.error(err);
 })
 </script>
```

Call the **webxr3.js** script file and then start your code either using an external javascript file or inside the html like in this example.  
Notice the **module** tag in both scripts.  
Also, make sure to copy the import line. This iport line makes it easier to use the code.  
If you are putting the webxr3.js file in the same director as your html file, include the "./" in front of the webxr3.js.  For information about some of the usage in which can be used, check the details of the usage befow.





<br/><br/>
### Adding Assets
Assets are easily stored as an *assets* variable using a javascript array structure.  This variable **MUST** be named *assets* to correctly work when creating the asset.

The reason for this is so that you don't have to use *assets.assetName* when creating the asset using the `= new function(assetName);` Otherwise you would have to use `= new function(assets.assetName);`.  It's just mainly used for convienence and looking pretty.

```javascript
const asset = {
	assetName1: { src: 'file1.ext' },
	assetName2: { src: 'file2.ext' },
};
```

The **assetName** is what will be used when going to create an asset using the `new function(asset.assetName);` command where function is one of the assigned asset controllers `Audio`, `Image`, `Model`, `Video`.





<br/><br/>
### Create the Application
This is the main application function.  It is used to hold the application and execute the code.

```javascript
 async function main() {
	const app = new App();
	await app.init();
	app.start();

	...
 }
```
The following code just checks if there is an error and if there is one, reports it to the browser.

```javascript
 main().catch((err) => {
    console.error(err);
 })
```





<br/><br/>
### Adding Assets

Creating assets and adding them to the scene is easy and can be done in two lines. Of course you can have other options and functions that can be used to set the position, rotation and such to do more things.  But for the example we are just adding a hall and a person into the hall.

```javascript
	const hall = new Model(asset.hall);
	scene.add(hall);

	const person = new Model(asset.person);
	scene.add(person);
```

The first line defines the variable for creation and what it will create using the `new function(~)` You can replace the `new function(~)` name with whatever type of asset you want to use`new Audio`, `new Image`, `new Model`, or `new Video`. The variable name does not have to be the same as the name defined in the assets tag.  In this example it uses the same name just for simplicity of coding.

The second line just simply adds the created asset to the *scene*.  *scene* is a predefined variable and is what is used when accessin things in the scene.





<br/><br/>
For more information about the other tags check out my github page.
