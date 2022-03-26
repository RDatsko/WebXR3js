# WebXR3js
WebXR3js is a three.js wrapper to make programing XR stuff for the web simple.

Basic features include easy loading of models, images, media, movement, etc.





<br/><br/>
### Basic Example
This is a basic example to show how to load a model into the world using WebXR3js

```
 <script src="webxr3.js" type="module"></script>
 <script type="module">

/* Assets go here
 * ================================================== */
 const assets = {
	hall: { src: 'hall.glb' },
	person: { src: 'person.glb' }
 };



/* Application goes here
 * ================================================== */
 async function main() {
	const app = new App();
	await app.init();
	app.start();

	const hall = new Model(hall);
	scene.add(hall);

	const hall = new Model(person);
	scene.add(person);
 }

 main().catch((err) => {
    console.error(err);
 })
 </script>
```

Call the **webxr3.js** script file and then start your code either using an external javascript file or inside the html like in this example.  
Notice the **module** tag in both scripts.  
For information about some of the usage in which can be used, check the details of the usage befow.





<br/><br/>
### Adding Assets
Assets are easily stored an an *assets* variable using a javascript array structure.  This variable **MUST** be named *assets* to correctly work when creating the asset.

The reason for this is so that you don't have to use *assets.assetName* when creating the asset using the `= new function(assetName);` Otherwise you would have to use `= new function(assets.assetName);`.  It's just mainly used for convienence and looking pretty.

```
const assets = {
	assetName1: { src: 'file1.ext' },
	assetName2: { src: 'file2.ext' },
};
```

The **assetName** is what will be used when going to create an asset using the `new function(assetName);` command where function is one of the assigned asset controllers `Audio`, `Image`, `Model`, `Video`.





<br/><br/>
###Create the Application
This is the main application function.  It is used to hold the application and execute the code.

```
 async function main() {
	const app = new App();
	await app.init();
	app.start();
 }
```
The following code just checks if there is an error and if there is one, reports it to the browser.

```
 main().catch((err) => {
    console.error(err);
 })
```





<br/><br/>
### Adding Assets

Creating assets and adding them to the scene is easy and can be done in two lines. Of course you can have other options and functions that can be used to set the position, rotation and such to do more things.  But for the example we are just adding a hall and a person into the hall.

```
	const hall = new Model(hall);
	scene.add(hall);

	const hall = new Model(person);
	scene.add(person);
```

You can replace the `new Model` name with whatever type of asset you want to use`new Audio`, `new Image`, `new Model`, or `new Video`.





<br/><br/>
For more information about the other tags check out my github page.
