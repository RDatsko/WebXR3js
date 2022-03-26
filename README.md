# WebXR3js
WebXR3js is a three.js wrapper to make programing XR stuff for the web simple.

Basic features include easy loading of models, images, media, movement, etc.





<br/><br/>
### Basic Example
This is a basic example to show how to load a model into the world using WebXR3js

```html
 <script src="webxr3.js"></script>
 <script>
/* Assets go here
 * ================================================== */
 const asset = {
	hall: { src: 'hall.glb' },
	person: { src: 'person.glb' }
 };



/* Application goes here
 * ================================================== */
 async function main() {
	const app = new W3.App();
	let scene = W3.scene;

	await app.init();
	app.start();

	const hall = new W3.Model("hall");
	scene.add(hall);

	const hall = new W3.Model("person");
	scene.add(person);
 }

 main().catch((err) => {
    console.error(err);
 })
 </script>
```

Call the **webxr3.js** script file and then start your code either using an external javascript file or inside the html like in this example.  





<br/><br/>
### Adding Assets
Assets are easily stored as an *asset* variable using a javascript array structure.  This variable **MUST** be named *asset* in order to creating the asset.

```javascript
const asset = {
	assetName1: { src: 'file1.ext' },
	assetName2: { src: 'file2.ext' },
};
```

The **assetName** is what will be used when going to create an asset using the `new W3.function("assetName");` command where function is one of the assigned asset controllers `W3.Audio`, `W3.Image`, `W3.Model`, `W3.Video`.





<br/><br/>
### Create the Application
This is the main application function.  It is used to hold the application and execute the code.  The objects using this wrapper uses `W3` before the object. The `let scene = W3.scene` is not necessary.  It is used here so that scene can be called when making changes in the scene. Otherwise all calls to the scene would require `W3.scene`.

```javascript
 async function main() {
	const app = new W3.App();
	let scene = W3.scene;

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

Creating assets and adding them to the scene is easy and can be done in two lines. Of course you can have other options and functions that can be used to set the position, rotation, and such, to do more things.  But for this example we are just adding a hall and a person into the hall.

```javascript
	const hall = new W3.Model("hall");
	scene.add(hall);

	const person = new W3.Model("person");
	scene.add(person);
```

The first line defines the variable for creation and what it will create using the `new W3.function(~)` You can replace the `new W3.function(~)` name with whatever type of asset you want to use`new W3.Audio`, `new W3.Image`, `new W3.Model`, or `new W3.Video`. The variable name does not have to be the same as the name defined in the assets tag.  In this example it uses the same name just for simplicity of coding.

The second line just simply adds the created asset to the *scene* variable. 





<br/><br/>
For more information about the other tags check out my github page.
