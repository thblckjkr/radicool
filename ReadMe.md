# RadiCool

The main idea of the project, is to create a visualization of the relationship of kanji with the radicals that composes them.

## Data

### Data convertion

> TILDR; The data is prebuilt with Nodejs

The data can't be used directly on the webpage, due to how the hierarchy is represented.

So, to process the data, i had multiple options.

- Use bash. *(No thanks, i am not a regex expert)*
- Use Python. *It's cool, but I think it would make harder to contribute to the project. Needing to know JS AND Python to make a modification*
- Use Javascript on the browser. *I think it's a cool idea, but I don't see the benefit since the data will rarely change.*
- Use NodeJS, and build a JSON file.
- Use Rust. *No*.

So, I just made a simple script to transform the **RADKFILE** into a *simple* JSON.

### Folder structure

```
#data
#public
#get.sh
#transform.js
```

## Contributing

- If you used conventional commits, that would be cool.
- I don't use a linter because the project is small enough to not require it.

## Thanks to

This project could have been not possible without the amazing [amcharts/](https://www.amcharts.com/).

Thanks to the amazing project of [RADKFILE](https://www.edrdg.org/krad/kradinf.html), that provides a simplified, complete, radical hierarchy.

### Cofee

Do you have any bucks in your wallet that you don't really need? Great!

You should consider donating to a charity or something more relevant.

If you really want to support me instead, here is a way to do it.

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/X8X315KOS)