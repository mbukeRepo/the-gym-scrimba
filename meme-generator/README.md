# Meme Generator

We are going to be generating a new

packages needed.

- html-to-image
- downloadjs
- react-draggable

States that are needed.

- meme(setMeme) ⇒ { topText: String, bottomText: String, randomImage: String }
- allMemes(setAllMemes) ⇒ Meme[] , Meme {id: String, name: String, url: String, width: Number, }

When a component is rendered all memes are fetched from “[https://api.imgflip.com/get_memes](https://api.imgflip.com/get_memes)” and allMemes is set with those images.

The app has three functionalities

- Adding text to the generated random images.
- Generate new image.
- Clear text from the input.
- Download a generated meme.

The real hard part is generating a meme from html and from that we use [\*\*html-to-image](https://www.npmjs.com/package/html-to-image)\*\* to generate images from html node. For this we use `toPng` function which resolves an image base64-encoded data URL and download it using [downloadjs](https://www.npmjs.com/package/downloadjs).
