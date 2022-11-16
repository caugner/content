---
title: '<audio>: The Embed Audio element'
slug: Web/HTML/Element/audio
tags:
  - Audio
  - Element
  - HTML
  - HTML embedded content
  - HTML:Embedded content
  - HTML:Flow content
  - HTML:Phrasing content
  - Media
  - Multimedia
  - Reference
  - Web
  - sound
browser-compat: html.elements.audio
---

{{HTMLRef}}

The **`<audio>`** [HTML](/en-US/docs/Web/HTML) element is used to embed sound content in documents. It may contain one or more audio sources, represented using the `src` attribute or the {{HTMLElement("source")}} element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a {{domxref("MediaStream")}}.

## Examples

### Specifying a single source

#### HTML

```html
<audio controls="controls">
  <source src="audio.mp3" type="audio/mpeg" />
</audio>
```

#### Result

{{EmbedLiveSample("Specifying_a_single_source", '100%', 50)}}

### Specifying a single image

#### HTML

```html
<img src="image.jpg" />
```

#### Result

{{EmbedLiveSample("Specifying_a_single_image", '100%', 50)}}
